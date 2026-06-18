# zu — 伝わりやすい形について

紙の上に文字を置いた時点で、それはもう「図」です。
スライド・資料・Excel・ホワイトボード・チャット投稿まで、見せて伝えるものすべてを、ここでは〈図〉と呼びます。
その図を、ほんの少し伝わりやすくするための覚え書き集。

図が6〜7割、文字が3〜4割。見た目のコツだけでなく、**「なぜそう感じるか」を現実世界の観察や例えで説明する**ことを大事にしています。

## 公開

単一の `index.html` で完結します。GitHub Pages（リポジトリ直下の `index.html`）でそのまま配信できます。
画像は使わず、図はすべて SVG / HTML 要素でコードから直接描いています。固定画像（PNG/JPG）はありません。

- Tailwind（CDN）＋ lucide アイコン（CDN）
- 書体：見出し Zen Maru Gothic、本文 Zen Kaku Gothic New

## 中身の増やし方

データとビューを分離しています。Tips は `index.html` 内の **カテゴリ別の配列**（`TIPS_space` / `TIPS_hierarchy` / `TIPS_color` / `TIPS_text` / `TIPS_draw`）として持ち、描画ロジックが展開します。
**種を増やすときは、該当カテゴリの配列に1ブロック足すだけ**です。

1エントリのスキーマ：

```js
{
  id,      // 一意の識別子（kebab-case）
  cat,     // 主カテゴリID（space / hierarchy / color / text / draw）
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

## ライセンス

All Rights Reserved（留保）。

— craftpaperbag
