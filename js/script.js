/* ============ DATA ============ */
const BRANDS = {
  Honda:{icon:"🔴",logo:"img/Honda.svg",models:[["BeAT",2008,2026],["Vario",2006,2026],["Scoopy",2010,2026],["Genio",2019,2026],["Stylo 160",2024,2026],["PCX",2010,2026],["ADV",2019,2026],["Forza 250",2018,2026]]},
  Yamaha:{icon:"🔵",logo:"img/yamaha.svg",models:[["Nouvo",2002,2008],["Mio",2003,2026],["Fino",2012,2026],["Fazzio",2022,2026],["Grand Filano",2023,2026],["NMAX",2015,2026],["Aerox",2016,2026],["Lexi",2018,2026],["XMAX 250",2017,2026],["X-Ride",2013,2026],["FreeGo",2018,2026],["Gear 125",2020,2026]]},
  Suzuki:{icon:"⚪",logo:"img/Suzuki.svg",models:[["Spin 125",2006,2011],["Skywave 125",2007,2011],["Skydrive 125",2009,2014],["Hayate 125",2011,2014],["Nex",2011,2026],["Address",2014,2026],["Avenis 125",2022,2026],["Burgman Street",2023,2026]]},
  Kymco:{icon:"🟢",logo:"img/Kymco.svg",models:[["Like 150",2015,2026],["Downtown 250",2015,2026]]},
  TVS:{icon:"🟣",logo:"img/TVS.svg",models:[["Dazz 110",2014,2020],["Callisto",2023,2026]]},
  Vespa:{icon:"🟡",logo:"img/vespa.svg",models:[["LX 150",2010,2020],["Primavera 150",2013,2026],["Sprint 150",2014,2026],["GTS 300",2016,2026]]}
};

const COMPLAINTS=[
  {key:"CVT",emoji:"⚙️",tip:"Rekam saat motor idle lalu gas perlahan. Dekatkan mic ke area CVT (bak kiri bawah).",diag:[
    {sev:"warn",title:"Roller CVT Aus",acc:"87.4",sol:["Ganti roller CVT sesuai spesifikasi pabrik","Cek dan bersihkan rumah roller","Servis CVT rutin tiap 8.000 km"]},
    {sev:"crit",title:"V-Belt Retak / Getas",acc:"92.1",sol:["Segera ganti V-belt, hindari putus di jalan","Periksa kondisi pulley primer & sekunder","Bawa ke bengkel dalam 1-2 hari"]},
    {sev:"warn",title:"Kampas Kopling Ganda Aus",acc:"84.6",sol:["Ganti kampas kopling ganda","Cek per sentrifugal","Bersihkan mangkok kopling"]}]},
  {key:"Mesin",emoji:"🔧",tip:"Rekam saat mesin dingin baru dinyalakan, lalu ulangi saat panas. Mic dekat blok mesin.",diag:[
    {sev:"crit",title:"Klep Tersendat / Kotor",acc:"90.3",sol:["Setel ulang celah klep","Bersihkan ruang bakar & klep","Ganti oli dengan grade tepat"]},
    {sev:"warn",title:"Rantai Keteng Kendur",acc:"86.9",sol:["Setel/ganti tensioner keteng","Periksa rantai keteng","Servis besar bila suara makin kasar"]},
    {sev:"crit",title:"Piston / Ring Piston Aus",acc:"88.7",sol:["Perlu turun mesin / overhaul","Ganti ring piston & cek dinding silinder","Jangan dipaksa jalan jauh"]}]},
  {key:"Suspensi",emoji:"🛠️",tip:"Rekam sambil menekan jok naik-turun beberapa kali di tempat sepi.",diag:[
    {sev:"warn",title:"Sokbreker Belakang Bocor",acc:"83.2",sol:["Ganti/rekondisi sokbreker","Cek kebocoran oli sok","Periksa bushing arm"]},
    {sev:"warn",title:"Seal Sok Depan Aus",acc:"81.5",sol:["Ganti seal sok depan","Isi ulang oli sok","Cek as sok dari karat"]}]},
  {key:"Rem",emoji:"🛑",tip:"Rekam sambil menarik tuas rem pelan saat motor didorong perlahan.",diag:[
    {sev:"crit",title:"Kampas Rem Habis",acc:"94.0",sol:["Segera ganti kampas rem","Cek permukaan cakram/tromol","Jangan tunda demi keselamatan"]},
    {sev:"warn",title:"Cakram Rem Bergelombang",acc:"85.8",sol:["Bubut atau ganti cakram","Periksa kaliper macet","Ganti minyak rem"]}]},
  {key:"Ban",emoji:"🛞",tip:"Rekam sambil motor dijalankan pelan, dengarkan suara gesekan ban ke aspal.",diag:[
    {sev:"warn",title:"Ban Aus Tidak Merata",acc:"80.9",sol:["Ganti ban bila kembang tipis","Cek tekanan angin rutin","Periksa spooring/pelek"]},
    {sev:"warn",title:"Bearing Roda Oblak",acc:"87.7",sol:["Ganti bearing roda","Cek kekencangan as roda","Servis di bengkel terpercaya"]}]},
  {key:"Lampu",emoji:"💡",tip:"Untuk kelistrikan, rekam suara klik relay / dengung saat lampu dinyalakan.",diag:[
    {sev:"warn",title:"Aki Lemah / Soak",acc:"89.1",sol:["Ganti aki bila tegangan drop","Cek sistem pengisian (kiprok)","Bersihkan terminal aki"]},
    {sev:"warn",title:"Kiprok / Regulator Bermasalah",acc:"82.4",sol:["Ganti kiprok","Cek spul pengisian","Periksa soket kelistrikan"]}]},
  {key:"Injeksi",emoji:"⛽",tip:"Rekam saat idle dan saat gas dibuka mendadak, dengarkan suara tersendat.",diag:[
    {sev:"crit",title:"Injektor Tersumbat",acc:"91.6",sol:["Bersihkan injektor (injector cleaning)","Ganti filter bensin","Gunakan BBM sesuai kompresi"]},
    {sev:"warn",title:"Throttle Body Kotor",acc:"85.0",sol:["Bersihkan throttle body","Reset ISC/idle","Servis injeksi berkala"]}]}
];

