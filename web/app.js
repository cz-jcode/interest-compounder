'use strict';

// --- i18n ---
const I18N = {
  cs: {
    title: 'Compound Calculator UI',
    header: 'Investiční kalkulačka (měsíční úročení)',
    inputs: 'Vstup',
    'tab.editor': 'Zdroj',
    'tab.form': 'Formulář',
    'toggle.modeTitle': 'Přepnout JSON/YAML (pro Editor)',
    'btn.format': 'Formátovat',
    'btn.reset': 'Reset',
    'hint.editor': 'Úpravy se posílají na backend s prodlevou ~400 ms. Neznámá pole backend odmítne.',
    outputs: 'Výstup a grafy',
    'view.label': 'Zobrazení:',
    'view.months': 'Měsíce',
    'view.years': 'Roky',
    'raw.title': 'Surová odpověď',
    'btn.addCalc': 'Přidat kalkulaci',
    'form.hintMulti': 'Formulář nyní podporuje více kalkulací. Můžete přidat/odebrat kalkulaci a upravovat je všechny zde. Editor (YAML/JSON) zůstává plně synchronizovaný.',
    'calc.title': 'Kalkulace',
    'form.initial': 'Počáteční vklad',
    'form.rate': 'Roční sazba (např. 0.07)',
    'form.months': 'Počet měsíců',
    'form.recurring': 'Pravidelné příspěvky',
    'th.freq': 'Frekvence',
    'th.amount': 'Částka',
    'th.start': 'Start M',
    'th.end': 'Konec M (-1=∞)',
    'form.oneTime': 'Jednorázové příspěvky',
    'th.month': 'Měsíc',
    'btn.addRecurring': 'Přidat pravidelný',
    'btn.addOneTime': 'Přidat jednorázový',
    'btn.delete': 'Smazat',
    'chart.months': 'Měsíce',
    'chart.years': 'Roky',
    'legend.principal': 'Vklad',
    'legend.interest': 'Úrok',
    'legend.header': 'Souhrn vstupů',
    'legend.rate': 'Sazba',
    'legend.months': 'Měsíce',
    'legend.recurring': 'Pravidelné',
    'legend.oneTime': 'Jednorázové',
    'form.name': 'Název',
    'form.currency': 'Měna',
    'btn.expand': 'Rozbalit',
    'btn.collapse': 'Sbalit',
  },
  en: {
    title: 'Compound Calculator UI',
    header: 'Investment Calculator (monthly compounding)',
    inputs: 'Input',
    'tab.editor': 'Source',
    'tab.form': 'Form',
    'toggle.modeTitle': 'Toggle JSON/YAML (for Editor)',
    'btn.format': 'Format',
    'btn.reset': 'Reset',
    'hint.editor': 'Edits are sent to backend with ~400 ms debounce. Unknown fields are rejected by backend.',
    outputs: 'Output & Charts',
    'view.label': 'View:',
    'view.months': 'Months',
    'view.years': 'Years',
    'raw.title': 'Raw response',
    'btn.addCalc': 'Add calculation',
    'form.hintMulti': 'The form now supports multiple calculations. You can add/remove and edit them all here. The YAML/JSON editor stays in sync.',
    'calc.title': 'Calculation',
    'form.initial': 'Initial deposit',
    'form.rate': 'Annual rate (e.g., 0.07)',
    'form.months': 'Total months',
    'form.recurring': 'Recurring contributions',
    'th.freq': 'Frequency',
    'th.amount': 'Amount',
    'th.start': 'Start M',
    'th.end': 'End M (-1=∞)',
    'form.oneTime': 'One-time contributions',
    'th.month': 'Month',
    'btn.addRecurring': 'Add recurring',
    'btn.addOneTime': 'Add one-time',
    'btn.delete': 'Delete',
    'chart.months': 'Months',
    'chart.years': 'Years',
    'legend.principal': 'Principal',
    'legend.interest': 'Interest',
    'legend.header': 'Input summary',
    'legend.rate': 'Rate',
    'legend.months': 'Months',
    'legend.recurring': 'Recurring',
    'legend.oneTime': 'One-time',
    'form.name': 'Name',
    'form.currency': 'Currency',
    'btn.expand': 'Expand',
    'btn.collapse': 'Collapse',
  }
};
let currentLang = 'cs';
function getLang(){
  const sel = document.getElementById('langSelect');
  const stored = localStorage.getItem('lang') || 'auto';
  const v = sel ? (sel.value||stored) : stored;
  let lang = v==='auto' ? (navigator.language?.startsWith('cs') ? 'cs' : 'en') : v;
  if (!I18N[lang]) lang = 'en';
  return lang;
}
function t(key){ return I18N[currentLang]?.[key] ?? key; }
function applyI18n(){
  currentLang = getLang();
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-title]').forEach(el=>{ el.setAttribute('title', t(el.getAttribute('data-i18n-title'))); });
}

