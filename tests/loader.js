/* テスト用ローダー：配信物（ビルドなし）には手を入れず、データとルールの単一情報源を読み込む。
   - tips.js / history.js は const 宣言なので vm で評価し、末尾に「外へ出す」一行を足して取り出す。
   - CATEGORIES / REL は app.js が唯一の定義元。app.js は DOM 前提で丸ごとは動かせないため、
     リテラルだけを抜き出して評価する（カテゴリやrelを変えたら app.js を直す＝ここも自動追従し、ドリフトを検知できる）。 */
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
export const readFile = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");
export const filePath = (f) => path.join(ROOT, f);

// tips.js を評価し、カテゴリ別の TIPS_* 配列を取り出す。
function loadTips() {
  const ctx = {};
  vm.createContext(ctx);
  const tail =
    ";globalThis.__TIPS_GROUPS={" +
    "space:TIPS_space,hierarchy:TIPS_hierarchy,color:TIPS_color," +
    "text:TIPS_text,draw:TIPS_draw,flow:TIPS_flow};";
  vm.runInContext(readFile("tips.js") + tail, ctx);
  return ctx.__TIPS_GROUPS;
}

// history.js を評価し HISTORY を取り出す。
function loadHistory() {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(readFile("history.js") + ";globalThis.__H=HISTORY;", ctx);
  return ctx.__H;
}

// app.js から CATEGORIES と REL のリテラルだけを抜き出して評価する。
function loadAppMeta() {
  const src = readFile("app.js");
  const catLit = src.match(/const CATEGORIES\s*=\s*(\[[\s\S]*?\]);/);
  const relLit = src.match(/const REL\s*=\s*(\{[\s\S]*?\});\s*\nconst REL_ORDER/);
  if (!catLit) throw new Error("app.js から CATEGORIES を抽出できなかった");
  if (!relLit) throw new Error("app.js から REL を抽出できなかった");
  return {
    CATEGORIES: vm.runInNewContext("(" + catLit[1] + ")"),
    REL: vm.runInNewContext("(" + relLit[1] + ")"),
  };
}

// styles.css から定義済みデザイントークン（:root などの --xxx: 宣言）を集める。
export function loadTokens() {
  const css = readFile("styles.css");
  const tokens = new Set();
  for (const m of css.matchAll(/(--[a-z0-9-]+)\s*:/gi)) tokens.add(m[1]);
  return tokens;
}

const GROUPS = loadTips();
// カテゴリ体系の並びで1本につなぐ（app.js の連結順と同じ）。
export const CAT_ORDER = ["space", "hierarchy", "color", "text", "draw", "flow"];
export const GROUPS_BY_CAT = GROUPS;
export const TIPS = [].concat(...CAT_ORDER.map((c) => GROUPS[c] || []));
export const HISTORY = loadHistory();
const meta = loadAppMeta();
export const CATEGORIES = meta.CATEGORIES;
export const REL = meta.REL;
