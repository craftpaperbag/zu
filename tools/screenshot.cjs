/* =============================================================================
 * tools/screenshot.cjs
 *
 * ❗このファイルは「Claude Code on the web（クラウド版）」専用の補助ツールです。
 *   通常のサイト配信（GitHub Pages）には一切関与しません。index.html からは
 *   読み込まれず、削除してもサイトの動作には影響しません。
 *
 * なぜ必要か:
 *   クラウド版 Claude Code の実行環境は「外部ネットワークが遮断」されており、
 *   index.html が使う CDN（Tailwind / lucide / Google Fonts）が読み込めません。
 *   そのまま撮ると Tailwind のユーティリティクラスが全て無効化され、レイアウトが
 *   崩れた（＝本来の見た目と違う）スクショになります。このツールは:
 *     1) Playwright を CommonJS で読む（import ではなく require）
 *     2) lucide を no-op スタブして、CDN 不在でも描画スクリプトが落ちないようにする
 *     3) Tailwind が読めなかった時だけ tools/tw-shim.css を当てて見た目を補う
 *     4) ブラウザバイナリは環境変数 PLAYWRIGHT_BROWSERS_PATH（/opt/pw-browsers）から
 *   …という、過去にハマった落とし穴を最初から織り込んで撮影します。
 *
 *   ネットワークが使える環境（手元のPC等）で実行した場合は、本物の CDN が読まれる
 *   ので shim は当たらず、公開時とほぼ同一の見た目で撮れます。
 *
 * 使い方:
 *   node tools/screenshot.cjs --out shot.png
 *   node tools/screenshot.cjs --out modal.png --eval "openHistory()" --scroll "#history-scroll=150"
 *   node tools/screenshot.cjs --selector "#history-panel" --out panel.png
 *
 * 主なオプション:
 *   --file <path>      撮影対象のHTML（既定: リポジトリ直下の index.html）
 *   --url <url>        file の代わりに任意URLを開く
 *   --out <path>       出力PNG（既定: screenshot.png）
 *   --width <px>       ビューポート幅（既定: 1000）
 *   --height <px>      ビューポート高さ（既定: 800）
 *   --scale <n>        deviceScaleFactor（既定: 2／高解像度）
 *   --eval "<js>"      撮影前にページ内で実行するJS（例: "openHistory()"）
 *   --click <sel>      撮影前にクリックする要素
 *   --scroll "<sel>=<px>"  指定要素を縦スクロール（例: "#history-scroll=150"）
 *   --selector <sel>   その要素だけを撮る（省略時はビューポート全体）
 *   --full             ページ全体を撮る（--selector と排他）
 *   --wait <ms>        各操作後の待ち時間（既定: 400）
 * ============================================================================= */

const path = require("path");
const fs = require("fs");

// --- Playwright を CommonJS として読む（ESM import は使えない） ---
function loadPlaywright() {
  const candidates = [
    "playwright",
    "/opt/node22/lib/node_modules/playwright",
  ];
  for (const c of candidates) {
    try {
      return require(c);
    } catch (_) {
      /* 次の候補へ */
    }
  }
  throw new Error(
    "playwright が見つかりません。`npm i -D playwright` か、グローバル版のパスを確認してください。"
  );
}

// --- 簡易引数パーサ ---
const argv = process.argv.slice(2);
function opt(name, def) {
  const i = argv.indexOf(name);
  return i >= 0 && argv[i + 1] !== undefined ? argv[i + 1] : def;
}
function flag(name) {
  return argv.includes(name);
}

if (flag("--help") || flag("-h")) {
  // ヘッダーのコメントがそのままヘルプ。先頭のブロックコメントを表示する。
  const self = fs.readFileSync(__filename, "utf8");
  const block = self.slice(self.indexOf("/*"), self.indexOf("*/") + 2);
  console.log(block.replace(/^ \* ?/gm, "").replace(/^\/\*|\*\/$/g, "").trim());
  process.exit(0);
}

(async () => {
  const repoRoot = path.resolve(__dirname, "..");
  const file = opt("--file", path.join(repoRoot, "index.html"));
  const url = opt("--url", null) || "file://" + path.resolve(file);
  const out = path.resolve(opt("--out", "screenshot.png"));
  const width = parseInt(opt("--width", "1000"), 10);
  const height = parseInt(opt("--height", "800"), 10);
  const scale = parseFloat(opt("--scale", "2"));
  const wait = parseInt(opt("--wait", "400"), 10);
  const evalJs = opt("--eval", null);
  const clickSel = opt("--click", null);
  const scrollArg = opt("--scroll", null); // "<selector>=<px>"
  const selector = opt("--selector", null);
  const full = flag("--full");

  const { chromium } = loadPlaywright();
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: scale });

  // lucide が未定義でも描画スクリプトが落ちないように no-op をあらかじめ用意。
  // 本物の lucide が読めればページ側が window.lucide を上書きするので無害。
  await page.addInitScript(() => {
    if (!window.lucide) window.lucide = { createIcons: () => {} };
  });

  await page.setViewportSize({ width, height });

  const failed = [];
  page.on("requestfailed", (r) => failed.push(r.url()));

  await page.goto(url, { waitUntil: "load" });
  await page.waitForTimeout(wait);

  // Tailwind が読めていなければ（＝オフライン）shim を当てる。
  const hasTailwind = await page.evaluate(() => typeof window.tailwind !== "undefined");
  if (!hasTailwind) {
    const shimPath = path.join(__dirname, "tw-shim.css");
    if (fs.existsSync(shimPath)) {
      await page.addStyleTag({ content: fs.readFileSync(shimPath, "utf8") });
      console.log("[info] Tailwind CDN 未読込 → tools/tw-shim.css を適用しました");
    } else {
      console.log("[warn] Tailwind 未読込かつ shim が無いため、見た目が崩れる可能性があります");
    }
  }

  if (clickSel) {
    await page.click(clickSel);
    await page.waitForTimeout(wait);
  }
  if (evalJs) {
    await page.evaluate((src) => {
      // 余計なフォーカスリング（focus-visible の朱枠）が写り込まないよう blur しておく
      eval(src);
      if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    }, evalJs);
    await page.waitForTimeout(wait);
  }
  if (scrollArg) {
    const eq = scrollArg.lastIndexOf("=");
    const sel = scrollArg.slice(0, eq);
    const px = parseInt(scrollArg.slice(eq + 1), 10);
    await page.evaluate(
      ([s, p]) => {
        const el = document.querySelector(s);
        if (el) el.scrollTop = p;
      },
      [sel, px]
    );
    await page.waitForTimeout(wait);
  }

  if (selector) {
    const el = await page.$(selector);
    if (!el) throw new Error(`要素が見つかりません: ${selector}`);
    await el.screenshot({ path: out });
  } else {
    await page.screenshot({ path: out, fullPage: full });
  }

  await browser.close();

  if (failed.length) {
    const cdn = failed.filter((u) => /tailwind|lucide|googleapis|gstatic|unpkg/.test(u));
    if (cdn.length) {
      console.log(`[info] 遮断された外部リクエスト ${cdn.length} 件（CDN）。オフライン環境では想定どおりです。`);
    }
  }
  console.log("[done] " + out);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