// --- Utilities ---
let currentLocale = 'cs-CZ';
function updateLocale(){ currentLocale = (currentLang==='cs')? 'cs-CZ' : 'en-US'; }
// Currency is now per calculation. Use helpers to format with given currency code.
function moneyWith(v, currency){
  const cur = typeof currency === 'string' && currency ? currency : (currentLang==='cs' ? 'CZK' : 'USD');
  return new Intl.NumberFormat(currentLocale, { style: 'currency', currency: cur, maximumFractionDigits: 2 }).format(v);
}
const fmtNumber = (v) => new Intl.NumberFormat(currentLocale, { maximumFractionDigits: 2 }).format(v);
function numberFmt(v){ return new Intl.NumberFormat(currentLocale, { maximumFractionDigits: 2 }).format(v); }

function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

// --- Sample payload (Batch with multiple calculations) ---
const sampleItem = {
  name: 'Kalkulace 1',
  currency: (navigator.language?.startsWith('cs') ? 'CZK' : 'USD'),
  initialPrincipal: 10000,
  annualRate: 0.07,
  totalMonths: 120,
  recurring: [
    { schedule: 'monthly', amount: 300, startMonth: 0, endMonth: -1 },
    { schedule: 'yearly', amount: 1200, startMonth: 0, endMonth: -1 },
    { schedule: 'daily', amount: 5, startMonth: 0, endMonth: 23 }
  ],
  oneTime: [
    { amount: 2000, atMonth: 12 }
  ]
};
const sample = { calculations: [ sampleItem, { ...sampleItem, name: 'Kalkulace 2', annualRate: 0.05, initialPrincipal: 5000, totalMonths: 60 } ] };

let mode = 'yaml'; // default 'yaml' | 'json'
let editor, chart;
let currentInput = structuredClone ? structuredClone(sample) : JSON.parse(JSON.stringify(sample));
let prevMonths = null;
let collapsedState = []; // per-calc collapsed state

function initEditor() {
  editor = ace.edit('editor');
  editor.setTheme('ace/theme/monokai');
  editor.session.setMode('ace/mode/yaml');
  editor.setOptions({
    fontSize: '14px',
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    showPrintMargin: false,
  });
  const toggle = document.getElementById('modeToggle');
  const label = document.getElementById('modeLabel');
  if (toggle) toggle.checked = true;
  if (label) label.textContent = 'YAML';
  setEditorValueFromObject(currentInput);
  editor.session.on('change', debounce(onEditorChanged, 400));
}

function setEditorValueFromObject(obj) {
  if (mode === 'json') {
    editor.session.setMode('ace/mode/json');
    editor.setValue(JSON.stringify(obj, null, 2), -1);
  } else {
    editor.session.setMode('ace/mode/yaml');
    const y = jsyaml.dump(obj, { noRefs: true, lineWidth: 80 });
    editor.setValue(y, -1);
  }
}

function readEditorAsObject() {
  const text = editor.getValue();
  if (!text.trim()) return null;
  try {
    if (mode === 'json') return JSON.parse(text);
    return jsyaml.load(text);
  } catch (e) {
    showError((currentLang==='cs'?'Chyba vstupu: ':'Input error: ') + e.message);
    return null;
  }
}

function showError(msg) {
  const el = document.getElementById('errorBox');
  el.textContent = msg;
  el.hidden = !msg;
}

function clearError() { showError(''); }

