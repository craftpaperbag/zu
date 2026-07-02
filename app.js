/* データは外部ファイルに分離（ビルドなし・単体配信は維持）：
   history.js … 更新履歴（HISTORY） / tips.js … Tipsのたね（TIPS_*）。
   どちらも上の <script src> で先に読み込まれ、ここで参照する。 */
const CATEGORIES = [
  { id:"space",     label:"余白と配置",   icon:"move-diagonal" },
  { id:"hierarchy", label:"強弱をつける", icon:"arrow-up-narrow-wide" },
  { id:"color",     label:"色と濃淡",     icon:"palette" },
  { id:"text",      label:"文字を図として", icon:"type" },
  { id:"draw",      label:"線・矢印・グラフ", icon:"spline" },
  { id:"flow",      label:"進め方",         icon:"route" },
];


/* 6カテゴリの配列を1本につなぐ。順序はカテゴリ体系の並びに合わせる。 */
const TIPS = [].concat(
  typeof TIPS_space     !== "undefined" ? TIPS_space     : [],
  typeof TIPS_hierarchy !== "undefined" ? TIPS_hierarchy : [],
  typeof TIPS_color     !== "undefined" ? TIPS_color     : [],
  typeof TIPS_text      !== "undefined" ? TIPS_text      : [],
  typeof TIPS_draw      !== "undefined" ? TIPS_draw      : [],
  typeof TIPS_flow      !== "undefined" ? TIPS_flow      : []
);
/* =========================================================
   ▲▲▲ たねは以上。以下は描画ロジック（基本さわらない） ▲▲▲
   ========================================================= */

/* ---- 覚え書き同士のつながり（リンク） ----
   片側に links:[{to,rel}] を書けば、逆向きは自動で出る（両端に書かない）。
   rel は4種。色は足さず、アイコンと静かな言葉だけで種別を分ける（semantic-colorを濁さない）。
     echo    別の分野・側面で同じこと（対称）
     akin    関連が深い話（対称）
     tension 逆から見た／対になる話（対称）
     then    前後で効いてくる（向きあり：書いた側→to が「この次に」、to から見ると「その前に」）   */
const REL = {
  echo:    { icon:"repeat",      sym:true,  word:"別の顔で" },
  akin:    { icon:"link",        sym:true,  word:"近い話" },
  tension: { icon:"git-compare", sym:true,  word:"逆から見ると" },
  then:    { icon:"arrow-right", sym:false, word:"この次に",
             back:{ icon:"arrow-left", word:"その前に" } },
};
const REL_ORDER = ["then","echo","akin","tension"];

// 各idが受けている逆向きリンクを集める（描画前に1度だけ）
const BACKLINKS = (()=>{
  const map = {};
  TIPS.forEach(t=>(t.links||[]).forEach(l=>{
    (map[l.to] = map[l.to] || []).push({ to:t.id, rel:l.rel });
  }));
  return map;
})();

// あるTIPの「つながり」を表示用にまとめる（前向き＋逆向き、重複除去、種別順に整列）
function tiesFor(t){
  const seen = new Set(), out = [];
  const add = (to, rel, back)=>{
    if(!to || to===t.id || seen.has(to+"|"+rel)) return;
    const target = TIPS.find(x=>x.id===to), spec = REL[rel];
    if(!target || !spec) return;
    seen.add(to+"|"+rel);
    const view = (!spec.sym && back) ? spec.back : spec;
    out.push({ to, title:target.title, icon:view.icon, word:view.word, rel });
  };
  (t.links||[]).forEach(l=>add(l.to, l.rel, false));
  (BACKLINKS[t.id]||[]).forEach(l=>add(l.to, l.rel, true));
  out.sort((a,b)=>REL_ORDER.indexOf(a.rel)-REL_ORDER.indexOf(b.rel));
  return out;
}

let activeCat = "all";
let keyword = "";
let viewMode = "card";   // "card"=図つきカード / "list"=目次（図を省いた1行）
let sortMode = "cat";    // "cat"=カテゴリ順（既定） / "new"=新着順（追加日の新しい順）

// 追加日（"YYYY-MM-DD"）を静かに見せる表記に整える。空や不正なら空文字。
function fmtAdded(s){
  return (typeof s==="string" && /^\d{4}-\d{2}-\d{2}$/.test(s)) ? s.replace(/-/g,".") : "";
}
const catLabel = id => (CATEGORIES.find(c=>c.id===id)||{}).label || "";
const catIcon  = id => (CATEGORIES.find(c=>c.id===id)||{}).icon  || "tag";

// 検索語（keyword）の一致を <mark> で包む。プレーン文字列にだけ使う（SVGには使わない）。
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
function hl(text){
  const k = keyword.trim();
  if(!k) return text;
  return text.replace(new RegExp("("+reEsc(k)+")","gi"),'<mark class="hl">$1</mark>');
}

// キーワードだけで一致するか（カテゴリは見ない）。chip の件数表示に使う。
function matchKeyword(t){
  const k = keyword.trim();
  if(!k) return true;
  const hay = (t.title+t.claim+t.why+t.apply+t.term+catLabel(t.cat)+(t.tags||[]).map(catLabel).join("")+(t.tags||[]).join("")).toLowerCase();
  return hay.includes(k.toLowerCase());
}

