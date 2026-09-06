/* A single router owns rendering; legacy records and article routes are retained. */
const redesignMeta = {version:'v1.43',dataThrough:'2026/09/06 23:00',reviewed:'2026/09/06'};
const safeText = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function searchText(value){return String(value ?? '').normalize('NFKC').toLowerCase().replace(/[\s\-/.、（）()]/g,'')}
function findRecords(records,query,date=''){
  const terms=String(query).trim().split(/\s+/).map(searchText).filter(Boolean);
  return records.filter(r=>{
    const haystack=searchText([r.brand,r.name,r.barcode,r.date,r.batch,...(r.dates||[])].join(' '));
    return terms.every(term=>haystack.includes(term))&&(!date||searchText([r.date,...(r.dates||[])].join(' ')).includes(searchText(date)));
  });
}
function scHeader(){return '<header class="sc-head"><a class="sc-brand" href="#/"><span class="sc-mark" aria-hidden="true">食</span>透明食品安全</a><nav class="sc-nav" aria-label="主要導覽"><a href="#/">油品查詢</a><a href="#/camellia">油品事件時序</a><a href="#/union-timeline">中聯事件時序</a></nav></header>'}
function home(){
app.innerHTML=`<main class="sc">${scHeader()}
<section class="sc-intro"><p class="sc-eyebrow">家庭食用油安全專題 / SAFECHECK</p><h1>家中的油，<em>先查再用。</em></h1><p>拿起油瓶，核對品牌、品名與有效日期。</p></section>
<p class="sc-stage">資料更新至 2026/09/06 23:00｜檢驗不合格、預防性下架與回收範圍分開標示。</p>
<section class="sc-workspace" aria-labelledby="search-title">
<div class="sc-search"><h2 id="search-title">查詢問題油品</h2>
<form id="sc-form"><label for="q">品牌、商品名稱或條碼</label><div class="sc-queryrow"><input id="q" type="search" placeholder="例如：麻油車、由豐將" autocomplete="off" required aria-describedby="sc-search-help"><button class="sc-primary" type="submit">開始查詢 →</button></div>
<div class="sc-filters"><div><label for="sc-kind">查詢範圍</label><select id="sc-kind"><option value="all">所有已收錄油品</option value="camellia">苦茶油與其他油品</option value="union">中聯油脂案</option></select></div><div><label for="sc-date">有效日期（選填）</label><input id="sc-date" type="text" inputmode="numeric" placeholder="例如：20280705" aria-describedby="sc-date-help"><span class="sc-helper" id="sc-date-help">可輸入 2028/07/05 或 20280705</span></div></div>
<p class="sc-helper" id="sc-search-help">查不到 ≠ 安全。條碼與批次資料可能尚未收錄。</p></form>
<button class="sc-camera" type="button" id="sc-camera">開啟相機掃條碼</button><p class="sc-helper">若瀏覽器不支援辨識（包含部分 iPad），請直接輸入品名。</p>
<div class="sc-quick"><span>快速查：</span><button type="button" data-query="麻油車">麻油車</button><button type="button" data-query="信義鄉農會">信義鄉農會</button><button type="button" data-query="由豐">由豐將</button></div></div>
<aside class="sc-guide"><h2>先核對，再判讀</h2><ol class="sc-steps"><li><div><strong>看清商品名稱</strong><p>同品牌可能有不同油品，不要只看公司名稱。</p></div></li><li><div><strong>找瓶身有效日期</strong><p>包裝日期、製造日期與有效日期並不相同。</p></div></li><li><div><strong>確認公告處置範圍</strong><p>超標批次、預防性下架及擴大退貨分開看。</p></div></li></ol></aside></section>
<div class="sc-privacy"><span>免登入</span><span>不紀錄查詢個資</span><span>不讀取發票載具</span></div>
<section id="sc-results" class="sc-results" aria-live="polite" aria-atomic="false" aria-label="查詢結果"></section>
<section class="sc-section" aria-labelledby="news-title"><div class="sc-section-head"><h2 id="news-title">這幾天，先留意</h2><span>查核至 2026/09/05 · 點閱原始公告</span></div>
<div class="sc-news"><article><time datetime="2026-09-04">09.04 / 臺北市衛生局</time><h3>惠家香南瓜籽油<br>不分批號預防性下架</h3><p>公告檢驗批次有效日期為 2028/03/11。其他批次的預防性措施，不等同每批均已驗出超標。</p><a href="https://health.gov.taipei/News_Content.aspx?n=BB5A41BA1E6CA260&amp;s=5A8066C63129ABD1&amp;sms=72544237BBE4C5F6" target="_blank" rel="noopener noreferrer">閱讀官方公告 ↗</a></article>
<article><time datetime="2026-09-01">09.01 / 新北市衛生局</time><h3>永利胡麻油案<br>核對兩款市售產品</h3><p>金葫蘆特級胡麻油 3L（2028/08/13）、好時來小磨香油 3L（2028/08/18）列入處置；請核對包裝。</p><a href="https://www.fda.gov.tw/tc/csmnewsContent.aspx?id=t634648&amp;mid=267" target="_blank" rel="noopener noreferrer">閱讀官方公告 ↗</a></article>
<article><time datetime="2026-09-02">09.02 / 衛生福利部</time><h3>中聯油脂案<br>20% 比例來源的官方說明</h3><p>衛福部表示，比例來自 7/4 專家會議建議，並駁斥「總統指示」說法。這不是新增問題產品公告。</p><a href="https://www.fda.gov.tw/tc/newsContent.aspx?cid=4&amp;id=31722" target="_blank" rel="noopener noreferrer">閱讀官方說明 ↗</a></article></div></section>
<section class="sc-section"><div class="sc-section-head"><h2>把事件看清楚</h2><span>檢驗、處置與責任，分開閱讀</span></div><div class="sc-topics"><article class="sc-topic"><p class="sc-eyebrow">01 / 油品抽驗與追查</p><h3>苦茶油與其他油品</h3><p>不同品牌、代工廠與原料來源，不直接併成同一條供應鏈。</p><div class="sc-topic-links"><a href="#/camellia">事件時序 →</a><a href="camellia-report.html">我們的整理 →</a></div></article><article class="sc-topic"><p class="sc-eyebrow">02 / 中聯油脂事件</p><h3>從異常警訊到通報</h3><p>追蹤下游處置與司法進度；起訴指控不等同法院定罪。</p><div class="sc-topic-links"><a href="#/union-timeline">事件時序 →</a><a href="union-report.html">我們的整理 →</a></div></article></div></section>
<div class="sc-disclaimer">本網站不是政府官方網站，也不提供商品安全保證。檢驗「未檢出」不等於零，須搭配定量極限（LOQ）判讀；實際下架與回收範圍以主管機關最新公告為準。</div><footer class="sc-footer"><span>透明食品安全 · ${redesignMeta.version}</span><a href="https://www.fda.gov.tw/TC/site13712.aspx" target="_blank" rel="noopener noreferrer">食藥署油脂案專區 ↗</a></footer></main>`;
document.getElementById('sc-form').addEventListener('submit',e=>{e.preventDefault();runSearch()});
document.querySelectorAll('[data-query]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('q').value=b.dataset.query;runSearch()}));
document.getElementById('sc-camera').addEventListener('click',()=>scanAtHome());
}
function runSearch(value){
 const q=value??document.getElementById('q').value.trim();
 const date=document.getElementById('sc-date').value.trim();
 const box=document.getElementById('sc-results');
 if(!q)return;
 if(date&&!/^\d{4}[/.\-]?\d{2}[/.\-]?\d{2}$/.test(date)){box.innerHTML='<p class="sc-empty">請以西元年月日輸入有效日期，例如 20280705。</p>';return}
 const kind=document.getElementById('sc-kind').value;
 const records=kind==='camellia'?camellia:kind==='union'?union:[...camellia,...union];
 const matches=findRecords(records,q,date);
 const items=matches.slice(0,60);
 box.innerHTML=`<h2>找到 ${matches.length} 筆相符紀錄</h2><p class="sc-helper">請逐項核對有效日期與處置範圍；網站資料整理不取代主管機關最新公告。</p>`+(items.length?items.map(r=>{
 const status=r.status==='red'?'red':'yellow';
 const label=status==='red'?'既有資料：問題產品／下架紀錄':'既有資料：需核對／擴大退貨等措施';
 return `<article class="result ${status}"><span class="sc-result-type">${label}</span><h3>${safeText(r.brand)}｜${safeText(r.name)}</h3><p><strong>有效日期／範圍：</strong>${safeText(r.date||(r.dates||[]).join('、')||'原紀錄未提供')}</p>${r.batch?`<p>批號：${safeText(r.batch)}</p>`:''}<p>${safeText(r.note)}</p>${r.source?`<a href="${safeText(r.source)}" target="_blank" rel="noopener noreferrer">核對來源公告 ↗</a>`:'<p>此紀錄來源連結待補，尚須查核。</p>'}</article>`;
 }).join(''):'<div class="sc-empty"><h3>目前沒有相符紀錄，不等於安全</h3><p>請試試較短的品名，或移除日期篩選。若是 9 月新公告產品，請先查看首頁新聞來源。</p></div>');
 if(matches.length>60)box.insertAdjacentHTML('beforeend','<p>目前顯示前 60 筆；請補上品牌或日期縮小範圍。</p>');
 box.scrollIntoView({block:'start',behavior:'auto'});
}
async function scanAtHome(){
 if(!('BarcodeDetector' in window)||!navigator.mediaDevices?.getUserMedia){alert('此瀏覽器不支援條碼辨識，請輸入商品名稱或條碼。');document.getElementById('q').focus();return}
 let stream,closed=false;
 const layer=document.createElement('div');layer.className='cameraLayer';layer.setAttribute('role','dialog');layer.setAttribute('aria-modal','true');layer.setAttribute('aria-label','掃描條碼');
 layer.innerHTML='<div class="cameraCard"><video playsinline muted></video><p>對準條碼；影像不會上傳。</p><button type="button">關閉相機</button></div>';
 document.body.append(layer);const button=layer.querySelector('button');
 const close=()=>{closed=true;stream?.getTracks().forEach(t=>t.stop());layer.remove();removeEventListener('keydown',onKey);removeEventListener('hashchange',close);document.getElementById('sc-camera')?.focus()};
 const onKey=e=>{if(e.key==='Escape')close();if(e.key==='Tab'){e.preventDefault();button.focus()}};
 button.onclick=close;button.focus();addEventListener('keydown',onKey);addEventListener('hashchange',close);
 try{const detector=new BarcodeDetector({formats:['ean_13','ean_8','upc_a','upc_e']});stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false});if(closed){stream.getTracks().forEach(t=>t.stop());return}const video=layer.querySelector('video');video.srcObject=stream;await video.play();
 const scan=async()=>{if(closed)return;try{const codes=await detector.detect(video);if(codes[0]?.rawValue&&!closed){const value=codes[0].rawValue;close();document.getElementById('q').value=value;runSearch(value);return}}catch{}if(!closed)requestAnimationFrame(scan)};scan();
 }catch{close();alert('無法使用相機，請直接輸入品名或條碼。')}
}
function route(){
 const path=location.hash.replace(/^#\/?/,'');
 if(path==='camellia')story();
 else if(path==='union-timeline')unionStory();
 else{home();if(path==='union')document.getElementById('sc-kind').value='union';else if(path==='camellia-check')document.getElementById('sc-kind').value='camellia'}
 if(path==='camellia'||path==='union-timeline'){
 document.querySelectorAll('.date,.footer span:last-child').forEach(el=>el.textContent='v1.43・資料至 2026/09/06');
 document.querySelectorAll('.eventCard h3,.eventCard p').forEach(el=>el.innerHTML=rich(el.textContent));
 }
 scrollTo(0,0);
}
addEventListener('hashchange',route);
route();