function normalizeItem(it){
  const o = Object.assign({ name:'', currency:(currentLang==='cs'?'CZK':'USD'), initialPrincipal:0, annualRate:0, totalMonths:1, recurring:[], oneTime:[] }, it||{});
  o.recurring = Array.isArray(o.recurring) ? o.recurring : [];
  o.oneTime = Array.isArray(o.oneTime) ? o.oneTime : [];
  if (typeof o.name !== 'string') o.name = '';
  if (typeof o.currency !== 'string' || !o.currency) o.currency = (currentLang==='cs'?'CZK':'USD');
  return o;
}

function normalizeBatch(obj){
  // Accept legacy key `items` too (will be converted to `calculations`)
  const base = Object.assign({}, obj||{});
  if (Array.isArray(base.items) && !Array.isArray(base.calculations)) {
    console.warn('Deprecated: input contains `items`. Use `calculations` instead.');
    base.calculations = base.items;
    delete base.items;
  }
  const o = Object.assign({ calculations: [] }, base);
  if (!Array.isArray(o.calculations)) o.calculations = [];
  o.calculations = o.calculations.map(normalizeItem);
  if (o.calculations.length === 0) o.calculations.push(normalizeItem({}));
  return o;
}

async function computeFromState() {
  clearError();
  const batch = normalizeBatch(currentInput);
  // Validate minimal requirements for each item
  for (let i=0;i<batch.calculations.length;i++){
    const it = batch.calculations[i];
    if (typeof it.annualRate !== 'number' || typeof it.totalMonths !== 'number' || it.totalMonths <= 0) {
      showError((currentLang==='cs'?'Položka ':'Item ') + `${i}: ` + (currentLang==='cs'?'požadována pole annualRate:number a totalMonths:number>0':'fields annualRate:number and totalMonths:number>0 are required'));
      return;
    }
  }
  try {
    const res = await fetch('/api/v1/compound', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ calculations: batch.calculations }),
    });
    const txt = await res.text();
    if (!res.ok) {
      throw new Error(txt);
    }
    const data = JSON.parse(txt);
    renderOutputBatch(data);
  } catch (e) {
    showError((currentLang==='cs'?'Request selhal: ':'Request failed: ') + e.message);
  }
}

const computeDebounced = debounce(computeFromState, 400);

function onEditorChanged() {
  const obj = readEditorAsObject();
  if (!obj) return;
  currentInput = normalizeBatch(obj);
  renderFormMulti();
  computeDebounced();
}

function round2(x){ return Math.round((x + Number.EPSILON) * 100) / 100; }

function renderOutputBatch(batchResp) {
  const pairs = Array.isArray(batchResp.results) ? batchResp.results : [];
  document.getElementById('rawOut').textContent = JSON.stringify(batchResp, null, 2);

  // Determine max months across calculations (for auto mode)
  let maxMonths = 0;
  pairs.forEach(p => {
    const r = p.response||{};
    const months = (r.monthly?.length||0);
    if (months > maxMonths) maxMonths = months;
  });

  const viewSel = document.getElementById('viewSelect');
  if (prevMonths !== maxMonths) {
    viewSel.dataset.userSet = 'false';
    prevMonths = maxMonths;
  }
  const desired = (maxMonths % 12 === 0 && maxMonths>0) ? 'years' : 'months';
  if (viewSel.dataset.userSet !== 'true') {
    viewSel.value = desired;
  }

  const view = viewSel.value;
  if (view === 'months') {
    drawStackedGroupedMonths(pairs);
  } else {
    drawStackedGroupedYears(pairs);
  }
  // Render custom legend with request inputs
  renderLegend(pairs);
}

