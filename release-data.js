/* Confirmed update: facts and disposition are independent fields. */
const releaseMeta={version:'v1.44',cutoff:'2026/09/08 23:00',timezone:'Asia/Taipei',reviewed:'2026/09/08'};
const releaseSources={
 yongli:{id:'SRC-142-01',publisher:'新北市衛生局／食藥署轉載',date:'2026-09-01',type:'官方公告',url:'https://www.fda.gov.tw/tc/csmnewsContent.aspx?id=t634648&mid=267',title:'永利胡麻油案與兩款市售產品處置'},
 pumpkin:{id:'SRC-142-02',publisher:'臺北市衛生局',date:'2026-09-04',type:'官方公告',url:'https://health.gov.taipei/News_Content.aspx?n=BB5A41BA1E6CA260&s=5A8066C63129ABD1&sms=72544237BBE4C5F6',title:'惠家香南瓜籽油特定批次超標與不分批號預防性下架'},
 pumpkinFollowup:{id:'SRC-143-01',publisher:'臺北市衛生局',date:'2026-09-04',type:'官方公告',url:'https://health.gov.taipei/News_Content.aspx?n=BB5A41BA1E6CA260&s=5A8066C63129ABD1&sms=72544237BBE4C5F6',title:'惠家香北市回收進度與同廠產品抽驗'},
 taoyuan:{id:'SRC-142-03',publisher:'桃園電子報／LIFE轉載',date:'2026-09-04',type:'媒體引述衛生局；官方原始結果頁待補',url:'https://life.tw/article/桃市抽驗油品2款致癌物超標-苦茶油南瓜籽油急下架-3139030',title:'桃園第三波抽驗：惠家香、德記'},
 sesame:{id:'SRC-142-04',publisher:'食藥署',date:'2026-08-27',type:'官方公告',url:'https://www.fda.gov.tw/TC/newsContent.aspx?cid=4&id=t634638',title:'麻油車冷壓黑麻油檢驗與三效期回收'},
 gaoyang:{id:'SRC-142-05',publisher:'食藥署',date:'2026-08-01',type:'官方公告',url:'https://www.fda.gov.tw/TC/newsContent.aspx?cid=4&id=t634569',title:'高仰三兩批次檢驗結果'},
 youfeng:{id:'SRC-142-06',publisher:'臺中市食品藥物安全處／食藥署轉載',date:'2026-08-22',type:'官方公告',url:'https://www.fda.gov.tw/TC/csmnewsContent.aspx?id=t634625&mid=267',title:'由豐將苦茶油批次確認不合格'},
 clarification:{id:'SRC-142-07',publisher:'衛福部／食藥署',date:'2026-09-02',type:'官方說明',url:'https://www.fda.gov.tw/tc/newsContent.aspx?cid=4&id=31722',title:'20%比例來源與相關說法之駁斥'},
 fatty:{id:'SRC-142-08',publisher:'聯合報／經濟日報',date:'2026-08-31',type:'媒體引述食藥署',url:'https://money.udn.com/money/story/7307/9724955',title:'目前苦茶油檢體脂肪酸組成未見異常'},
 changhua:{id:'SRC-142-09',publisher:'彰化縣衛生局／食藥署轉載',date:'2026-08-20',type:'官方公告',url:S_v141.changhua,title:'彰化抽驗22件苦茶油4件不合格'},
 spring:{id:'SRC-142-10',publisher:'彰化縣衛生局／食藥署轉載',date:'2026-08-28',type:'官方公告',url:S_v141.spring,title:'春木製油停工與回收'},
 tea:{id:'SRC-142-11',publisher:'臺北市衛生局',date:'2026-08-14',type:'官方公告',url:S.tea,title:'麻油車頂級冷壓苦茶油'},
 batches:{id:'SRC-142-12',publisher:'中央社',date:'2026-08-21',type:'媒體引述彰化衛生局',url:'https://www.cna.com.tw/news/aloc/202608210142.aspx',title:'彰化四款苦茶油檢驗值及有效日期'},
 mandatory:{id:'SRC-142-13',publisher:'食藥署',date:'2026-07-23',type:'官方清單索引',url:'https://www.fda.gov.tw/TC/siteList.aspx?sid=13708',title:'強制下架產品與下游清單'},
 relisting:{id:'SRC-142-14',publisher:'食藥署',date:'2026-07-23',type:'官方清單索引',url:'https://www.fda.gov.tw/TC/siteList.aspx?sid=13726',title:'可重新上架產品清單'},
 fourthWave:{id:'SRC-144-01',publisher:'臺北市政府衛生局',date:'2026-09-07',type:'官方公告',url:'https://health.gov.taipei/News_Content.aspx?n=BB5A41BA1E6CA260&s=9F7188A8D1254D7D&sms=72544237BBE4C5F6',title:'第四波油品擴大抽驗：4件麻油產品不合格'}
};
const releaseArchived=[];
for(let i=camellia.length-1;i>=0;i--){
 if(camellia[i].brand==='高仰三'||camellia[i].brand==='由豐'||camellia[i].name==='冷壓黑麻油'){
  releaseArchived.unshift({...camellia[i],archiveReason:'舊狀態／合併效期記錄；由 v1.43 明細取代'});
  camellia.splice(i,1);
 }
}
function released(id,brand,name,date,status,disposition,note,sourceKey,value=null){
 const s=releaseSources[sourceKey];
 return {id,brand,name,date,status,disposition,note,source:s.url,sourceId:s.id,sourceType:s.type,announced:s.date,labResults:value===null?[]:[{value,unit:'μg/kg',limit:2,loq:null,method:null,sourceId:s.id,source:s.url,date:s.date}],loq:null,method:null};
}
camellia.push(
 released('PROD-C-004','高仰三','高仰三苦茶油 250mL','2028/06/22','red','檢驗不合格／下架回收','官方抽驗 BaP 2.4 μg/kg；請停止食用並依公告處理。','gaoyang',2.4),
 released('PROD-C-014','高仰三','高仰三苦茶油 250mL','2028/06/15','red','檢驗不合格／下架回收','官方抽驗 BaP 2.6 μg/kg；與 6/22 批次分列。','gaoyang',2.6),
 released('PROD-C-016','麻油車／統購實業','冷壓黑麻油 255mL','2028/04/06','red','檢驗不合格／下架回收','本效期公開檢出 3.2 μg/kg。三個回收效期合計360瓶，出貨聖德科斯；不能把本數值套用到另外兩個效期。','sesame',3.2),
 released('PROD-C-017','麻油車／統購實業','冷壓黑麻油 255mL','2028/05/03','red','檢驗不合格／下架回收','臺北第4波抽驗檢出 BaP 2.3 μg/kg；本產品先前已列入不分批號預防性下架。','fourthWave',2.3),
 released('PROD-C-018','麻油車／統購實業','冷壓黑麻油 255mL','2028/06/24','red','列入下架回收／本批檢驗數值未公開','食藥署列入回收範圍；請停止食用並向原通路退貨。本效期沒有個別公開檢驗數值。','sesame'),
 released('PROD-C-024','永利油廠／辰邦','特級胡麻油','未公開','red','超標／全數封存未售出','BaP 2.9 μg/kg；859.2 L 已全數封存。其原料另製成兩款市售產品，兩款個別檢驗結果未公開。','yongli',2.9),
 released('PROD-C-025','永利油廠／辰邦／金葫蘆','金葫蘆特級胡麻油 3L','2028/08/13','red','列入下架回收／個別檢驗值未公開','請暫停食用並洽永利／辰邦退換貨：02-85213811。與好時來該批合計630罐、已售283罐；不可把上游檢體2.9直接填成本產品結果。','yongli'),
 released('PROD-C-026','永利油廠／辰邦／好時來','好時來小磨香油 3L','2028/08/18','red','列入下架回收／個別檢驗值未公開','請暫停食用並洽永利／辰邦退換貨：02-85213811。與金葫蘆該批合計630罐、已售283罐；本產品個別檢驗值未公開。','yongli'),
 released('PROD-C-027','惠家香實業','南瓜籽油 250mL','2028/03/11','red','公告不合格／數值來源差異待釐清','臺北官方公告3.0 μg/kg；桃園相關報導3.2 μg/kg。兩來源分列，不平均、不自行推定為複驗差異。北市全聯進貨384瓶、已退貨328瓶；南瓜籽油不分批號預防性下架。','pumpkin',3.0),
 released('PROD-C-028','德記榨油工廠','頂級小菓苦茶油 600mL','2027/07/20','red','媒體引述抽驗不合格／下架回收','桃園相關報導引述衛生局：BaP 2.8 μg/kg。官方原始結果頁待補；與德昌商號分案管理。','taoyuan',2.8),
 released('PROD-C-029','福壽','100%芝麻油 190KG/桶','2028/04/19','yellow','永利案原料追查／原料個別檢驗值未公開','官方追查永利所用原料；不可把永利成品超標直接當成本原料檢驗超標，也沒有依此證據將本案併入中聯大豆沙拉油案。','yongli'),
 released('PROD-C-030','麻油車／統購實業','冷壓黑麻油 255mL','2028/02/23','red','檢驗不合格／下架回收','臺北第4波抽驗檢出 BaP 2.2 μg/kg；本產品已先不分批號預防性下架，數值只適用此效期。','fourthWave',2.2),
 released('PROD-C-031','永利油廠／辰邦／金葫蘆','金葫蘆特級胡麻油 3L','2028/04/28','red','檢驗不合格／下架回收','臺北第4波抽驗檢出 BaP 3.4 μg/kg；本產品先前已不分批號預防性下架，數值只適用此效期。','fourthWave',3.4),
 released('PROD-C-032','永利油廠／辰邦／金葫蘆','金葫蘆特級胡麻油 3L','2028/05/15','red','檢驗不合格／下架回收','臺北第4波抽驗檢出 BaP 2.8 μg/kg；同品項其他效期必須分開核對。','fourthWave',2.8)
);
const pumpkin=camellia.find(x=>x.id==='PROD-C-027');
pumpkin.labResults.push({value:3.2,unit:'μg/kg',limit:2,loq:null,method:null,sourceId:releaseSources.taoyuan.id,source:releaseSources.taoyuan.url,date:releaseSources.taoyuan.date});
pumpkin.secondarySource=releaseSources.taoyuan.url;pumpkin.allDatesPrecaution=true;
const existingMap=[
 ['連淨','連淨苦茶油','PROD-C-001'],['永豐餘生技','在地金花小菓苦茶油','PROD-C-002'],['國際機能食品','台灣苦茶油','PROD-C-003'],['庭茂農業生技','極品苦茶油','PROD-C-005'],['保證責任雲林縣宮北合作農場','苦茶油','PROD-C-006'],['聚興製油工廠','東山苦茶油','PROD-C-007'],['德昌商號','苦茶油','PROD-C-008'],['百年堂','冷壓黃金苦茶油','PROD-C-009'],['鑫隆發','苦茶油（各規格）','PROD-C-010'],['金品芳／由豐將','苦茶油（100%）','PROD-C-011'],['翰霖貿易','苦茶油','PROD-C-012'],['南投縣信義鄉農會','苦茶油','PROD-C-013'],['麻油車／統購實業','頂級冷壓苦茶油','PROD-C-015'],['富香純','100%苦茶油','PROD-C-019'],['南投縣農會食品加工廠','100%冷壓苦茶油','PROD-C-020'],['松鼎實業','松鼎高山苦茶油','PROD-C-021'],['崇贏實業','祥記100%頂級茶仔油（又名苦茶油）','PROD-C-022'],['春木製油','苦茶油','PROD-C-023']
];
for(const r of camellia){
 if(!r.id)r.id=existingMap.find(x=>x[0]===r.brand&&x[1]===r.name)?.[2];
 if(!r.disposition)r.disposition=r.status==='red'?'檢驗不合格／下架回收':'擴大退貨／需核對公告';
 r.method??=null;r.loq??=null;
}
const yf=camellia.find(x=>x.id==='PROD-C-011');
Object.assign(yf,{...released('PROD-C-011','金品芳／由豐將','由豐將苦茶油（100%）','2028/07/02','red','檢驗不合格／下架回收',yf.note,'youfeng',2.1)});
const tea=camellia.find(x=>x.id==='PROD-C-015');tea.allDatesPrecaution=true;
for(const [id,value,key] of [['PROD-C-015',2.1,'tea'],['PROD-C-019',2.1,'changhua'],['PROD-C-020',3.6,'changhua'],['PROD-C-021',2.9,'changhua'],['PROD-C-022',5.6,'changhua'],['PROD-C-023',23,'spring']]){
 const r=camellia.find(x=>x.id===id);const s=releaseSources[key];r.sourceId=s.id;r.announced=s.date;
 r.labResults=[{value,unit:'μg/kg',limit:2,loq:null,method:null,sourceId:s.id,source:s.url,date:s.date}];
 if(key==='changhua'){r.secondarySource=releaseSources.batches.url;r.labResults[0].sourceId=releaseSources.batches.id;r.labResults[0].source=releaseSources.batches.url}
}
for(const row of timeline){
 if(row[3].includes('麻油車冷壓黑麻油檢出'))row[4]='效期2028/04/06檢出3.2 μg/kg；後續第4波抽驗確認2028/02/23、2028/05/03分別為2.2、2.3 μg/kg。2028/06/24仍列回收範圍，未公布個別檢驗值。';
 if(row[3].includes('問題製油廠累計15家')){row[0]='8/26';row[3]='全國抽驗658件，另有14件苦茶油不合格';row[4]='食藥署公布截至8/26抽驗統計；此為当時抽驗結果，不是9月最新累計，亦不能推定每一家油廠污染原因。'.replace('当','當')}
}
timeline.push(
 ['8/31','testing','檢體分析','目前苦茶油檢體脂肪酸組成未見異常','媒體引述食藥署分析結果；只限目前檢體與檢驗項目，不能推論全部市售油品無混油，也不能抵銷BaP超標。',releaseSources.fatty.url,'聯合報引述食藥署'],
 ['9/1','alert','自主通報・下架回收','永利胡麻油案與兩款市售產品','8/29通報特級胡麻油2.9 μg/kg；金葫蘆3L效期2028/08/13、好時來3L效期2028/08/18列入處置，個別成品檢驗數值未公開。',releaseSources.yongli.url,'新北市衛生局／食藥署'],
 ['9/4','alert','抽驗・來源差異','惠家香南瓜籽油與德記苦茶油下架','惠家香效期2028/03/11，臺北公告3.0、桃園報導3.2 μg/kg，分列保存；德記效期2027/07/20報導2.8 μg/kg，官方原始結果頁待補。',releaseSources.taoyuan.url,'桃園電子報／LIFE；惠家香另見臺北官方'],
 ['9/4','action','擴大預防性措施','臺北要求惠家香南瓜籽油不分批號下架','特定效期檢驗不合格與所有批號預防性下架分開記錄，其他油品抽驗不等於已確定超標。',releaseSources.pumpkin.url,'臺北市衛生局']
 ,['9/4','action','回收進度・抽驗中','惠家香同廠三款油品尚在抽驗','北市全聯進貨384瓶、已退貨328瓶；同廠苦茶油、亞麻仁油與小磨香油為抽驗範圍，尚未公布不合格結果。',releaseSources.pumpkinFollowup.url,'臺北市衛生局']
 ,['9/7','alert','第4波抽驗・不合格','麻油車冷壓黑麻油新增兩個不合格效期','統健實業向統購實業進貨的冷壓黑麻油已先不分批號預防性下架；臺北抽驗12個不同效期，其中2028/02/23、2028/05/03分別檢出 BaP 2.2、2.3 μg/kg。',releaseSources.fourthWave.url,'臺北市衛生局']
 ,['9/7','alert','第4波抽驗・不合格','金葫蘆特級胡麻油3L新增兩個不合格效期','新北永利油廠案產品已先不分批號預防性下架；臺北抽驗5個不同效期，其中2028/04/28、2028/05/15分別檢出 BaP 3.4、2.8 μg/kg。',releaseSources.fourthWave.url,'臺北市衛生局']
);
unionTimeline.push(['9/2','official','官方說明','衛福部說明20%比例的來源','衛福部表示20%比例來自7/4專家會議建議，駁斥總統指示及署長與案件相關人士熟識等說法；這是官方聲明，不是法院判決，也不是新增產品名單。',releaseSources.clarification.url,'衛福部／食藥署']);
