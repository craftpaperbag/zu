/* =========================================================
   ▼▼▼ ここだけ触れば増やせる：Tipsのたね ▼▼▼
   why    = 現実世界の観察・例え（このサイトの命）
   visual = SVG/HTML直描きの図（主役・6〜7割）
   種を増やすときは、該当カテゴリの配列に1ブロック足すだけ。
   1本につなぐ処理（const TIPS）は index.html 側にある。
   ========================================================= */
const TIPS_space = [
  {
    id:"outer-margin",
    cat:"space",
    links:[{to:"line-height",rel:"akin"},{to:"title-space",rel:"akin"}],
    tags:[],
    title:"外周は、空けておく",
    claim:"端まで詰めたスライドは、誰にも読まれない。",
    why:"料理を皿の縁いっぱいまで盛ると、どこからが料理なのか分からなくなります。少し余白を残すから、中央のひと盛りが『ごちそう』として立ち上がる。スライドも同じで、外周をひと回り空けると、その中身がひとつのまとまった世界に見えてきます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="外周を空けた図のほうが、ひとつのまとまった世界として読みやすい">
      <rect x="20" y="16" width="116" height="80" rx="10" fill="none" stroke="var(--line)"/>
      <g fill="var(--ink-soft)">
        <rect x="27" y="23" width="102" height="12" rx="3"/>
        <rect x="27" y="39" width="102" height="9" rx="3"/>
        <rect x="27" y="52" width="102" height="9" rx="3"/>
        <rect x="27" y="65" width="102" height="9" rx="3"/>
        <rect x="27" y="78" width="102" height="11" rx="3"/>
      </g>
      <text x="78" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">端まで詰める</text>
      <rect x="184" y="16" width="116" height="80" rx="10" fill="none" stroke="var(--line)"/>
      <g fill="var(--calm)">
        <rect x="204" y="36" width="76" height="14" rx="4"/>
        <rect x="204" y="56" width="76" height="8" rx="3"/>
        <rect x="204" y="68" width="52" height="8" rx="3"/>
      </g>
      <text x="242" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">外周を空ける</text>
    </svg>`,
    apply:"スライドや資料は、内容を置く前に外周をひと回り空けてから始める。",
    term:"ホワイトスペース（余白）",
  },
  {
    id:"line-length",
    cat:"space",
    links:[{to:"line-height",rel:"akin"},{to:"thirteen-chars",rel:"akin"}],
    tags:[],
    title:"一行は、短く折る",
    claim:"横に長い一行は、目が戻る場所を見失う。",
    why:"新聞や文庫本の一行が短く組まれているのには理由があります。行末まで読んで次の行頭へ戻るとき、横に長すぎると目が着地点を見失い、同じ行を二度読んだり一行飛ばしたりする。一行を短く折ると、目は迷わず次の行へ降りていけます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="一行を短く折ったほうが、目が次の行へ迷わず戻れる">
      <g fill="var(--ink-soft)">
        <rect x="20" y="28" width="116" height="9" rx="3"/>
        <rect x="20" y="46" width="116" height="9" rx="3"/>
        <rect x="20" y="64" width="116" height="9" rx="3"/>
        <rect x="20" y="82" width="78" height="9" rx="3"/>
      </g>
      <text x="78" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">長い一行</text>
      <g fill="var(--calm)">
        <rect x="206" y="24" width="64" height="9" rx="3"/>
        <rect x="206" y="38" width="64" height="9" rx="3"/>
        <rect x="206" y="52" width="64" height="9" rx="3"/>
        <rect x="206" y="66" width="64" height="9" rx="3"/>
        <rect x="206" y="80" width="42" height="9" rx="3"/>
      </g>
      <text x="242" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">短く折る</text>
    </svg>`,
    apply:"一行は全角35〜45字を上限の目安に。長くなったら段を分けるか、幅を狭める。",
    term:"適正行長（メジャー）",
  },
  {
    id:"proximity",
    cat:"space",
    links:[{to:"belonging",rel:"akin"}],
    tags:[],
    title:"余白が、塊を作る",
    claim:"間を空けるだけで、情報はグループに分かれる。",
    why:"雑踏の中でも、肩を寄せて歩く二人は一目で『連れ』だとわかります。近さがそのまま関係を語るからです。項目の間の余白を変えるだけで、囲い線がなくても『ここからここまでがひと組』だと伝わります。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="余白の大小だけで、情報は囲い線なしにグループへ分かれる">
      <g fill="var(--ink-soft)">
        <rect x="24" y="28" width="84" height="12" rx="4"/>
        <rect x="24" y="46" width="84" height="12" rx="4"/>
        <rect x="24" y="64" width="84" height="12" rx="4"/>
        <rect x="24" y="82" width="84" height="12" rx="4"/>
      </g>
      <text x="66" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">均等＝関係不明</text>
      <g fill="var(--calm)">
        <rect x="212" y="24" width="84" height="12" rx="4"/>
        <rect x="212" y="40" width="84" height="12" rx="4"/>
        <rect x="212" y="72" width="84" height="12" rx="4"/>
        <rect x="212" y="88" width="84" height="12" rx="4"/>
      </g>
      <text x="254" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">余白＝2つの組</text>
    </svg>`,
    apply:"見出しと本文は近づけ、段落と段落は離す。線で囲う前に、まず余白で仕分ける。",
    term:"近接の原理",
  },
  {
    id:"belonging",
    cat:"space",
    tags:[],
    title:"余白の広さが、所属を決める",
    claim:"どの情報がどこに属するかは、余白の広さが語る。",
    why:"子どもは、たくさんの大人の中でも、自分の親のすぐそばに立ちます。距離の近さが『この人の連れ』だと示すからです。見出しも同じで、上を広く下を狭く空ければ、その見出しは下の文章のものだと自然に読まれます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="見出しの上下の余白の差が、その見出しがどの塊に属すかを決める">
      <g fill="var(--line)">
        <rect x="24" y="20" width="84" height="9" rx="3"/>
        <rect x="24" y="33" width="60" height="9" rx="3"/>
      </g>
      <rect x="24" y="56" width="84" height="11" rx="3" fill="var(--ink-soft)"/>
      <g fill="var(--line)">
        <rect x="24" y="80" width="84" height="9" rx="3"/>
        <rect x="24" y="93" width="60" height="9" rx="3"/>
      </g>
      <text x="66" y="116" text-anchor="middle" font-size="11" fill="var(--ink-soft)">不明</text>
      <g fill="var(--line)">
        <rect x="212" y="20" width="84" height="9" rx="3"/>
        <rect x="212" y="33" width="60" height="9" rx="3"/>
      </g>
      <rect x="212" y="64" width="84" height="11" rx="3" fill="var(--calm)"/>
      <g fill="var(--calm-soft)">
        <rect x="212" y="79" width="84" height="9" rx="3"/>
        <rect x="212" y="92" width="60" height="9" rx="3"/>
      </g>
      <text x="254" y="116" text-anchor="middle" font-size="11" fill="var(--calm)">下の塊のもの</text>
    </svg>`,
    apply:"見出しの上を広く、下を狭く空ける。ラベルは説明したい対象のすぐそばへ。",
    term:"近接の原理",
  },
  {
    id:"title-space",
    cat:"space",
    links:[{to:"proximity",rel:"echo"}],
    tags:[],
    title:"タイトルは、余白がつくる",
    claim:"タイトルをタイトルに見せるのは、大きさより周りの余白。",
    why:"人前で大事な一言を言うとき、わたしたちは少し間を置いてから口を開きます。前後の沈黙が、その一言を際立たせるからです。タイトルも、文字を大きく太くしなくても、上下にゆったり余白を置くだけで『これは見出しだ』と伝わります。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="タイトルは大きさより上下の余白で見出しらしく立ち上がる">
      <rect x="20" y="16" width="116" height="84" rx="10" fill="none" stroke="var(--line)"/>
      <rect x="28" y="22" width="84" height="11" rx="3" fill="var(--ink-soft)"/>
      <g fill="var(--line)">
        <rect x="28" y="38" width="100" height="8" rx="3"/>
        <rect x="28" y="50" width="100" height="8" rx="3"/>
        <rect x="28" y="62" width="100" height="8" rx="3"/>
        <rect x="28" y="74" width="100" height="8" rx="3"/>
        <rect x="28" y="86" width="64" height="8" rx="3"/>
      </g>
      <text x="78" y="114" text-anchor="middle" font-size="11" fill="var(--ink-soft)">詰まる</text>
      <rect x="184" y="16" width="116" height="84" rx="10" fill="none" stroke="var(--line)"/>
      <rect x="192" y="34" width="84" height="11" rx="3" fill="var(--calm)"/>
      <g fill="var(--line)">
        <rect x="192" y="64" width="100" height="8" rx="3"/>
        <rect x="192" y="76" width="100" height="8" rx="3"/>
        <rect x="192" y="88" width="64" height="8" rx="3"/>
      </g>
      <text x="242" y="114" text-anchor="middle" font-size="11" fill="var(--calm)">余白で浮かせる</text>
    </svg>`,
    apply:"タイトルを目立たせたいときは、太く大きくする前に、上下の余白を増やしてみる。",
    term:"間（ま）",
  },
  {
    id:"invisible-line",
    cat:"space",
    links:[{to:"belonging",rel:"akin"}],
    tags:["draw"],
    title:"揃えると、線が見えてくる",
    claim:"余白と整列だけで、引いていない線が見えてくる。",
    why:"文字や箱の左端をきれいに揃えると、そこに一本の線がすっと立ち上がって見えます。実際には何も引いていないのに、目が端の連なりを線として読み取るからです。罫線を足すより、揃えるほうが構造はくっきり伝わります。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="左端を揃えるだけで、引いていない一本の線が浮かび上がる">
      <g fill="var(--ink-soft)">
        <rect x="30" y="26" width="80" height="11" rx="3"/>
        <rect x="44" y="44" width="64" height="11" rx="3"/>
        <rect x="34" y="62" width="92" height="11" rx="3"/>
        <rect x="50" y="80" width="56" height="11" rx="3"/>
      </g>
      <text x="78" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">バラバラ</text>
      <line x1="204" y1="22" x2="204" y2="95" stroke="var(--calm)" stroke-width="1" stroke-dasharray="2 4" opacity=".7"/>
      <g fill="var(--calm)">
        <rect x="206" y="26" width="80" height="11" rx="3"/>
        <rect x="206" y="44" width="64" height="11" rx="3"/>
        <rect x="206" y="62" width="92" height="11" rx="3"/>
        <rect x="206" y="80" width="56" height="11" rx="3"/>
      </g>
      <text x="252" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">見えない線</text>
    </svg>`,
    apply:"要素は左端（または同じ基準線）にきっちり揃える。揃えるだけで多くの罫線は要らなくなる。",
    term:"主観的輪郭",
  },
  {
    id:"line-height",
    cat:"space",
    tags:[],
    title:"行間は、空けておく",
    claim:"行が詰まった文章は、読む前に閉じられる。",
    why:"行と行がぴったり詰まった文章を見ると、読む前から息が詰まるような圧迫を感じます。文字にも、呼吸する隙間が要るのです。行の間をゆったり空けると、目線が一行ずつ楽に降りていけて、最後まで読み通せます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="行間をゆったり空けた文章のほうが、息苦しくなく読み通せる">
      <g fill="var(--ink-soft)">
        <rect x="24" y="24" width="92" height="8" rx="3"/>
        <rect x="24" y="35" width="92" height="8" rx="3"/>
        <rect x="24" y="46" width="92" height="8" rx="3"/>
        <rect x="24" y="57" width="92" height="8" rx="3"/>
        <rect x="24" y="68" width="92" height="8" rx="3"/>
        <rect x="24" y="79" width="64" height="8" rx="3"/>
      </g>
      <text x="70" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">詰まる</text>
      <g fill="var(--calm)">
        <rect x="204" y="24" width="92" height="8" rx="3"/>
        <rect x="204" y="42" width="92" height="8" rx="3"/>
        <rect x="204" y="60" width="92" height="8" rx="3"/>
        <rect x="204" y="78" width="64" height="8" rx="3"/>
      </g>
      <text x="250" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">息ができる</text>
    </svg>`,
    apply:"本文の行の高さは、文字サイズの1.7〜1.8倍を目安に空ける。",
    term:"行送り（レディング）",
  },
  {
    id:"less-stands-out",
    cat:"space",
    links:[{to:"one-color",rel:"echo"},{to:"few-parallels",rel:"akin"}],
    tags:["hierarchy"],
    title:"少ないほど、目立つ",
    claim:"要素を減らすほど、残ったものが際立つ。",
    why:"夜空に星が一つだけなら、誰でもすぐに見つけられます。けれど空一面が瞬けば、どの光も埋もれて見えなくなる。置くものを減らすほど、残った一つは自然と目に飛び込んできます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="要素を減らすほど、残った一つが必ず見つかる">
      <g fill="var(--ink-soft)">
        <circle cx="30" cy="30" r="6"/><circle cx="58" cy="52" r="6"/><circle cx="44" cy="80" r="6"/>
        <circle cx="78" cy="34" r="6"/><circle cx="96" cy="64" r="6"/><circle cx="112" cy="42" r="6"/>
        <circle cx="124" cy="78" r="6"/><circle cx="72" cy="86" r="6"/><circle cx="106" cy="88" r="6"/>
      </g>
      <text x="78" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">多い → 埋もれる</text>
      <circle cx="242" cy="52" r="7" fill="var(--accent)"/>
      <text x="242" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">一つ → 必ず見つかる</text>
    </svg>`,
    apply:"迷ったら足すより減らす。一番見てほしいものを残し、その他は思い切って削る。",
    term:"フォン・レストルフ効果（孤立効果）",
  },
  {
    id:"one-message",
    cat:"space",
    links:[{to:"less-stands-out",rel:"akin"},{to:"no-lost-reader",rel:"akin"}],
    tags:["hierarchy"],
    title:"1枚に詰め込みすぎない",
    claim:"縦横無尽に置かれた1枚は、容量オーバーのサイン。",
    why:"世界地図のように四方へ情報が広がった一枚は、『一枚に収まりきっていない』という告白です。机に荷物を全部広げると何も見つからないように、詰め込むほど要点は埋もれます。言いたいことごとにページを分ければ、一枚ずつがまっすぐ伝わります。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="四方へ広がった一枚は分割の合図、1枚1メッセージに割り直す">
      <rect x="20" y="20" width="116" height="72" rx="10" fill="none" stroke="var(--line)"/>
      <g fill="var(--ink-soft)">
        <rect x="26" y="26" width="40" height="14" rx="4"/>
        <rect x="96" y="26" width="34" height="14" rx="4"/>
        <rect x="60" y="50" width="36" height="12" rx="4"/>
        <rect x="26" y="72" width="34" height="14" rx="4"/>
        <rect x="98" y="72" width="32" height="14" rx="4"/>
      </g>
      <text x="78" y="108" text-anchor="middle" font-size="11" fill="var(--ink-soft)">四方に広がる</text>
      <rect x="186" y="20" width="52" height="72" rx="10" fill="none" stroke="var(--line)"/>
      <rect x="196" y="48" width="32" height="16" rx="4" fill="var(--calm)"/>
      <rect x="246" y="20" width="52" height="72" rx="10" fill="none" stroke="var(--line)"/>
      <rect x="256" y="48" width="32" height="16" rx="4" fill="var(--calm)"/>
      <text x="242" y="108" text-anchor="middle" font-size="11" fill="var(--calm)">分割する</text>
    </svg>`,
    apply:"一枚が四方へ広がり始めたら、分割の合図。1枚1メッセージに割り直す。",
    term:"ワンスライド・ワンメッセージ",
  },
  {
    id:"no-lost-reader",
    cat:"space",
    links:[{to:"proximity",rel:"akin"}],
    tags:["hierarchy"],
    title:"迷子を、作らない",
    claim:"要素どうしの関係が、ひと目で見えるようにする。",
    why:"知らない街で地図を渡されても、いま自分がどこにいて、どの道がどこへ続くのかが描かれていなければ、たちまち迷子になります。図も同じで、置かれた要素が上下なのか、どれがどれに属すのか、横並びなのかが見えないと、読み手は自分の居場所を見失う。並べる前にその関係を決めて、配置でそのまま示します。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="関係を決めずに並べると読み手は迷子になり、上下や従属を配置で示すと迷わない">
      <g fill="var(--ink-soft)">
        <rect x="24" y="28" width="70" height="13" rx="4"/>
        <rect x="46" y="52" width="70" height="13" rx="4"/>
        <rect x="30" y="76" width="70" height="13" rx="4"/>
      </g>
      <text x="70" y="110" text-anchor="middle" font-size="11" fill="var(--ink-soft)">関係が読めない</text>
      <rect x="212" y="28" width="84" height="13" rx="4" fill="var(--calm)"/>
      <g fill="var(--calm-soft)">
        <rect x="224" y="52" width="72" height="11" rx="3"/>
        <rect x="224" y="68" width="72" height="11" rx="3"/>
      </g>
      <text x="254" y="110" text-anchor="middle" font-size="11" fill="var(--calm)">上下と従属が見える</text>
    </svg>`,
    apply:"並べる前に、要素どうしが上下か・従属か・並列かを決め、その関係を配置で示す。",
    term:"",
  },
  {
    id:"annotation-target",
    cat:"space",
    links:[{to:"belonging",rel:"akin"},{to:"invisible-line",rel:"akin"}],
    tags:["text"],
    title:"その注釈、どこの話？",
    claim:"全体への補足でないなら、どこにかかるかを示す。",
    why:"大勢の集合写真に『この人が優勝者』とだけ添えても、どの顔のことか分かりません。注釈も同じで、図の隅に置いただけでは、どの部分の話なのか伝わらない。全体にかかるものでなければ、対象のすぐそばに置くか、印でつないで『ここの話だ』とはっきり示します。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="注釈を隅に置くとどこの話か不明、対象のそばに印で結ぶとかかる先が伝わる">
      <g fill="var(--ink-soft)">
        <rect x="24" y="24" width="34" height="22" rx="4"/>
        <rect x="66" y="24" width="34" height="22" rx="4"/>
        <rect x="108" y="24" width="22" height="22" rx="4"/>
      </g>
      <text x="26" y="82" font-size="10" fill="var(--ink-soft)">※要確認</text>
      <text x="78" y="108" text-anchor="middle" font-size="11" fill="var(--ink-soft)">どこの話?</text>
      <g fill="var(--ink-soft)">
        <rect x="190" y="24" width="34" height="22" rx="4"/>
        <rect x="232" y="24" width="34" height="22" rx="4"/>
        <rect x="274" y="24" width="22" height="22" rx="4"/>
      </g>
      <line x1="249" y1="48" x2="249" y2="62" stroke="var(--calm)" stroke-width="1.5"/>
      <polygon points="245,50 253,50 249,44" fill="var(--calm)"/>
      <text x="249" y="76" text-anchor="middle" font-size="10" fill="var(--calm)">※要確認</text>
      <text x="242" y="108" text-anchor="middle" font-size="11" fill="var(--calm)">ここ、と示す</text>
    </svg>`,
    apply:"図全体にかからない注は、対象のすぐ近くに置くか、印や線でかかる先を結ぶ。",
    term:"近接の原理",
  },
  {
    id:"visual-weight",
    cat:"space",
    links:[{to:"concentric-radius",rel:"akin"},{to:"z-pattern",rel:"akin"}],
    tags:["hierarchy"],
    title:"重心を、意識する",
    claim:"枠の中で、重さを上や片側に寄せない。",
    why:"片手にだけ荷物を提げて歩くと、体がそちらへ傾いて落ち着きません。見た目の混み具合にも、同じように重さがあります。ひとつの枠やカードの中で中身が上や片側にばかり寄ると、その塊は重心がずれて傾いて見える。ただし、釣り合わせたいからと整列を崩しては本末転倒です。並びはそろえたまま、余白の取り方で重さの偏りをならします。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="枠の中で中身が上に寄ると重心が偏って傾いて見え、整列を保ったまま余白で上下を釣り合わせると安定する">
      <rect x="20" y="16" width="116" height="80" rx="10" fill="none" stroke="var(--line)"/>
      <line x1="28" y1="56" x2="128" y2="56" stroke="var(--line)" stroke-dasharray="2 4"/>
      <g fill="var(--ink-soft)">
        <rect x="32" y="24" width="92" height="13" rx="4"/>
        <rect x="32" y="41" width="92" height="8" rx="3"/>
        <rect x="32" y="53" width="64" height="8" rx="3"/>
      </g>
      <circle cx="26" cy="42" r="3.5" fill="var(--ink-soft)"/>
      <text x="78" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">重さが上に寄る</text>
      <rect x="184" y="16" width="116" height="80" rx="10" fill="none" stroke="var(--line)"/>
      <line x1="192" y1="56" x2="292" y2="56" stroke="var(--line)" stroke-dasharray="2 4"/>
      <g fill="var(--calm)">
        <rect x="196" y="36" width="92" height="13" rx="4"/>
        <rect x="196" y="53" width="92" height="8" rx="3"/>
        <rect x="196" y="65" width="64" height="8" rx="3"/>
      </g>
      <circle cx="190" cy="56" r="3.5" fill="var(--accent)"/>
      <text x="242" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">余白で釣り合う</text>
    </svg>`,
    apply:"枠やカードごとに、中身が上や片側に寄っていないか、整列は保ったまま余白で釣り合いを整える。",
    term:"視覚的重量",
  },
  {
    id:"few-parallels",
    cat:"space",
    tags:["hierarchy"],
    title:"並べるのは、2〜3まで",
    claim:"横に並べるものは、2〜3に絞る。",
    why:"一度に手で抱えられる物の数に限りがあるように、目で一度に捉えられる『並び』の数にも限りがあります。横に5つ6つ並ぶと、見る人はどれも拾いきれず、取りこぼしてしまう。どうしても多いときは、似たものをまとめて2〜3の組に分ければ、ひとまとまりずつ無理なく受け取れます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="6つを横並びにすると拾いきれず、2〜3の組にまとめると受け取りやすい">
      <g fill="var(--ink-soft)">
        <rect x="24" y="42" width="14" height="34" rx="4"/>
        <rect x="43" y="42" width="14" height="34" rx="4"/>
        <rect x="62" y="42" width="14" height="34" rx="4"/>
        <rect x="81" y="42" width="14" height="34" rx="4"/>
        <rect x="100" y="42" width="14" height="34" rx="4"/>
        <rect x="119" y="42" width="14" height="34" rx="4"/>
      </g>
      <text x="78" y="106" text-anchor="middle" font-size="11" fill="var(--ink-soft)">多い＝こぼれる</text>
      <g fill="var(--calm)">
        <rect x="190" y="42" width="14" height="34" rx="4"/>
        <rect x="206" y="42" width="14" height="34" rx="4"/>
        <rect x="232" y="42" width="14" height="34" rx="4"/>
        <rect x="248" y="42" width="14" height="34" rx="4"/>
        <rect x="274" y="42" width="14" height="34" rx="4"/>
        <rect x="290" y="42" width="14" height="34" rx="4"/>
      </g>
      <text x="247" y="106" text-anchor="middle" font-size="11" fill="var(--calm)">2〜3の組に分ける</text>
    </svg>`,
    apply:"並べる要素は2〜3を目安にし、多いときは似たものをまとめて2〜3の組に分類する。",
    term:"チャンク化",
  },
  {
    id:"concentric-radius",
    cat:"space",
    links:[{to:"invisible-line",rel:"echo"}],
    tags:[],
    title:"角丸は、同心円で重ねる",
    claim:"重ねた角丸は、中心がそろうと落ち着く。",
    why:"スマホをケースに入れると、ケースの角はスマホの角より厚みのぶんだけ大きくふくらんで、二つの丸みがぴたりと平行に走ります。隙間が端まで一定だから、ケースが吸いついて見える。角丸を入れ子にするときも同じで、外側の丸みを余白のぶんだけ大きくとると、内と外の弧が同じ中心を持ち、間の余白がどこも均一になります。年輪や水の波紋が落ち着いて見えるのも、輪が中心をそろえているからです。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="内と外を同じ半径で重ねると角でずれ、外を内＋余白の半径にすると中心がそろい同心円になる">
      <!-- 悪い例: 内も外も同じ半径 → 角の中心が内と外でずれる -->
      <rect x="20" y="24" width="116" height="72" rx="20" fill="none" stroke="var(--ink-soft)" stroke-width="2"/>
      <rect x="32" y="36" width="92" height="48" rx="20" fill="none" stroke="var(--ink)" stroke-width="2"/>
      <line x1="116" y1="44" x2="104" y2="56" stroke="var(--ink-soft)" stroke-width="1" stroke-dasharray="2 2"/>
      <circle cx="116" cy="44" r="2.4" fill="none" stroke="var(--ink-soft)" stroke-width="1.4"/>
      <circle cx="104" cy="56" r="2.4" fill="var(--ink-soft)"/>
      <text x="78" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">中心がずれる</text>
      <!-- 良い例: 外＝内＋余白 → 同心円。共有する角の中心を朱で示す -->
      <rect x="184" y="24" width="116" height="72" rx="20" fill="none" stroke="var(--ink-soft)" stroke-width="2"/>
      <rect x="196" y="36" width="92" height="48" rx="8" fill="none" stroke="var(--calm)" stroke-width="2"/>
      <circle cx="280" cy="44" r="2.6" fill="var(--accent)"/>
      <text x="242" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">外＝内＋余白 → そろう</text>
    </svg>`,
    apply:"外箱の角丸＝内箱の角丸＋間の余白で重ねる。曲率がなめらかに変わる『スクワークル（超楕円）』が使えるなら、入れ子の角はいっそう自然になじむ。",
    term:"同心円／スクワークル",
  },
  {
    id:"z-pattern",
    cat:"space",
    links:[{to:"rank",rel:"akin"}],
    tags:["hierarchy"],
    title:"目は、Zの字に流れる",
    claim:"目は左上から流れ出す。見せたいものは、その入口に。",
    why:"横書きの文章は、左上から右へ、行が尽きれば次の段の左へと読みます。その癖は文章を離れても残っていて、チラシやスライドを開いた目も、まず左上に降り、右へ下へとZの字を描いて流れます。だから最初に見せたいものを左上に置くと、見る人はいちばん集中力のあるその一瞬で、それを受け取れます。左上は、目がいちばん最初に立ち寄る場所です。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="見せたいものを左上以外に置くと出会いが遅れ、左上の入口に置くと最初の一瞬で目に入る">
      <!-- 悪い例: 見せたいものが入口(左上)にない -->
      <rect x="20" y="18" width="116" height="78" rx="12" fill="none" stroke="var(--line)"/>
      <polyline points="32,32 124,32 32,72 116,72" fill="none" stroke="var(--ink-soft)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="74" y="80" width="50" height="11" rx="3" fill="var(--ink-soft)"/>
      <text x="78" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">入口にない → 後回し</text>
      <!-- 良い例: 見せたいものを左上の入口に -->
      <rect x="184" y="18" width="116" height="78" rx="12" fill="none" stroke="var(--line)"/>
      <polyline points="196,32 288,32 196,72 280,72" fill="none" stroke="var(--ink-soft)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="196" y="25" width="56" height="13" rx="3" fill="var(--accent)"/>
      <text x="242" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">左上に置く → すぐ目に入る</text>
    </svg>`,
    apply:"最初に見せたいものを、画面の左上に置く。タイトルや要点は、目が最初に降りる入口から始める。",
    term:"Z型の視線移動",
  },
];

const TIPS_hierarchy = [
  {
    id:"rank",
    cat:"hierarchy",
    links:[{to:"jump-rate",rel:"then"}],
    tags:[],
    title:"見せたいものに、順位をつける",
    claim:"すべてを同じ強さで置くと、どこから見ればいいか分からない。",
    why:"はじめて訪れた街で、案内板の文字が全部おなじ大きさで並んでいると、どこを先に見ればいいか分からず立ち止まってしまいます。人の目は、強いものから順に拾っていくようにできているのです。一番見てほしいもの、次に見てほしいもの、脇に添えるものと順位を決めて強さで差をつけると、見る人は迷わず上から下へたどれます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="強さに順位をつけると、見る人は迷わず上から順にたどれる">
      <g fill="var(--ink-soft)">
        <rect x="24" y="28" width="92" height="12" rx="3"/>
        <rect x="24" y="48" width="92" height="12" rx="3"/>
        <rect x="24" y="68" width="92" height="12" rx="3"/>
        <rect x="24" y="88" width="92" height="12" rx="3"/>
      </g>
      <text x="70" y="116" text-anchor="middle" font-size="11" fill="var(--ink-soft)">同じ強さ</text>
      <rect x="200" y="26" width="96" height="20" rx="4" fill="var(--accent)"/>
      <rect x="200" y="54" width="78" height="13" rx="3" fill="var(--calm)"/>
      <rect x="200" y="74" width="60" height="9" rx="3" fill="var(--line)"/>
      <rect x="200" y="89" width="48" height="9" rx="3" fill="var(--line)"/>
      <text x="248" y="116" text-anchor="middle" font-size="11" fill="var(--calm)">順位をつける</text>
    </svg>`,
    apply:"図を置く前に「一番・二番・脇役」を決め、その順に大きさや濃さの差をつける。",
    term:"視覚的階層",
  },
  {
    id:"jump-rate",
    cat:"hierarchy",
    links:[{to:"big-short",rel:"akin"},{to:"donki",rel:"tension"}],
    tags:["text"],
    title:"大きく、小さく",
    claim:"大きさの差が、読む順番をそのまま決める。",
    why:"話し上手な人の声には、大事なところで大きく、補足は小さく、という抑揚があります。聞き手はその大小だけで「ここが山だ」と感じ取る。文字も同じで、大きさの差がそのまま読む順番になります。差が小さいと、全部を同じ調子で読み上げる棒読みのように、どこが要点か伝わりません。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="文字の大小差が大きいほど、どこを先に読むかが決まる">
      <g fill="var(--ink-soft)">
        <rect x="24" y="34" width="96" height="12" rx="3"/>
        <rect x="24" y="56" width="96" height="12" rx="3"/>
        <rect x="24" y="78" width="96" height="12" rx="3"/>
      </g>
      <text x="72" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">差がない＝棒読み</text>
      <rect x="200" y="28" width="96" height="24" rx="4" fill="var(--calm)"/>
      <g fill="var(--calm)">
        <rect x="200" y="62" width="84" height="8" rx="3"/>
        <rect x="200" y="76" width="84" height="8" rx="3"/>
        <rect x="200" y="90" width="56" height="8" rx="3"/>
      </g>
      <text x="248" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">大小差＝読む順番</text>
    </svg>`,
    apply:"見出しは本文よりはっきり大きく。差をためらうと、どちらも目立たなくなる。",
    term:"ジャンプ率",
  },
  {
    id:"donki",
    cat:"hierarchy",
    links:[{to:"who-is-star",rel:"echo"},{to:"text-color-sparingly",rel:"echo"}],
    tags:["color"],
    title:"強調しすぎは、目立たなくなる",
    claim:"全部を強調すると、何も強調されない。",
    why:"あちこちに大きな字やびっくりマークが踊る貼り紙の前では、結局どれも目に入ってきません。強調は、まわりが静かだからこそ際立つものです。全部を太く大きくすると、互いに打ち消し合って、どれも普通に見えてしまう。本当に見てほしい一つだけを強め、残りは静かにさせます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="全部を強調すると打ち消し合い、一点だけ強めると際立つ">
      <g fill="var(--ink)">
        <rect x="24" y="24" width="96" height="12" rx="3"/>
        <rect x="24" y="42" width="96" height="12" rx="3"/>
        <rect x="24" y="60" width="96" height="12" rx="3"/>
        <rect x="24" y="78" width="96" height="12" rx="3"/>
      </g>
      <text x="72" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">全部強調</text>
      <g fill="var(--line)">
        <rect x="200" y="24" width="96" height="12" rx="3"/>
        <rect x="200" y="42" width="96" height="12" rx="3"/>
        <rect x="200" y="78" width="96" height="12" rx="3"/>
      </g>
      <rect x="200" y="60" width="96" height="12" rx="3" fill="var(--accent)"/>
      <text x="248" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">一点だけ</text>
    </svg>`,
    apply:"強調は1枚に一つか二つまで。増やしたくなったら、ほかを弱めて相対的に立たせる。",
    term:"フォン・レストルフ効果（孤立効果）",
  },
  {
    id:"who-is-star",
    cat:"hierarchy",
    links:[{to:"no-filler",rel:"akin"},{to:"need-this-line",rel:"akin"}],
    tags:["draw"],
    title:"主役は、誰？",
    claim:"どうでもいい矢印や枠を、主役より目立たせない。",
    why:"舞台で脇役が主役より大きな声を張り上げ続けたら、客はどこを見ていいか分からなくなります。図の中の矢印や囲み枠、飾りも同じ脇役です。それが主役より濃く太いと、視線はそちらに吸い寄せられて迷子になる。まず一番見てほしいものを決め、ほかはそれを支える側にそっと下がらせます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="脇役の矢印や枠を弱め、主役が一番強く立つようにする">
      <rect x="24" y="30" width="104" height="58" rx="8" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
      <polygon points="34,52 48,59 34,66" fill="var(--ink)"/>
      <rect x="58" y="46" width="52" height="26" rx="5" fill="var(--line)"/>
      <text x="76" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">脇役が目立つ</text>
      <rect x="196" y="30" width="104" height="58" rx="8" fill="none" stroke="var(--line)" stroke-width="1"/>
      <polygon points="206,52 220,59 206,66" fill="var(--line)"/>
      <rect x="228" y="44" width="60" height="30" rx="6" fill="var(--accent)"/>
      <text x="248" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">主役が立つ</text>
    </svg>`,
    apply:"矢印や囲み枠は最弱の色に下げ、主役より目立たないか必ず見比べる。",
    term:"視覚的階層",
  },
  {
    id:"dilute",
    cat:"hierarchy",
    links:[{to:"fewer-colors",rel:"echo"},{to:"few-parallels",rel:"echo"},{to:"one-color",rel:"echo"}],
    tags:["text"],
    title:"増やすほど、薄まる",
    claim:"文字を足すほど、一文字の価値は下がる。",
    why:"言いたいことを一つ残らず書き込んだ紙は、どこも同じ濃さで、結局どれも頭に残りません。情報の総量と、一つあたりの重みは反比例します。文字を足すほど、一文字の価値は薄まっていく。思い切って削るほど、残った言葉がくっきり立ち上がります。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="文字を盛るほど一つの重みは薄まり、削るほど残りが濃くなる">
      <g fill="var(--ink-soft)">
        <rect x="24" y="22" width="100" height="7" rx="3"/>
        <rect x="24" y="33" width="100" height="7" rx="3"/>
        <rect x="24" y="44" width="100" height="7" rx="3"/>
        <rect x="24" y="55" width="100" height="7" rx="3"/>
        <rect x="24" y="66" width="100" height="7" rx="3"/>
        <rect x="24" y="77" width="78" height="7" rx="3"/>
      </g>
      <text x="72" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">盛る＝薄まる</text>
      <g fill="var(--calm)">
        <rect x="200" y="40" width="96" height="16" rx="4"/>
        <rect x="200" y="62" width="68" height="10" rx="3"/>
      </g>
      <text x="248" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">削る＝濃くなる</text>
    </svg>`,
    apply:"全部書きたくなったら、一番言いたい一つを残して、あとは削れないか試す。",
    term:"情報過多（インフォメーション・オーバーロード）",
  },
  {
    id:"big-short",
    cat:"hierarchy",
    links:[{to:"thirteen-chars",rel:"akin"}],
    tags:["text"],
    title:"文字は大きく、文章は短く",
    claim:"大きい文字に、短い言葉。これが届く形。",
    why:"遠くの看板でも一目で読めるのは、文字が大きく、言葉が短いからです。小さな字でびっしり埋まった面は、近づいて読む気力すら奪います。文字を大きくすれば、その分だけ言葉を削ることになる。大きさと文字数はセットで決めると、まっすぐ届く形になります。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="小さく長い文より、大きく短い言葉のほうがまっすぐ届く">
      <g fill="var(--ink-soft)">
        <rect x="24" y="24" width="104" height="6" rx="2"/>
        <rect x="24" y="34" width="104" height="6" rx="2"/>
        <rect x="24" y="44" width="104" height="6" rx="2"/>
        <rect x="24" y="54" width="104" height="6" rx="2"/>
        <rect x="24" y="64" width="104" height="6" rx="2"/>
        <rect x="24" y="74" width="104" height="6" rx="2"/>
        <rect x="24" y="84" width="72" height="6" rx="2"/>
      </g>
      <text x="72" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">小さく長い</text>
      <rect x="200" y="44" width="92" height="26" rx="5" fill="var(--calm)"/>
      <text x="248" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">大きく短い</text>
    </svg>`,
    apply:"文字を大きくしたら、その分だけ言葉を削って短い言い切りにする。",
    term:"視認性（レジビリティ）",
  },
  {
    id:"repeat-form",
    cat:"hierarchy",
    links:[{to:"same-badge",rel:"echo"},{to:"consistent-line-weight",rel:"echo"}],
    tags:[],
    title:"同じ形を、くり返す",
    claim:"同じ意味のものは、同じ形で揃える。",
    why:"運動会で同じ体操服を着た一団は、一目で「同じチーム」だとわかります。形がそろっていることが、仲間であることの合図になるからです。同じ意味を持つものは同じ形でそろえると、説明しなくても「これは同類だ」と直感されます。形がばらつくと、関係のないものに見えてしまいます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="同じ意味のものを同じ形で揃えると、ひと目で仲間だと伝わる">
      <rect x="26" y="40" width="24" height="24" rx="2" fill="var(--ink-soft)"/>
      <circle cx="74" cy="54" r="13" fill="var(--ink-soft)"/>
      <rect x="96" y="44" width="32" height="20" rx="10" fill="var(--ink-soft)"/>
      <text x="72" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">バラバラ＝別物</text>
      <g fill="var(--calm)">
        <rect x="198" y="42" width="22" height="22" rx="6"/>
        <rect x="226" y="42" width="22" height="22" rx="6"/>
        <rect x="254" y="42" width="22" height="22" rx="6"/>
      </g>
      <text x="248" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">同形＝仲間</text>
    </svg>`,
    apply:"同じ役割のものは、大きさ・形・間隔をそろえて並べる。",
    term:"反復",
  },
  {
    id:"same-badge",
    cat:"hierarchy",
    links:[{to:"same-word",rel:"echo"}],
    tags:["color","text"],
    title:"くり返す概念は、同じバッジで",
    claim:"何度も出る概念は、毎回おなじ見た目で示す。",
    why:"同じ人でも、会うたびに服装も髪型も声も変わっていたら、別人だと思ってしまいます。見た目が一定だから「あの人だ」と覚えられるのです。何度も出てくる概念も、毎回おなじ色・形・印で示すと、見る人は一度で覚えて、次からは見ただけで分かります。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="同じ概念を毎回おなじバッジで示すと、見る人が覚えて見分けられる">
      <g fill="var(--line)">
        <rect x="24" y="32" width="42" height="12" rx="3"/>
        <rect x="24" y="56" width="42" height="12" rx="3"/>
        <rect x="24" y="80" width="42" height="12" rx="3"/>
      </g>
      <rect x="74" y="32" width="30" height="12" rx="6" fill="var(--ink-soft)"/>
      <rect x="74" y="56" width="30" height="12" rx="2" fill="var(--calm)"/>
      <circle cx="89" cy="86" r="7" fill="var(--ink-soft)"/>
      <text x="68" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">毎回ちがう</text>
      <g fill="var(--line)">
        <rect x="190" y="32" width="42" height="12" rx="3"/>
        <rect x="190" y="56" width="42" height="12" rx="3"/>
        <rect x="190" y="80" width="42" height="12" rx="3"/>
      </g>
      <g fill="var(--calm)">
        <rect x="240" y="32" width="30" height="12" rx="6"/>
        <rect x="240" y="56" width="30" height="12" rx="6"/>
        <rect x="240" y="80" width="30" height="12" rx="6"/>
      </g>
      <text x="252" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">おなじバッジ</text>
    </svg>`,
    apply:"概念ごとに色・形・アイコンを一度決めたら、最後まで同じ見た目を使い回す。",
    term:"一貫性（コンシステンシー）",
  },
  {
    id:"unify-font",
    cat:"hierarchy",
    links:[{to:"avoid-monospace",rel:"akin"},{to:"fewer-colors",rel:"echo"}],
    tags:["text"],
    title:"フォントは、統一する",
    claim:"書体がばらつくと、それだけで散らかって見える。",
    why:"いろいろな筆跡が混ざった貼り紙の束は、見ただけで雑然とした印象を受けます。書体は声色のようなもので、種類が増えるほど誰が話しているのか分からなくなる。書体は一つか二つに絞り、強弱は大きさや太さでつけると、それだけで整って見えます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="書体を絞ると、それだけで散らかった印象が整って見える">
      <g fill="var(--ink-soft)">
        <rect x="24" y="42" width="13" height="22" rx="2"/>
        <rect x="42" y="36" width="13" height="28" rx="5"/>
        <rect x="60" y="46" width="13" height="18" rx="1"/>
        <rect x="78" y="38" width="13" height="26" rx="6"/>
        <rect x="96" y="44" width="13" height="20" rx="3"/>
        <rect x="114" y="40" width="13" height="24" rx="2"/>
      </g>
      <text x="72" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">書体バラバラ</text>
      <g fill="var(--calm)">
        <rect x="196" y="42" width="13" height="22" rx="3"/>
        <rect x="214" y="42" width="13" height="22" rx="3"/>
        <rect x="232" y="42" width="13" height="22" rx="3"/>
        <rect x="250" y="42" width="13" height="22" rx="3"/>
        <rect x="268" y="42" width="13" height="22" rx="3"/>
      </g>
      <text x="248" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">1〜2書体に絞る</text>
    </svg>`,
    apply:"使う書体は1〜2種類までに絞り、違いは大きさと太さでつける。",
    term:"",
  },
  {
    id:"avoid-monospace",
    cat:"hierarchy",
    links:[{to:"avoid-italic",rel:"akin"}],
    tags:["text"],
    title:"等幅フォントは、避ける",
    claim:"等幅フォントは、本文には読みにくい。",
    why:"等幅フォントは、太い文字も細い文字も同じ幅の枠に押し込みます。すると細い文字のまわりだけ余白がぽっかり空いて、字間がでこぼこに見える。文章を読むのは一定のリズムで目を滑らせる作業なので、間隔がそろわないと一字ごとに引っかかります。字幅の変わる書体は、文字の形に合わせて間隔を詰めるので、字間がそろって目が滑らかに進みます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="等幅は同じ幅の枠に押し込むため字間がでこぼこになり、字幅可変は字間がそろって読みやすい">
      <g fill="none" stroke="var(--line)">
        <rect x="24" y="42" width="15" height="24" rx="2"/>
        <rect x="39" y="42" width="15" height="24" rx="2"/>
        <rect x="54" y="42" width="15" height="24" rx="2"/>
        <rect x="69" y="42" width="15" height="24" rx="2"/>
        <rect x="84" y="42" width="15" height="24" rx="2"/>
        <rect x="99" y="42" width="15" height="24" rx="2"/>
        <rect x="114" y="42" width="15" height="24" rx="2"/>
      </g>
      <g fill="var(--ink-soft)">
        <rect x="25" y="46" width="4" height="16" rx="1"/>
        <rect x="40" y="46" width="13" height="16" rx="1"/>
        <rect x="55" y="46" width="5" height="16" rx="1"/>
        <rect x="70" y="46" width="13" height="16" rx="1"/>
        <rect x="85" y="46" width="4" height="16" rx="1"/>
        <rect x="100" y="46" width="13" height="16" rx="1"/>
        <rect x="115" y="46" width="5" height="16" rx="1"/>
      </g>
      <text x="76" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">等幅＝字間がでこぼこ</text>
      <g fill="var(--calm)">
        <rect x="196" y="46" width="4" height="16" rx="1"/>
        <rect x="204" y="46" width="13" height="16" rx="1"/>
        <rect x="221" y="46" width="5" height="16" rx="1"/>
        <rect x="230" y="46" width="13" height="16" rx="1"/>
        <rect x="247" y="46" width="4" height="16" rx="1"/>
        <rect x="255" y="46" width="13" height="16" rx="1"/>
        <rect x="272" y="46" width="5" height="16" rx="1"/>
      </g>
      <text x="236" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">可変＝字間がそろう</text>
    </svg>`,
    apply:"本文は字幅の変わる（プロポーショナル）書体にし、等幅はコードや数字の桁揃えだけに使う。",
    term:"カーニング",
  },
  {
    id:"show-count",
    cat:"hierarchy",
    links:[{to:"no-lost-reader",rel:"akin"},{to:"bullets-over-prose",rel:"akin"}],
    tags:["text"],
    title:"いくつあるか、先に言う",
    claim:"先に総数を告げると、終わりまでの見通しが立つ。",
    why:"山道で『頂上まであと3つ目の休憩所』と言われると、ペースを配れて足取りが軽くなります。終わりの見えない上りは、同じ距離でも倍つらい。話も図も同じで、先に『これから3つ』と総数を告げると、聞く人は心の準備ができて、最後まで落ち着いて付き合えます。いつ終わるか分からない話を、集中して聞き通せる人はいません。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="総数を告げないと何個続くか分からず、先に総数を示すと終わりが見えて落ち着いて読める">
      <g fill="var(--ink-soft)">
        <circle cx="28" cy="28" r="3"/>
        <rect x="38" y="24" width="80" height="9" rx="3"/>
        <circle cx="28" cy="46" r="3"/>
        <rect x="38" y="42" width="80" height="9" rx="3"/>
        <circle cx="28" cy="64" r="3"/>
        <rect x="38" y="60" width="80" height="9" rx="3"/>
      </g>
      <g fill="var(--line)">
        <circle cx="28" cy="82" r="3"/>
        <rect x="38" y="78" width="62" height="9" rx="3"/>
        <circle cx="60" cy="94" r="2"/>
        <circle cx="70" cy="94" r="2"/>
        <circle cx="80" cy="94" r="2"/>
      </g>
      <text x="72" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">何個続く?</text>
      <rect x="192" y="20" width="34" height="16" rx="8" fill="var(--accent)"/>
      <text x="209" y="32" text-anchor="middle" font-size="11" fill="var(--card)">3つ</text>
      <g fill="var(--calm)">
        <circle cx="196" cy="52" r="3"/>
        <rect x="206" y="48" width="80" height="9" rx="3"/>
        <circle cx="196" cy="70" r="3"/>
        <rect x="206" y="66" width="80" height="9" rx="3"/>
        <circle cx="196" cy="88" r="3"/>
        <rect x="206" y="84" width="80" height="9" rx="3"/>
      </g>
      <text x="246" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">終わりが見える</text>
    </svg>`,
    apply:"箇条書きや手順が増えてきたら、頭に「全部でいくつ」と総数を置く。番号を「1/5・2/5」と分母つきで振るのも同じ効き目。",
    term:"目標勾配効果",
  },
  {
    id:"eye-catch",
    cat:"hierarchy",
    links:[{to:"who-is-star",rel:"akin"}],
    tags:["space"],
    title:"絵が、七割でいい",
    claim:"文字を敷き詰めるより、絵に大きく場所をあける。",
    why:"本屋の棚に並ぶ表紙の中で、ふと手が伸びるのは、絵や写真が大きく見えている一冊です。文字は近づいて読むものですが、絵は離れていても丸ごと目に飛び込んでくる。チラシも同じで、紙面の大半を一枚の絵や写真に明け渡すと、通りすがりの目が最初にそこで止まります。文字で埋めたくなる気持ちを抑えるほど、立ち止まってもらえます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="紙面を文字で埋めるより、六〜七割を一枚の絵に明け渡すと通りすがりの目が止まる">
      <rect x="36" y="16" width="96" height="88" rx="10" fill="var(--card)" stroke="var(--line)"/>
      <rect x="44" y="24" width="28" height="22" rx="3" fill="var(--line)"/>
      <g fill="var(--ink-soft)">
        <rect x="44" y="52" width="80" height="7" rx="3"/>
        <rect x="44" y="63" width="80" height="7" rx="3"/>
        <rect x="44" y="74" width="80" height="7" rx="3"/>
        <rect x="44" y="85" width="60" height="7" rx="3"/>
      </g>
      <text x="84" y="116" text-anchor="middle" font-size="11" fill="var(--ink-soft)">文字だらけ</text>
      <rect x="188" y="16" width="96" height="88" rx="10" fill="var(--card)" stroke="var(--line)"/>
      <rect x="196" y="24" width="80" height="52" rx="6" fill="var(--calm-soft)" stroke="var(--calm)"/>
      <circle cx="214" cy="42" r="7" fill="var(--calm)"/>
      <polygon points="226,68 248,44 270,68" fill="var(--calm)"/>
      <g fill="var(--line)">
        <rect x="196" y="82" width="80" height="7" rx="3"/>
        <rect x="196" y="93" width="56" height="7" rx="3"/>
      </g>
      <text x="236" y="116" text-anchor="middle" font-size="11" fill="var(--calm)">絵が七割</text>
    </svg>`,
    apply:"まず紙面の六〜七割を絵・写真の場所として確保し、残りに文字を置く。",
    term:"アイキャッチ",
  },
];

/* 進め方：図そのものの作法ではなく、作る過程・こころがけ。 */
const TIPS_flow = [
  {
    id:"means-not-end",
    cat:"flow",
    links:[{to:"so-what",rel:"akin"},{to:"rough-first",rel:"then"}],
    tags:[],
    title:"図は、手段でしかない",
    claim:"凝る前に、誰に何を伝えたいかへ立ち返る。",
    why:"道具を磨くことに夢中になると、その道具で何をしたかったのかを忘れてしまいます。図づくりも同じで、飾りや作り込みに時間をかけるうち、本来の目的が後ろへ追いやられる。『誰に・何を・いつまでに』を先に決めておけば、手を動かすたびにそこへ立ち返れます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="作り込みに凝るより、誰に何を伝えるという目的を狙うほうが図は役に立つ">
      <rect x="28" y="30" width="84" height="58" rx="10" fill="none" stroke="var(--ink-soft)"/>
      <g fill="var(--ink-soft)" opacity=".7">
        <path d="M44 44 l1.5 4 l4 1.5 l-4 1.5 l-1.5 4 l-1.5 -4 l-4 -1.5 l4 -1.5 Z"/>
        <path d="M96 44 l1.5 4 l4 1.5 l-4 1.5 l-1.5 4 l-1.5 -4 l-4 -1.5 l4 -1.5 Z"/>
        <circle cx="70" cy="64" r="6"/>
        <rect x="42" y="76" width="56" height="5" rx="2"/>
      </g>
      <text x="70" y="108" text-anchor="middle" font-size="11" fill="var(--ink-soft)">凝るのが目的に</text>
      <circle cx="242" cy="56" r="26" fill="none" stroke="var(--calm)" stroke-width="2"/>
      <circle cx="242" cy="56" r="15" fill="none" stroke="var(--calm)" stroke-width="2"/>
      <circle cx="242" cy="56" r="5" fill="var(--accent)"/>
      <text x="242" y="108" text-anchor="middle" font-size="11" fill="var(--calm)">目的を狙う</text>
    </svg>`,
    apply:"作り始める前に、誰に・何を・いつまでに伝えるかを書き出し、迷ったらそこへ戻る。",
    term:"手段の目的化",
  },
  {
    id:"show-early",
    cat:"flow",
    links:[{to:"good-enough",rel:"akin"}],
    tags:[],
    title:"早めに、見せる",
    claim:"完成を待たず、読む人に早く見せる。",
    why:"自分では分かりやすく描けたつもりでも、初めて見る人がどこで引っかかるかは、自分では見えません。料理の味を自分の舌だけで決めず一口みてもらうように、図も読む人に早く見せると、独りでは気づけなかった『伝わらない箇所』が浮かび上がります。直しのきく早いうちに見せるほど、やり直しは小さくて済みます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="完成してから見せると手戻りが大きく、早く見せるほど直しは小さく済む">
      <rect x="22" y="26" width="40" height="54" rx="6" fill="none" stroke="var(--ink-soft)"/>
      <g fill="var(--ink-soft)">
        <rect x="28" y="33" width="28" height="6" rx="2"/>
        <rect x="28" y="44" width="28" height="6" rx="2"/>
        <rect x="28" y="55" width="28" height="6" rx="2"/>
        <rect x="28" y="66" width="18" height="6" rx="2"/>
      </g>
      <line x1="68" y1="53" x2="100" y2="53" stroke="var(--ink-soft)" stroke-width="2"/>
      <polygon points="100,47 114,53 100,59" fill="var(--ink-soft)"/>
      <ellipse cx="124" cy="53" rx="9" ry="6" fill="none" stroke="var(--ink-soft)" stroke-width="1.5"/>
      <circle cx="124" cy="53" r="2.5" fill="var(--ink-soft)"/>
      <text x="78" y="104" text-anchor="middle" font-size="11" fill="var(--ink-soft)">見せるのが遅い</text>
      <rect x="190" y="26" width="40" height="54" rx="6" fill="none" stroke="var(--calm)" stroke-dasharray="4 3"/>
      <g fill="var(--calm)">
        <rect x="196" y="35" width="28" height="6" rx="2"/>
        <rect x="196" y="48" width="28" height="6" rx="2"/>
        <rect x="196" y="61" width="18" height="6" rx="2"/>
      </g>
      <ellipse cx="248" cy="53" rx="9" ry="6" fill="none" stroke="var(--calm)" stroke-width="1.5"/>
      <circle cx="248" cy="53" r="2.5" fill="var(--calm)"/>
      <polygon points="266,48 278,53 266,58" fill="var(--accent)"/>
      <text x="244" y="104" text-anchor="middle" font-size="11" fill="var(--calm)">早く見せる</text>
    </svg>`,
    apply:"完成を待たず、ラフのうちに読む人へ見せて、伝わらない箇所を早めにもらう。",
    term:"",
  },
  {
    id:"rough-first",
    cat:"flow",
    tags:[],
    links:[{to:"show-early",rel:"then"}],
    title:"まず、下書きから",
    claim:"いきなり作り込まず、骨組みから確かめる。",
    why:"建物は、土台を据えてから壁を立てます。建ててしまってから基礎をずらすのは、とても大変だからです。図も同じで、色や飾りから手をつけると、あとで骨組みを直したくなったとき総崩れになる。まず大きな配置だけのラフで全体を確かめてから細部を詰めれば、やり直しが効きます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="いきなり仕上げると骨組みの直しで総崩れ、配置だけのラフから確かめれば直しが効く">
      <rect x="28" y="22" width="80" height="58" rx="8" fill="none" stroke="var(--ink-soft)"/>
      <rect x="36" y="28" width="64" height="14" rx="2" fill="var(--ink-soft)"/>
      <g fill="var(--line)">
        <rect x="36" y="48" width="64" height="7" rx="3"/>
        <rect x="36" y="59" width="64" height="7" rx="3"/>
        <rect x="36" y="70" width="40" height="7" rx="3"/>
      </g>
      <text x="78" y="100" text-anchor="middle" font-size="11" fill="var(--ink-soft)">いきなり仕上げ</text>
      <rect x="200" y="22" width="80" height="58" rx="8" fill="none" stroke="var(--calm)" stroke-dasharray="4 3"/>
      <g fill="none" stroke="var(--calm)" stroke-width="1.5" stroke-dasharray="3 3">
        <rect x="208" y="28" width="64" height="14" rx="2"/>
        <rect x="208" y="48" width="64" height="12" rx="4"/>
        <rect x="208" y="64" width="40" height="12" rx="4"/>
      </g>
      <text x="240" y="100" text-anchor="middle" font-size="11" fill="var(--calm)">骨組みから</text>
    </svg>`,
    apply:"色や飾りは後回しにして、まず配置だけのラフで全体の骨組みを確かめる。",
    term:"プロトタイピング（ワイヤーフレーム）",
  },
  {
    id:"just-start",
    cat:"flow",
    links:[{to:"rough-first",rel:"akin"},{to:"good-enough",rel:"akin"}],
    tags:[],
    title:"とりあえず、作る",
    claim:"良い案が出ないなら、悪い案でも形にする。",
    why:"頭の中だけで完璧な案を待っていると、いつまでも一歩目が踏み出せません。料理も、ひと口作って味をみるから次の手が決まる。良い案が浮かばないときこそ、悪いと思う案でもラフにしてみると、『ここが違う』が見えて、進むべき方向が立ち上がってきます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="頭の中で待つと手が止まり、悪い案でも一度形にすると進む方向が見えてくる">
      <rect x="28" y="22" width="80" height="58" rx="8" fill="none" stroke="var(--ink-soft)"/>
      <text x="68" y="62" text-anchor="middle" font-size="34" font-weight="700" fill="var(--line)">?</text>
      <text x="78" y="104" text-anchor="middle" font-size="11" fill="var(--ink-soft)">手が止まる</text>
      <rect x="190" y="22" width="70" height="58" rx="8" fill="none" stroke="var(--calm)" stroke-dasharray="4 3"/>
      <g stroke="var(--calm)" stroke-width="2" stroke-linecap="round" fill="none">
        <path d="M198 36 q10 -6 20 0 t20 0"/>
        <path d="M198 50 q12 6 24 0"/>
        <path d="M198 64 l28 0"/>
      </g>
      <line x1="270" y1="51" x2="288" y2="51" stroke="var(--accent)" stroke-width="2"/>
      <polygon points="286,45 300,51 286,57" fill="var(--accent)"/>
      <text x="240" y="104" text-anchor="middle" font-size="11" fill="var(--calm)">作れば見える</text>
    </svg>`,
    apply:"手が止まったら、悪い案でもいいので一度ラフを作り、そこから直していく。",
    term:"",
  },
  {
    id:"squint-test",
    cat:"flow",
    links:[{to:"rank",rel:"akin"},{to:"donki",rel:"akin"}],
    tags:["hierarchy"],
    title:"目を細めて、見る",
    claim:"目を細めると、効いている強弱だけが残る。",
    why:"遠くの街明かりを目を細めて見ると、一つひとつの粒が溶けて、明るいかたまりだけが浮かびます。細部が落ちて、強さの差だけが残るからです。作った図も、目を細めてわざと細部をぼかすと、いちばん濃い塊が主役として立っているかが一目でわかる。くっきり見えているうちは気づけない強弱の崩れが、ぼかすと見えてきます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="目を細めて細部をぼかすと、強弱の効いていない図は塊が埋もれ、効いた図は主役だけが残る">
      <!-- 悪い例: ぼかすとどれも同じ濃さで主役が埋もれる -->
      <g fill="var(--ink-soft)" opacity="0.55">
        <rect x="26" y="28" width="64" height="18" rx="9"/>
        <rect x="98" y="30" width="34" height="14" rx="7"/>
        <rect x="26" y="56" width="44" height="16" rx="8"/>
        <rect x="78" y="56" width="54" height="16" rx="8"/>
        <rect x="40" y="80" width="80" height="14" rx="7"/>
      </g>
      <text x="78" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">ぼかすと埋もれる</text>
      <!-- 良い例: ぼかしても主役の塊だけが濃く残る -->
      <rect x="196" y="26" width="92" height="26" rx="13" fill="var(--accent)"/>
      <g fill="var(--calm)" opacity="0.4">
        <rect x="196" y="62" width="50" height="14" rx="7"/>
        <rect x="254" y="62" width="34" height="14" rx="7"/>
        <rect x="208" y="84" width="68" height="12" rx="6"/>
      </g>
      <text x="242" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">主役が残る</text>
    </svg>`,
    apply:"作り終えたら、目を細めて画面を眺める。最初に目に入る塊が主役なら成功。ぼやけて主役が立たないなら、強弱を付け直す。",
    term:"スクイントテスト",
  },
  {
    id:"good-enough",
    cat:"flow",
    tags:[],
    title:"完璧を、求めない",
    claim:"100点を1回より、80点を2回。",
    why:"坂を登るとき、八合目までは軽い足取りで着けても、そこから頂上までの最後のひと登りに、それまでと同じだけ汗をかきます。仕上げも同じで、80点まではすっと進むのに、残りの20点を詰めるのに、もう一山ぶんの手間がかかる。その手間をまるごと回せば、別のものをもう80点まで仕上げられます。一つを磨き切る前に、同じ力で二つ目に手をつけるほうが、全体ではずっと遠くまで届きます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="同じ手間なら、ひとつを100点にするより、80点をふたつ仕上げるほうが多く届く">
      <!-- 前提: かける手間は同じ -->
      <rect x="128" y="16" width="64" height="17" rx="8.5" fill="var(--paper)" stroke="var(--line)"/>
      <text x="160" y="28" text-anchor="middle" font-size="11" fill="var(--ink-soft)">同じ手間</text>
      <!-- 悪い例: その手間をひとつに注ぎ、100点をひとつだけ -->
      <line x1="54" y1="98" x2="102" y2="98" stroke="var(--line)" stroke-width="1.5"/>
      <rect x="62" y="44" width="34" height="54" rx="4" fill="var(--ink-soft)"/>
      <text x="79" y="74" text-anchor="middle" font-size="11" fill="var(--card)">100</text>
      <text x="79" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">ひとつだけ</text>
      <!-- 良い例: 同じ手間で80点をふたつ -->
      <line x1="190" y1="98" x2="276" y2="98" stroke="var(--line)" stroke-width="1.5"/>
      <rect x="196" y="55" width="30" height="43" rx="4" fill="var(--calm)"/>
      <text x="211" y="80" text-anchor="middle" font-size="11" fill="var(--card)">80</text>
      <rect x="240" y="55" width="30" height="43" rx="4" fill="var(--calm)"/>
      <text x="255" y="80" text-anchor="middle" font-size="11" fill="var(--card)">80</text>
      <circle cx="255" cy="55" r="3" fill="var(--accent)"/>
      <text x="233" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">ふたつできる</text>
    </svg>`,
    apply:"一つを100点に磨き込む前に、80点で切り上げて次へ。最後の20点に同じ手間をかけるより、その力で二つ目を仕上げる。",
    term:"パレートの法則（80:20の法則）／収穫逓減",
  },
  {
    id:"where-it-lands",
    cat:"flow",
    links:[{to:"first-words",rel:"akin"}],
    tags:["space"],
    title:"どこに置かれるかを、考える",
    claim:"紙は手元で全部見えるとは限らない。置かれ方から逆算する。",
    why:"チラシ置き場のラックに差すと、重なって上の数センチしか見えないことがあります。手元で広げれば全部見えるつもりで作っても、置かれた場所では上端の帯だけが勝負どころになる。だから作る前に、これがどこにどう置かれるのかを思い浮かべる。掲示板に貼られるのか、ポストに折って入るのか、ラックに差さるのか——見える場所が分かれば、そこに一番のフックを寄せられます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="ラックでは上端しか見えないので、フックを中ほどに置くと隠れ、上端に置くと見える">
      <rect x="36" y="16" width="96" height="88" rx="10" fill="var(--card)" stroke="var(--line)"/>
      <rect x="37" y="58" width="94" height="45" fill="var(--line)"/>
      <line x1="36" y1="58" x2="132" y2="58" stroke="var(--ink-soft)" stroke-width="1.5"/>
      <g fill="var(--line)">
        <rect x="44" y="28" width="68" height="6" rx="3"/>
        <rect x="44" y="40" width="48" height="6" rx="3"/>
      </g>
      <rect x="44" y="72" width="80" height="16" rx="3" fill="var(--ink-soft)"/>
      <text x="84" y="116" text-anchor="middle" font-size="11" fill="var(--ink-soft)">フックが下→隠れる</text>
      <rect x="188" y="16" width="96" height="88" rx="10" fill="var(--card)" stroke="var(--line)"/>
      <rect x="189" y="58" width="94" height="45" fill="var(--line)"/>
      <line x1="188" y1="58" x2="284" y2="58" stroke="var(--ink-soft)" stroke-width="1.5"/>
      <rect x="196" y="26" width="80" height="16" rx="3" fill="var(--calm)"/>
      <rect x="196" y="47" width="54" height="6" rx="3" fill="var(--line)"/>
      <text x="236" y="116" text-anchor="middle" font-size="11" fill="var(--calm)">フックが上→見える</text>
    </svg>`,
    apply:"作る前に『どこに・どう置かれるか』を思い描き、見える位置（ラックなら上端）に一番のフックを置く。",
    term:"",
  },
];