function basePalette(){ return ['#4f46e5','#ea580c','#16a34a','#0ea5e9','#a21caf','#f59e0b','#22c55e']; }
function withAlpha(hex, alpha){
  // supports #rrggbb -> rgba
  const m = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);
  if (!m) return hex;
  const r = parseInt(m[1],16), g = parseInt(m[2],16), b = parseInt(m[3],16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function calcDisplayName(req, idx){
  const base = (currentLang==='cs'?'Kalkulace':'Calculation');
  const nm = (req && typeof req.name==='string' && req.name.trim()) ? req.name.trim() : `${base} ${idx+1}`;
  return nm;
}
function drawStackedGroupedMonths(pairs){
  let maxM = 0;
  pairs.forEach(p => { const m = (p.response?.monthly||[]).length; if (m>maxM) maxM = m; });
  const labels = Array.from({length:maxM}, (_,i)=> (currentLang==='cs'?'M':'M') + (i+1));
  const datasets = [];
  const palette = basePalette();
  pairs.forEach((p, idx)=>{
    const r = p.response||{};
    const req = p.request || {};
    const monthly = r.monthly||[];
    // cumulative interest per month
    const cumInterest = [];
    let accI = 0;
    for (let i=0;i<maxM;i++){
      if (monthly[i]) accI += monthly[i].interest||0;
      cumInterest[i] = round2(accI);
    }
    const principalData = Array.from({length:maxM}, (_,i)=> monthly[i]? monthly[i].principal : 0);
    const interestData  = cumInterest;
    const color = palette[idx % palette.length];
    const name = calcDisplayName(req, idx);
    datasets.push({
      label: `${name} – ${t('legend.principal')}`,
      data: principalData,
      backgroundColor: withAlpha(color, 0.7),
      borderColor: color,
      stack: 'calc'+idx,
      currency: req.currency || (currentLang==='cs'?'CZK':'USD'),
    });
    datasets.push({
      label: `${name} – ${t('legend.interest')}`,
      data: interestData,
      backgroundColor: withAlpha(color, 0.35),
      borderColor: withAlpha(color, 0.5),
      stack: 'calc'+idx,
      currency: req.currency || (currentLang==='cs'?'CZK':'USD'),
    });
  });
  renderBarChart(labels, datasets, `${t('chart.months')}`);
}

function drawStackedGroupedYears(pairs){
  // Build yearly arrays from monthly response to compute cumulative interest across years
  const yearsArrays = pairs.map(p => {
    const monthly = p.response?.monthly||[];
    // aggregate to year-end points like backend does
    const arr = [];
    let yearIdx = 1; let cumI = 0; let lastPrincipal = 0; let lastBalance = 0;
    for (let i=0;i<monthly.length;i++){
      const m = monthly[i];
      cumI += m.interest||0;
      lastPrincipal = m.principal; lastBalance = m.balance;
      if ((i%12)===11 || i===monthly.length-1){
        arr.push({ year: yearIdx, principal: round2(lastPrincipal), interestCum: round2(cumI), balance: round2(lastBalance) });
        yearIdx++;
      }
    }
    return arr;
  });
  let maxY = 0; yearsArrays.forEach(a=>{ if (a.length>maxY) maxY=a.length; });
  const labels = Array.from({length:maxY}, (_,i)=> (currentLang==='cs'?'R':'Y') + (i+1));
  const datasets = [];
  const palette = basePalette();
  yearsArrays.forEach((arr, idx)=>{
    const principalData = Array.from({length:maxY}, (_,i)=> arr[i]? arr[i].principal : 0);
    const interestData  = Array.from({length:maxY}, (_,i)=> arr[i]? arr[i].interestCum : 0);
    const color = palette[idx % palette.length];
    const req = pairs[idx]?.request || {};
    const name = calcDisplayName(req, idx);
    const cur = req.currency || (currentLang==='cs'?'CZK':'USD');
    datasets.push({
      label: `${name} – ${t('legend.principal')}`,
      data: principalData,
      backgroundColor: withAlpha(color, 0.7),
      borderColor: color,
      stack: 'calc'+idx,
      currency: cur,
    });
    datasets.push({
      label: `${name} – ${t('legend.interest')}`,
      data: interestData,
      backgroundColor: withAlpha(color, 0.35),
      borderColor: withAlpha(color, 0.5),
      stack: 'calc'+idx,
      currency: cur,
    });
  });
  renderBarChart(labels, datasets, `${t('chart.years')}`);
}

function renderLegend(pairs){
  const legendEl = document.getElementById('legend');
  const hover = document.getElementById('legendHover');
  if (!legendEl) return;
  const palette = basePalette();
  legendEl.innerHTML = '';
  pairs.forEach((p, idx)=>{
    const req = p.request || {};
    const color = palette[idx % palette.length];
    const item = document.createElement('div');
    const cur = req.currency || (currentLang==='cs'?'CZK':'USD');
    const name = calcDisplayName(req, idx);
    item.className = 'legend-item';
    item.setAttribute('data-idx', String(idx));
    item.innerHTML = `
      <span class="swatch" style="background:${withAlpha(color, 0.8)}; border-color:${color}"></span>
      <span class="legend-text">${name}: ${moneyWith(req.initialPrincipal||0, cur)} · ${t('legend.rate')}: ${numberFmt(req.annualRate||0)} · ${t('legend.months')}: ${req.totalMonths||0}</span>
    `;
    item.addEventListener('mouseenter', (ev)=>{
      if (!hover) return;
      hover.innerHTML = buildLegendHover(req, idx, color);
      hover.hidden = false;
      positionHover(hover, ev);
    });
    item.addEventListener('mousemove', (ev)=>{ if (hover && !hover.hidden) positionHover(hover, ev); });
    item.addEventListener('mouseleave', ()=>{ if (hover) hover.hidden = true; });
    legendEl.appendChild(item);
  });
}
function buildLegendHover(req, idx, color){
  const rec = Array.isArray(req.recurring)? req.recurring : [];
  const one = Array.isArray(req.oneTime)? req.oneTime : [];
  const cur = req.currency || (currentLang==='cs'?'CZK':'USD');
  const recList = rec.map(r=>`<li>${r.schedule||'monthly'} · ${moneyWith(r.amount||0, cur)} · ${r.startMonth||0}→${(r.endMonth??-1)}</li>`).join('') || '<li>–</li>';
  const oneList = one.map(o=>`<li>${moneyWith(o.amount||0, cur)} @ M${o.atMonth||0}</li>`).join('') || '<li>–</li>';
  const name = (req.name && req.name.trim()) ? req.name.trim() : `${t('calc.title')} ${idx+1}`;
  return `
    <div class="legend-hover-inner">
      <div class="legend-hover-header">
        <span class="swatch" style="background:${withAlpha(color, 0.8)}; border-color:${color}"></span>
        <strong>${name}</strong>
      </div>
      <div class="row"><span>${t('form.initial')}:</span><span>${moneyWith(req.initialPrincipal||0, cur)}</span></div>
      <div class="row"><span>${t('legend.rate')}:</span><span>${numberFmt(req.annualRate||0)}</span></div>
      <div class="row"><span>${t('legend.months')}:</span><span>${req.totalMonths||0}</span></div>
      <div class="row"><span>${t('form.recurring')}:</span></div>
      <ul class="mini">${recList}</ul>
      <div class="row"><span>${t('form.oneTime')}:</span></div>
      <ul class="mini">${oneList}</ul>
      <div class="row"><span>Stack:</span><span>${t('legend.principal')} + ${t('legend.interest')}</span></div>
    </div>`;
}
function positionHover(hover, ev){
  const pad = 8;
  const vw = window.innerWidth, vh = window.innerHeight;
  // place above cursor by default
  const rect = hover.getBoundingClientRect();
  const width = rect.width || 260;
  const height = rect.height || 120;
  let x = ev.clientX + pad;
  let y = ev.clientY - height - pad; // above cursor
  // clamp within viewport
  if (x + width > vw - pad) x = vw - width - pad;
  if (x < pad) x = pad;
  if (y < pad) { // if not enough space above, fallback below
    y = Math.min(ev.clientY + pad, vh - height - pad);
  }
  hover.style.left = x + 'px';
  hover.style.top = y + 'px';
}

function renderBarChart(labels, datasets, title){
  const ctx = document.getElementById('chart');
  const data = { labels, datasets };
  const options = {
    responsive: true,
    plugins: {
      title: { display: true, text: (currentLang==='cs'?'Vývoj portfolia – ':'Portfolio evolution – ') + title },
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx)=> {
        const cur = ctx.dataset.currency || (currentLang==='cs'?'CZK':'USD');
        return `${ctx.dataset.label}: ${moneyWith(ctx.parsed.y, cur)}`;
      } } }
    },
    scales: { y: { stacked: true, ticks: { callback: (v)=> numberFmt(v) } }, x: { stacked: true } }
  };
  if (chart) chart.destroy();
  chart = new Chart(ctx, { type: 'bar', data, options });
}