function renderCats(){
  const wrap = document.getElementById("cats");
  const pool = TIPS.filter(matchKeyword);
  const countOf = id => id==="all" ? pool.length : pool.filter(t=>t.cat===id).length;
  const mk = (id,label,icon,on)=>`
    <button data-cat="${id}" class="chip focusable shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-2 soft text-sm border"
      style="${on
        ? 'background:var(--strong);color:var(--on-strong);border-color:var(--strong)'
        : 'background:var(--card);color:var(--ink);border-color:var(--line)'}">
      <i data-lucide="${icon}" class="w-4 h-4"></i>${label}<span class="tnum text-xs" style="opacity:.6">${countOf(id)}</span>
    </button>`;
  wrap.innerHTML =
    mk("all","すべて","layout-grid",activeCat==="all") +
    CATEGORIES.map(c=>mk(c.id,c.label,c.icon,activeCat===c.id)).join("");
  wrap.querySelectorAll("button").forEach(b=>{
    b.onclick=()=>{
      activeCat=b.dataset.cat;
      renderCats(); renderGrid();
      // ページの深くで切り替えても、結果を先頭から見られるように
      window.scrollTo({top:0,behavior:"smooth"});
    };
  });
  syncCatsEnd();
  lucide.createIcons();
}

function match(t){
  const okCat = activeCat==="all" || t.cat===activeCat;
  const k = keyword.trim();
  const hay = (t.title+t.claim+t.why+t.apply+t.term+catLabel(t.cat)+(t.tags||[]).map(catLabel).join("")+(t.tags||[]).join("")).toLowerCase();
  const okKey = !k || hay.includes(k.toLowerCase());
  return okCat && okKey;
}

function tagChips(t){
  const tags = t.tags || [];
  if(!tags.length) return "";
  return `<div class="px-6 pb-1 flex flex-wrap gap-1.5">` + tags.map(tg=>`
    <button data-jump="${tg}" class="chip focusable inline-flex items-center gap-1 px-2 py-0.5 soft text-[11px] border"
      style="background:var(--paper);color:var(--ink-soft);border-color:var(--line)">
      <i data-lucide="${catIcon(tg)}" class="w-3 h-3"></i>${catLabel(tg)}
    </button>`).join("") + `</div>`;
}

// 一覧カード：図を主役に、詳細（why/apply/タグ/用語）は隠す
// 一覧カード：図を主役に。タイトル→図→why の3層だけに絞り、claim と「詳しく読む」CTA は省く。
// （claim は詳細モーダルに残す。カード全体が role=button なので CTA 行は不要。サイト自身が説く「少ないほど目立つ」の実演。）
function card(t){
  return `<article data-id="${t.id}" role="button" tabindex="0" aria-label="${t.title} — 詳しく読む"
    class="tipcard fade-in focusable soft card-shadow overflow-hidden${isVisited(t.id)?' is-read':''}" style="background:var(--card)">
    <div class="px-5 pt-4 flex items-center gap-1.5 text-xs" style="color:var(--ink-soft)">
      <i data-lucide="${catIcon(t.cat)}" class="w-3.5 h-3.5"></i>${catLabel(t.cat)}
      <span class="read-mark ml-auto"><i data-lucide="check" class="w-3 h-3"></i>既読</span>
      ${sortMode==="new"&&fmtAdded(t.added)?`<span class="tnum ml-auto" style="opacity:.6">${fmtAdded(t.added)}</span>`:""}
    </div>
    <h3 class="maru font-bold px-5 mt-1.5" style="font-size:1.25rem">${hl(t.title)}</h3>
    <div class="mx-5 mt-3 p-3 soft" style="background:var(--paper)">${t.visual}</div>
    <div class="px-5 pt-3 pb-4">
      <p class="text-sm leading-relaxed clamp2" style="color:var(--ink-soft)">${hl(t.why)}</p>
    </div>
  </article>`;
}

// 章立て見出し：朱を使わず、墨と罫だけの静かな区切り（全体像のため）
function sectionHead(cat,count){
  return `<div class="sec-head">
    <i data-lucide="${catIcon(cat)}" class="w-5 h-5" style="color:var(--ink-soft)"></i>
    <span class="sec-label">${catLabel(cat)}</span>
    <span class="sec-count tnum">${count}</span>
  </div>`;
}

// 目次の1行：図を省き、タイトル＋claimで素早く拾い読みできる
function cardRow(t){
  return `<article data-id="${t.id}" role="button" tabindex="0" aria-label="${t.title} — 詳しく読む"
    class="tocrow focusable fade-in${isVisited(t.id)?' is-read':''}">
    <span class="toc-title maru">${hl(t.title)}</span>
    <span class="toc-claim">${hl(t.claim)}</span>
    ${sortMode==="new"&&fmtAdded(t.added)?`<span class="toc-date tnum">${fmtAdded(t.added)}</span>`:""}
    <span class="read-mark"><i data-lucide="check" class="w-3 h-3"></i>既読</span>
    <i data-lucide="chevron-right" class="w-4 h-4 toc-go"></i>
  </article>`;
}

// つながり（モーダル内）：関連する覚え書きへの導線。なければ何も出さない
function tiesBlock(t){
  const ties = tiesFor(t);
  if(!ties.length) return "";
  const rows = ties.map(x=>`
    <button data-tie="${x.to}" class="tie focusable" aria-label="${x.word} ${x.title} へ移る">
      <i data-lucide="${x.icon}" class="w-3.5 h-3.5 tie-ic"></i>
      <span class="tie-word">${x.word}</span>
      <span class="tie-title maru">${x.title}</span>
      <i data-lucide="chevron-right" class="w-3.5 h-3.5 tie-go"></i>
    </button>`).join("");
  return `<div class="ties mx-6 mt-5 pt-4">
    <div class="ties-head"><i data-lucide="waypoints" class="w-3.5 h-3.5"></i>つながり</div>
    <div class="ties-list">${rows}</div>
  </div>`;
}