const TIPS_color = [
  {
    id:"one-color",
    cat:"color",
    links:[{to:"fewer-colors",rel:"akin"}],
    tags:["hierarchy"],
    title:"一点だけ、色を許す",
    claim:"全部を目立たせると、何も目立たない。",
    why:"本にたくさんの付箋を貼ると、どこが大事だったのか分からなくなります。付箋が一枚だけなら、開いた瞬間にそこへ手が伸びる。色も同じで、あちこちを目立たせるほど、どれも沈んでいきます。本当に見てほしい一点にだけ色を残すと、目はまっすぐそこへ向かいます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="色を全部に使うと埋もれ、一点だけに許すとそこが際立つ">
      <!-- 悪い例: 全部に色を使う多色サンプル(生hex) -->
      <g>
        <rect x="36" y="30" width="18" height="52" rx="4" fill="#d9a23c"/>
        <rect x="62" y="30" width="18" height="52" rx="4" fill="#4a6fb0"/>
        <rect x="88" y="30" width="18" height="52" rx="4" fill="#5a9e54"/>
        <rect x="114" y="30" width="18" height="52" rx="4" fill="#c1583f"/>
      </g>
      <text x="84" y="108" text-anchor="middle" font-size="11" fill="var(--ink-soft)">全部 → 埋もれる</text>
      <g fill="var(--line)">
        <rect x="200" y="30" width="18" height="52" rx="4"/>
        <rect x="226" y="30" width="18" height="52" rx="4"/>
        <rect x="278" y="30" width="18" height="52" rx="4"/>
      </g>
      <rect x="252" y="30" width="18" height="52" rx="4" fill="var(--accent)"/>
      <text x="248" y="108" text-anchor="middle" font-size="11" fill="var(--calm)">一点 → 際立つ</text>
    </svg>`,
    apply:"資料の色は『地の色＋文字色＋強調色1つ』から始め、増やすのは理由ができてから。",
    term:"アクセントカラー",
  },
  {
    id:"fewer-colors",
    cat:"color",
    tags:[],
    title:"色を増やすと、ダサくなる",
    claim:"色数が増えるほど、図は安っぽくなる。",
    why:"服を選ぶとき、あれもこれもと色を重ねると、ちぐはぐな印象になります。色を二つ三つに絞った装いのほうが、不思議と整って見える。図も同じで、色を増やすほどまとまりを失い、絞るほど落ち着いて見えます。色は足すものではなく、選ぶものです。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="色数を増やすほど安っぽく、地と文字と強調の3色に絞ると締まる">
      <rect x="20" y="16" width="116" height="84" rx="10" fill="none" stroke="var(--line)"/>
      <!-- 悪い例: 多色サンプル(生hex) -->
      <g>
        <rect x="28" y="24" width="100" height="8" rx="3" fill="#d9a23c"/>
        <rect x="28" y="36" width="100" height="8" rx="3" fill="#4a6fb0"/>
        <rect x="28" y="48" width="100" height="8" rx="3" fill="#5a9e54"/>
        <rect x="28" y="60" width="100" height="8" rx="3" fill="#c1583f"/>
        <rect x="28" y="72" width="100" height="8" rx="3" fill="#8a5fb0"/>
        <rect x="28" y="84" width="70" height="8" rx="3" fill="#3aa6a0"/>
      </g>
      <text x="78" y="113" text-anchor="middle" font-size="11" fill="var(--ink-soft)">色数が多い</text>
      <rect x="184" y="16" width="116" height="84" rx="10" fill="none" stroke="var(--line)"/>
      <rect x="192" y="26" width="90" height="12" rx="3" fill="var(--ink)"/>
      <g fill="var(--line)">
        <rect x="192" y="48" width="100" height="8" rx="3"/>
        <rect x="192" y="60" width="100" height="8" rx="3"/>
        <rect x="192" y="72" width="70" height="8" rx="3"/>
      </g>
      <rect x="192" y="86" width="44" height="8" rx="3" fill="var(--accent)"/>
      <text x="242" y="113" text-anchor="middle" font-size="11" fill="var(--calm)">地＋文字＋強調＝3</text>
    </svg>`,
    apply:"使う色は『地＋文字＋強調』の3つを上限の目安にし、足したくなったら何かを減らす。",
    term:"配色の60:30:10ルール",
  },
  {
    id:"shade-not-hue",
    cat:"color",
    links:[{to:"gray-is-useful",rel:"akin"},{to:"graph-colors",rel:"akin"}],
    tags:["draw"],
    title:"色味より、濃淡を使う",
    claim:"系列を分けたいなら、色味より同じ色の濃淡で。",
    why:"同じ青でも、濃いところと薄いところがあれば、ひと続きの空や海として自然に眺められます。ところが赤・青・黄とばらばらの色を並べると、それぞれが別々に主張して目が散る。系列を分けたいときは、色味を変えるより、同じ色の濃い・薄いで分けると、まとまりを保ったまま違いが伝わります。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="系列を色味で分けると散らかり、同じ色の濃淡で分けるとまとまる">
      <line x1="24" y1="92" x2="132" y2="92" stroke="var(--line)" stroke-width="1"/>
      <!-- 悪い例: 色味で系列分けした多色サンプル(生hex) -->
      <g>
        <rect x="30" y="46" width="18" height="46" rx="3" fill="#d9a23c"/>
        <rect x="56" y="32" width="18" height="60" rx="3" fill="#4a6fb0"/>
        <rect x="82" y="58" width="18" height="34" rx="3" fill="#5a9e54"/>
        <rect x="108" y="40" width="18" height="52" rx="3" fill="#c1583f"/>
      </g>
      <text x="78" y="112" text-anchor="middle" font-size="11" fill="var(--ink-soft)">色味ばらばら</text>
      <line x1="188" y1="92" x2="296" y2="92" stroke="var(--line)" stroke-width="1"/>
      <g fill="var(--calm)">
        <rect x="198" y="46" width="18" height="46" rx="3" opacity="1"/>
        <rect x="224" y="32" width="18" height="60" rx="3" opacity="0.75"/>
        <rect x="250" y="58" width="18" height="34" rx="3" opacity="0.5"/>
        <rect x="276" y="40" width="18" height="52" rx="3" opacity="0.3"/>
      </g>
      <text x="246" y="112" text-anchor="middle" font-size="11" fill="var(--calm)">同じ色の濃淡</text>
    </svg>`,
    apply:"グラフや系列の色分けは、色相を変えず、同じ色の濃い・薄いで段階をつける。",
    term:"モノクロマティック配色（単色配色）",
  },
  {
    id:"gray-is-useful",
    cat:"color",
    links:[{to:"text-color-sparingly",rel:"akin"}],
    tags:[],
    title:"灰色は、便利",
    claim:"迷ったら灰色。脇役は灰色に引かせる。",
    why:"舞台の黒衣は、目立たない装いに徹することで主役を引き立てます。自分が引くことが仕事だからです。灰色もこれと同じで、自分は主張せず、隣の色や主役をそっと立たせます。色を足したくなったら、まず灰色で足りないかを考えると、画面が静かにまとまります。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="脇役にも色を使うと競合し、脇役を灰色に引かせると主役が立つ">
      <rect x="20" y="16" width="116" height="84" rx="10" fill="none" stroke="var(--line)"/>
      <!-- 悪い例: 脇役にまで色を使う多色サンプル(生hex) -->
      <rect x="28" y="26" width="100" height="20" rx="2" fill="#4a6fb0"/>
      <rect x="28" y="54" width="100" height="8" rx="3" fill="#d9a23c"/>
      <rect x="28" y="66" width="100" height="8" rx="3" fill="#5a9e54"/>
      <rect x="28" y="78" width="100" height="8" rx="3" fill="#c1583f"/>
      <text x="78" y="113" text-anchor="middle" font-size="11" fill="var(--ink-soft)">脇も色 → 競合</text>
      <rect x="184" y="16" width="116" height="84" rx="10" fill="none" stroke="var(--line)"/>
      <rect x="192" y="26" width="100" height="20" rx="2" fill="var(--accent)"/>
      <g fill="var(--line)">
        <rect x="192" y="54" width="100" height="8" rx="3"/>
        <rect x="192" y="66" width="100" height="8" rx="3"/>
        <rect x="192" y="78" width="100" height="8" rx="3"/>
      </g>
      <text x="242" y="113" text-anchor="middle" font-size="11" fill="var(--calm)">脇は灰 → 主役が立つ</text>
    </svg>`,
    apply:"補助線・ラベル・脇の要素は灰色に回し、色は主役のためだけに取っておく。",
    term:"ニュートラルカラー（無彩色）",
  },
  {
    id:"soft-contrast",
    cat:"color",
    links:[{to:"ensure-contrast",rel:"tension"}],
    tags:[],
    title:"真っ白×真っ黒は、避ける",
    claim:"純白に純黒は、まぶしくて疲れる。",
    why:"晴れた日の雪原や、日差しを照り返す白い壁を見続けると、目を細めたくなります。光と影の差が強すぎると、目が疲れるのです。文字と紙も同じで、真っ白の地に真っ黒の文字をぶつけると、長く読むうちにちらついて疲れる。地をほんの少し生成りに、文字を少し和らげると、ずっと楽に読み通せます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="純白に純黒はまぶしく、生成りの地と和らげた墨色は長く読める">
      <!-- 悪い例: 純白の地に純黒の文字(生hex) -->
      <rect x="20" y="16" width="116" height="84" rx="10" fill="#ffffff" stroke="var(--line)"/>
      <g fill="#000000">
        <rect x="32" y="28" width="92" height="9" rx="3"/>
        <rect x="32" y="46" width="92" height="9" rx="3"/>
        <rect x="32" y="64" width="92" height="9" rx="3"/>
        <rect x="32" y="82" width="60" height="9" rx="3"/>
      </g>
      <text x="78" y="113" text-anchor="middle" font-size="11" fill="var(--ink-soft)">純白×純黒</text>
      <rect x="184" y="16" width="116" height="84" rx="10" fill="var(--paper)" stroke="var(--line)"/>
      <g fill="var(--ink)">
        <rect x="196" y="28" width="92" height="9" rx="3"/>
        <rect x="196" y="46" width="92" height="9" rx="3"/>
        <rect x="196" y="64" width="92" height="9" rx="3"/>
        <rect x="196" y="82" width="60" height="9" rx="3"/>
      </g>
      <text x="242" y="113" text-anchor="middle" font-size="11" fill="var(--calm)">紙の地×墨</text>
    </svg>`,
    apply:"地は真っ白を少し落とした生成りに、文字は真っ黒を少し和らげた濃い墨色にする。",
    term:"",
  },
  {
    id:"ensure-contrast",
    cat:"color",
    links:[{to:"shade-not-hue",rel:"akin"}],
    tags:[],
    title:"コントラストは、確保する",
    claim:"薄い色を薄い地に置くと、読めない。",
    why:"霧の中の景色は、輪郭がぼやけて何があるのか掴めません。色と色の違いが小さいほど、目はその境目を見失います。和らげるのは良いことですが、行きすぎて文字と地が近づくと、今度は読めなくなる。文字と地の間には、はっきり気づける程度の明暗差を必ず残します。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="薄い文字を薄い地に置くと読めず、明暗差を確保すると読める">
      <rect x="20" y="16" width="116" height="84" rx="10" fill="var(--calm-soft)" stroke="var(--line)"/>
      <!-- 悪い例: 薄い地に薄い文字(生hex) -->
      <g fill="#cdd6d2">
        <rect x="32" y="28" width="92" height="9" rx="3"/>
        <rect x="32" y="46" width="92" height="9" rx="3"/>
        <rect x="32" y="64" width="92" height="9" rx="3"/>
        <rect x="32" y="82" width="60" height="9" rx="3"/>
      </g>
      <text x="78" y="113" text-anchor="middle" font-size="11" fill="var(--ink-soft)">薄×薄 → 読めない</text>
      <rect x="184" y="16" width="116" height="84" rx="10" fill="var(--calm-soft)" stroke="var(--line)"/>
      <g fill="var(--ink)">
        <rect x="196" y="28" width="92" height="9" rx="3"/>
        <rect x="196" y="46" width="92" height="9" rx="3"/>
        <rect x="196" y="64" width="92" height="9" rx="3"/>
        <rect x="196" y="82" width="60" height="9" rx="3"/>
      </g>
      <text x="242" y="113" text-anchor="middle" font-size="11" fill="var(--calm)">明暗差あり → 読める</text>
    </svg>`,
    apply:"文字色と背景色を決めたら、薄い色どうしになっていないか、明暗差を必ず見直す。",
    term:"コントラスト比（WCAG）",
  },
  {
    id:"knockout",
    cat:"color",
    links:[{to:"fill-not-border",rel:"akin"},{to:"graph-colors",rel:"akin"}],
    tags:[],
    title:"白抜きで、色数を絞る",
    claim:"色を重ねたくなったら、白抜きでクリアにする。",
    why:"黒板に白いチョークで書いた字は、遠くからでもくっきり読めます。濃い地に明るい字を抜くと、それだけで強い対比が生まれるからです。濃い色の上にさらに色文字を載せると、色が重なって濁ります。地が濃いときは、文字を白く抜けば、色を増やさずに見出しが立ちます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="濃い地に色文字を載せると濁り、白抜きにすれば色を増やさず立つ">
      <rect x="20" y="16" width="116" height="84" rx="10" fill="var(--ink)"/>
      <!-- 悪い例: 濃い地に色文字を重ねる(生hex) -->
      <g>
        <rect x="32" y="30" width="92" height="11" rx="3" fill="#e0a13c"/>
        <rect x="32" y="50" width="92" height="11" rx="3" fill="#6f9bd6"/>
        <rect x="32" y="70" width="60" height="11" rx="3" fill="#74c08a"/>
      </g>
      <text x="78" y="113" text-anchor="middle" font-size="11" fill="var(--ink-soft)">濃地×色文字</text>
      <rect x="184" y="16" width="116" height="84" rx="10" fill="var(--calm)"/>
      <g fill="var(--card)">
        <rect x="196" y="30" width="92" height="11" rx="3"/>
        <rect x="196" y="50" width="92" height="11" rx="3"/>
        <rect x="196" y="70" width="60" height="11" rx="3"/>
      </g>
      <text x="242" y="113" text-anchor="middle" font-size="11" fill="var(--calm)">白抜き → すっきり</text>
    </svg>`,
    apply:"濃い地に文字を載せるときは、色を重ねず白で抜いてコントラストを立てる。",
    term:"白抜き（ノックアウト）",
  },
  {
    id:"fill-not-border",
    cat:"color",
    links:[{to:"need-this-line",rel:"akin"}],
    tags:["space","draw"],
    title:"枠線の代わりに、地の色",
    claim:"囲うより、塗る。罫線は要らないことが多い。",
    why:"食卓にトレイやランチョンマットを一枚敷くと、その上の器がひと揃いに見えます。線で囲わなくても、地の色だけで『ここはひと組』だと伝わるからです。罫線で囲むと、その分だけ線が増えて画面がうるさくなる。背景にうっすら色を敷けば、線を足さずにまとまりを示せます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="罫線で囲むと線が増え、地の色を敷けば線なしでひと塊が伝わる">
      <g>
        <rect x="24" y="22" width="104" height="20" rx="5" fill="none" stroke="var(--line)"/>
        <rect x="32" y="29" width="80" height="6" rx="3" fill="var(--ink-soft)"/>
        <rect x="24" y="48" width="104" height="20" rx="5" fill="none" stroke="var(--line)"/>
        <rect x="32" y="55" width="80" height="6" rx="3" fill="var(--ink-soft)"/>
        <rect x="24" y="74" width="104" height="20" rx="5" fill="none" stroke="var(--line)"/>
        <rect x="32" y="81" width="80" height="6" rx="3" fill="var(--ink-soft)"/>
      </g>
      <text x="78" y="113" text-anchor="middle" font-size="11" fill="var(--ink-soft)">罫線で囲む</text>
      <rect x="184" y="20" width="116" height="76" rx="12" fill="var(--calm-soft)"/>
      <g fill="var(--ink-soft)">
        <rect x="196" y="32" width="92" height="8" rx="3"/>
        <rect x="196" y="52" width="92" height="8" rx="3"/>
        <rect x="196" y="72" width="68" height="8" rx="3"/>
      </g>
      <text x="242" y="113" text-anchor="middle" font-size="11" fill="var(--calm)">地の色 → 線なし</text>
    </svg>`,
    apply:"囲みたくなったら、まず罫線をやめて背景にうっすら色を敷けないか試す。",
    term:"図と地（フィギュア・グラウンド）",
  },
  {
    id:"gradient-careful",
    cat:"color",
    links:[{to:"soft-contrast",rel:"akin"},{to:"knockout",rel:"akin"}],
    tags:[],
    title:"グラデーションは、慎重に",
    claim:"むやみなグラデーションは、野暮ったくなる。",
    why:"夕焼けの空がきれいなのは、色が自然になだらかに移っていくからです。けれど図の中で意味もなく色を混ぜると、境目が濁って、かえってもたついた印象になる。塗りはまず一色のベタで考え、グラデーションは奥行きや光を本当に出したいときだけ、控えめに使います。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="むやみなグラデーションは色が濁って野暮ったく、一色のベタはすっきり締まる">
      <defs>
        <linearGradient id="grad-yabo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="var(--accent)"/>
          <stop offset="1" stop-color="var(--calm)"/>
        </linearGradient>
      </defs>
      <rect x="28" y="30" width="92" height="56" rx="12" fill="url(#grad-yabo)"/>
      <text x="74" y="108" text-anchor="middle" font-size="11" fill="var(--ink-soft)">濁って野暮ったい</text>
      <rect x="200" y="30" width="92" height="56" rx="12" fill="var(--calm)"/>
      <text x="246" y="108" text-anchor="middle" font-size="11" fill="var(--calm)">一色で締まる</text>
    </svg>`,
    apply:"塗りはまず一色のベタで考える。グラデーションは奥行きや光が要るときだけ控えめに。",
    term:"フラットデザイン",
  },
  {
    id:"semantic-color",
    cat:"color",
    links:[{to:"same-badge",rel:"akin"}],
    tags:["text"],
    title:"色の意味には、逆らわない",
    claim:"色がもとから持つ意味に、逆らわない。",
    why:"信号の赤を見れば、誰でも足を止めます。止まれ・危ないは赤、進んでいいのは緑——子どもの頃から、体でそう覚えてきたからです。人があなたの図を見ている時間より、図の外の世界で過ごしてきた時間のほうが、ずっと長い。だから見る人が連れてくる色の意味は、こちらの都合よりも強い。その意味に沿わせると、説明する前から正しく伝わります。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="危険を緑で示すと迷い、危険を赤で示すなど意味どおりにすると即わかる">
      <!-- 悪い例: 危険を緑で示し、意味に逆らう（正三角・角丸の警告マーク） -->
      <polygon points="78,31 105,78 51,78" fill="var(--calm)" stroke="var(--calm)" stroke-width="6" stroke-linejoin="round"/>
      <rect x="75" y="46" width="6" height="18" rx="3" fill="var(--card)"/>
      <circle cx="78" cy="72" r="3" fill="var(--card)"/>
      <text x="78" y="100" text-anchor="middle" font-size="11" fill="var(--ink-soft)">緑で危険 → 迷う</text>
      <!-- 良い例: 危険を赤で示し、意味どおり（正三角・角丸の警告マーク） -->
      <polygon points="242,31 269,78 215,78" fill="var(--accent)" stroke="var(--accent)" stroke-width="6" stroke-linejoin="round"/>
      <rect x="239" y="46" width="6" height="18" rx="3" fill="var(--card)"/>
      <circle cx="242" cy="72" r="3" fill="var(--card)"/>
      <text x="242" y="100" text-anchor="middle" font-size="11" fill="var(--calm)">赤で危険 → 即わかる</text>
    </svg>`,
    apply:"危険・エラーは赤、成功・安全は緑、安定・冷静は青。色に役割を持たせるときは、世間の意味に合わせる。",
    term:"シグナルカラー",
  },
  {
    id:"text-color-sparingly",
    cat:"color",
    tags:["text"],
    title:"色を変えるのは、一語だけ",
    claim:"文字の色を変えるほど、どの色も効かなくなる。",
    why:"教科書に蛍光ペンを引きはじめると、つい一行、また一行と引いてしまい、気づけばページ全体が光っています。こうなると、もうどこが大事だったのか分かりません。文字の色も同じで、あちこちの語を色分けするほど、どれも同じ重さに見えて沈みます。本当に効かせたい一語だけ色を変えると、目はまっすぐそこへ向かいます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="文字を一字ずつ色分けすると散らかり、ここぞの一字だけ色を変えると効く">
      <rect x="20" y="16" width="116" height="84" rx="10" fill="none" stroke="var(--line)"/>
      <!-- 悪い例: 文字を一字ずつ別の色に分ける多色サンプル(生hex) -->
      <g font-size="15" text-anchor="middle">
        <text x="45" y="49" fill="#d9a23c">い</text>
        <text x="67" y="49" fill="#4a6fb0">ろ</text>
        <text x="89" y="49" fill="#5a9e54">は</text>
        <text x="111" y="49" fill="#c1583f">に</text>
        <text x="45" y="78" fill="#8a5fb0">ほ</text>
        <text x="67" y="78" fill="#3aa6a0">へ</text>
        <text x="89" y="78" fill="#c98b2f">と</text>
        <text x="111" y="78" fill="#b04a8a">ち</text>
      </g>
      <text x="78" y="113" text-anchor="middle" font-size="11" fill="var(--ink-soft)">全部に色 → 散らかる</text>
      <rect x="184" y="16" width="116" height="84" rx="10" fill="none" stroke="var(--line)"/>
      <g font-size="15" text-anchor="middle" fill="var(--ink-soft)">
        <text x="209" y="49">い</text>
        <text x="231" y="49">ろ</text>
        <text x="253" y="49" fill="var(--accent)">は</text>
        <text x="275" y="49">に</text>
        <text x="209" y="78">ほ</text>
        <text x="231" y="78">へ</text>
        <text x="253" y="78">と</text>
        <text x="275" y="78">ち</text>
      </g>
      <text x="242" y="113" text-anchor="middle" font-size="11" fill="var(--calm)">一字だけ色 → 効く</text>
    </svg>`,
    apply:"文章は墨一色を基本にして、色を変えるのは『ここだけは』という一語に絞る。",
    term:"アクセントカラー",
  },
];

const TIPS_text = [
  {
    id:"write-action",
    cat:"text",
    links:[{to:"say-it-straight",rel:"akin"},{to:"lead-first",rel:"akin"}],
    tags:[],
    title:"タイトルには、結局なにかを書く",
    claim:"「〜について」ではなく「〜してください」と書く。",
    why:"「〜について」で終わるタイトルは、これから何の話が始まるかを予告するだけで、肝心の中身をまだ何も言っていません。読み手がタイトルを見た瞬間に知りたいのは『で、どうすればいいのか』です。タイトルそのものに『何を・いつまでに』を書いてしまえば、本文を開く前に用件が伝わります。",
    visual:`<div class="py-2" role="img" aria-label="タイトルは内容の予告で終わらせず、してほしいことを書くほうが一目で伝わる">
      <p class="text-xs" style="color:var(--ink-soft)">予告で終わる</p>
      <div class="soft p-3 mt-1 mb-3" style="background:var(--card);border:1px solid var(--line)">
        <p class="text-sm" style="color:var(--ink-soft)">資料提出の期限について</p>
      </div>
      <p class="text-xs" style="color:var(--calm)">用件を書き切る</p>
      <div class="soft p-3 mt-1" style="background:var(--card);border:1px solid var(--line)">
        <p class="maru font-bold text-base" style="color:var(--ink)">6/20までに資料を提出</p>
      </div>
    </div>`,
    apply:"タイトルは内容の紹介で終わらせず、相手にしてほしいことや結論をそのまま書き切る。",
    term:"コール・トゥ・アクション（CTA）",
  },
  {
    id:"lead-first",
    cat:"text",
    links:[{to:"thirteen-chars",rel:"akin"}],
    tags:[],
    title:"0.1秒で、読むか決まる",
    claim:"長い修飾だらけのタイトルは、最後まで読まれない。",
    why:"人は届いたものを読むかどうかを、ほんの一瞬で決めています。タイトルの頭に長い前置きや修飾が並ぶと、肝心の用件にたどり着く前に『これは後でいい』と判断されてしまう。一番伝えたい結論を先頭に置けば、その一瞬で『自分ごとだ』と掴んでもらえます。",
    visual:`<div class="py-2" role="img" aria-label="タイトルは修飾を頭に盛らず、結論を先頭に置くほうが読まれる">
      <p class="text-xs" style="color:var(--ink-soft)">修飾が先頭</p>
      <div class="soft p-3 mt-1 mb-3" style="background:var(--card);border:1px solid var(--line)">
        <p class="text-sm"><span style="color:var(--ink-soft)">先日皆様にご案内した件に関する</span><span style="color:var(--ink)">日程変更のお知らせ</span></p>
      </div>
      <p class="text-xs" style="color:var(--calm)">結論が先頭</p>
      <div class="soft p-3 mt-1" style="background:var(--card);border:1px solid var(--line)">
        <p class="maru font-bold text-base" style="color:var(--ink)">日程変更のお知らせ</p>
        <p class="text-[11px] mt-1" style="color:var(--ink-soft)">先日ご案内した件です</p>
      </div>
    </div>`,
    apply:"タイトルは修飾を後ろに回し、結論や用件を必ず先頭に置く。",
    term:"逆ピラミッド（結論先行）",
  },
  {
    id:"thirteen-chars",
    cat:"text",
    tags:[],
    title:"見出しは、13文字まで",
    claim:"一目で掴める見出しは、13文字が上限。",
    why:"人が文字の列を『ぱっと』一目で読み取れる長さには限りがあります。それを超えると、目は一度で捉えきれず、頭から読み返すことになる。見出しを短く区切れば、立ち止まらずに意味がそのまま頭へ入ってきます。",
    visual:`<div class="py-2" role="img" aria-label="見出しは一目で掴める13文字までに収めると読み返しが要らない">
      <p class="text-xs" style="color:var(--ink-soft)">一目で掴みきれない</p>
      <div class="soft p-3 mt-1 mb-3" style="background:var(--card);border:1px solid var(--line)">
        <p class="text-sm"><span style="color:var(--ink-soft)">新サービスの提供開始に関す</span><span style="color:var(--line)">るお知らせ</span></p>
        <p class="text-[10px] mt-1" style="color:var(--accent)">↑ ここまでで13文字</p>
      </div>
      <p class="text-xs" style="color:var(--calm)">13文字で掴める</p>
      <div class="soft p-3 mt-1" style="background:var(--card);border:1px solid var(--line)">
        <p class="maru font-bold text-base" style="color:var(--ink)">新サービスを来月開始</p>
      </div>
    </div>`,
    apply:"見出しは13文字を上限の目安に。超えそうなら言葉を削るか、二つに分ける。",
    term:"",
  },
  {
    id:"excuse-last",
    cat:"text",
    links:[{to:"so-what",rel:"akin"},{to:"no-filler",rel:"akin"}],
    tags:[],
    title:"言い訳は、末尾に小さく",
    claim:"あなたのエクスキューズを読みたい人はいない。",
    why:"話の冒頭に『力不足で恐縮ですが』と前置きを並べると、本当に伝えたい用件が、その下にすっかり埋もれてしまいます。読み手が最初に知りたいのは、あなたの言い訳ではなく結論です。断り書きや注釈は小さく末尾に回し、先頭は用件のために空けておきます。",
    visual:`<div class="py-2" role="img" aria-label="言い訳を冒頭に置くより、用件を先頭に出し断り書きは末尾に小さく">
      <p class="text-xs" style="color:var(--ink-soft)">言い訳が先頭</p>
      <div class="soft p-3 mt-1 mb-3" style="background:var(--card);border:1px solid var(--line)">
        <p class="text-sm" style="color:var(--ink)">力不足で恐縮なのですが、お忙しいところ大変申し訳なく</p>
        <p class="text-xs mt-1" style="color:var(--ink-soft)">承認をお願いします</p>
      </div>
      <p class="text-xs" style="color:var(--calm)">用件が先頭</p>
      <div class="soft p-3 mt-1" style="background:var(--card);border:1px solid var(--line)">
        <p class="maru font-bold text-base" style="color:var(--ink)">承認をお願いします</p>
        <p class="text-[11px] mt-1" style="color:var(--ink-soft)">お忙しいところ恐縮です</p>
      </div>
    </div>`,
    apply:"本題を先頭に大きく置き、前置きや言い訳は末尾に小さく添える。",
    term:"",
  },
  {
    id:"so-what",
    cat:"text",
    tags:[],
    title:"「だから何？」を、書かない",
    claim:"それを見て「で？」となる言葉は、削る。",
    why:"状況だけを述べて終わる一文は、読み手を『で、だから？』と宙ぶらりんにします。事実は、そこから何を言いたいかまで届いて初めて意味を持ちます。一文ごとに『だから何が言いたいのか』を最後まで書き切れば、読み手は迷わず次へ進めます。",
    visual:`<div class="py-2" role="img" aria-label="状況だけで終わらせず、だから何が言いたいかの結論まで書き切る">
      <p class="text-xs" style="color:var(--ink-soft)">状況だけ</p>
      <div class="soft p-3 mt-1 mb-3 flex items-center gap-2" style="background:var(--card);border:1px solid var(--line)">
        <p class="text-sm" style="color:var(--ink-soft)">アクセスが先月より増えました</p>
        <span class="text-xs maru font-bold shrink-0" style="color:var(--accent)">で？</span>
      </div>
      <p class="text-xs" style="color:var(--calm)">結論まで</p>
      <div class="soft p-3 mt-1" style="background:var(--card);border:1px solid var(--line)">
        <p class="text-sm" style="color:var(--ink)">アクセスが増えたので、サーバーを増やします</p>
      </div>
    </div>`,
    apply:"事実を書いたら、そこから導きたい結論や行動まで一文に含める。",
    term:"So What?（ピラミッド原則）",
  },
  {
    id:"bold-not-marker",
    cat:"text",
    links:[{to:"bold-not-underline",rel:"akin"},{to:"text-color-sparingly",rel:"echo"}],
    tags:["color"],
    title:"蛍光ペンより、太字",
    claim:"強調は、塗るより太らせる。",
    why:"大事なところを蛍光ペンで塗ると、その一行は確かに目立ちます。けれど何か所も塗るうちに色が増え、どこが本当に大事なのか分からなくなる。文字を太くするだけなら、新しい色を足さずに強弱がつき、地の落ち着きを保ったまま大事な一語を立たせられます。",
    visual:`<div class="py-2" role="img" aria-label="強調は背景を塗ると色が散らかる、太字なら色を足さず立つ">
      <p class="text-xs" style="color:var(--ink-soft)">塗ると色が増える</p>
      <div class="soft p-3 mt-1 mb-3 text-sm" style="background:var(--card);border:1px solid var(--line);color:var(--ink)">
        会議は<span style="background:var(--accent-soft)">15日</span>、提出は<span style="background:var(--calm-soft)">前日まで</span>です
      </div>
      <p class="text-xs" style="color:var(--calm)">太らせる</p>
      <div class="soft p-3 mt-1 text-sm" style="background:var(--card);border:1px solid var(--line);color:var(--ink)">
        会議は<strong class="font-bold">15日</strong>、提出は<strong class="font-bold">前日まで</strong>です
      </div>
    </div>`,
    apply:"強調は背景を塗るより、まず文字を太くする。色を増やさずに済む。",
    term:"",
  },
  {
    id:"bold-not-underline",
    cat:"text",
    links:[{to:"avoid-italic",rel:"akin"}],
    tags:[],
    title:"下線より、太字",
    claim:"下線で引くより、太字で立たせる。",
    why:"下線は文字を強調するために引くのに、線そのものが紙の上では強く目を引きます。すると、立たせたい言葉より、足元に増えた一本の線が先に目に飛び込んでしまう。線を一本も足さず、文字そのものを太くすれば、余計なノイズを増やさずに狙った一語だけがすっと立ちます。",
    visual:`<div class="py-2" role="img" aria-label="下線は線そのものがノイズになる、線を足さず文字を太くするほうが狙った語が立つ">
      <p class="text-xs" style="color:var(--ink-soft)">線が先に目立つ</p>
      <div class="soft p-3 mt-1 mb-3 text-sm" style="background:var(--card);border:1px solid var(--line);color:var(--ink)">
        会議は<span style="border-bottom:2px solid var(--ink-soft);padding-bottom:1px">必ず15日</span>に開きます
      </div>
      <p class="text-xs" style="color:var(--calm)">太字で立てる</p>
      <div class="soft p-3 mt-1 text-sm" style="background:var(--card);border:1px solid var(--line);color:var(--ink)">
        会議は<strong class="font-bold">必ず15日</strong>に開きます
      </div>
    </div>`,
    apply:"リンク以外の強調では下線を引かず、線を足さずに文字を太くする。",
    term:"ヤコブの法則（下線＝リンクの慣習）",
  },
  {
    id:"avoid-italic",
    cat:"text",
    tags:[],
    title:"斜体は、避ける",
    claim:"日本語の斜体は、読みにくいだけ。",
    why:"斜体はもともと欧文の筆記体から生まれた強調のしかたで、アルファベットなら自然に流れます。けれど日本語の文字を機械的に傾けると、字形が崩れて、ただ読みにくくなるだけです。強調したいなら太字、引用なら字下げや地の色など、和文に合うやり方を選びます。",
    visual:`<div class="py-2" role="img" aria-label="和文を傾けると字形が崩れる、強調は太字で立てるほうが読める">
      <p class="text-xs" style="color:var(--ink-soft)">傾けると崩れる</p>
      <div class="soft p-3 mt-1 mb-3" style="background:var(--card);border:1px solid var(--line)">
        <p class="text-base" style="color:var(--ink-soft);font-style:italic">ここが大事です</p>
      </div>
      <p class="text-xs" style="color:var(--calm)">太字で立てる</p>
      <div class="soft p-3 mt-1" style="background:var(--card);border:1px solid var(--line)">
        <p class="text-base font-bold" style="color:var(--ink)">ここが大事です</p>
      </div>
    </div>`,
    apply:"和文の強調に斜体は使わず、太字や字下げで代わりにする。",
    term:"疑似斜体（オブリーク）",
  },
  {
    id:"try-icon",
    cat:"text",
    links:[{to:"bullets-over-prose",rel:"akin"},{to:"area-over-number",rel:"echo"}],
    tags:[],
    title:"アイコンにしてみる",
    claim:"文字で説明するより、絵で見せたほうが速い。",
    why:"『家』『時計』と文字で読むより、その絵を見るほうが、意味は一瞬で頭に届きます。文字は一度、頭の中で音や意味に変換する手間がかかるからです。何度も出てくる決まった概念は、小さな絵にしてしまえば、読まずに見るだけで伝わります。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="定型の概念は文字で説明するより、誰もが知る形のアイコンにすると一目で伝わる">
      <g fill="var(--ink-soft)">
        <rect x="20" y="34" width="112" height="9" rx="3"/>
        <rect x="20" y="50" width="112" height="9" rx="3"/>
        <rect x="20" y="66" width="78" height="9" rx="3"/>
      </g>
      <text x="76" y="100" text-anchor="middle" font-size="11" fill="var(--ink-soft)">文字で説明</text>
      <path d="M188 58 L212 38 L236 58" fill="none" stroke="var(--calm)" stroke-width="3" stroke-linejoin="round"/>
      <rect x="194" y="58" width="36" height="28" rx="4" fill="none" stroke="var(--calm)" stroke-width="3"/>
      <circle cx="274" cy="60" r="22" fill="none" stroke="var(--calm)" stroke-width="3"/>
      <path d="M274 60 L274 46 M274 60 L286 60" fill="none" stroke="var(--calm)" stroke-width="3" stroke-linecap="round"/>
      <text x="240" y="100" text-anchor="middle" font-size="11" fill="var(--calm)">アイコンで一目</text>
    </svg>`,
    apply:"繰り返し出る定型の概念は、誰もが知る形のアイコンに置き換える。",
    term:"画像優位性効果（ピクチャー・スーペリオリティ）",
  },
  {
    id:"same-word",
    cat:"text",
    links:[{to:"different-word",rel:"tension"}],
    tags:[],
    title:"同じものは、同じ言葉で",
    claim:"一つのものを指す言葉は、最後まで一つに統一する。",
    why:"同じ人を、ある人は『田中さん』、別の人は『部長』と呼ぶと、聞き手は『それは同じ人?』と一瞬立ち止まります。図の中でも、同じものを『申込』『お申し込み』『エントリー』と書き分けると、読み手はそのたびに『さっきのと同じ?』と確かめることになる。言葉を一つに揃えれば、その手間がまるごと消えます。",
    visual:`<div class="py-2" role="img" aria-label="同じものを違う言葉で書くと読み手が照合に迷う、言葉を一つに統一すると迷わない">
      <p class="text-xs" style="color:var(--ink-soft)">言葉が揺れる</p>
      <div class="soft p-3 mt-1 mb-3 flex items-center gap-2 text-sm" style="background:var(--card);border:1px solid var(--line);color:var(--ink-soft)">
        <span>申込</span><span>→</span><span>お申し込み</span><span>→</span><span>エントリー</span>
        <span class="text-xs maru font-bold shrink-0" style="color:var(--accent)">同じ?</span>
      </div>
      <p class="text-xs" style="color:var(--calm)">言葉を揃える</p>
      <div class="soft p-3 mt-1 flex items-center gap-2 text-sm" style="background:var(--card);border:1px solid var(--line);color:var(--ink)">
        <span>申込</span><span>→</span><span>申込</span><span>→</span><span>申込</span>
      </div>
    </div>`,
    apply:"同じ対象を指す言葉は一つに決め、図全体で同じ表記を貫く。",
    term:"表記ゆれ",
  },
  {
    id:"different-word",
    cat:"text",
    links:[{to:"semantic-color",rel:"akin"}],
    tags:[],
    title:"違うものは、違う言葉で",
    claim:"別の意味のものに、同じ言葉を使い回さない。",
    why:"分かれ道の右も左も同じ『こっち』という看板だったら、どちらへ進めばいいか分かりません。考え方も位置づけも違うものを同じ言葉で呼ぶと、読み手は二つを同じものだと取り違えます。違うものには違う言葉を当てれば、その違いが言葉の上でもくっきり立ちます。",
    visual:`<div class="py-2" role="img" aria-label="違う意味のものを同じ言葉で呼ぶと取り違える、別の言葉を当てると違いが立つ">
      <p class="text-xs" style="color:var(--ink-soft)">同じ言葉で別物</p>
      <div class="soft p-3 mt-1 mb-3 flex items-center gap-2 text-sm" style="background:var(--card);border:1px solid var(--line);color:var(--ink-soft)">
        <span>確認</span><span>→</span><span>確認</span>
        <span class="text-xs maru font-bold shrink-0" style="color:var(--accent)">どっち?</span>
      </div>
      <p class="text-xs" style="color:var(--calm)">別の言葉を当てる</p>
      <div class="soft p-3 mt-1 flex items-center gap-2 text-sm" style="background:var(--card);border:1px solid var(--line);color:var(--ink)">
        <span>下書きチェック</span><span>→</span><span>最終承認</span>
      </div>
    </div>`,
    apply:"考え方や位置づけが違うものには、それぞれ違う言葉を当てて区別する。",
    term:"",
  },
  {
    id:"plain-words",
    cat:"text",
    links:[{to:"say-it-straight",rel:"akin"},{to:"bullets-over-prose",rel:"akin"}],
    tags:[],
    title:"やさしい言葉で、言う",
    claim:"難しい言葉は、やさしい言葉に置き換える。",
    why:"道を尋ねたのに聞き慣れない言葉ばかりで返されると、結局どう行けばいいのか分かりません。図に難しい言葉が並ぶと、読み手はまず意味を調べる手間で立ち止まる。日常の言葉に置き換えれば、立ち止まらずに中身がそのまま頭へ入ってきます。煙に巻きたいときだけは、別ですが。",
    visual:`<div class="py-2" role="img" aria-label="難しい言葉は読み手を立ち止まらせる、やさしい言葉に置き換えると中身が届く">
      <p class="text-xs" style="color:var(--ink-soft)">難しい言葉</p>
      <div class="soft p-3 mt-1 mb-3 text-sm" style="background:var(--card);border:1px solid var(--line);color:var(--ink-soft)">
        KPIを最大化すべくリソースをアロケートする
      </div>
      <p class="text-xs" style="color:var(--calm)">やさしい言葉</p>
      <div class="soft p-3 mt-1 text-sm" style="background:var(--card);border:1px solid var(--line);color:var(--ink)">
        成果を上げるために、人と時間を割り当てる
      </div>
    </div>`,
    apply:"専門語や横文字は、日常のやさしい言葉に置き換えられないか一度試す。",
    term:"プレーン・ランゲージ（やさしい日本語）",
  },
  {
    id:"say-it-straight",
    cat:"text",
    tags:[],
    title:"はっきり、言う",
    claim:"遠回しにぼかさず、してほしいことを言い切る。",
    why:"『みなさまにご遠慮いただいております』と書かれた札を見ても、結局やっていいのか駄目なのか、一瞬迷います。やわらげた言い回しは、肝心の用件をぼかしてしまう。まず『やめてください』とはっきり言い切り、やわらげる言葉はそのあとに添えれば、誤解なくまっすぐ届きます。",
    visual:`<div class="py-2" role="img" aria-label="遠回しの言い回しは用件をぼかす、まずはっきり言い切るほうがまっすぐ届く">
      <p class="text-xs" style="color:var(--ink-soft)">ぼかす</p>
      <div class="soft p-3 mt-1 mb-3 text-sm" style="background:var(--card);border:1px solid var(--line);color:var(--ink-soft)">
        ご遠慮いただいております
      </div>
      <p class="text-xs" style="color:var(--calm)">言い切る</p>
      <div class="soft p-3 mt-1 text-sm" style="background:var(--card);border:1px solid var(--line);color:var(--ink)">
        <strong class="font-bold">やめてください</strong><span style="color:var(--ink-soft)">（ご協力をお願いします）</span>
      </div>
    </div>`,
    apply:"禁止やお願いは、やわらげる前にまず結論をはっきり言い切る。",
    term:"ローコンテクスト・コミュニケーション",
  },
  {
    id:"bullets-over-prose",
    cat:"text",
    tags:[],
    title:"文章より、箇条書き",
    claim:"続く文章より、箇条書きのほうが頭に入る。",
    why:"話を聞くとき、要点を区切って言ってもらえると頭に残りますが、息継ぎなく長々と続けられると、どこが大事だったのか分からなくなります。そもそも人の頭は、びっしり続く長文をひと息で受け止めるようにはできていません。一つずつ行を分けて箇条書きにすると、要点が粒立って、ひと目で拾えます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="続く文章は要点が埋もれ、箇条書きにすると要点が粒立ってひと目で拾える">
      <g fill="var(--ink-soft)">
        <rect x="24" y="28" width="104" height="8" rx="3"/>
        <rect x="24" y="42" width="104" height="8" rx="3"/>
        <rect x="24" y="56" width="104" height="8" rx="3"/>
        <rect x="24" y="70" width="104" height="8" rx="3"/>
        <rect x="24" y="84" width="72" height="8" rx="3"/>
      </g>
      <text x="78" y="110" text-anchor="middle" font-size="11" fill="var(--ink-soft)">続く文章</text>
      <g fill="var(--calm)">
        <circle cx="194" cy="34" r="3"/>
        <rect x="204" y="30" width="88" height="8" rx="3"/>
        <circle cx="194" cy="56" r="3"/>
        <rect x="204" y="52" width="88" height="8" rx="3"/>
        <circle cx="194" cy="78" r="3"/>
        <rect x="204" y="74" width="68" height="8" rx="3"/>
      </g>
      <text x="246" y="110" text-anchor="middle" font-size="11" fill="var(--calm)">箇条書き</text>
    </svg>`,
    apply:"要点が複数あるなら、続く文章にせず、一つずつ行を分けて箇条書きにする。",
    term:"",
  },
  {
    id:"first-words",
    cat:"text",
    links:[{to:"lead-first",rel:"akin"},{to:"write-action",rel:"akin"}],
    tags:["hierarchy"],
    title:"最初の一言を、えらぶ",
    claim:"一番大きい言葉が、読む・読まないを分ける。",
    why:"通りで手渡されるチラシを受け取るかどうか、人は最初の一言で一瞬に決めています。そこに『〇〇市主催』『四十周年』『こんな疑問はありませんか』と大きく書かれていても、受け取る側には自分の用事がない。一番大きい文字は、書き手が言いたいことではなく、読み手の用事のために空けておく。最初の一言が自分ごとに見えた瞬間、はじめて先を読んでもらえます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="一番大きい文字を主催者名にするより、読み手の用事に充てたほうが目に留まる">
      <rect x="36" y="16" width="96" height="88" rx="10" fill="var(--card)" stroke="var(--line)"/>
      <rect x="44" y="26" width="80" height="22" rx="4" fill="var(--ink-soft)"/>
      <text x="84" y="41" text-anchor="middle" font-size="11" fill="var(--card)">〇〇市 主催</text>
      <g fill="var(--line)">
        <rect x="44" y="58" width="80" height="7" rx="3"/>
        <rect x="44" y="70" width="80" height="7" rx="3"/>
        <rect x="44" y="82" width="60" height="7" rx="3"/>
      </g>
      <text x="84" y="116" text-anchor="middle" font-size="11" fill="var(--ink-soft)">大きいのが主催名</text>
      <rect x="188" y="16" width="96" height="88" rx="10" fill="var(--card)" stroke="var(--line)"/>
      <rect x="196" y="26" width="80" height="22" rx="4" fill="var(--calm)"/>
      <text x="236" y="41" text-anchor="middle" font-size="11" fill="var(--card)">がん検診 無料</text>
      <g fill="var(--line)">
        <rect x="196" y="58" width="80" height="7" rx="3"/>
        <rect x="196" y="70" width="64" height="7" rx="3"/>
      </g>
      <text x="196" y="92" font-size="9" fill="var(--ink-soft)">〇〇市 主催</text>
      <text x="236" y="116" text-anchor="middle" font-size="11" fill="var(--calm)">大きいのが用事</text>
    </svg>`,
    apply:"一番大きい文字は『読み手の用事』に。主催者名・周年・あいさつは小さく末尾へ回す。",
    term:"キャッチコピー",
  },
  {
    id:"heading-is-art",
    cat:"text",
    links:[{to:"try-icon",rel:"akin"},{to:"eye-catch",rel:"akin"}],
    tags:["draw"],
    title:"見出しも、絵のうち",
    claim:"見出しは読む文章ではなく、形として見える部品。",
    why:"店の看板の文字は、遠くからはまず大きなかたまりとして目に映り、近づいて初めて文章として読まれます。見出しも同じで、読まれる前に、まず形として絵の一部に見えている。だから見出しは、本文の延長で流し込むのではなく、大きさ・太さ・置き場所まで含めて絵の一部品として設計する。文字を絵として扱うほど、見出しは紙面に溶け込んで強く効きます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="見出しを本文と同じ調子で流し込むより、大きさと位置を絵の部品として組むと強く効く">
      <rect x="36" y="16" width="96" height="88" rx="10" fill="var(--card)" stroke="var(--line)"/>
      <rect x="44" y="24" width="80" height="40" rx="4" fill="var(--line)"/>
      <g fill="var(--ink-soft)">
        <rect x="44" y="72" width="80" height="8" rx="3"/>
        <rect x="44" y="84" width="70" height="8" rx="3"/>
      </g>
      <text x="84" y="116" text-anchor="middle" font-size="11" fill="var(--ink-soft)">見出しが素通り</text>
      <rect x="188" y="16" width="96" height="88" rx="10" fill="var(--card)" stroke="var(--line)"/>
      <rect x="196" y="24" width="80" height="44" rx="4" fill="var(--calm-soft)"/>
      <rect x="196" y="56" width="80" height="20" rx="4" fill="var(--calm)"/>
      <g fill="var(--line)">
        <rect x="196" y="84" width="60" height="7" rx="3"/>
        <rect x="196" y="94" width="44" height="7" rx="3"/>
      </g>
      <text x="236" y="116" text-anchor="middle" font-size="11" fill="var(--calm)">見出しが効く</text>
    </svg>`,
    apply:"見出しは本文の続きで流し込まず、大きさ・太さ・位置を絵の部品として決める。",
    term:"",
  },
];

const TIPS_draw = [
  {
    id:"triangle-arrow",
    cat:"draw",
    links:[{to:"need-this-line",rel:"akin"},{to:"consistent-line-weight",rel:"akin"}],
    tags:[],
    title:"矢印は、三角で十分",
    claim:"矢印は三角ひとつで伝わる。",
    why:"道で誰かに方向を尋ねると、相手はたいてい指を一本さして「あっち」と示すだけです。それで十分に伝わります。矢印も同じで、向きを示したいなら三角がひとつあればいい。羽根や影や二重線を足すほど、肝心の「どっち」がかえって埋もれます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="装飾を盛った矢印より、三角ひとつの矢印のほうが向きがまっすぐ伝わる">
      <polygon points="38,48 84,48 84,40 114,60 84,80 84,72 38,72" fill="var(--paper)" stroke="var(--ink-soft)" stroke-width="1.5" stroke-linejoin="round"/>
      <polygon points="42,52 88,52 88,47.5 106.8,60 88,72.5 88,68 42,68" fill="none" stroke="var(--ink-soft)" stroke-width="1.5" stroke-linejoin="round"/>
      <text x="78" y="108" text-anchor="middle" font-size="11" fill="var(--ink-soft)">盛った矢印</text>
      <polygon points="208,40 286,56 208,72" fill="var(--calm)"/>
      <text x="242" y="108" text-anchor="middle" font-size="11" fill="var(--calm)">三角ひとつ</text>
    </svg>`,
    apply:"矢印は三角ひとつで描く。距離や流れも示したいときだけ、軸を太らせた矢印（根元が四角いホームベース型）にする。",
    term:"",
  },
  {
    id:"need-this-line",
    cat:"draw",
    tags:["space"],
    title:"その線、いる？",
    claim:"たいていの線は、無くても成り立つ。",
    why:"線は、引いた瞬間に紙の上でいちばん強く目を引きます。だから罫線で細かく仕切ると、中身より枠のほうが先に目に飛び込んでしまう。多くの線は、間を空けて端を揃えるだけで省けます。引くのは、それでも区切りが伝わらないときの最後の手段に。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="罫線で囲んだ表より、線を消して余白と整列でそろえたほうがすっきり読める">
      <g fill="none" stroke="var(--line)" stroke-width="1">
        <rect x="22" y="24" width="112" height="64"/>
        <line x1="22" y1="40" x2="134" y2="40"/>
        <line x1="22" y1="56" x2="134" y2="56"/>
        <line x1="22" y1="72" x2="134" y2="72"/>
        <line x1="74" y1="24" x2="74" y2="88"/>
      </g>
      <g fill="var(--ink-soft)">
        <rect x="28" y="29" width="34" height="6" rx="2"/>
        <rect x="82" y="29" width="40" height="6" rx="2"/>
        <rect x="28" y="45" width="34" height="6" rx="2"/>
        <rect x="82" y="45" width="40" height="6" rx="2"/>
        <rect x="28" y="61" width="34" height="6" rx="2"/>
        <rect x="82" y="61" width="40" height="6" rx="2"/>
        <rect x="28" y="77" width="34" height="6" rx="2"/>
        <rect x="82" y="77" width="40" height="6" rx="2"/>
      </g>
      <text x="78" y="108" text-anchor="middle" font-size="11" fill="var(--ink-soft)">線だらけ</text>
      <g fill="var(--calm)">
        <rect x="190" y="29" width="34" height="6" rx="2"/>
        <rect x="244" y="29" width="40" height="6" rx="2"/>
        <rect x="190" y="45" width="34" height="6" rx="2"/>
        <rect x="244" y="45" width="40" height="6" rx="2"/>
        <rect x="190" y="61" width="34" height="6" rx="2"/>
        <rect x="244" y="61" width="40" height="6" rx="2"/>
        <rect x="190" y="77" width="34" height="6" rx="2"/>
        <rect x="244" y="77" width="40" height="6" rx="2"/>
      </g>
      <text x="242" y="108" text-anchor="middle" font-size="11" fill="var(--calm)">余白で揃える</text>
    </svg>`,
    apply:"線を引きたくなったら、まず余白と整列で代用できないか試す。引くなら最弱の色で。",
    term:"データインク比（タフテ）",
  },
  {
    id:"bar-from-zero",
    cat:"draw",
    links:[{to:"area-over-number",rel:"akin"},{to:"pie-two-max",rel:"akin"}],
    tags:[],
    title:"棒グラフは、ゼロから",
    claim:"棒グラフの起点をゼロにしないのは、印象操作。",
    why:"同じ二人の身長でも、肩から上だけを並べて見せれば、片方がずっと高く見えます。足元まで見せないと、本当の差はわかりません。棒グラフも、起点をゼロにしないと差が実際より大きく見え、見る人は無意識に誤解する。誇張するつもりがなくても、嘘になってしまいます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="同じ数値でも、途中から始めた棒グラフは差が誇張され、ゼロ始点なら正しく見える">
      <g fill="var(--ink-soft)">
        <rect x="50" y="71" width="24" height="15"/>
        <rect x="88" y="26" width="24" height="60"/>
      </g>
      <path d="M30 89 q5 -5 10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0" fill="none" stroke="var(--ink-soft)" stroke-width="1.5"/>
      <text x="78" y="110" text-anchor="middle" font-size="11" fill="var(--ink-soft)">途中から始める</text>
      <line x1="192" y1="92" x2="300" y2="92" stroke="var(--line)" stroke-width="1.5"/>
      <g fill="var(--calm)">
        <rect x="212" y="43" width="24" height="49"/>
        <rect x="250" y="28" width="24" height="64"/>
      </g>
      <text x="242" y="110" text-anchor="middle" font-size="11" fill="var(--calm)">ゼロから</text>
    </svg>`,
    apply:"棒グラフの起点は必ずゼロにする。途中を省略しない。",
    term:"軸の切り詰め",
  },
  {
    id:"pie-two-max",
    cat:"draw",
    links:[{to:"few-parallels",rel:"akin"}],
    tags:[],
    title:"円グラフ、値は2つまで",
    claim:"3つ以上の割合は、円グラフでは比べられない。",
    why:"二切れに分けたケーキなら、どちらが大きいか一目でわかります。でも六切れに分かれた皿を前にすると、どれが一番大きいのか、すぐには決められない。人の目は、細かい角度の大小を見比べるのが苦手だからです。三つ以上の割合は、円より棒で並べたほうが正しく比べられます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="細切れの円グラフは大小を比べられず、棒グラフに並べ替えると一目で順位がわかる">
      <g stroke="var(--card)" stroke-width="1.5">
        <path d="M78 54 L78 18 A36 36 0 0 1 112.2 65.1 Z" fill="var(--ink-soft)"/>
        <path d="M78 54 L112.2 65.1 A36 36 0 0 1 66.9 88.2 Z" fill="var(--line)"/>
        <path d="M78 54 L66.9 88.2 A36 36 0 0 1 42 54 Z" fill="var(--ink-soft)"/>
        <path d="M78 54 L42 54 A36 36 0 0 1 56.8 24.9 Z" fill="var(--line)"/>
        <path d="M78 54 L56.8 24.9 A36 36 0 0 1 78 18 Z" fill="var(--ink-soft)"/>
      </g>
      <text x="78" y="110" text-anchor="middle" font-size="11" fill="var(--ink-soft)">細切れ＝比べられない</text>
      <line x1="184" y1="92" x2="300" y2="92" stroke="var(--line)" stroke-width="1.5"/>
      <g fill="var(--calm)">
        <rect x="190" y="28" width="16" height="64"/>
        <rect x="212" y="39" width="16" height="53"/>
        <rect x="234" y="49" width="16" height="43"/>
        <rect x="256" y="60" width="16" height="32"/>
        <rect x="278" y="71" width="16" height="21"/>
      </g>
      <text x="242" y="110" text-anchor="middle" font-size="11" fill="var(--calm)">棒なら比べられる</text>
    </svg>`,
    apply:"割合が三つ以上になったら、円グラフをやめて棒グラフに並べ替える。",
    term:"角度・面積の知覚",
  },
  {
    id:"graph-colors",
    cat:"draw",
    tags:["color"],
    title:"グラフの色は、絞る",
    claim:"グラフに色を盛ると、読めなくなる。",
    why:"駅の案内板が一色なら、探している行き先の文字だけにすっと目が届きます。色がいくつも散っていると、どこを見ればいいか目が泳ぐ。グラフも同じで、棒ごとに色を変えると、数を読む前に色に気を取られます。色は同じ系統の濃淡でそろえ、見てほしい一本だけを際立たせます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="棒ごとに色を変えると目が散り、濃淡でそろえて一本だけ立てると注目点がすぐ伝わる">
      <!-- Beforeの悪例のみ生hexを許容：系列ごとに色相を変えた「散らかり」を意図的に示すため（規約の例外）。After側はCSS変数のみ -->
      <line x1="28" y1="92" x2="136" y2="92" stroke="var(--line)" stroke-width="1.5"/>
      <rect x="32" y="43" width="16" height="49" fill="#d9534f"/>
      <rect x="56" y="58" width="16" height="34" fill="#4a6fb0"/>
      <rect x="80" y="28" width="16" height="64" fill="#4a9e7f"/>
      <rect x="104" y="50" width="16" height="42" fill="#d9a23c"/>
      <rect x="128" y="35" width="16" height="57" fill="#8a6db0"/>
      <text x="82" y="110" text-anchor="middle" font-size="11" fill="var(--ink-soft)">色を盛る</text>
      <line x1="184" y1="92" x2="300" y2="92" stroke="var(--line)" stroke-width="1.5"/>
      <g fill="var(--ink-soft)" opacity=".35">
        <rect x="188" y="43" width="16" height="49"/>
        <rect x="212" y="58" width="16" height="34"/>
        <rect x="260" y="50" width="16" height="42"/>
        <rect x="284" y="35" width="16" height="57"/>
      </g>
      <rect x="236" y="28" width="16" height="64" fill="var(--calm)"/>
      <text x="242" y="110" text-anchor="middle" font-size="11" fill="var(--calm)">灰色に落として一本を立てる</text>
    </svg>`,
    apply:"グラフの色は一系統の濃淡でそろえ、強調したい系列だけ一色を立てる。",
    term:"カテゴリカルカラー",
  },
  {
    id:"no-jaggy",
    cat:"draw",
    links:[{to:"keep-ratio",rel:"akin"},{to:"no-filler",rel:"akin"}],
    tags:[],
    title:"ジャギーするなら、載せない",
    claim:"粗く伸びた画像は、無いほうがまし。",
    why:"小さな写真を無理に引き伸ばすと、輪郭が階段のようにギザギザになります。遠目には絵に見えても、近づけば粗が目について、それだけで全体が雑な印象になる。粗い一枚を載せるくらいなら、思い切って載せないほうが、伝えたいことはまっすぐ届きます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="輪郭が階段状にギザつく画像より、なめらかな輪郭のほうが品位を保てる">
      <path d="M28 88 L28 40 L44 40 L44 52 L60 52 L60 64 L76 64 L76 76 L92 76 L92 88 L108 88 Z" fill="var(--ink-soft)"/>
      <text x="78" y="110" text-anchor="middle" font-size="11" fill="var(--ink-soft)">ジャギー</text>
      <path d="M196 88 L196 40 L276 88 Z" fill="var(--calm)"/>
      <text x="242" y="110" text-anchor="middle" font-size="11" fill="var(--calm)">なめらか</text>
    </svg>`,
    apply:"きれいな大きさで出せない画像は、無理に拡大せず、いっそ載せない。",
    term:"解像度（ジャギー）",
  },
  {
    id:"keep-ratio",
    cat:"draw",
    links:[{to:"area-over-number",rel:"akin"}],
    tags:[],
    title:"縦横比は、変えない",
    claim:"画像の歪みが、違和感になる。",
    why:"鏡が少し歪んでいるだけで、映った自分の顔に違和感を覚えます。人は、見慣れた形のわずかな崩れにとても敏感だからです。画像を縦横どちらかに引き伸ばすと、丸いものは潰れ、人や物は太ったり伸びたりして、見た瞬間に「何かおかしい」と伝わってしまいます。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="縦横比を崩して引き伸ばすと形が歪み、比率を保てば自然に見える">
      <ellipse cx="78" cy="50" rx="48" ry="30" fill="none" stroke="var(--ink-soft)" stroke-width="2"/>
      <circle cx="62" cy="44" r="3.5" fill="var(--ink-soft)"/>
      <circle cx="94" cy="44" r="3.5" fill="var(--ink-soft)"/>
      <path d="M60 60 Q78 70 96 60" fill="none" stroke="var(--ink-soft)" stroke-width="2"/>
      <text x="78" y="108" text-anchor="middle" font-size="11" fill="var(--ink-soft)">引き伸ばす</text>
      <circle cx="242" cy="50" r="30" fill="none" stroke="var(--calm)" stroke-width="2"/>
      <circle cx="232" cy="44" r="3.5" fill="var(--calm)"/>
      <circle cx="252" cy="44" r="3.5" fill="var(--calm)"/>
      <path d="M230 58 Q242 67 254 58" fill="none" stroke="var(--calm)" stroke-width="2"/>
      <text x="242" y="108" text-anchor="middle" font-size="11" fill="var(--calm)">比率を保つ</text>
    </svg>`,
    apply:"画像のサイズ変更は、必ず縦横の比率を保つ。収まらないときはトリミングで合わせる。",
    term:"アスペクト比",
  },
  {
    id:"no-filler",
    cat:"draw",
    tags:["space"],
    title:"余白埋めのイラストは、置かない",
    claim:"隙間を埋めるだけのイラストは、ノイズ。",
    why:"話の合間に意味のない相づちを挟み続けられると、肝心の用件が頭に入ってきません。余白も同じで、空いているからと挿絵で埋めると、視線がそちらに引かれ、本当の主役が弱まります。余白は埋めるものではなく、主役を呼吸させるために残しておくものです。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="隙間を挿絵で埋めるより、余白をそのまま残したほうが主役が立つ">
      <rect x="20" y="20" width="116" height="72" rx="10" fill="none" stroke="var(--line)"/>
      <rect x="28" y="28" width="58" height="9" rx="3" fill="var(--ink-soft)"/>
      <g fill="var(--line)">
        <rect x="28" y="48" width="100" height="6" rx="2"/>
        <rect x="28" y="60" width="100" height="6" rx="2"/>
        <rect x="28" y="72" width="62" height="6" rx="2"/>
      </g>
      <g fill="var(--ink-soft)" opacity=".7">
        <path d="M116 26 l1.6 4.2 l4.2 1.6 l-4.2 1.6 l-1.6 4.2 l-1.6 -4.2 l-4.2 -1.6 l4.2 -1.6 Z"/>
      </g>
      <g fill="none" stroke="var(--ink-soft)" stroke-width="1.5" opacity=".7">
        <circle cx="118" cy="74" r="5"/>
        <path d="M100 74 q3 -5 6 0 t6 0"/>
      </g>
      <text x="78" y="108" text-anchor="middle" font-size="11" fill="var(--ink-soft)">隙間を埋める</text>
      <rect x="184" y="20" width="116" height="72" rx="10" fill="none" stroke="var(--line)"/>
      <rect x="192" y="28" width="58" height="9" rx="3" fill="var(--calm)"/>
      <g fill="var(--calm-soft)">
        <rect x="192" y="48" width="100" height="6" rx="2"/>
        <rect x="192" y="60" width="100" height="6" rx="2"/>
        <rect x="192" y="72" width="62" height="6" rx="2"/>
      </g>
      <text x="242" y="108" text-anchor="middle" font-size="11" fill="var(--calm)">余白を活かす</text>
    </svg>`,
    apply:"隙間を埋めるためだけの挿絵は置かない。余白はそのまま主役のために残す。",
    term:"チャートジャンク（タフテ）",
  },
  {
    id:"consistent-line-weight",
    cat:"draw",
    tags:[],
    title:"線の太さに、意味を持たせる",
    claim:"同じ意味の線は、同じ太さでそろえる。",
    why:"同じ強さで握手したつもりでも、相手によって力加減が変わっていたら、受け取る側は『今のは何か意味が?』と勘ぐります。線も同じで、同じはずのつながりが場所によって太かったり細かったりすると、読み手はそこに違いを探してしまう。太さを変えるのは、意味を変えたいときだけにします。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="同じ意味の線の太さがばらつくと違いを勘ぐらせる、太さをそろえると迷いがない">
      <g stroke="var(--ink-soft)" stroke-linecap="round">
        <line x1="28" y1="34" x2="128" y2="34" stroke-width="1"/>
        <line x1="28" y1="56" x2="128" y2="56" stroke-width="5"/>
        <line x1="28" y1="78" x2="128" y2="78" stroke-width="2.5"/>
      </g>
      <text x="78" y="106" text-anchor="middle" font-size="11" fill="var(--ink-soft)">太さがバラバラ</text>
      <g stroke="var(--calm)" stroke-linecap="round">
        <line x1="192" y1="34" x2="292" y2="34" stroke-width="2.5"/>
        <line x1="192" y1="56" x2="292" y2="56" stroke-width="2.5"/>
        <line x1="192" y1="78" x2="292" y2="78" stroke-width="2.5"/>
      </g>
      <text x="242" y="106" text-anchor="middle" font-size="11" fill="var(--calm)">そろえる</text>
    </svg>`,
    apply:"同じ役割の線は同じ太さに統一する。太さを変えるのは、意味の違いを示すときだけ。",
    term:"視覚変数（ベルタン）",
  },
  {
    id:"area-over-number",
    cat:"draw",
    tags:[],
    title:"数字より、面積で",
    claim:"大小を比べるなら、数字より面積。",
    why:"店の棚で品物を選ぶとき、書かれた内容量の数字より、箱の大きさそのものを見て『こっちが多い』と感じ取ります。数字は一度、頭の中で大小に変換する手間がかかるけれど、面積の差は見た瞬間に届く。量のちがいを示したいときは、数字を並べるより、大きさそのもので見せるほうが速く伝わります。",
    visual:`<svg viewBox="0 0 320 120" class="w-full" role="img" aria-label="同じ大きさの数字は読んで比べる手間がかかり、面積の差は見た瞬間に大小が伝わる">
      <text x="50" y="64" text-anchor="middle" font-size="26" font-weight="700" fill="var(--ink-soft)">120</text>
      <text x="106" y="64" text-anchor="middle" font-size="26" font-weight="700" fill="var(--ink-soft)">30</text>
      <text x="78" y="104" text-anchor="middle" font-size="11" fill="var(--ink-soft)">数字で比べる</text>
      <rect x="198" y="34" width="48" height="48" rx="6" fill="var(--calm)"/>
      <rect x="262" y="58" width="24" height="24" rx="4" fill="var(--calm)" opacity="0.5"/>
      <text x="244" y="104" text-anchor="middle" font-size="11" fill="var(--calm)">面積で比べる</text>
    </svg>`,
    apply:"量の大小は数字で書くより、面積や大きさのちがいそのもので見せる。",
    term:"前注意処理（プリアテンティブ）",
  },
];