const BENGKEL=[
  {nm:"AHASS Astra Motor Denpasar",ad:"Jl. Cokroaminoto No.44, Denpasar",dist:"2.1 km",rate:"4.8",lat:-8.6382,lng:115.2085},
  {nm:"Yamaha Deta Denpasar",ad:"Jl. Teuku Umar No.188, Denpasar",dist:"3.4 km",rate:"4.7",lat:-8.6842,lng:115.2115},
  {nm:"Bengkel Motor Kuta Jaya",ad:"Jl. Raya Kuta No.77, Badung",dist:"5.8 km",rate:"4.6",lat:-8.7205,lng:115.1750},
  {nm:"Servis Motor Canggu",ad:"Jl. Pantai Berawa, Badung",dist:"7.2 km",rate:"4.9",lat:-8.6478,lng:115.1385},
  {nm:"AHASS Ubud Motor",ad:"Jl. Raya Ubud No.12, Gianyar",dist:"9.5 km",rate:"4.7",lat:-8.5069,lng:115.2625},
  {nm:"Planet Ban Gianyar",ad:"Jl. Ngurah Rai No.55, Gianyar",dist:"11.3 km",rate:"4.5",lat:-8.5430,lng:115.3260}
];

const SHOPS=[
  {nm:"Tokopedia",sub:"Spare part original bergaransi",ic:"🛍️",url:"https://www.tokopedia.com/search?st=product&q=sparepart+motor+original"},
  {nm:"Shopee",sub:"Cek harga & promo terbaru",ic:"🛒",url:"https://shopee.co.id/search?keyword=sparepart%20motor%20original"},
  {nm:"TikTok Shop",sub:"Live shopping spare part",ic:"🎵",url:"https://www.tiktok.com/search?q=sparepart%20motor%20original"}
];

const CALLOUT=[
  {nm:"Bli Made Mobile Service",spec:"Servis panggilan • Matic & Manual",area:"Denpasar",eta:"20–30 mnt",price:"Mulai Rp50rb",rate:"4.9",phone:"6281000000001",ic:"🛵",open:true},
  {nm:"Ketut CVT Specialist",spec:"Spesialis CVT & tune-up",area:"Badung / Kuta",eta:"25–40 mnt",price:"Mulai Rp75rb",rate:"4.8",phone:"6281000000002",ic:"⚙️",open:true},
  {nm:"Gede Rescue Motor 24 Jam",spec:"Darurat • Mogok • Aki soak",area:"Denpasar / Sanur",eta:"15–25 mnt",price:"Mulai Rp60rb",rate:"4.7",phone:"6281000000003",ic:"🔋",open:true},
  {nm:"Wayan Ban Panggilan",spec:"Tambal & ganti ban di tempat",area:"Gianyar / Ubud",eta:"30–45 mnt",price:"Mulai Rp40rb",rate:"4.6",phone:"6281000000004",ic:"🛞",open:false}
];

const MONTHS=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];

