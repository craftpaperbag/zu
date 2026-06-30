// @vitest-environment jsdom
/* zu のデータと作図ルールの点検。
   - スキーマ崩れ（id・必須フィールド・cat・added・links・HISTORY）を機械的に拾う。
   - 図（visual）は正規表現ではなく実 DOM/SVG としてパースして検査する（malformed な SVG も検知）。
   ルールの出典は CLAUDE.md と zu-drawing-rules-prompt.md。 */
import { test, expect } from "vitest";
import {
  GROUPS_BY_CAT,
  CAT_ORDER,
  TIPS,
  HISTORY,
  CATEGORIES,
  REL,
  loadTokens,
} from "./loader.js";

const CAT_IDS = CATEGORIES.map((c) => c.id);
const REL_KEYS = Object.keys(REL);
const ID_SET = new Set(TIPS.map((t) => t.id));
const TOKENS = loadTokens();

/* ---- 既知の許容例外（CLAUDE.md 準拠。増やすときは理由とともにここへ明記する） ---- */

// 生hex（CSS変数のみ・生hex禁止の例外）：多色見本・白黒ベタなど「色そのものを見せる」図。
// すべて color / draw の「悪い例」パネルや色の実演に限る。
const HEX_ALLOWED = new Set([
  "one-color",
  "fewer-colors",
  "shade-not-hue",
  "gray-is-useful",
  "soft-contrast", // 真っ白×真っ黒の実演
  "ensure-contrast",
  "knockout",
  "text-color-sparingly",
  "graph-colors",
]);

// accent は1図に1箇所まで。1つの注目点を「線＋矢じり」など2要素に割る図だけは2を許す。
const ACCENT_TWO_TOKEN = new Set(["just-start", "who-acts"]);

const ALLOWED_VIEWBOX = new Set(["0 0 320 120", "0 0 320 160"]);

/* ---- visual を実 DOM としてパースするヘルパ ---- */
function parseVisual(visual) {
  const isSvg = /^\s*<svg[\s>]/.test(visual);
  if (isSvg) {
    const doc = new DOMParser().parseFromString(visual, "image/svg+xml");
    return { isSvg, root: doc.documentElement, parseError: doc.querySelector("parsererror") };
  }
  const doc = new DOMParser().parseFromString(visual, "text/html");
  return { isSvg, root: doc.body.firstElementChild, parseError: null };
}

