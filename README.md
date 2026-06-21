# zu — 伝わりやすい形について

紙の上に文字を置いた時点で、それはもう「図」です。
スライド・資料・Excel・ホワイトボード・チャット投稿まで、見せて伝えるものすべてを、ここでは〈図〉と呼びます。
その図を、ほんの少し伝わりやすくするための覚え書き集。

図が6〜7割、文字が3〜4割。見た目のコツだけでなく、**「なぜそう感じるか」を現実世界の観察や例えで説明する**ことを大事にしています。

## 公開

**▶ 公開サイト： https://craftpaperbag.github.io/zu/**

ビルドなしで、GitHub Pages（リポジトリ直下の `index.html`）からそのまま配信します。
構造・スタイル・描画ロジックは `index.html` に置き、編集の主戦場になるデータだけを外部 JS に分けています。`index.html` が `<script src>` でこの2つを先に読み込みます。

- `tips.js` — Tips のたね（`TIPS_space` などカテゴリ別の `TIPS_*` 配列）。`index.html` 側で1本の `TIPS` に連結します。
- `history.js` — 更新履歴（`HISTORY` 配列）。

画像は使わず、図はすべて SVG / HTML 要素でコードから直接描いています。固定画像（PNG/JPG）はありません。

- Tailwind（CDN）＋ lucide アイコン（CDN）
- 書体：見出し Zen Maru Gothic、本文 Zen Kaku Gothic New

## 中身の増やし方

データとビューを分離しています。Tips は `tips.js` 内の **カテゴリ別の配列**（`TIPS_space` / `TIPS_hierarchy` / `TIPS_color` / `TIPS_text` / `TIPS_draw` / `TIPS_flow`）として持ち、`index.html` 側の描画ロジックが1本に連結して展開します。
**種を増やすときは、該当カテゴリの配列に1ブロック足すだけ**です。見える変更を加えたら `history.js` の `HISTORY` 配列の先頭にも1項目足します。

1エントリのスキーマ：

```js
{
  id,      // 一意の識別子（kebab-case）
  cat,     // 主カテゴリID（space / hierarchy / color / text / draw / flow）
  tags,    // 横串タグの配列（他カテゴリIDで関連を張る）
  title,   // 短い言い切り
  claim,   // 一文の主張（カードでは朱色で表示）
  why,     // 現実世界の観察・例え（このサイトの命）
  visual,  // SVG/HTML 直描きの図（主役）
  apply,   // 明日から使える具体
  term,    // 任意。末尾に小さく添える専門用語。なければ空文字
}
```

図を作る・直すときは `zu-drawing-rules.md`（人間用・解説版）と `zu-drawing-rules-prompt.md`（AI 用・規約版）に従います。

### 種の工房（作図支援ツール）

図のラフとネタ（claim / why / apply など）を直感的に置いて設計し、それを **Claude Code に渡せば実装される作図プロンプト**に変換するページです。最終的な規約準拠の SVG は、受け取った Claude Code が清書します。

**▶ 種の工房： https://craftpaperbag.github.io/zu/tane.html**

`tane.html` 単体で動きます（ビルド不要）。サイト本体（`index.html`）からはリンクしておらず、作者向けの工房としてここからだけ辿れます。

## ライセンス

All Rights Reserved（留保）。

— craftpaperbag