/* ============ STATE ============ */
let state={
  user:JSON.parse(localStorage.getItem('cm_user')||'null'),
  garage:JSON.parse(localStorage.getItem('cm_garage')||'[]'),
  diagCount:parseInt(localStorage.getItem('cm_diag')||'0',10),
  history:JSON.parse(localStorage.getItem('cm_history')||'[]'),
  wizStep:1,wizData:{},activeMoto:null,chatMode:'quick',histFilter:'all'
};
function save(){
  localStorage.setItem('cm_user',JSON.stringify(state.user));
  localStorage.setItem('cm_garage',JSON.stringify(state.garage));
  localStorage.setItem('cm_diag',String(state.diagCount));
  localStorage.setItem('cm_history',JSON.stringify(state.history));
}
const NAV_SCREENS=['menu','garage','callout','settings','riwayat','chat-screen'];

/* ============ PILL HELPERS ============ */
function setPill(el){
  el.parentElement.querySelectorAll('.pill-item').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
}
function setSvcPill(el){
  el.parentElement.querySelectorAll('.svc-pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
}

/* ============ NAV ============ */
function go(id){
  if(id==='menu'){setTimeout(startHeroCarousel,100);}
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el=document.getElementById(id);
  el.classList.add('active');
  el.querySelectorAll('.anim').forEach(a=>{a.style.animation='none';a.offsetHeight;a.style.animation=''});
  window.scrollTo(0,0);
  const nav=document.getElementById('bottom-nav');
  const show=NAV_SCREENS.includes(id);
  nav.classList.toggle('show',show);
  document.querySelectorAll('.nav-item').forEach(n=>{
    let navId=id;
    if(id==='garage')navId='jelajah';
    n.classList.toggle('on',n.dataset.nav===navId);
  });
  if(id==='menu')hydrateHome();
}

/* ============ LANDING ============ */
function login(){
  if(!state.user){
    const names=["Wayan Diagnostic","Kadek Rider","Gede Biker","Made Sound","Nyoman Motor"];
    const nm=names[Math.floor(Math.random()*names.length)];
    state.user={name:nm,email:nm.toLowerCase().split(' ')[0]+"@gmail.com",initial:nm[0]};
    save();
  }
  hydrateUser();
  requestPermissions();
  go('menu');
}
function requestPermissions(){
  try{if(navigator.geolocation)navigator.geolocation.getCurrentPosition(()=>{},()=>{},{timeout:8000});}catch(e){}
  try{if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)navigator.mediaDevices.getUserMedia({audio:true}).then(s=>s.getTracks().forEach(t=>t.stop())).catch(()=>{});}catch(e){}
}
function hydrateUser(){
  if(!state.user)return;
  const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  set('set-avatar',state.user.initial);
  set('set-name',state.user.name);
  set('set-email',state.user.email);
  hydrateHome();
}
function ringPct(m){
  const s=(m.brand.length*7+m.model.length*13+((m.year||2020)%100)*3)%37;
  return 62+s;
}
function hydrateHome(){
  const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  set('stat-garage',state.garage.length);
  set('stat-diag',state.diagCount);
  const ic=document.getElementById('reco-ic'),lbl=document.getElementById('reco-lbl'),nm=document.getElementById('reco-nm');
  if(ic){
    if(state.garage.length){
      const m=state.garage[state.garage.length-1];
      ic.innerHTML=`<img src="${BRANDS[m.brand]?.logo || ''}" class="w-7 h-7 object-contain" alt="${m.brand}">`;
      lbl.textContent='✨ MOTOR TERAKHIR';
      nm.textContent=`Diagnosa ${m.brand} ${m.model}`;
    }else{
      ic.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:22px;height:22px"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>`;
      lbl.textContent='✨ MULAI DI SINI';
      nm.textContent='Tambahkan motor pertamamu';
    }
  }
  renderHomeGarageStrip();
}
function renderHomeGarageStrip(){
  const wrap=document.getElementById('home-garage-strip');
  if(!wrap)return;
  const items=state.garage.slice(-4);
  let html=items.map((m)=>{
    const idx=state.garage.indexOf(m);
    const pct=ringPct(m);
    return `
    <div class="moto-ring-card" onclick="selectMoto(${idx})">
      <div class="moto-ring" style="background:conic-gradient(#C6FF3C ${pct}%, #26282C ${pct}% 100%)">
        <div class="moto-ring-inner"><img src="${BRANDS[m.brand]?.logo || ''}" class="w-6 h-6 object-contain" alt="${m.brand}"></div>
      </div>
      <div class="moto-ring-name">${m.brand} ${m.model}</div>
      <div class="moto-ring-sub">Skor akustik ${pct}%</div>
      <button class="moto-ring-btn" onclick="event.stopPropagation();selectMoto(${idx})">Diagnosa</button>
    </div>`;
  }).join('');
  html+=`
    <div class="moto-add-card" onclick="startWizard()">
      <div class="moto-add-ic">+</div>
      <div class="moto-add-lbl">Tambah<br>Motor</div>
    </div>`;
  wrap.innerHTML=html;
}
function recoAction(){state.garage.length?selectMoto(state.garage.length-1):startWizard();}
function openMitra(){alert('Bengkel Mitra terdekat akan muncul otomatis di halaman Hasil Diagnosis setelah kamu merekam suara motor.');}