const COLOR_ATTRS = ["fill", "stroke", "stop-color", "color", "style"];
function rawHexHits(root) {
  const hits = [];
  for (const el of root.querySelectorAll("*")) {
    for (const a of COLOR_ATTRS) {
      const v = el.getAttribute(a);
      if (v && /#[0-9a-fA-F]{3,8}\b/.test(v)) hits.push(`${el.tagName}@${a}=${v}`);
    }
  }
  return hits;
}

function accentElementCount(root) {
  let n = 0;
  for (const el of root.querySelectorAll("*")) {
    const blob = COLOR_ATTRS.map((a) => el.getAttribute(a) || "").join(";");
    if (/var\(--accent\)/.test(blob)) n++;
  }
  return n;
}

/* ====================  スキーマ  ==================== */

test("id が一意", () => {
  const ids = TIPS.map((t) => t.id);
  const dup = ids.filter((v, i) => ids.indexOf(v) !== i);
  expect([...new Set(dup)]).toEqual([]);
});

test("id は kebab-case", () => {
  for (const t of TIPS) expect(t.id, t.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
});

test("必須フィールドが揃っている", () => {
  const required = ["id", "cat", "tags", "title", "claim", "why", "visual", "apply", "added"];
  for (const t of TIPS) {
    for (const k of required) expect(t, `${t.id}: ${k} がない`).toHaveProperty(k);
    expect(Array.isArray(t.tags), `${t.id}: tags は配列`).toBe(true);
    for (const k of ["title", "claim", "why", "visual", "apply"]) {
      expect(typeof t[k] === "string" && t[k].trim().length > 0, `${t.id}: ${k} が空`).toBe(true);
    }
    expect(t, `${t.id}: term は（空文字でも）必須`).toHaveProperty("term");
  }
});

test("cat は定義済みカテゴリのいずれか", () => {
  for (const t of TIPS) expect(CAT_IDS, `${t.id}: 未知の cat "${t.cat}"`).toContain(t.cat);
});

test("各 Tips は cat と一致するカテゴリ配列に置かれている", () => {
  for (const cat of CAT_ORDER) {
    for (const t of GROUPS_BY_CAT[cat] || []) {
      expect(t.cat, `${t.id} は TIPS_${cat} にあるが cat="${t.cat}"`).toBe(cat);
    }
  }
});

test("added は妥当な YYYY-MM-DD", () => {
  for (const t of TIPS) {
    expect(t.added, `${t.id}: added の書式`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const d = new Date(t.added + "T00:00:00Z");
    expect(d.toISOString().slice(0, 10), `${t.id}: added が実在しない日付`).toBe(t.added);
  }
});

/* ====================  つながり（links）  ==================== */

test("links は実在 id を指し、rel は4種、自己リンクなし", () => {
  for (const t of TIPS) {
    for (const l of t.links || []) {
      expect(ID_SET.has(l.to), `${t.id}: links.to "${l.to}" が存在しない`).toBe(true);
      expect(REL_KEYS, `${t.id}: 未知の rel "${l.rel}"`).toContain(l.rel);
      expect(l.to, `${t.id}: 自己リンクは不可`).not.toBe(t.id);
    }
  }
});

test("links は片側だけ（両端に書かない）", () => {
  const edges = new Set();
  for (const t of TIPS) for (const l of t.links || []) edges.add(t.id + ">" + l.to);
  for (const t of TIPS) {
    for (const l of t.links || []) {
      expect(
        edges.has(l.to + ">" + t.id),
        `${t.id}<->${l.to}: 両端に links がある。逆向きは自動で出るので片側だけにする`,
      ).toBe(false);
    }
  }
});

/* ====================  作図ルール（visual を実 DOM で検査）  ==================== */

test("visual は妥当な DOM／SVG としてパースできる（malformed 検知）", () => {
  for (const t of TIPS) {
    const { root, parseError } = parseVisual(t.visual);
    expect(parseError, `${t.id}: SVG のパースに失敗（タグ閉じ忘れなど）`).toBeNull();
    expect(root, `${t.id}: ルート要素が取れない`).toBeTruthy();
  }
});

test('visual に role="img" と一文の aria-label がある', () => {
  for (const t of TIPS) {
    const { root } = parseVisual(t.visual);
    expect(root.getAttribute("role"), `${t.id}: role="img" がない`).toBe("img");
    const label = root.getAttribute("aria-label");
    expect(label && label.trim().length > 0, `${t.id}: aria-label が空`).toBe(true);
  }
});

test("SVG の viewBox は 320x120（縦積みのみ160）", () => {
  for (const t of TIPS) {
    const { isSvg, root } = parseVisual(t.visual);
    if (!isSvg) continue;
    expect(
      ALLOWED_VIEWBOX.has(root.getAttribute("viewBox")),
      `${t.id}: 規約外の viewBox "${root.getAttribute("viewBox")}"`,
    ).toBe(true);
  }
});

test("色は CSS 変数のみ（生hex禁止。許可した色実演の図を除く）", () => {
  for (const t of TIPS) {
    const { root } = parseVisual(t.visual);
    const hits = rawHexHits(root);
    if (HEX_ALLOWED.has(t.id)) {
      expect(hits.length, `${t.id}: 生hexの許可リストにあるが生hexが無い（リストを見直す）`).toBeGreaterThan(0);
    } else {
      expect(hits, `${t.id}: 生hexは禁止（CSS変数を使う）`).toEqual([]);
    }
  }
});

test("accent は1図に1箇所まで", () => {
  for (const t of TIPS) {
    const n = accentElementCount(parseVisual(t.visual).root);
    const limit = ACCENT_TWO_TOKEN.has(t.id) ? 2 : 1;
    expect(
      n <= limit,
      `${t.id}: var(--accent) を使う要素が ${n} 個。accent は1図1箇所（1点を2要素で描くなら ACCENT_TWO_TOKEN に明記）`,
    ).toBe(true);
  }
});

test("visual が参照する CSS 変数はすべて styles.css に定義されている", () => {
  for (const t of TIPS) {
    for (const m of t.visual.matchAll(/var\((--[a-z0-9-]+)\)/gi)) {
      expect(TOKENS.has(m[1]), `${t.id}: 未定義の CSS 変数 ${m[1]}`).toBe(true);
    }
  }
});

/* ====================  更新履歴（history.js）  ==================== */

test("HISTORY は日付つきの項目を持つ", () => {
  expect(Array.isArray(HISTORY) && HISTORY.length > 0, "HISTORY が空").toBe(true);
  for (const e of HISTORY) {
    expect(e.date, "HISTORY: date の書式").toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(Array.isArray(e.items) && e.items.length > 0, `HISTORY ${e.date}: items が空`).toBe(true);
    for (const it of e.items) {
      expect(typeof it === "string" && it.trim().length > 0, `HISTORY ${e.date}: 空の item`).toBe(true);
    }
  }
});

test("HISTORY は新しい日付が上に積まれている", () => {
  for (let i = 1; i < HISTORY.length; i++) {
    expect(
      HISTORY[i - 1].date >= HISTORY[i].date,
      `HISTORY の並びが新しい順でない: ${HISTORY[i - 1].date} の後に ${HISTORY[i].date}`,
    ).toBe(true);
  }
});
