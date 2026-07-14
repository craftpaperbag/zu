/* app.js を jsdom で実際に起動して、描画と基本操作の挙動を検査する。
   内部関数を直接呼ぶのではなく、本番の DOM を組み立てて結果を見る統合スタイル
   （renderGrid / renderCats / card / detail / match / tiesFor / showModal などをまとめて通す）。 */
import { test, expect, beforeEach } from "vitest";
import { bootApp, click, typeInto } from "./harness.js";
import { TIPS, CAT_ORDER, CONCERNS, matchConcern } from "./loader.js";

let window, document;
beforeEach(() => {
  ({ window, document } = bootApp());
});

const q = (s) => document.querySelector(s);
const count = (s) => document.querySelectorAll(s).length;
const catBtn = (cat) => q(`#cats button[data-cat="${cat}"]`);
const conBtn = (id) => q(`#concern-chips button[data-concern="${id}"]`);

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

test("0件のとき空表示が出て、「絞り込みを解除」で全件に戻る", () => {
  typeInto(q("#q"), "そんな覚え書きはないはずの長い呪文");
  expect(count("#grid article")).toBe(0);
  expect(q("#empty").classList.contains("hidden")).toBe(false);
  click(q("#empty-reset"));
  expect(count("#grid article")).toBe(TIPS.length);
  expect(q("#empty").classList.contains("hidden")).toBe(true);
  expect(q("#q").value).toBe("");
});

test("カテゴリ順ではセクション見出しが出て、新着順では消える", () => {
  // 既定（カテゴリ順・すべて）は各カテゴリの見出しが出る。
  expect(count("#grid .sec-head")).toBe(CAT_ORDER.length);
  click(q("#sort-new"));
  expect(count("#grid .sec-head")).toBe(0);
  expect(count("#grid article")).toBe(TIPS.length);
});

test("困りごとチップが全件描画される", () => {
  expect(count("#concern-chips button")).toBe(CONCERNS.length);
  for (const c of CONCERNS) expect(conBtn(c.id), `${c.id} のチップが無い`).toBeTruthy();
  // 初期状態では処方箋の帯は出ない
  expect(q("#concern-lead").classList.contains("is-hidden")).toBe(true);
});

test("困りごとを選ぶと絞り込まれ、処方箋の一言が出て、章立て見出しが消える", () => {
  for (const c of CONCERNS) {
    click(conBtn(c.id));
    const expected = TIPS.filter((t) => matchConcern(t, c)).length;
    expect(count("#grid article"), `${c.id} 絞り込み`).toBe(expected);
    expect(count("#grid .sec-head"), `${c.id}: 章立て見出しが残っている`).toBe(0);
    const lead = q("#concern-lead");
    expect(lead.classList.contains("is-hidden"), `${c.id}: lead が出ない`).toBe(false);
    expect(lead.textContent).toContain(c.lead);
    expect(conBtn(c.id).getAttribute("aria-pressed")).toBe("true");
    // もう一度押すと解除され、全件・章立てに戻る
    click(conBtn(c.id));
    expect(count("#grid article")).toBe(TIPS.length);
    expect(count("#grid .sec-head")).toBe(CAT_ORDER.length);
    expect(q("#concern-lead").classList.contains("is-hidden")).toBe(true);
  }
});

test("「すべて見る」で困りごとの絞り込みが解除される", () => {
  const c = CONCERNS[0];
  click(conBtn(c.id));
  click(q("#concern-clear"));
  expect(count("#grid article")).toBe(TIPS.length);
  expect(q("#concern-lead").classList.contains("is-hidden")).toBe(true);
  expect(conBtn(c.id).getAttribute("aria-pressed")).toBe("false");
});

test("困りごととカテゴリは排他（後から選んだ方が生きる）", () => {
  const c = CONCERNS[0];
  // 困りごと → カテゴリ：困りごとが解除される
  click(conBtn(c.id));
  click(catBtn("color"));
  expect(conBtn(c.id).getAttribute("aria-pressed")).toBe("false");
  expect(q("#concern-lead").classList.contains("is-hidden")).toBe(true);
  expect(count("#grid article")).toBe(TIPS.filter((t) => t.cat === "color").length);
  // カテゴリ → 困りごと：カテゴリが「すべて」に戻る
  click(conBtn(c.id));
  expect(catBtn("all").getAttribute("data-cat")).toBe("all");
  expect(count("#grid article")).toBe(TIPS.filter((t) => matchConcern(t, c)).length);
});

test("困りごとを選ぶと URL に ?komari= が載り、そのURLで起動すると復元される", () => {
  const c = CONCERNS[0];
  click(conBtn(c.id));
  expect(window.location.search).toContain("komari=" + c.id);
  // 復元
  const boot = bootApp("https://example.com/?komari=" + c.id);
  const doc = boot.document;
  expect(doc.querySelectorAll("#grid article").length).toBe(
    TIPS.filter((t) => matchConcern(t, c)).length,
  );
  expect(doc.querySelector("#concern-lead").classList.contains("is-hidden")).toBe(false);
  // 不正な id は無視して全件で始まる
  const bad = bootApp("https://example.com/?komari=no-such-concern").document;
  expect(bad.querySelectorAll("#grid article").length).toBe(TIPS.length);
  expect(bad.querySelector("#concern-lead").classList.contains("is-hidden")).toBe(true);
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