/* ============ GARAGE ============ */
function openGarage(){renderGarage();go('garage');}
function renderGarage(){
  const list=document.getElementById('garage-list');
  if(state.garage.length===0){
    list.innerHTML=`<div class="garage-empty anim d2">
      <div class="garage-empty-icon">🏍️</div>
      <h3 class="text-[18px] font-extrabold text-txt1">Garasi Kosong</h3>
      <p class="text-[13px] text-txt3 max-w-[230px] leading-relaxed">Belum ada motor. Tambahkan motor pertamamu untuk mulai diagnosis.</p>
      <button class="btn btn-primary" style="width:auto;padding:13px 28px;margin-top:8px" onclick="startWizard()">+ Tambah Motor</button>
    </div>`;
    return;
  }
  list.innerHTML=state.garage.map((m,i)=>`
    <div class="moto-card anim d${Math.min(i+2,6)}" onclick="selectMoto(${i})">
      <div class="moto-ic"><img src="${BRANDS[m.brand]?.logo || ''}" class="w-full h-full object-contain p-2" alt="${m.brand}"></div>
      <div class="min-w-0 flex-1">
        <div class="moto-nm">${m.brand} ${m.model}</div>
        <div class="moto-yr">${m.type} • ${m.year}</div>
      </div>
      <button class="moto-del" onclick="removeMoto(${i},event)" title="Hapus">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"/></svg>
      </button>
      <div class="moto-chev"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg></div>
    </div>`).join('');
}
function removeMoto(i,ev){
  if(ev)ev.stopPropagation();
  if(!confirm('Hapus motor ini dari garasi?'))return;
  state.garage.splice(i,1);save();renderGarage();hydrateHome();
}
function selectMoto(i){state.activeMoto=state.garage[i];state.chatMode='moto';startChat();}

/* ============ RIWAYAT (History) ============ */
function openRiwayat(){state.histFilter='all';renderRiwayat();go('riwayat');}
function switchHistTab(t){
  state.histFilter=t;
  document.querySelectorAll('#riwayat .hist-tab').forEach(x=>x.classList.toggle('on',x.dataset.htab===t));
  renderRiwayat();
}
function renderRiwayat(){
  const total=state.history.length;
  const critN=state.history.filter(h=>h.sev==='crit').length;
  const warnN=state.history.filter(h=>h.sev==='warn').length;
  const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  set('hist-total',total);set('hist-crit',critN);set('hist-warn',warnN);
  const list=document.getElementById('hist-list');
  const filtered=state.history.map((h,idx)=>({...h,idx})).filter(h=>state.histFilter==='all'?true:h.sev===state.histFilter).reverse();
  if(filtered.length===0){
    list.innerHTML=`<div class="hist-empty">
      <div class="text-[56px] opacity-30">🩺</div>
      <h3 class="text-[16px] font-extrabold text-txt1">Belum Ada Riwayat</h3>
      <p class="text-[13px] text-txt3 max-w-[230px] leading-relaxed">Hasil diagnosa AI kamu akan muncul di sini setiap selesai merekam suara motor.</p>
    </div>`;
    return;
  }
  list.innerHTML=filtered.map(h=>{
    const d=new Date(h.ts);
    return `
    <div class="hist-item" onclick="viewHistoryDetail(${h.idx})">
      <div class="hist-date"><span class="dd">${d.getDate()}</span><span class="mm">${MONTHS[d.getMonth()]}</span></div>
      <div class="min-w-0 flex-1">
        <div class="font-extrabold text-[13.5px] text-txt1">${h.title}</div>
        <div class="text-[11.5px] text-txt3 font-semibold mt-0.5">${h.motoName} • ${h.complaintKey}</div>
      </div>
      <span class="hist-badge ${h.sev}">${h.sev==='crit'?'Kritis':'Perhatian'}</span>
    </div>`;
  }).join('');
}
function viewHistoryDetail(i){
  const h=state.history[i];
  if(!h)return;
  renderResultBody(h,false);
  go('result');
}