function bindTabs(){
  const btnEditor = document.getElementById('tabEditorBtn');
  const btnForm = document.getElementById('tabFormBtn');
  const tabEditor = document.getElementById('tabEditor');
  const tabForm = document.getElementById('tabForm');
  btnEditor.addEventListener('click', () => {
    btnEditor.classList.add('active'); btnEditor.setAttribute('aria-selected', 'true');
    btnForm.classList.remove('active'); btnForm.setAttribute('aria-selected', 'false');
    tabEditor.hidden = false; tabForm.hidden = true;
  });
  btnForm.addEventListener('click', () => {
    btnForm.classList.add('active'); btnForm.setAttribute('aria-selected', 'true');
    btnEditor.classList.remove('active'); btnEditor.setAttribute('aria-selected', 'false');
    tabEditor.hidden = true; tabForm.hidden = false;
  });
}

// --- Multi-calc Form ---
function renderFormMulti(){
  const container = document.getElementById('formMulti');
  const batch = normalizeBatch(currentInput);
  currentInput = batch; // keep normalized
  const list = batch.calculations;
  const hint = document.getElementById('formHint');
  hint.hidden = list.length <= 1 ? false : true;
  // initialize collapsed state (default collapsed)
  if (!Array.isArray(collapsedState) || collapsedState.length !== list.length) {
    collapsedState = list.map(()=>true);
  }
  container.innerHTML = '';
  list.forEach((it, idx)=>{
    const wrap = document.createElement('div');
    wrap.className = 'calc-card' + (collapsedState[idx] ? ' collapsed' : '');
    const displayName = (it.name && it.name.trim()) ? it.name.trim() : `${t('calc.title')} ${idx+1}`;
    const summary = `${moneyWith(it.initialPrincipal||0, it.currency|| (currentLang==='cs'?'CZK':'USD'))} · ${t('legend.rate')}: ${numberFmt(it.annualRate||0)} · ${t('legend.months')}: ${it.totalMonths||0}`;
    wrap.innerHTML = `
      <div class="calc-header" data-action="toggle" data-cidx="${idx}">
        <div class="left">
          <strong>${displayName}</strong>
          <span class="muted">${summary}</span>
        </div>
        <div class="actions">
          <button data-action="add-rec" data-cidx="${idx}">${t('btn.addRecurring')}</button>
          <button data-action="add-one" data-cidx="${idx}">${t('btn.addOneTime')}</button>
          <button data-action="del-calc" data-cidx="${idx}">${t('btn.delete')}</button>
        </div>
      </div>
      <div class="calc-body">
        <div class="form-grid">
          <label><span>${t('form.name')}</span><input type="text" data-cidx="${idx}" data-field="name" class="top-field"></label>
          <label><span>${t('form.currency')}</span>
            <select data-cidx="${idx}" data-field="currency" class="top-field">
              <option value="CZK">CZK</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </label>
          <label><span>${t('form.initial')}</span><input type="number" step="0.01" min="0" data-cidx="${idx}" data-field="initialPrincipal" class="top-field"></label>
          <label><span>${t('form.rate')}</span><input type="number" step="0.0001" data-cidx="${idx}" data-field="annualRate" class="top-field"></label>
          <label><span>${t('form.months')}</span><input type="number" min="1" step="1" data-cidx="${idx}" data-field="totalMonths" class="top-field"></label>
        </div>
        <h3>${t('form.recurring')}</h3>
        <table class="grid rec" data-cidx="${idx}">
          <thead><tr><th>${t('th.freq')}</th><th>${t('th.amount')}</th><th>${t('th.start')}</th><th>${t('th.end')}</th><th></th></tr></thead>
          <tbody></tbody>
        </table>
        <h3>${t('form.oneTime')}</h3>
        <table class="grid one" data-cidx="${idx}">
          <thead><tr><th>${t('th.amount')}</th><th>${t('th.month')}</th><th></th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    `;
    container.appendChild(wrap);

    // fill top fields
    wrap.querySelector('input[data-field="name"]').value = (it.name||'');
    wrap.querySelector('select[data-field="currency"]').value = (it.currency || (currentLang==='cs'?'CZK':'USD'));
    wrap.querySelector('input[data-field="initialPrincipal"]').value = Number(it.initialPrincipal||0);
    wrap.querySelector('input[data-field="annualRate"]').value = Number(it.annualRate||0);
    wrap.querySelector('input[data-field="totalMonths"]').value = Number(it.totalMonths||1);

    // render recurring rows
    const recBody = wrap.querySelector('table.rec tbody');
    recBody.innerHTML = '';
    (it.recurring||[]).forEach((r, rIdx)=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><select data-cidx="${idx}" data-idx="${rIdx}" data-field="schedule">
              <option value="daily">daily</option>
              <option value="monthly">monthly</option>
              <option value="yearly">yearly</option>
            </select></td>
        <td><input type="number" step="0.01" data-cidx="${idx}" data-idx="${rIdx}" data-field="amount"></td>
        <td><input type="number" step="1" data-cidx="${idx}" data-idx="${rIdx}" data-field="startMonth"></td>
        <td><input type="number" step="1" data-cidx="${idx}" data-idx="${rIdx}" data-field="endMonth"></td>
        <td><button data-action="del-rec" data-cidx="${idx}" data-idx="${rIdx}">${t('btn.delete')}</button></td>
      `;
      recBody.appendChild(tr);
      tr.querySelector('select').value = r.schedule||'monthly';
      tr.querySelector('input[data-field="amount"]').value = Number(r.amount||0);
      tr.querySelector('input[data-field="startMonth"]').value = Number(r.startMonth||0);
      tr.querySelector('input[data-field="endMonth"]').value = Number(r.endMonth??-1);
    });

    // render one-time rows
    const oneBody = wrap.querySelector('table.one tbody');
    oneBody.innerHTML='';
    (it.oneTime||[]).forEach((o, oIdx)=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><input type="number" step="0.01" data-cidx="${idx}" data-idx="${oIdx}" data-kind="one" data-field="amount"></td>
        <td><input type="number" step="1" data-cidx="${idx}" data-idx="${oIdx}" data-kind="one" data-field="atMonth"></td>
        <td><button data-action="del-one" data-cidx="${idx}" data-idx="${oIdx}">${t('btn.delete')}</button></td>
      `;
      oneBody.appendChild(tr);
      tr.querySelector('input[data-field="amount"]').value = Number(o.amount||0);
      tr.querySelector('input[data-field="atMonth"]').value = Number(o.atMonth||0);
    });
  });
}