// 詳細（モーダル内）：全項目を表示
function detail(t){
  return `
    <div class="px-6 pt-6 flex items-center gap-1.5 text-xs" style="color:var(--ink-soft)">
      <i data-lucide="${catIcon(t.cat)}" class="w-3.5 h-3.5"></i>${catLabel(t.cat)}
    </div>
    <h3 id="modal-title" class="maru font-bold px-6 mt-1" style="font-size:1.5rem">${hl(t.title)}</h3>
    <p class="px-6 mt-1 text-base" style="color:var(--ink)">${hl(t.claim)}</p>
    <div class="mx-6 my-4 p-4 soft" style="background:var(--paper)">${t.visual}</div>
    <p class="px-6 text-sm md:text-base leading-relaxed" style="color:var(--ink)">${hl(t.why)}</p>
    <div class="px-6 mt-4 pb-1 flex items-start gap-2">
      <i data-lucide="check" class="w-4 h-4 mt-1 shrink-0" style="color:var(--calm)"></i>
      <p class="text-sm md:text-base" style="color:var(--ink-soft)">${hl(t.apply)}</p>
    </div>
    ${tagChips(t)}
    ${tiesBlock(t)}
    <div class="px-6 pb-6 pt-2 flex items-baseline justify-between gap-3 text-xs" style="color:var(--ink-soft)">
      <span>${t.term?`用語：${t.term}`:""}</span>
      ${fmtAdded(t.added)?`<span class="tnum shrink-0" style="opacity:.7">追加 ${fmtAdded(t.added)}</span>`:""}
    </div>
  `;
}

// いま絞り込まれている一覧。モーダルの前後送りはこの並びをたどる。
let currentList = [];

function renderGrid(){
  refreshVisitedSet();          // 既読の印を最新の状態で描く
  currentList = TIPS.filter(match);
  // 新着順：追加日の新しい順。同日は元の並び（＝カテゴリ順）を保つ安定ソート。
  // "YYYY-MM-DD" 文字列は辞書順がそのまま日付順になる。
  if(sortMode==="new"){
    currentList = currentList
      .map((t,i)=>[t,i])
      .sort((a,b)=> (b[0].added||"").localeCompare(a[0].added||"") || a[1]-b[1])
      .map(p=>p[0]);
  }
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const count = document.getElementById("count");
  const item = viewMode==="list" ? cardRow : card;
  // カード表示はレスポンシブグリッド、目次表示は1列。区画ごとに付け外しする。
  const gridCls = "grid gap-5 md:grid-cols-2 xl:grid-cols-3";
  // 章立て（カテゴリ見出し）は「すべて」かつカテゴリ順のときだけ。新着順は全カテゴリ横断でフラットに並べる。
  if(activeCat==="all" && sortMode!=="new"){
    // 「すべて」：カテゴリで章立てして全体像を見せる（0件の区画は出さない）
    grid.className = "";
    grid.innerHTML = CATEGORIES.map(c=>{
      const items = currentList.filter(t=>t.cat===c.id);
      if(!items.length) return "";
      const body = viewMode==="list"
        ? `<div class="toc">${items.map(item).join("")}</div>`
        : `<div class="${gridCls}">${items.map(item).join("")}</div>`;
      return sectionHead(c.id, items.length) + body;
    }).join("");
  } else {
    // 特定カテゴリ、または新着順：見出しを出さずフラットに並べる
    grid.className = viewMode==="list" ? "toc" : gridCls;
    grid.innerHTML = currentList.map(item).join("");
  }
  empty.classList.toggle("hidden", currentList.length>0);
  count.textContent = `${currentList.length} 件の覚え書き`;
  // ランダムに一枚：選べる候補があるときだけ出す
  document.getElementById("random").classList.toggle("is-hidden", currentList.length===0);
  grid.querySelectorAll("article[data-id]").forEach(c=>{
    c.onclick=()=>openTip(c.dataset.id);
    c.onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); openTip(c.dataset.id); } };
  });
  writeFilterToURL();
  renderFilterSummary();        // 折りたたみバーの状態要約を最新化（並べ替え/表示/カテゴリ/キーワード）
  lucide.createIcons();
}