/* ============ CALLOUT ============ */
function openCallout(){renderCallout();go('callout');}
function renderCallout(){
  document.getElementById('callout-list').innerHTML=CALLOUT.map((c,i)=>`
    <div class="call-card anim d${Math.min(i+2,6)}">
      <div class="flex items-center gap-3 mb-3">
        <div class="call-ic">${c.ic}</div>
        <div class="min-w-0 flex-1"><div class="call-nm">${c.nm}</div><div class="call-sp">${c.spec}</div></div>
        <div class="call-rt">⭐ ${c.rate}</div>
      </div>
      <div class="flex gap-1.5 flex-wrap mb-3">
        <span class="chip">📍 ${c.area}</span>
        <span class="chip">⏱️ ${c.eta}</span>
        <span class="chip">💸 ${c.price}</span>
        <span class="chip ${c.open?'green':''}">${c.open?'🟢 Buka':'⚪ Tutup'}</span>
      </div>
      <button class="call-cta-btn" onclick="callMechanic('${c.phone}','${c.nm.replace(/'/g,"")}',${c.open})">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        Panggil Mekanik
      </button>
    </div>`).join('');
}
function callMechanic(phone,nm,open){
  if(!open){alert(nm+' sedang tutup. Coba mekanik lain yang berstatus Buka.');return;}
  const msg=encodeURIComponent(`Halo ${nm}, saya butuh bengkel panggilan untuk motor saya di Bali. Bisa datang ke lokasi saya?`);
  window.open(`https://wa.me/${phone}?text=${msg}`,'_blank');
}

/* ============ SETTINGS ============ */
function openSettings(){go('settings');}
function logout(){
  if(!confirm('Yakin ingin keluar? Data garasi tetap tersimpan di perangkat ini.'))return;
  go('landing');
}

/* ============ WIZARD ============ */
function startWizard(){state.wizStep=1;state.wizData={};go('wizard');renderWizard();}
function updateProgress(){
  document.querySelectorAll('#wizard-progress .wiz-seg').forEach((s,i)=>s.classList.toggle('on',i<state.wizStep));
}
function wizardBack(){
  if(state.wizStep>1){state.wizStep--;renderWizard();}else{openGarage();}
}
function renderWizard(){
  updateProgress();
  const body=document.getElementById('wizard-body');
  const s=state.wizStep,d=state.wizData;
  if(s===1){
    body.innerHTML=`
      <div class="anim d1"><div class="wiz-title">Jenis Motor</div><div class="wiz-sub">Pilih tipe motor kamu</div></div>
      <div class="grid grid-cols-3 gap-2.5 anim d2">
        ${[["Matic","🏍️"],["Manual","🛞"],["Listrik","⚡"]].map(([t,e])=>`
          <div class="opt-card ${d.type===t?'sel':''}" onclick="pickType('${t}')"><div class="text-[26px]">${e}</div><div class="text-[13px] font-bold text-txt1">${t}</div></div>`).join('')}
      </div>`;
  }else if(s===2){
    body.innerHTML=`
      <div class="anim d1"><div class="wiz-title">Merek Motor</div><div class="wiz-sub">Pilih brand kesayangan</div></div>
      <div class="grid grid-cols-2 gap-2.5 anim d2">
        ${Object.keys(BRANDS).map(b=>`
          <div class="brand-card ${d.brand===b?'sel':''}" onclick="pickBrand('${b}')"><img src="${BRANDS[b].logo}" class="w-9 h-9 object-contain flex-shrink-0" alt="${b}"><span class="font-bold text-[14px] text-txt1">${b}</span></div>`).join('')}
      </div>`;
  }else if(s===3){
    const models=BRANDS[d.brand].models;
    body.innerHTML=`
      <div class="anim d1"><div class="wiz-title">Model ${d.brand}</div><div class="wiz-sub">Pilih model motor kamu</div></div>
      <div class="anim d2">
        ${models.map(([nm,y1,y2])=>`
          <div class="radio-row ${d.model===nm?'sel':''}" onclick="pickModel('${nm}',${y1},${y2})">
            <div class="radio-dot"><i></i></div>
            <div><div class="font-bold text-[14px] text-txt1">${nm}</div><div class="text-[12px] text-txt3">${y1} – ${y2}</div></div>
          </div>`).join('')}
      </div>`;
  }else if(s===4){
    const years=[];for(let y=d.yearMax;y>=d.yearMin;y--)years.push(y);
    body.innerHTML=`
      <div class="anim d1"><div class="wiz-title">Tahun Produksi</div><div class="wiz-sub">${d.brand} ${d.model} • ${d.yearMin}–${d.yearMax}</div></div>
      <div class="grid grid-cols-4 gap-2 anim d2">
        ${years.map(y=>`<div class="year-cell ${d.year===y?'sel':''}" onclick="pickYear(${y})">${y}</div>`).join('')}
      </div>`;
  }else if(s===5){
    body.innerHTML=`
      <div class="confirm-card anim d1">
        <div class="confirm-ic"><img src="${BRANDS[d.brand]?.logo || ''}" class="w-full h-full object-contain p-2" alt="${d.brand}"></div>
        <div class="confirm-nm">${d.brand} ${d.model}</div>
        <div class="confirm-dt">${d.type} • Tahun ${d.year}</div>
        <span class="badge-ready"><span class="online-dot"></span>Siap Diagnosis</span>
      </div>
      <div class="lineage-card anim d2">
        <b>Riwayat & Lineage Model</b><br>
        ${d.brand} ${d.model} diproduksi pada rentang ${d.yearMin}–${d.yearMax}. Unit tahun ${d.year} termasuk generasi ${d.year>=2020?'terbaru':(d.year>=2013?'menengah':'awal')}.
        Profil akustik mesin & CVT untuk model ini telah dikalibrasi pada database AI cekMotormu.id.
        Diagnosis akan mempertimbangkan karakteristik ${d.type.toLowerCase()} khas ${d.brand}, umur komponen sesuai tahun, serta pola keausan umum pada model ${d.model}.
      </div>
      <div class="wiz-nav anim d3">
        <button class="btn btn-ghost" onclick="wizardBack()">Kembali</button>
        <button class="btn btn-primary" onclick="saveMoto()">Simpan Motor</button>
      </div>`;
  }
}
function pickType(t){state.wizData.type=t;state.wizData.icon=(t==='Listrik'?'⚡':(t==='Manual'?'🛞':'🏍️'));state.wizStep=2;renderWizard();}
function pickBrand(b){state.wizData.brand=b;state.wizStep=3;renderWizard();}
function pickModel(nm,y1,y2){state.wizData.model=nm;state.wizData.yearMin=y1;state.wizData.yearMax=y2;state.wizStep=4;renderWizard();}
function pickYear(y){state.wizData.year=y;state.wizStep=5;renderWizard();}
function saveMoto(){state.garage.push({...state.wizData});save();openGarage();hydrateHome();}

