/* zu のデータ・作図ルールの点検（依存ゼロ・Node 標準の node:test）。
   実行： node --test tests/
   目的： Tips を増やす／図を直すたびに、スキーマ崩れや作図ルール違反を機械的に拾う。
   ルールの出典は CLAUDE.md と zu-drawing-rules-prompt.md。 */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const {
  GROUPS,
  CAT_ORDER,
  TIPS,
  HISTORY,
  CATEGORIES,
  REL,
} = require("./loader.js");

const CAT_IDS = CATEGORIES.map((c) => c.id);
const REL_KEYS = Object.keys(REL);

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

// accent は1図に1箇所まで。ただし1つの注目点を2トークンで描く図（fill+stroke の警告マーク、
// 線+矢じりの矢印）は var(--accent) が2回出るが論理的には1箇所。それだけをここで許す。
const ACCENT_TWO_TOKEN = new Set(["semantic-color", "just-start"]);

const ALLOWED_VIEWBOX = new Set(["0 0 320 120", "0 0 320 160"]);

/* ---- ヘルパ ---- */
const isSvg = (v) => /<svg[\s>]/.test(v);
const rawHex = (v) => v.match(/#[0-9a-fA-F]{3,8}\b/g) || [];
const accentCount = (v) => (v.match(/var\(--accent\)/g) || []).length;
const ID_SET = new Set(TIPS.map((t) => t.id));

/* ====================  スキーマ  ==================== */

test("id が一意", () => {
  const ids = TIPS.map((t) => t.id);
  const dup = ids.filter((v, i) => ids.indexOf(v) !== i);
  assert.deepEqual([...new Set(dup)], [], "重複した id がある");
});

test("id は kebab-case", () => {
  for (const t of TIPS) {
    assert.match(t.id, /^[a-z0-9]+(-[a-z0-9]+)*$/, `id が kebab-case でない: ${t.id}`);
  }
});

test("必須フィールドが揃っている", () => {
  const required = ["id", "cat", "tags", "title", "claim", "why", "visual", "apply", "added"];
  for (const t of TIPS) {
    for (const k of required) {
      assert.ok(k in t, `${t.id}: ${k} がない`);
    }
    assert.ok(Array.isArray(t.tags), `${t.id}: tags は配列であること`);
    for (const k of ["title", "claim", "why", "visual", "apply"]) {
      assert.ok(typeof t[k] === "string" && t[k].trim().length > 0, `${t.id}: ${k} が空`);
    }
    assert.ok("term" in t, `${t.id}: term は（空文字でも）必須`);
  }
});

test("cat は定義済みカテゴリのいずれか", () => {
  for (const t of TIPS) {
    assert.ok(CAT_IDS.includes(t.cat), `${t.id}: 未知の cat "${t.cat}"`);
  }
});

test("各 Tips は cat と一致するカテゴリ配列に置かれている", () => {
  for (const cat of CAT_ORDER) {
    for (const t of GROUPS[cat] || []) {
      assert.equal(t.cat, cat, `${t.id} は TIPS_${cat} にあるが cat="${t.cat}"`);
    }
  }
});

test("added は妥当な YYYY-MM-DD", () => {
  for (const t of TIPS) {
    assert.match(t.added, /^\d{4}-\d{2}-\d{2}$/, `${t.id}: added の書式が不正 "${t.added}"`);
    const d = new Date(t.added + "T00:00:00Z");
    assert.ok(!Number.isNaN(d.getTime()), `${t.id}: added が実在しない日付`);
    assert.equal(d.toISOString().slice(0, 10), t.added, `${t.id}: added が実在しない日付`);
  }
});

/* ====================  つながり（links）  ==================== */

test("links は実在 id を指し、rel は4種、自己リンクなし", () => {
  for (const t of TIPS) {
    for (const l of t.links || []) {
      assert.ok(ID_SET.has(l.to), `${t.id}: links.to "${l.to}" が存在しない`);
      assert.ok(REL_KEYS.includes(l.rel), `${t.id}: 未知の rel "${l.rel}"`);
      assert.notEqual(l.to, t.id, `${t.id}: 自己リンクは不可`);
    }
  }
});

test("links は片側だけ（両端に書かない）", () => {
  const edges = new Set();
  for (const t of TIPS) for (const l of t.links || []) edges.add(t.id + ">" + l.to);
  for (const t of TIPS) {
    for (const l of t.links || []) {
      assert.ok(
        !edges.has(l.to + ">" + t.id),
        `${t.id}<->${l.to}: 両端に links がある。逆向きは自動で出るので片側だけにする`,
      );
    }
  }
});

/* ====================  作図ルール（visual）  ==================== */

test('visual に role="img" と一文の aria-label がある', () => {
  for (const t of TIPS) {
    assert.match(t.visual, /role="img"/, `${t.id}: role="img" がない`);
    const m = t.visual.match(/aria-label="([^"]*)"/);
    assert.ok(m, `${t.id}: aria-label がない`);
    assert.ok(m[1].trim().length > 0, `${t.id}: aria-label が空`);
  }
});

test("SVG の viewBox は 320x120（縦積みのみ160）", () => {
  for (const t of TIPS) {
    if (!isSvg(t.visual)) continue;
    const m = t.visual.match(/viewBox="([^"]+)"/);
    assert.ok(m, `${t.id}: SVG に viewBox がない`);
    assert.ok(ALLOWED_VIEWBOX.has(m[1]), `${t.id}: 規約外の viewBox "${m[1]}"`);
  }
});

test("色は CSS 変数のみ（生hex禁止。許可した色実演の図を除く）", () => {
  for (const t of TIPS) {
    const hits = rawHex(t.visual);
    if (HEX_ALLOWED.has(t.id)) {
      assert.ok(hits.length > 0, `${t.id}: 生hexの許可リストに入っているが生hexが見当たらない（リストを見直す）`);
      continue;
    }
    assert.deepEqual(hits, [], `${t.id}: 生hexは禁止（CSS変数を使う）: ${hits.join(", ")}`);
  }
});

test("accent は1図に1箇所まで", () => {
  for (const t of TIPS) {
    const n = accentCount(t.visual);
    const limit = ACCENT_TWO_TOKEN.has(t.id) ? 2 : 1;
    assert.ok(
      n <= limit,
      `${t.id}: var(--accent) が ${n} 箇所。accent は1図に1箇所まで（1点を2トークンで描くなら ACCENT_TWO_TOKEN に明記）`,
    );
  }
});

/* ====================  更新履歴（history.js）  ==================== */

test("HISTORY は日付つきの項目を持つ", () => {
  assert.ok(Array.isArray(HISTORY) && HISTORY.length > 0, "HISTORY が空");
  for (const e of HISTORY) {
    assert.match(e.date, /^\d{4}-\d{2}-\d{2}$/, `HISTORY: date の書式が不正 "${e.date}"`);
    assert.ok(Array.isArray(e.items) && e.items.length > 0, `HISTORY ${e.date}: items が空`);
    for (const it of e.items) {
      assert.ok(typeof it === "string" && it.trim().length > 0, `HISTORY ${e.date}: 空の item`);
    }
  }
});

test("HISTORY は新しい日付が上に積まれている", () => {
  for (let i = 1; i < HISTORY.length; i++) {
    assert.ok(
      HISTORY[i - 1].date >= HISTORY[i].date,
      `HISTORY の並びが新しい順でない: ${HISTORY[i - 1].date} の後に ${HISTORY[i].date}`,
    );
  }
});