function bindForm(){
  // Add calculation button
  document.getElementById('addCalcBtn').addEventListener('click', ()=>{
    const b = normalizeBatch(currentInput);
    b.calculations.push(normalizeItem({ initialPrincipal: 0, annualRate: 0.05, totalMonths: 12 }));
    currentInput = b;
    setEditorValueFromObject(currentInput);
    renderFormMulti();
    computeDebounced();
  });

  // Delegate for top fields, recurring and one-time
  document.getElementById('formMulti').addEventListener('input', (e)=>{
    const cidx = parseInt(e.target.getAttribute('data-cidx'));
    if (Number.isNaN(cidx)) return;
    const b = normalizeBatch(currentInput);
    const it = b.calculations[cidx];
    const field = e.target.getAttribute('data-field');
    const rIdx = parseInt(e.target.getAttribute('data-idx'));
    if (e.target.classList.contains('top-field')){
      if (field === 'name') {
        it.name = String(e.target.value||'');
      } else if (field === 'currency') {
        it.currency = e.target.value || (currentLang==='cs'?'CZK':'USD');
      } else {
        const val = field==='annualRate' ? parseFloat(e.target.value)||0 : (field==='totalMonths'? parseInt(e.target.value)||0 : parseFloat(e.target.value)||0);
        it[field] = val;
      }
    } else if (!Number.isNaN(rIdx)) {
      if (e.target.closest('table').classList.contains('rec')){
        if (e.target.tagName==='SELECT') {
          it.recurring[rIdx][field] = e.target.value;
        } else {
          const v = field==='amount'? parseFloat(e.target.value)||0 : parseInt(e.target.value);
          it.recurring[rIdx][field] = (field==='endMonth' && (v===undefined||v===null||Number.isNaN(v)))? -1 : (Number.isNaN(v)?0:v);
        }
      } else { // one-time
        const v = field==='amount'? parseFloat(e.target.value)||0 : parseInt(e.target.value)||0;
        it.oneTime[rIdx][field] = v;
      }
    }
    currentInput = b;
    setEditorValueFromObject(currentInput);
    renderFormMulti(); // re-render to update headers/summary
    computeDebounced();
  });

  document.getElementById('formMulti').addEventListener('click', (e)=>{
    const action = e.target.getAttribute('data-action');
    const cidx = parseInt(e.target.getAttribute('data-cidx'));
    const b = normalizeBatch(currentInput);
    if (action === 'toggle'){
      if (!Number.isNaN(cidx)) {
        collapsedState[cidx] = !collapsedState[cidx];
        renderFormMulti();
      }
    } else if (action === 'del-calc'){
      if (!Number.isNaN(cidx)) {
        b.calculations.splice(cidx,1);
        if (b.calculations.length===0) b.calculations.push(normalizeItem({}));
        currentInput = b;
        setEditorValueFromObject(currentInput);
        // adjust collapsed state
        collapsedState.splice(cidx,1);
        if (collapsedState.length === 0) collapsedState.push(true);
        renderFormMulti();
        computeDebounced();
      }
    } else if (action === 'add-rec'){
      const it = b.calculations[cidx];
      it.recurring.push({ schedule:'monthly', amount:100, startMonth:0, endMonth:-1 });
      currentInput = b; setEditorValueFromObject(currentInput); renderFormMulti(); computeDebounced();
    } else if (action === 'add-one'){
      const it = b.calculations[cidx];
      it.oneTime.push({ amount:1000, atMonth:0 });
      currentInput = b; setEditorValueFromObject(currentInput); renderFormMulti(); computeDebounced();
    } else if (action === 'del-rec'){
      const rIdx = parseInt(e.target.getAttribute('data-idx'));
      const it = b.calculations[cidx];
      it.recurring.splice(rIdx,1);
      currentInput = b; setEditorValueFromObject(currentInput); renderFormMulti(); computeDebounced();
    } else if (action === 'del-one'){
      const oIdx = parseInt(e.target.getAttribute('data-idx'));
      const it = b.calculations[cidx];
      it.oneTime.splice(oIdx,1);
      currentInput = b; setEditorValueFromObject(currentInput); renderFormMulti(); computeDebounced();
    }
  });
}