/* ============ CHAT ============ */
let chatComplaint=null,recTimer=null,recSec=5;
function startChat(){
  go('chat-screen');
  const scroll=document.getElementById('chat-scroll');
  scroll.innerHTML='';
  document.getElementById('rec-zone').style.display='none';
  chatComplaint=null;
  const sub=document.getElementById('chat-sub');
  if(state.chatMode==='moto'&&state.activeMoto){
    sub.textContent=`${state.activeMoto.brand} ${state.activeMoto.model} • ${state.activeMoto.year}`;
    addBubble('ai',`Halo! Aku siap bantu diagnosa <b>${state.activeMoto.brand} ${state.activeMoto.model} (${state.activeMoto.year})</b>. Bagian mana yang bermasalah?`);
  }else{
    sub.textContent='AI Diagnostic Assistant';
    addBubble('ai','Halo! 👋 Aku asisten diagnosa cekMotormu.id. Keluhan motor kamu ada di bagian mana?');
  }
  setTimeout(showComplaints,500);
}
function addBubble(who,html){
  const scroll=document.getElementById('chat-scroll');
  const b=document.createElement('div');
  b.className='bubble '+who;b.innerHTML=html;
  scroll.appendChild(b);scrollBottom();
}
function showComplaints(){
  const scroll=document.getElementById('chat-scroll');
  const wrap=document.createElement('div');wrap.className='chat-options';
  wrap.innerHTML=COMPLAINTS.map(c=>`<div class="pill-option" onclick="pickComplaint('${c.key}')">${c.emoji} ${c.key}</div>`).join('');
  scroll.appendChild(wrap);scrollBottom();
}
function pickComplaint(key){
  chatComplaint=COMPLAINTS.find(c=>c.key===key);
  addBubble('user',key);
  setTimeout(()=>{
    addBubble('ai',`Oke, keluhan <b>${key}</b>. 🎙️ ${chatComplaint.tip}`);
    setTimeout(()=>{
      addBubble('ai','Tekan tombol mikrofon di bawah dan rekam suara motor selama 5 detik.');
      document.getElementById('rec-zone').style.display='flex';
      resetRec();scrollBottom();
    },600);
  },400);
}
function scrollBottom(){const s=document.getElementById('chat-scroll');setTimeout(()=>s.scrollTop=s.scrollHeight,50);}
function resetRec(){
  const btn=document.getElementById('rec-btn');
  btn.className='rec-btn';btn.textContent='🎤';
  document.getElementById('rec-label').textContent='Tekan untuk rekam 5 detik';
  recSec=5;
}
function toggleRecord(){
  const btn=document.getElementById('rec-btn'),lbl=document.getElementById('rec-label');
  if(btn.classList.contains('recording'))return;
  btn.className='rec-btn recording';btn.textContent='●';recSec=5;
  lbl.innerHTML=`<span class="rec-timer">Merekam... ${recSec}s</span>`;
  recTimer=setInterval(()=>{
    recSec--;
    if(recSec>0){lbl.innerHTML=`<span class="rec-timer">Merekam... ${recSec}s</span>`;}
    else{
      clearInterval(recTimer);
      btn.className='rec-btn done';btn.textContent='✓';
      lbl.textContent='Analisis selesai!';
      setTimeout(analyze,700);
    }
  },1000);
}
function analyze(){
  document.getElementById('rec-zone').style.display='none';
  addBubble('user','🎤 Rekaman suara (5 dtk)');
  setTimeout(()=>{
    addBubble('ai','🔍 Menganalisis pola akustik...');
    setTimeout(()=>{
      addBubble('ai','✅ Analisis selesai! Membuka hasil diagnosis...');
      setTimeout(showResult,900);
    },1100);
  },400);
}

