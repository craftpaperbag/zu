/* app.js を jsdom で実際に起動して、描画と基本操作の挙動を検査する。
   内部関数を直接呼ぶのではなく、本番の DOM を組み立てて結果を見る統合スタイル
   （renderGrid / renderCats / card / detail / match / tiesFor / showModal などをまとめて通す）。 */
import { test, expect, beforeEach } from "vitest";
import { bootApp, click, typeInto } from "./harness.js";
import { TIPS, CAT_ORDER } from "./loader.js";

let document;
beforeEach(() => {
  document = bootApp().document;
});

const q = (s) => document.querySelector(s);
const count = (s) => document.querySelectorAll(s).length;
const catBtn = (cat) => q(`#cats button[data-cat="${cat}"]`);

test("起動直後、全 Tips が grid に描画される", () => {
  expect(count("#grid article")).toBe(TIPS.length);
  expect(q("#count").textContent).toContain(String(TIPS.length));
});

test("カテゴリチップは「すべて＋6カテゴリ」", () => {
  expect(count("#cats button")).toBe(CAT_ORDER.length + 1);
  for (const cat of CAT_ORDER) expect(catBtn(cat), `${cat} のチップが無い`).toBeTruthy();
});

test("カテゴリチップで grid が絞り込まれ、件数が更新される", () => {
  for (const cat of CAT_ORDER) {
    click(catBtn(cat));
    const expected = TIPS.filter((t) => t.cat === cat).length;
    expect(count("#grid article"), `${cat} 絞り込み`).toBe(expected);
    expect(q("#count").textContent).toContain(String(expected));
  }
  click(catBtn("all"));
  expect(count("#grid article")).toBe(TIPS.length);
});

test("検索で grid が絞り込まれ、クリアで戻る", () => {
  typeInto(q("#q"), "余白");
  const filtered = count("#grid article");
  expect(filtered).toBeGreaterThan(0);
  expect(filtered).toBeLessThan(TIPS.length);
  typeInto(q("#q"), "");
  expect(count("#grid article")).toBe(TIPS.length);
});

test("カテゴリ順ではセクション見出しが出て、新着順では消える", () => {
  // 既定（カテゴリ順・すべて）は各カテゴリの見出しが出る。
  expect(count("#grid .sec-head")).toBe(CAT_ORDER.length);
  click(q("#sort-new"));
  expect(count("#grid .sec-head")).toBe(0);
  expect(count("#grid article")).toBe(TIPS.length);
});

test("カードを開くとモーダルにその Tip の内容が出る", () => {
  expect(q("#modal").getAttribute("aria-hidden")).toBe("true");
  const first = q("#grid article");
  const id = first.getAttribute("data-id");
  const tip = TIPS.find((t) => t.id === id);
  click(first);
  expect(q("#modal").getAttribute("aria-hidden")).toBe("false");
  expect(q("#modal-body").textContent).toContain(tip.title);
});

test("links を持つ Tip のモーダルに「つながり」とリンク先タイトルが出る", () => {
  const linked = TIPS.find((t) => (t.links || []).length > 0);
  const target = TIPS.find((t) => t.id === linked.links[0].to);
  click(q(`#grid article[data-id="${linked.id}"]`));
  const body = q("#modal-body").textContent;
  expect(body, "つながり節が無い").toContain("つながり");
  expect(body, "リンク先タイトルが無い").toContain(target.title);
});

test("履歴モーダルを開くと更新履歴が描画される", () => {
  click(q("#history-open"));
  expect(q("#history-body").textContent.trim().length).toBeGreaterThan(0);
  expect(q("#history-body").textContent).toContain("2026");
});