function syncEditorAndCompute(){
  setEditorValueFromObject(currentInput);
  computeDebounced();
}

function hookUI() {
  // Tabs
  bindTabs();
  // Language
  const langSel = document.getElementById('langSelect');
  const stored = localStorage.getItem('lang')||'auto';
  if (langSel) langSel.value = stored;
  currentLang = getLang(); updateLocale(); applyI18n();
  langSel.addEventListener('change', ()=>{ localStorage.setItem('lang', langSel.value); currentLang = getLang(); updateLocale(); applyI18n(); const raw = document.getElementById('rawOut').textContent; if (raw) { try { renderOutputBatch(JSON.parse(raw)); } catch(_){} } });


  // Editor controls
  document.getElementById('modeToggle').addEventListener('change', (e) => {
    mode = e.target.checked ? 'yaml' : 'json';
    document.getElementById('modeLabel').textContent = mode.toUpperCase();
    setEditorValueFromObject(currentInput);
    computeDebounced();
  });
  document.getElementById('formatBtn').addEventListener('click', () => {
    setEditorValueFromObject(readEditorAsObject() || currentInput);
  });
  document.getElementById('resetBtn').addEventListener('click', () => {
    currentInput = structuredClone ? structuredClone(sample) : JSON.parse(JSON.stringify(sample));
    setEditorValueFromObject(currentInput);
    renderFormMulti();
    computeDebounced();
  });
  document.getElementById('viewSelect').addEventListener('change', (e) => {
    e.target.dataset.userSet = 'true';
    const raw = document.getElementById('rawOut').textContent;
    if (!raw) return;
    try { renderOutputBatch(JSON.parse(raw)); } catch (_) {}
  });

  // Form bindings
  bindForm();
}

function main() {
  initEditor();
  hookUI();
  renderFormMulti();
  computeDebounced();
}

window.addEventListener('DOMContentLoaded', main);