/* ============ RESULT ============ */
function showResult(){
  state.diagCount++;
  const c=chatComplaint||COMPLAINTS[0];
  const diag=c.diag[Math.floor(Math.random()*c.diag.length)];
  const motoName=(state.chatMode==='moto'&&state.activeMoto)?`${state.activeMoto.brand} ${state.activeMoto.model} ${state.activeMoto.year}`:'Motor kamu';
  const entry={ts:Date.now(),title:diag.title,sev:diag.sev,acc:diag.acc,sol:diag.sol,motoName,complaintKey:c.key};
  state.history.push(entry);
  save();hydrateHome();
  renderResultBody(entry,true);
  go('result');
}
function renderResultBody(entry,isFresh){
  const isCrit=entry.sev==='crit';
  const body=document.getElementById('result-body');
  body.innerHTML=`
    <div class="res-status-card ${isCrit?'crit':'warn'} anim d1">
      <div class="res-status-icon">${isCrit?'🚨':'⚠️'}</div>
      <div class="res-status-title">${entry.title}</div>
      <div class="res-status-sub">${entry.motoName} • Keluhan ${entry.complaintKey}</div>
      <span class="acc-badge ${isCrit?'crit':'warn'}">
        <span class="font-mono font-extrabold">AI</span> Akurasi <span class="font-mono">${entry.acc}%</span>
      </span>
    </div>

    <div class="res-tabs anim d2">
      <div class="res-tab on" data-tab="solusi" onclick="switchResTab('solusi')">🛠️ Solusi</div>
      <div class="res-tab" data-tab="bengkel" onclick="switchResTab('bengkel')">📍 Bengkel</div>
      <div class="res-tab" data-tab="sparepart" onclick="switchResTab('sparepart')">🛒 Sparepart</div>
      <div class="res-tab" data-tab="panggil" onclick="switchResTab('panggil')">🚚 Panggil</div>
    </div>

    <div class="res-panel on" data-panel="solusi">
      <div class="section-title">🛠️ Solusi Rekomendasi</div>
      ${entry.sol.map((s,i)=>`<div class="sol-item"><div class="sol-num">${i+1}</div><div class="sol-tx">${s}</div></div>`).join('')}
    </div>

    <div class="res-panel" data-panel="bengkel">
      <div class="section-title">📍 Bengkel Mitra — Bali</div>
      ${BENGKEL.map(b=>`
        <div class="bengkel-card" onclick="openMaps(${b.lat},${b.lng})">
          <div class="bengkel-ic">🔧</div>
          <div class="min-w-0 flex-1"><div class="bengkel-nm">${b.nm}</div><div class="bengkel-ad">${b.ad}</div></div>
          <div class="text-right flex-shrink-0"><div class="bengkel-dist">${b.dist}</div><div class="bengkel-rate">⭐ ${b.rate}</div></div>
        </div>`).join('')}
    </div>

    <div class="res-panel" data-panel="sparepart">
      <div class="section-title">🛒 Spare Part Original</div>
      ${SHOPS.map(s=>`
        <div class="shop-card" onclick="window.open('${s.url}','_blank')">
          <div class="shop-ic">${s.ic}</div>
          <div><div class="shop-nm">${s.nm}</div><div class="shop-sub">${s.sub}</div></div>
          <div class="ml-auto text-txt3 text-[16px]">↗</div>
        </div>`).join('')}
    </div>

    <div class="res-panel" data-panel="panggil">
      <div class="section-title">🚚 Panggil Bengkel ke Lokasi</div>
      <div class="info-banner" style="margin:0 0 12px">
        <span>ℹ️</span>
        <span>Mekanik datang langsung ke lokasimu. <b class="text-lime">Data contoh (dummy).</b></span>
      </div>
      ${CALLOUT.map(c=>`
        <div class="call-card" style="margin-bottom:10px">
          <div class="flex items-center gap-3 mb-3">
            <div class="call-ic">${c.ic}</div>
            <div class="min-w-0 flex-1"><div class="call-nm">${c.nm}</div><div class="call-sp">${c.spec}</div></div>
            <div class="call-rt">⭐ ${c.rate}</div>
          </div>
          <div class="flex gap-1.5 flex-wrap mb-3">
            <span class="chip">📍 ${c.area}</span>
            <span class="chip">⏱️ ${c.eta}</span>
            <span class="chip ${c.open?'green':''}">🟢 ${c.open?'Buka':'Tutup'}</span>
          </div>
          <button class="call-cta-btn" onclick="callMechanic('${c.phone}','${c.nm.replace(/'/g,"")}',${c.open})">📞 Panggil Mekanik</button>
        </div>`).join('')}
    </div>

    <div class="result-nav anim d3">
      <button class="btn btn-primary" onclick="startChat()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
        Diagnosa Lagi
      </button>
      <button class="btn btn-ghost" onclick="go('menu')">Selesai</button>
    </div>`;
}
function switchResTab(t){
  document.querySelectorAll('#result-body .res-tab').forEach(x=>x.classList.toggle('on',x.dataset.tab===t));
  document.querySelectorAll('#result-body .res-panel').forEach(p=>p.classList.toggle('on',p.dataset.panel===t));
  const rb=document.getElementById('result-body');if(rb)rb.scrollTop=0;
}
function openMaps(lat,lng){window.open(`https://maps.google.com/dir/?api=1&destination=${lat},${lng}`,'_blank');}

