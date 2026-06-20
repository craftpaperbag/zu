# スクリーンショットの撮り方（クラウド版 Claude Code 用メモ）

「スクショ見せて」と言われたときの再現手順。**この環境特有の落とし穴と、その回避策**をまとめてある。
リポジトリ本体（`index.html` 単体配信）には一切手を入れない。作業はすべて `/tmp` で完結させ、
生成物（`node_modules`・PNG・ビルド済みCSS）はコミットしない。

---

## なぜ素直に撮れないか（重要）

クラウド実行環境は**ネットワーク egress 許可リスト**で外部ホストを絞っている。
`index.html` が使う CDN は軒並み遮断されるので、ブラウザでそのまま開くと崩れる。

- 遮断されるホスト（403 `Host not in allowlist`）：
  - `cdn.tailwindcss.com`（Tailwind）→ ユーティリティが全く効かずレイアウト崩壊
  - `unpkg.com`（lucide）→ `lucide` が未定義になり `lucide.createIcons()` で**スクリプトごと停止**
  - `cdn.playwright.dev` / `playwright.download.prss.microsoft.com` → Playwright のブラウザDLが失敗
- 許可されているhost（撮影に使える）：
  - `registry.npmjs.org`（npm install / npx は通る）
  - `storage.googleapis.com`（**Chrome for Testing のバイナリ置き場** → puppeteer でDL可）
  - `github.com`
  - `fonts.googleapis.com` / `fonts.gstatic.com`（Zen フォントはそのまま読める）

→ 方針：**ブラウザは puppeteer（Google Storage からDL）**、**Tailwind はローカルCLIビルド**、
**lucide は npm の本物のUMD**、**フォントは許可済みCDNのまま**。これで本番と見た目が揃う。

---

## 手順（コピペで再現）

```bash
# 0) 作業場所。リポジトリは汚さない
cd /tmp && rm -rf shot && mkdir shot && cd shot && npm init -y >/dev/null

# 1) ブラウザ（Chrome for Testing は storage.googleapis.com=許可host からDL）
npm i puppeteer >/dev/null
npx puppeteer browsers install chrome     # ~/.cache/puppeteer に入る

# 2) サイトのファイルを持ってくる
cp /home/user/zu/index.html /home/user/zu/history.js /home/user/zu/tips.js .

# 3) Tailwind を「使っているクラスだけ」ローカル生成（v3 系で十分）
npm i -D tailwindcss@3 >/dev/null
npm i lucide >/dev/null                    # 本物のアイコンUMD
printf '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n' > in.css
npx tailwindcss -i in.css -o tw.css --content ./index.html --minify

# 4) CDN参照をローカル差し替え（フォントの2行はそのまま＝許可hostなので生かす）
cp node_modules/lucide/dist/umd/lucide.min.js .
node -e '
  const fs=require("fs");let h=fs.readFileSync("index.html","utf8");
  h=h.replace(`<script src="https://cdn.tailwindcss.com"></script>`,`<link rel="stylesheet" href="tw.css">`);
  h=h.replace(`<script src="https://unpkg.com/lucide@latest"></script>`,`<script src="lucide.min.js"></script>`);
  fs.writeFileSync("preview.html",h);'
```

### 撮影スクリプト（`/tmp/shot/shot.js`）

```js
const puppeteer=require('puppeteer');
const path='file://'+__dirname+'/preview.html';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
  const b=await puppeteer.launch({headless:'new',
    args:['--no-sandbox','--disable-setuid-sandbox','--disable-gpu','--font-render-hinting=none','--force-color-profile=srgb']});
  const p=await b.newPage();
  await p.setViewport({width:1280,height:900,deviceScaleFactor:2}); // モバイルは 390x780
  await p.goto(path,{waitUntil:'networkidle0'});
  await sleep(1200);                       // フォント・アイコンが乗るまで待つ（重要）
  await p.screenshot({path:'home.png'});

  // 状態を作って撮る例：
  // 検索      → await p.click('#q'); await p.type('#q','余白',{delay:30});
  // 詳細を開く → await p.evaluate(()=>openTip('proximity'));   // 描画関数を直接叩ける
  // 要素だけ  → const el=await p.$('article[data-id]'); await el.screenshot({path:'card.png'});

  await b.close();
})().catch(e=>{console.error('ERR:',e.message);process.exit(1);});
```

```bash
node /tmp/shot/shot.js     # → /tmp/shot/*.png を SendUserFile で送る
```

---

## コツ・注意

- **`waitUntil:'networkidle0'` ＋ 1秒強の sleep** を必ず入れる。フォント未適用のまま撮ると別物に見える。
- `deviceScaleFactor:2`（拡大確認は 3）で文字がくっきり。モバイル確認は `390x780`。
- 状態は `p.evaluate()` から**サイトの描画関数を直接呼ぶ**のが速い（`openTip(id)` / `renderGrid()` など）。
- Tailwind の Play CDN は中身が v3 相当。`tailwindcss@3` の CLI で `--content ./index.html` を舐めれば一致する。
  クラスを増やしたら CSS を作り直す（`tw.css` は使用クラスのみ含む）。
- DL先が変わって 403 が出たら、まず `curl -s -o /dev/null -w '%{http_code}\n' <host>` で許可hostか確認する
  （403 本文に `Host not in allowlist` が出れば egress 遮断）。許可hostは増減しうる。
- 生成物（`/tmp/shot` 配下）はコミットしない。リポジトリは `index.html` 単体配信のままに保つ。
