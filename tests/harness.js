/* app.js を jsdom で実際に起動するためのハーネス。
   - 配信物そのもの（index.html / history.js / tips.js / app.js）を読み、本番と同じ骨格・同じ順序で動かす。
   - ページ自身のスクリプト（CDN や <head> のインライン）は走らせず、必要な3本だけを手で評価する。
   - 起動時に唯一未定義で落ちる lucide は、何もしないスタブを注入する（アイコン描画はテスト対象外）。 */
import { JSDOM } from "jsdom";
import { readFile } from "./loader.js";

// 新鮮な app インスタンスを1つ起動して { window, document } を返す。
export function bootApp() {
  const html = readFile("index.html");
  const dom = new JSDOM(html, {
    url: "https://example.com/",
    runScripts: "outside-only", // ページ内の <script> は走らせない。こちらで3本だけ評価する。
    pretendToBeVisual: true,
  });
  const { window } = dom;

  // 起動時に app.js が呼ぶ lucide.createIcons() を無害化（アイコン描画は検査対象外）。
  window.lucide = { createIcons() {} };
  // jsdom は window.scrollTo 未実装で警告を吐くだけなので、静かな no-op に差し替える。
  window.scrollTo = () => {};

  // 本番の読み込み順（history.js → tips.js → app.js）を1つの eval にまとめて評価する。
  // 別々に eval すると各ファイルの const（TIPS_space や HISTORY）が互いに見えず、
  // app.js から参照できない（間接 eval の const はその eval スコープに閉じるため）。
  const bundle =
    readFile("history.js") + "\n" + readFile("tips.js") + "\n" + readFile("app.js");
  window.eval(bundle);

  return { window, document: window.document, dom };
}

// click をその要素へ送る小さなヘルパ（jsdom の MouseEvent を使う）。
export function click(el) {
  el.dispatchEvent(
    new el.ownerDocument.defaultView.MouseEvent("click", { bubbles: true, cancelable: true }),
  );
}

// input 値を設定して input イベントを発火する。
export function typeInto(el, value) {
  const win = el.ownerDocument.defaultView;
  el.value = value;
  el.dispatchEvent(new win.Event("input", { bubbles: true }));
}