/* ============ HERO CAROUSEL ============ */
let heroInterval = null;
let heroIdx = 0;
const HERO_DELAY = 4000;
function goToSlide(idx, instant) {
  const track = document.getElementById('hero-track');
  const dots = document.querySelectorAll('#hero-dots .carousel-dot');
  if (!track || !dots.length) return;
  const slideWidth = track.firstElementChild?.offsetWidth || 420;
  track.style.transition = instant ? 'none' : 'transform 500ms ease-in-out';
  track.style.transform = `translateX(-${idx * slideWidth}px)`;
  const realIdx = idx >= dots.length ? 0 : idx;
  dots.forEach(d => d.classList.toggle('active', parseInt(d.dataset.slide) === realIdx));
  heroIdx = realIdx;
}
function nextHeroSlide() {
  const dots = document.querySelectorAll('#hero-dots .carousel-dot');
  if (!dots.length) return;
  heroIdx = (heroIdx + 1) % dots.length;
  if (heroIdx === 0) {
    goToSlide(dots.length);
    setTimeout(() => goToSlide(0, true), 500);
  } else {
    goToSlide(heroIdx);
  }
}
function startHeroCarousel() {
  clearInterval(heroInterval);
  const dots = document.querySelectorAll('#hero-dots .carousel-dot');
  const track = document.getElementById('hero-track');
  if (!dots.length || !track) return;
  if (track.children.length === dots.length) {
    track.appendChild(track.firstElementChild.cloneNode(true));
  }
  goToSlide(0, true);
  heroInterval = setInterval(nextHeroSlide, HERO_DELAY);
}

/* touch/swipe support */
(function initHeroTouch() {
  const el = document.getElementById('hero-track')?.parentElement;
  if (!el) return;
  let sx = 0, ex = 0;
  el.addEventListener('touchstart', e => { sx = e.changedTouches[0].screenX; clearInterval(heroInterval); }, {passive:true});
  el.addEventListener('touchend', e => {
    ex = e.changedTouches[0].screenX;
    const diff = ex - sx;
    const dots = document.querySelectorAll('#hero-dots .carousel-dot');
    if (Math.abs(diff) > 50 && dots.length) {
      const next = diff < 0 ? (heroIdx + 1) % dots.length : (heroIdx - 1 + dots.length) % dots.length;
      if (next === 0) {
        goToSlide(dots.length);
        setTimeout(() => goToSlide(0, true), 500);
      } else {
        goToSlide(next);
      }
      heroIdx = next;
    }
    heroInterval = setInterval(nextHeroSlide, HERO_DELAY);
  }, {passive:true});
})();

/* ============ INIT ============ */
(function init(){
  if(state.user){hydrateUser();go('menu');}
  startHeroCarousel();
  window.addEventListener('resize', () => {
    const activeDot = document.querySelector('#hero-dots .carousel-dot.active');
    if (activeDot) goToSlide(parseInt(activeDot.dataset.slide));
  });
})();