// 折りたたみバーの中身。
// ・閉じているとき：今の絞り込み状態（カテゴリ→並べ替え→表示→キーワード）を静かに要約する。
// ・開いているとき：下の操作そのものが状態を示すので要約は出さず、区画の見出しとして一語だけ置く（重複を避ける）。
function escAttr(s){ return String(s).replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function renderFilterSummary(){
  const el = document.getElementById("filter-summary");
  if(!el) return;
  if(filtersOpen){
    el.innerHTML = `<span class="fsum-label">検索・絞り込み</span>`;
    return;
  }
  const parts = [];
  // カテゴリ：そのカテゴリのアイコン＋ラベル（「すべて」は一覧アイコン）
  parts.push(`<span class="fsum-item"><i data-lucide="${activeCat==="all"?"layout-grid":catIcon(activeCat)}" class="w-3.5 h-3.5"></i>${activeCat==="all"?"すべて":catLabel(activeCat)}</span>`);
  // 並べ替え
  parts.push(`<span class="fsum-item">${sortMode==="new"?"新着":"標準"}</span>`);
  // 表示形式
  parts.push(`<span class="fsum-item">${viewMode==="list"?"目次":"カード"}</span>`);
  // キーワード：あるときだけ。検索アイコンを添えて「いま検索中」だと伝える
  const k = keyword.trim();
  if(k){
    parts.push(`<span class="fsum-item fsum-key"><i data-lucide="search" class="w-3.5 h-3.5"></i><span class="kw">「${escAttr(k)}」</span></span>`);
  }
  el.innerHTML = parts.join('<span class="fsum-sep" aria-hidden="true">·</span>');
}

/* ---- 閲覧履歴（最近見た覚え書き） ----
   見た一枚を localStorage に新しい順で残す。サーバには送らず、いつでも消せる。
   重複は最新の一回だけ残し、上限を超えた古い分は落とす。 */
const VISITED_KEY = "zu-visited";
const VISITED_MAX = 50;
function loadVisited(){
  try{
    const arr = JSON.parse(localStorage.getItem(VISITED_KEY) || "[]");
    return Array.isArray(arr) ? arr.filter(x=>x && typeof x.id==="string") : [];
  }catch(e){ return []; }
}
function saveVisited(arr){
  try{ localStorage.setItem(VISITED_KEY, JSON.stringify(arr)); }catch(e){}
}
function recordVisit(id){
  if(!TIPS.some(x=>x.id===id)) return;
  let arr = loadVisited().filter(x=>x.id!==id);   // 同じ一枚は最新の一回だけ
  arr.unshift({ id, ts: Date.now() });            // 新しいものを先頭へ
  saveVisited(arr.slice(0, VISITED_MAX));
}
// 既読の判定は一覧の描画で何度も呼ぶので、localStorage の読み直しを毎回せずセットに溜める
let visitedSet = new Set();
function refreshVisitedSet(){ visitedSet = new Set(loadVisited().map(v=>v.id)); }
function isVisited(id){ return visitedSet.has(id); }
// 一覧に出ているカード／目次行へ、いまの既読状態を反映する（再描画せず印だけ付け替える）
function refreshReadMarks(){
  refreshVisitedSet();
  document.querySelectorAll("#grid article[data-id]").forEach(a=>{
    a.classList.toggle("is-read", isVisited(a.dataset.id));
  });
}

// 詳細モーダル
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const modalPrev = document.getElementById("modal-prev");
const modalNext = document.getElementById("modal-next");
const modalPos  = document.getElementById("modal-pos");
let lastFocused = null;
let currentId = null;   // いま開いている覚え書き
let closingModal = false;   // バツ等で「全部巻き戻して閉じる」最中かどうか

/* ---- URL（共有リンク）まわり ----
   絞り込みは ?cat=&q= に、開いている詳細は #tip=id に残す。
   リロード・ブックマーク・共有で、その状態を復元できるようにする。 */
function tipIdFromHash(){
  const m = location.hash.match(/tip=([\w-]+)/);
  return m ? m[1] : null;
}
function writeFilterToURL(){
  const p = new URLSearchParams();
  if(activeCat!=="all") p.set("cat", activeCat);
  if(keyword.trim())    p.set("q", keyword.trim());
  const qs = p.toString();
  history.replaceState(history.state, "", location.pathname + (qs?("?"+qs):"") + location.hash);
}
function baseURL(){ return location.pathname + location.search; }

// 詳細を実際に描いて見せる（履歴操作はしない）。dir>0=次へ / dir<0=前へ / 0=新規に開く
function showModal(id, dir=0){
  const t = TIPS.find(x=>x.id===id);
  if(!t) return;
  currentId = id;
  recordVisit(id);            // 開いた覚え書きを閲覧履歴に残す（ブラウザのみ）
  modalBody.innerHTML = detail(t);
  // 進む向きに合わせて中身を滑り込ませる（新規に開くときはパネルの pop に任せる）
  modalBody.classList.remove("slide-next","slide-prev");
  if(dir){ void modalBody.offsetWidth; modalBody.classList.add(dir>0?"slide-next":"slide-prev"); }
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  lucide.createIcons();
  // モーダル内のタグから絞り込みジャンプ
  modalBody.querySelectorAll("button[data-jump]").forEach(b=>{
    b.onclick=()=>{
      activeCat=b.dataset.jump; keyword="";
      qInput.value=""; syncClear();
      hideModal();
      history.replaceState(null,"",location.pathname);  // 詳細#tip と旧クエリを消す（renderGridが?cat=を書き直す）
      renderCats(); renderGrid();
      window.scrollTo({top:0,behavior:"smooth"});
    };
  });
  // つながりから別の覚え書きへ移る（履歴を積むので「戻る」で元の一枚に戻れる）
  modalBody.querySelectorAll("button[data-tie]").forEach(b=>{
    b.onclick=()=>openTip(b.dataset.tie);
  });
  // 前後送りの状態を更新
  const idx = currentList.findIndex(x=>x.id===id);
  const has = idx>=0;
  modalPrev.disabled = !has || idx<=0;
  modalNext.disabled = !has || idx>=currentList.length-1;
  modalPos.textContent = has ? `${idx+1} / ${currentList.length}` : "";
  modalBody.scrollTop=0;
  document.getElementById("modal-close").focus();
}
function hideModal(){
  if(modal.classList.contains("hidden")) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  currentId = null;
  refreshReadMarks();   // 見終えた一枚に「既読」の印が付く（一覧は再描画しない）
  if(lastFocused) lastFocused.focus();
}

// 一覧から開く（履歴を1つ積むので、ブラウザの「戻る」で閉じられる）
function openTip(id){
  if(!TIPS.some(x=>x.id===id)) return;
  // モーダルが閉じているときだけ開き元を覚える（つながりを辿っても元の一枚へ戻れるように）
  const wasHidden = modal.classList.contains("hidden");
  if(wasHidden) lastFocused = document.activeElement;
  // グリッドから何段潜ったか（depth）を積む。つながりを辿るほど1ずつ深くなる。
  const depth = (wasHidden ? 0 : ((history.state && history.state.depth) || 0)) + 1;
  history.pushState({tip:id,pushed:true,depth}, "", baseURL().replace(/#.*$/,"") + "#tip=" + id);
  showModal(id);
}
// 前後送り：同じ詳細表示のなかでの移動なので履歴は積み替えるだけ（pushed・depth は保つ）
function navTip(id, dir){
  const st = history.state || {};
  history.replaceState({tip:id,pushed:!!st.pushed,depth:st.depth||0}, "", baseURL().replace(/#.*$/,"") + "#tip=" + id);
  showModal(id, dir);
}
// 閉じる：このセッションで積んだ depth ぶんを一気に巻き戻して確実に閉じる
// （つながりを潜ってから閉じても、手前のtipが顔を出さない）。共有リンク直開きでは自前で閉じる。
function closeModal(){
  if(modal.classList.contains("hidden")) return;
  const depth = (history.state && history.state.depth) || 0;
  if(depth>0){ closingModal = true; history.go(-depth); }
  else { hideModal(); history.replaceState(null,"",baseURL().replace(/#.*$/,"")); }
}
function stepTip(dir){
  const idx = currentList.findIndex(x=>x.id===currentId);
  if(idx<0) return;
  const next = idx + dir;
  if(next<0 || next>=currentList.length) return;
  navTip(currentList[next].id, dir);
}
modalPrev.onclick=()=>stepTip(-1);
modalNext.onclick=()=>stepTip(1);

// 静かな通知（リンクをコピーした等）。濃い面に明るい字で上からそっと出し、しばらくして消す。
let toastTimer=null;
function showToast(msg){
  const el=document.getElementById("toast");
  document.getElementById("toast-msg").textContent=msg;
  el.classList.remove("is-hidden","toast-show");
  void el.offsetWidth;
  el.classList.add("toast-show");
  lucide.createIcons();
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.add("is-hidden"),1900);
}

// この覚え書きへの共有リンク（絞り込みクエリは外し、その一枚が素直に開く #tip=id の絶対URL）
function tipShareURL(id){
  return location.origin + location.pathname + "#tip=" + id;
}
// このサイト自体への共有リンク（詳細#tipや絞り込みクエリは外した、素のトップURL）
function siteShareURL(){
  return location.origin + location.pathname;
}
function copyText(text){
  if(navigator.clipboard && navigator.clipboard.writeText){
    return navigator.clipboard.writeText(text);
  }
  // クリップボードAPIが無い環境向けのフォールバック
  return new Promise((resolve,reject)=>{
    try{
      const ta=document.createElement("textarea");
      ta.value=text; ta.setAttribute("readonly","");
      ta.style.position="fixed"; ta.style.opacity="0";
      document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); document.body.removeChild(ta);
      resolve();
    }catch(e){ reject(e); }
  });
}
// 共有の作法は1か所に：スマホ（タッチ機）はOSの共有シート、PCはリンクをコピー＋静かな通知。
// 個別の覚え書きでも、サイト全体でも同じふるまいにする。
function shareOrCopy({ title, text, url, copiedMsg }){
  const canNativeShare = navigator.share && window.matchMedia("(pointer:coarse)").matches;
  if(canNativeShare){
    navigator.share({ title, text, url }).catch(()=>{});
  }else{
    copyText(url).then(()=>showToast(copiedMsg||"リンクをコピーしました"))
                 .catch(()=>showToast("コピーできませんでした"));
  }
}
// この覚え書き一枚を共有する
function shareCurrentTip(){
  if(!currentId) return;
  const t=TIPS.find(x=>x.id===currentId);
  if(!t) return;
  shareOrCopy({ title:"zu — "+t.title, text:t.claim, url:tipShareURL(t.id),
                copiedMsg:"リンクをコピーしました" });
}
// サイト自体を誰かに渡す（フッターの「共有」から）
function shareSite(){
  shareOrCopy({
    title:"zu — 伝わりやすい形について",
    text:"見せて伝えるものは、ぜんぶ「図」。伝わりやすくするコツ集。",
    url:siteShareURL(),
    copiedMsg:"このサイトのリンクをコピーしました"
  });
}
document.getElementById("modal-share").onclick=shareCurrentTip;
document.getElementById("share-site").onclick=shareSite;
document.getElementById("share-site-top").onclick=shareSite;

// モバイル：モーダル内の横スワイプで前後の覚え書きへ（既存の stepTip/slide に乗せる）
const modalPanel=document.getElementById("modal-panel");
let swipeX=0, swipeY=0, swiping=false;
modalPanel.addEventListener("touchstart",e=>{
  if(e.touches.length!==1){ swiping=false; return; }
  swipeX=e.touches[0].clientX; swipeY=e.touches[0].clientY; swiping=true;
},{passive:true});
modalPanel.addEventListener("touchend",e=>{
  if(!swiping) return; swiping=false;
  const dx=e.changedTouches[0].clientX-swipeX;
  const dy=e.changedTouches[0].clientY-swipeY;
  // 横移動が縦より十分大きいときだけ（本文の縦スクロールと喧嘩させない）
  if(Math.abs(dx)>60 && Math.abs(dx)>Math.abs(dy)*1.5){
    stepTip(dx<0 ? 1 : -1);   // 左へ払う＝次へ
  }
},{passive:true});

// ブラウザの戻る/進むで URL の #tip に追従する
window.addEventListener("popstate", ()=>{
  // バツ等での一括巻き戻し中は、着地点に #tip が残っていても開かずに閉じる
  if(closingModal){
    closingModal = false;
    hideModal();
    if(tipIdFromHash()) history.replaceState(null,"",baseURL().replace(/#.*$/,""));
    return;
  }
  const id = tipIdFromHash();
  if(id && TIPS.some(x=>x.id===id)) showModal(id);
  else hideModal();
});

document.getElementById("modal-close").onclick=closeModal;
document.getElementById("modal-backdrop").onclick=closeModal;

// 更新履歴モーダル
const historyModal = document.getElementById("history-modal");
const historyBody = document.getElementById("history-body");
let lastFocusedHistory = null;

function renderHistory(){
  historyBody.innerHTML = HISTORY.map((h,i)=>{
    const last = i===HISTORY.length-1;
    return `
    <div class="${last?'':'pb-5 mb-5'}" style="${last?'':'border-bottom:1px solid var(--line)'}">
      <p class="maru font-bold text-xs tnum" style="color:var(--calm)">${h.date}</p>
      <ul class="mt-2 space-y-1.5">
        ${h.items.map(it=>`<li class="flex items-start gap-2 text-xs md:text-sm leading-relaxed" style="color:var(--ink)">
          <span class="inline-block w-1 h-1 rounded-full mt-2 shrink-0" style="background:var(--line)"></span>
          <span>${it}</span>
        </li>`).join("")}
      </ul>
    </div>`;
  }).join("");
}

function openHistory(){
  lastFocusedHistory = document.activeElement;
  renderHistory();
  historyModal.classList.remove("hidden");
  historyModal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  lucide.createIcons();
  document.getElementById("history-scroll").scrollTop=0;
  document.getElementById("history-close").focus();
}
function closeHistory(){
  if(historyModal.classList.contains("hidden")) return;
  historyModal.classList.add("hidden");
  historyModal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  if(lastFocusedHistory) lastFocusedHistory.focus();
}
document.getElementById("history-open").onclick=openHistory;
document.getElementById("history-close").onclick=closeHistory;
document.getElementById("history-backdrop").onclick=closeHistory;

// プライバシーポリシー モーダル
const privacyModal = document.getElementById("privacy-modal");
let lastFocusedPrivacy = null;
function openPrivacy(){
  lastFocusedPrivacy = document.activeElement;
  privacyModal.classList.remove("hidden");
  privacyModal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  lucide.createIcons();
  document.getElementById("privacy-scroll").scrollTop=0;
  document.getElementById("privacy-close").focus();
}
function closePrivacy(){
  if(privacyModal.classList.contains("hidden")) return;
  privacyModal.classList.add("hidden");
  privacyModal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  if(lastFocusedPrivacy) lastFocusedPrivacy.focus();
}
document.getElementById("privacy-open").onclick=openPrivacy;
document.getElementById("privacy-close").onclick=closePrivacy;
document.getElementById("privacy-backdrop").onclick=closePrivacy;

// 閲覧履歴モーダル（最近見た覚え書きを新しい順に。クリックで開ける／いつでも消せる）
const visitedModal = document.getElementById("visited-modal");
const visitedBody = document.getElementById("visited-body");
let lastFocusedVisited = null;
function renderVisited(){
  // データから消えたidは静かに除く（古い履歴が残っていても落ちないように）
  const list = loadVisited().filter(v=>TIPS.some(t=>t.id===v.id));
  const empty = document.getElementById("visited-empty");
  const reset = document.getElementById("visited-reset");
  empty.classList.toggle("hidden", list.length>0);
  reset.classList.toggle("is-hidden", list.length===0);
  visitedBody.innerHTML = list.length ? `<div class="toc">` + list.map(v=>{
    const t = TIPS.find(x=>x.id===v.id);
    return `<article data-visited="${t.id}" role="button" tabindex="0" aria-label="${t.title} — 詳しく読む" class="tocrow focusable">
      <span class="toc-title maru">${t.title}</span>
      <span class="toc-claim">${t.claim}</span>
      <i data-lucide="chevron-right" class="w-4 h-4 toc-go"></i>
    </article>`;
  }).join("") + `</div>` : "";
  visitedBody.querySelectorAll("article[data-visited]").forEach(a=>{
    const go=()=>{ closeVisited(); openTip(a.dataset.visited); };
    a.onclick=go;
    a.onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); go(); } };
  });
  lucide.createIcons();
}
function openVisited(){
  lastFocusedVisited = document.activeElement;
  renderVisited();
  visitedModal.classList.remove("hidden");
  visitedModal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  lucide.createIcons();
  document.getElementById("visited-scroll").scrollTop=0;
  document.getElementById("visited-close").focus();
}
function closeVisited(){
  if(visitedModal.classList.contains("hidden")) return;
  visitedModal.classList.add("hidden");
  visitedModal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  if(lastFocusedVisited) lastFocusedVisited.focus();
}
document.getElementById("visited-open").onclick=openVisited;
document.getElementById("visited-close").onclick=closeVisited;
document.getElementById("visited-backdrop").onclick=closeVisited;
document.getElementById("visited-reset").onclick=()=>{
  saveVisited([]);
  renderVisited();
  refreshReadMarks();   // 一覧の「既読」の印も一緒に消す
  showToast("閲覧履歴を消しました");
};

// モーダルが開いている間、Tab を中だけで巡回させる（背後に抜けさせない）
function trapTab(e, container){
  if(e.key!=="Tab") return;
  const sel = 'a[href],button:not([disabled]),input,[tabindex]:not([tabindex="-1"])';
  const list = Array.from(container.querySelectorAll(sel)).filter(el=>el.offsetParent!==null);
  if(!list.length) return;
  const first = list[0], last = list[list.length-1];
  if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
  else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
}

// どのモーダルも閉じているか（一覧を素のまま見ているか）
function allClosed(){
  return modal.classList.contains("hidden")
      && historyModal.classList.contains("hidden")
      && privacyModal.classList.contains("hidden")
      && visitedModal.classList.contains("hidden");
}

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    // 検索の入力中：まず検索語を消し、もう一度で絞り込みの欄ごと閉じる（キーボードだけで往復できる）
    if(e.target===qInput){
      if(qInput.value){ qInput.value=""; keyword=""; syncClear(); renderCats(); renderGrid(); }
      else { setFiltersOpen(false); qInput.blur(); }
      return;
    }
    closeModal(); closeHistory(); closePrivacy(); closeVisited(); return;
  }
  // 軽いショートカット（修飾キー併用・入力中は無効にして邪魔をしない）
  if(!e.metaKey && !e.ctrlKey && !e.altKey){
    const tag=(e.target.tagName||"").toLowerCase();
    const typing = tag==="input" || tag==="textarea" || e.target.isContentEditable;
    if(!typing && allClosed()){
      if(e.key==="/"){ e.preventDefault(); setFiltersOpen(true); qInput.focus(); qInput.select(); return; }
      if(e.key==="r"||e.key==="R"){ e.preventDefault(); openRandom(); return; }
    }
  }
  // 詳細を開いている間は ← → で前後の覚え書きへ
  if(!modal.classList.contains("hidden")){
    if(e.key==="ArrowLeft"){ e.preventDefault(); stepTip(-1); }
    else if(e.key==="ArrowRight"){ e.preventDefault(); stepTip(1); }
    trapTab(e, modal);
  } else if(!historyModal.classList.contains("hidden")){
    trapTab(e, historyModal);
  } else if(!privacyModal.classList.contains("hidden")){
    trapTab(e, privacyModal);
  } else if(!visitedModal.classList.contains("hidden")){
    trapTab(e, visitedModal);
  }
});

// 検索・絞り込みの開閉：既定は閉じる。閉じている間も開閉バーが状態を要約する。
const filterToggle = document.getElementById("filter-toggle");
const filterPanel  = document.getElementById("filter-panel");
let filtersOpen = false;
function paintFilterToggle(){
  filterToggle.setAttribute("aria-expanded", String(filtersOpen));
  filterToggle.setAttribute("aria-label", filtersOpen ? "検索・絞り込みを閉じる" : "検索・絞り込みを開く");
  filterPanel.classList.toggle("is-hidden", !filtersOpen);
}
function setFiltersOpen(open){
  filtersOpen = open;
  paintFilterToggle();
  renderFilterSummary();        // 開閉で中身（要約⇔見出し）を切り替える
  lucide.createIcons();
  // 閉じている間は #cats の幅が測れない（display:none）。開いた瞬間に右端フェードを測り直す。
  if(open){ syncCatsEnd(); }
}
filterToggle.onclick=()=>setFiltersOpen(!filtersOpen);

// 検索：入力中はクリアボタンを出す
const qInput = document.getElementById("q");
const qClear = document.getElementById("q-clear");
function syncClear(){ qClear.classList.toggle("is-hidden", !qInput.value); }
// 入力のたびにカテゴリchipの件数も更新する
qInput.addEventListener("input",e=>{ keyword=e.target.value; syncClear(); renderCats(); renderGrid(); });
qClear.onclick=()=>{ qInput.value=""; keyword=""; syncClear(); renderCats(); renderGrid(); qInput.focus(); };

// 0件の行き止まりから、ひと押しで全部の一覧へ戻る
document.getElementById("empty-reset").onclick=()=>{
  activeCat="all"; keyword=""; qInput.value=""; syncClear();
  renderCats(); renderGrid();
  window.scrollTo({top:0,behavior:"smooth"});
};

// 表示切り替え（カード / 目次）：選択を localStorage に保存（テーマと同型）
const viewCardBtn = document.getElementById("view-card");
const viewListBtn = document.getElementById("view-list");
function paintViewSeg(){
  viewCardBtn.setAttribute("aria-pressed", String(viewMode==="card"));
  viewListBtn.setAttribute("aria-pressed", String(viewMode==="list"));
}
function setView(mode){
  if(mode!=="card" && mode!=="list") return;
  if(mode===viewMode){ return; }
  viewMode = mode;
  try{ localStorage.setItem("zu-view", mode); }catch(e){}
  paintViewSeg();
  renderGrid();
}
viewCardBtn.onclick=()=>setView("card");
viewListBtn.onclick=()=>setView("list");

// 並べ替え（カテゴリ順 / 新着順）：選択を localStorage に保存（表示切替と同型）
const sortCatBtn = document.getElementById("sort-cat");
const sortNewBtn = document.getElementById("sort-new");
function paintSortSeg(){
  sortCatBtn.setAttribute("aria-pressed", String(sortMode==="cat"));
  sortNewBtn.setAttribute("aria-pressed", String(sortMode==="new"));
}
function setSort(mode){
  if(mode!=="cat" && mode!=="new") return;
  if(mode===sortMode){ return; }
  sortMode = mode;
  try{ localStorage.setItem("zu-sort", mode); }catch(e){}
  paintSortSeg();
  renderGrid();
}
sortCatBtn.onclick=()=>setSort("cat");
sortNewBtn.onclick=()=>setSort("new");

// ランダムに一枚：いま絞り込まれている並びから無作為に開く（ボタンと「r」キー共通）
function openRandom(){
  if(!currentList.length) return;
  openTip(currentList[Math.floor(Math.random()*currentList.length)].id);
}
document.getElementById("random").onclick=openRandom;

// カテゴリ帯：末尾まで送ったら右端フェードを消す（.at-end）
const catsEl = document.getElementById("cats");
function syncCatsEnd(){
  const atEnd = catsEl.scrollLeft + catsEl.clientWidth >= catsEl.scrollWidth - 2;
  catsEl.classList.toggle("at-end", atEnd);
}
catsEl.addEventListener("scroll", syncCatsEnd, {passive:true});
window.addEventListener("resize", syncCatsEnd, {passive:true});

// スクロール中だけ：検索窓の左のロゴと、右下のトップへ戻るボタンを出す
const miniLogo = document.getElementById("mini-logo");
const toTop = document.getElementById("to-top");
function syncScrollUI(){
  const show = (window.scrollY || document.documentElement.scrollTop) > 180;
  miniLogo.classList.toggle("is-hidden", !show);
  toTop.classList.toggle("is-hidden", !show);
}
function gotoTop(){ window.scrollTo({top:0,behavior:"smooth"}); }
miniLogo.onclick=e=>{ e.preventDefault(); gotoTop(); };
toTop.onclick=gotoTop;
window.addEventListener("scroll",syncScrollUI,{passive:true});
syncScrollUI();

// 起動時：URL から絞り込みと開いている詳細を復元する（共有リンク・リロード対応）
(function restoreFromURL(){
  const p = new URLSearchParams(location.search);
  const cat = p.get("cat");
  if(cat && (cat==="all" || CATEGORIES.some(c=>c.id===cat))) activeCat = cat;
  const q = p.get("q");
  if(q){ keyword = q; qInput.value = q; syncClear(); }
  // 表示の好み（カード/目次）を復元（URLには載せず localStorage のみ）
  try{ const v = localStorage.getItem("zu-view"); if(v==="list"||v==="card") viewMode = v; }catch(e){}
  paintViewSeg();
  // 並べ替えの好み（カテゴリ順/新着順）を復元（URLには載せず localStorage のみ）
  try{ const s = localStorage.getItem("zu-sort"); if(s==="cat"||s==="new") sortMode = s; }catch(e){}
  paintSortSeg();
})();

renderCats();
renderGrid();

// URL に #tip=id があれば、その詳細を開いた状態で始める
(function openTipFromURL(){
  const id = tipIdFromHash();
  if(id && TIPS.some(x=>x.id===id)){
    lastFocused = document.body;
    if(!(history.state && history.state.tip)) history.replaceState({tip:id},"",location.href);
    showModal(id);
  }
})();

// テーマ切り替え：右上のボタンで data-theme を反転し、選択を localStorage に保存する。
// 初期値は <head> のインラインスクリプトが描画前に決めている（FOUC防止）。
(function setupTheme(){
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const meta = document.querySelector('meta[name="theme-color"]');
  function paint(){
    const dark = root.getAttribute("data-theme") === "dark";
    // ダーク時は「明るくする」太陽、ライト時は「暗くする」月を見せる。
    // 起動時に createIcons() が走ると <i> は <svg> に置き換わるため、毎回アイコンを組み直す
    // （querySelector("i") に頼ると、置換後は null になって落ちる）。
    btn.innerHTML = `<i data-lucide="${dark ? "sun" : "moon"}" class="w-4 h-4"></i>`;
    btn.setAttribute("aria-pressed", String(dark));
    btn.setAttribute("aria-label", dark ? "ライトモードに切り替える" : "ダークモードに切り替える");
    if(meta) meta.setAttribute("content", dark ? "#15171c" : "#f7f6f2");
    lucide.createIcons();
  }
  btn.addEventListener("click", ()=>{
    const dark = root.getAttribute("data-theme") !== "dark";
    root.setAttribute("data-theme", dark ? "dark" : "light");
    try{ localStorage.setItem("zu-theme", dark ? "dark" : "light"); }catch(e){}
    paint();
  });
  paint();
})();

lucide.createIcons();
