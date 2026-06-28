/* テスト用ローダー：ビルドなし単体配信のまま、データとルールの単一情報源を読み込む。
   - tips.js / history.js は const 宣言なので vm で評価し、末尾に「外へ出す」一行を足して取り出す。
   - CATEGORIES / REL は app.js が唯一の定義元。app.js は DOM 前提で丸ごとは動かせないため、
     リテラルだけを抜き出して評価する（カテゴリやrelを変えたら app.js を直す＝ここも自動追従し、ドリフトを検知できる）。 */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");

// tips.js を評価し、カテゴリ別の TIPS_* 配列を取り出す。
function loadTips() {
  const ctx = {};
  vm.createContext(ctx);
  const tail =
    ";globalThis.__TIPS_GROUPS={" +
    "space:TIPS_space,hierarchy:TIPS_hierarchy,color:TIPS_color," +
    "text:TIPS_text,draw:TIPS_draw,flow:TIPS_flow};";
  vm.runInContext(read("tips.js") + tail, ctx);
  return ctx.__TIPS_GROUPS;
}

// history.js を評価し HISTORY を取り出す。
function loadHistory() {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(read("history.js") + ";globalThis.__H=HISTORY;", ctx);
  return ctx.__H;
}

// app.js から CATEGORIES と REL のリテラルだけを抜き出して評価する。
function loadAppMeta() {
  const src = read("app.js");
  const catLit = src.match(/const CATEGORIES\s*=\s*(\[[\s\S]*?\]);/);
  const relLit = src.match(/const REL\s*=\s*(\{[\s\S]*?\});\s*\nconst REL_ORDER/);
  if (!catLit) throw new Error("app.js から CATEGORIES を抽出できなかった");
  if (!relLit) throw new Error("app.js から REL を抽出できなかった");
  return {
    CATEGORIES: vm.runInNewContext("(" + catLit[1] + ")"),
    REL: vm.runInNewContext("(" + relLit[1] + ")"),
  };
}

const GROUPS = loadTips();
// カテゴリ体系の並びで1本につなぐ（app.js の連結順と同じ）。
const CAT_ORDER = ["space", "hierarchy", "color", "text", "draw", "flow"];
const TIPS = [].concat(...CAT_ORDER.map((c) => GROUPS[c] || []));

module.exports = {
  GROUPS,
  CAT_ORDER,
  TIPS,
  HISTORY: loadHistory(),
  ...loadAppMeta(),
};
