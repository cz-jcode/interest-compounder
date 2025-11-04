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
    'legend.interest': 'Obdržený úrok',
    'legend.header': 'Souhrn vstupů',
    'legend.rate': 'Sazba',
    'legend.months': 'Měsíce',
    'legend.recurring': 'Pravidelné',
    'legend.oneTime': 'Jednorázové',
    'legend.totals': 'Souhrny',
    'legend.balance': 'Zůstatek',
    'form.name': 'Název',
    'form.currency': 'Měna',
    'btn.expand': 'Rozbalit',
    'btn.collapse': 'Sbalit',
    'lang.auto': 'Automaticky',
    // repo/i18n
    'repo.save': 'Uložit',
    'repo.load': 'Načíst',
    'repo.copy': 'Kopírovat',
    'repo.download': 'Stáhnout',
    'repo.saveTitle': 'Uložit zdroj',
    'repo.loadTitle': 'Načíst zdroj',
    'repo.name': 'Název',
    'repo.version': 'Verze',
    'repo.cancel': 'Zrušit',
    'repo.saveHint': 'Pokud název již existuje, vytvoří se nová verze. Potvrzené přepsání zachová starší verze.',
    'repo.confirmOverwrite': 'Sada s tímto názvem již existuje. Vytvořit novou verzi pod tímto názvem?',
    'repo.savedOk': 'Uloženo do úložiště prohlížeče.',
    'repo.copied': 'Zdroj zkopírován do schránky.',
    'repo.downloaded': 'Stahování zahájeno.',
    'repo.noNames': 'Zatím žádné uložené sady.',
    'out.copyTitle': 'Zkopírovat JSON výstupu (kopie výstupu)',
    'out.copied': 'JSON výstupu zkopírován do schránky.'
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
    'legend.interest': 'Interest received',
    'legend.header': 'Input summary',
    'legend.rate': 'Rate',
    'legend.months': 'Months',
    'legend.recurring': 'Recurring',
    'legend.oneTime': 'One-time',
    'legend.totals': 'Totals',
    'legend.balance': 'Balance',
    'form.name': 'Name',
    'form.currency': 'Currency',
    'btn.expand': 'Expand',
    'btn.collapse': 'Collapse',
    'lang.auto': 'Auto',
    // repo/i18n
    'repo.save': 'Save',
    'repo.load': 'Load',
    'repo.copy': 'Copy',
    'repo.download': 'Download',
    'repo.saveTitle': 'Save source',
    'repo.loadTitle': 'Load source',
    'repo.name': 'Name',
    'repo.version': 'Version',
    'repo.cancel': 'Cancel',
    'repo.saveHint': 'If the name already exists, a new version will be created. Overwrite keeps older versions.',
    'repo.confirmOverwrite': 'A set with this name already exists. Create a new version under this name?',
    'repo.savedOk': 'Saved to browser storage.',
    'repo.copied': 'Source copied to clipboard.',
    'repo.downloaded': 'Download started.',
    'repo.noNames': 'No saved sets yet.',
    'out.copyTitle': 'Copy output JSON (copy of output)',
    'out.copied': 'Output JSON copied to clipboard.'
  },
  de: {
    title: 'Zinseszins Rechner UI',
    header: 'Investitionsrechner (monatliche Verzinsung)',
    inputs: 'Eingabe',
    'tab.editor': 'Quelle',
    'tab.form': 'Formular',
    'toggle.modeTitle': 'JSON/YAML umschalten (für Editor)',
    'btn.format': 'Formatieren',
    'btn.reset': 'Zurücksetzen',
    'hint.editor': 'Änderungen werden mit ~400 ms Verzögerung gesendet. Unbekannte Felder werden vom Backend abgelehnt.',
    outputs: 'Ausgabe & Diagramme',
    'view.label': 'Ansicht:',
    'view.months': 'Monate',
    'view.years': 'Jahre',
    'raw.title': 'Rohantwort',
    'btn.addCalc': 'Berechnung hinzufügen',
    'form.hintMulti': 'Das Formular unterstützt mehrere Berechnungen. Sie können alle hier hinzufügen/entfernen und bearbeiten. Der YAML/JSON-Editor bleibt synchron.',
    'calc.title': 'Berechnung',
    'form.initial': 'Anfangseinlage',
    'form.rate': 'Jährlicher Zinssatz (z. B. 0.07)',
    'form.months': 'Gesamtmonate',
    'form.recurring': 'Regelmäßige Beiträge',
    'th.freq': 'Frequenz',
    'th.amount': 'Betrag',
    'th.start': 'Start M',
    'th.end': 'Ende M (-1=∞)',
    'form.oneTime': 'Einmalige Beiträge',
    'th.month': 'Monat',
    'btn.addRecurring': 'Regelmäßigen hinzufügen',
    'btn.addOneTime': 'Einmaligen hinzufügen',
    'btn.delete': 'Löschen',
    'chart.months': 'Monate',
    'chart.years': 'Jahre',
    'legend.principal': 'Einlage',
    'legend.interest': 'Erhaltene Zinsen',
    'legend.header': 'Eingabezusammenfassung',
    'legend.rate': 'Zinssatz',
    'legend.months': 'Monate',
    'legend.recurring': 'Regelmäßig',
    'legend.oneTime': 'Einmalig',
    'legend.totals': 'Summen',
    'legend.balance': 'Saldo',
    'form.name': 'Name',
    'form.currency': 'Währung',
    'btn.expand': 'Ausklappen',
    'btn.collapse': 'Einklappen',
    'lang.auto': 'Automatisch',
    // repo/i18n
    'repo.save': 'Speichern',
    'repo.load': 'Laden',
    'repo.copy': 'Kopieren',
    'repo.download': 'Herunterladen',
    'repo.saveTitle': 'Quelle speichern',
    'repo.loadTitle': 'Quelle laden',
    'repo.name': 'Name',
    'repo.version': 'Version',
    'repo.cancel': 'Abbrechen',
    'repo.saveHint': 'Wenn der Name bereits existiert, wird eine neue Version erstellt. Überschreiben behält ältere Versionen bei.',
    'repo.confirmOverwrite': 'Ein Satz mit diesem Namen existiert bereits. Neue Version unter diesem Namen erstellen?',
    'repo.savedOk': 'Im Browserspeicher gespeichert.',
    'repo.copied': 'Quelle in die Zwischenablage kopiert.',
    'repo.downloaded': 'Download gestartet.',
    'repo.noNames': 'Noch keine gespeicherten Sätze.',
    'out.copyTitle': 'Antwort-JSON kopieren (Kopie der Ausgabe)',
    'out.copied': 'Antwort-JSON in die Zwischenablage kopiert.'
  }
};
let currentLang = 'en';
function getLang(){
  const sel = document.getElementById('langSelect');
  const stored = localStorage.getItem('lang') || 'auto';
  const v = sel ? (sel.value||stored) : stored;
  let lang;
  if (v === 'auto') {
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('cs')) lang = 'cs';
    else if (nav.startsWith('de')) lang = 'de';
    else lang = 'en';
  } else {
    lang = v;
  }
  if (!I18N[lang]) lang = 'en';
  return lang;
}
function t(key){ return I18N[currentLang]?.[key] ?? key; }
function applyI18n(){
  currentLang = getLang();
  document.documentElement.setAttribute('lang', currentLang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-title]').forEach(el=>{ el.setAttribute('title', t(el.getAttribute('data-i18n-title'))); });
}

// --- Utilities ---
let currentLocale = 'en-US';
function updateLocale(){ currentLocale = (currentLang==='cs')? 'cs-CZ' : (currentLang==='de' ? 'de-DE' : 'en-US'); }
// Currency is now per calculation. Use helpers to format with given currency code.
function moneyWith(v, currency){
  const cur = typeof currency === 'string' && currency ? currency : (currentLang==='cs' ? 'CZK' : (currentLang==='de' ? 'EUR' : 'USD'));
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

// --- Local repository (localStorage) ---
const REPO_KEY = 'ic.repo';
function nowIso(){ return new Date().toISOString(); }
function repoRead(){
  try { return JSON.parse(localStorage.getItem(REPO_KEY)||'{}')||{}; } catch{ return {}; }
}
function repoWrite(obj){ localStorage.setItem(REPO_KEY, JSON.stringify(obj)); }
function repoEnsure(){
  const r = repoRead();
  if (!r.names) r.names = {}; if (!r.last) r.last = {};
  return r;
}
function repoListNames(){
  const r = repoEnsure(); return Object.keys(r.names).sort((a,b)=>a.localeCompare(b));
}
function repoGet(name){ const r = repoEnsure(); return r.names[name] || { versions: [] }; }
function repoSave(name, text, savedMode){
  name = (name||'').trim(); if (!name) throw new Error('name required');
  const r = repoEnsure();
  if (!r.names[name]) r.names[name] = { versions: [] };
  const versions = r.names[name].versions;
  const ts = nowIso();
  const id = ts; // simple id by timestamp
  versions.push({ id, ts, mode: savedMode||'yaml', data: text });
  // keep last 50 versions per name to avoid unbounded growth
  if (versions.length > 50) r.names[name].versions = versions.slice(-50);
  r.last = { name, id };
  repoWrite(r);
  return { id, ts };
}
function repoListVersions(name){
  const ent = repoGet(name); const arr = Array.isArray(ent.versions)? ent.versions : [];
  // sort descending by ts
  return [...arr].sort((a,b)=> (a.ts<b.ts?1:-1));
}
function repoLoadVersion(name, id){
  const ent = repoGet(name); const v = (ent.versions||[]).find(v=>v.id===id);
  if (!v) throw new Error('version not found');
  return v;
}

// --- Sample payload (Batch with multiple calculations) ---
const sampleItem = {
  name: 'Calculation 1',
  currency: (navigator.language?.toLowerCase().startsWith('cs') ? 'CZK' : (navigator.language?.toLowerCase().startsWith('de') ? 'EUR' : 'USD')),
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
const sample = { calculations: [ sampleItem, { ...sampleItem, name: 'Calculation 2', annualRate: 0.05, initialPrincipal: 5000, totalMonths: 60, recurring: [ { schedule: 'monthly', amount: 100, startMonth: 0, endMonth: -1 } ], oneTime: [] } ] };

let mode = 'yaml'; // default 'yaml' | 'json'
let editor, chart, hoverStackId = null, hoverCalcName = null, hoverIndex = null;
let lastBatchJSON = '';
let lastFormEditTs = 0; // timestamp of last form-driven edit to suppress echo from editor change
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
  // mode radios are initialized in hookUI; default is YAML
  setEditorValueFromObject(currentInput);
  editor.session.on('change', debounce(onEditorChanged, 400));
  // ensure initial proper sizing
  setTimeout(()=>{ try{ editor && editor.resize(); }catch{} }, 0);
}

let editorProgrammatic = false;
function setEditorValueFromObject(obj) {
  editorProgrammatic = true;
  if (mode === 'json') {
    editor.session.setMode('ace/mode/json');
    editor.setValue(JSON.stringify(obj, null, 2), -1);
  } else {
    editor.session.setMode('ace/mode/yaml');
    const y = jsyaml.dump(obj, { noRefs: true, lineWidth: 80 });
    editor.setValue(y, -1);
  }
  // release the guard after Ace processes the change cycle
  setTimeout(()=>{ editorProgrammatic = false; }, 0);
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
  const o = Object.assign({ name:'', currency:(currentLang==='cs'?'CZK':(currentLang==='de'?'EUR':'USD')), initialPrincipal:0, annualRate:0, totalMonths:1, recurring:[], oneTime:[] }, it||{});
  o.recurring = Array.isArray(o.recurring) ? o.recurring : [];
  o.oneTime = Array.isArray(o.oneTime) ? o.oneTime : [];
  if (typeof o.name !== 'string') o.name = '';
  if (typeof o.currency !== 'string' || !o.currency) o.currency = (currentLang==='cs'?'CZK':(currentLang==='de'?'EUR':'USD'));
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
const syncEditorDebounced = debounce(() => {
  try { setEditorValueFromObject(currentInput); } catch {}
}, 300);

function onEditorChanged() {
  // Ignore echoes from our own programmatic updates
  if (editorProgrammatic) return;
  const obj = readEditorAsObject();
  if (!obj) return;
  currentInput = normalizeBatch(obj);
  renderFormMulti();
  computeDebounced();
}

function round2(x){ return Math.round((x + Number.EPSILON) * 100) / 100; }

function renderOutputBatch(batchResp) {
  const pairs = Array.isArray(batchResp.results) ? batchResp.results : [];
  lastBatchJSON = JSON.stringify(batchResp, null, 2);

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
  const base = 'Calculation';
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
    const balancesData  = Array.from({length:maxM}, (_,i)=> monthly[i]? monthly[i].balance : 0);
    const color = palette[idx % palette.length];
    const name = calcDisplayName(req, idx);
    const cur = req.currency || (currentLang==='cs' ? 'CZK' : (currentLang==='de' ? 'EUR' : 'USD'));
    datasets.push({
      label: t('legend.principal'),
      data: principalData,
      backgroundColor: withAlpha(color, 0.7),
      borderColor: color,
      stack: 'calc'+idx,
      currency: cur,
      calcName: name,
      balances: balancesData,
      periodType: 'month'
    });
    datasets.push({
      label: t('legend.interest'),
      data: interestData,
      backgroundColor: withAlpha(color, 0.35),
      borderColor: withAlpha(color, 0.5),
      stack: 'calc'+idx,
      currency: cur,
      calcName: name,
      balances: balancesData,
      periodType: 'month'
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
  const labels = Array.from({length:maxY}, (_,i)=> (currentLang==='cs' ? 'R' : (currentLang==='de' ? 'J' : 'Y')) + (i+1));
  const datasets = [];
  const palette = basePalette();
  yearsArrays.forEach((arr, idx)=>{
    const principalData = Array.from({length:maxY}, (_,i)=> arr[i]? arr[i].principal : 0);
    const interestData  = Array.from({length:maxY}, (_,i)=> arr[i]? arr[i].interestCum : 0);
    const balancesData  = Array.from({length:maxY}, (_,i)=> arr[i]? arr[i].balance : 0);
    const color = palette[idx % palette.length];
    const req = pairs[idx]?.request || {};
    const name = calcDisplayName(req, idx);
    const cur = req.currency || (currentLang==='cs' ? 'CZK' : (currentLang==='de' ? 'EUR' : 'USD'));
    datasets.push({
      label: t('legend.principal'),
      data: principalData,
      backgroundColor: withAlpha(color, 0.7),
      borderColor: color,
      stack: 'calc'+idx,
      currency: cur,
      calcName: name,
      balances: balancesData,
      periodType: 'year'
    });
    datasets.push({
      label: t('legend.interest'),
      data: interestData,
      backgroundColor: withAlpha(color, 0.35),
      borderColor: withAlpha(color, 0.5),
      stack: 'calc'+idx,
      currency: cur,
      calcName: name,
      balances: balancesData,
      periodType: 'year'
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
  let count = 0;
  pairs.forEach((p, idx)=>{
    const req = p.request || {};
    const res = p.response || {};
    const totals = res.totals || {};
    const color = palette[idx % palette.length];
    const item = document.createElement('div');
    const cur = req.currency || (currentLang==='cs' ? 'CZK' : (currentLang==='de' ? 'EUR' : 'USD'));
    const name = calcDisplayName(req, idx);
    const totalsText = `${t('legend.totals')}: ${t('legend.principal')}: ${moneyWith(totals.principal||0, cur)} · ${t('legend.interest')}: ${moneyWith(totals.interest||0, cur)} · ${t('legend.balance')}: ${moneyWith(totals.balance||0, cur)}`;
    item.className = 'legend-item';
    item.setAttribute('data-idx', String(idx));
    item.innerHTML = `
      <span class="swatch" style="background:${withAlpha(color, 0.8)}; border-color:${color}"></span>
      <span class="legend-text">${name}: ${moneyWith(req.initialPrincipal||0, cur)} · ${t('legend.rate')}: ${numberFmt(req.annualRate||0)} · ${t('legend.months')}: ${req.totalMonths||0} — ${totalsText}</span>
    `;
    item.addEventListener('mouseenter', (ev)=>{
      if (!hover) return;
      hover.innerHTML = buildLegendHover(req, idx, color, totals);
      hover.hidden = false;
      positionHover(hover, ev);
    });
    item.addEventListener('mousemove', (ev)=>{ if (hover && !hover.hidden) positionHover(hover, ev); });
    item.addEventListener('mouseleave', ()=>{ if (hover) hover.hidden = true; });
    legendEl.appendChild(item);
    count++;
  });
  legendEl.classList.toggle('scroll', count > 5);
  // After legend reflow, adjust chart height to keep page non-scrolling
  fitChartHeight();
}
function buildLegendHover(req, idx, color, totals){
  const rec = Array.isArray(req.recurring)? req.recurring : [];
  const one = Array.isArray(req.oneTime)? req.oneTime : [];
  const cur = req.currency || (currentLang==='cs' ? 'CZK' : (currentLang==='de' ? 'EUR' : 'USD'));
  const recList = rec.map(r=>`<li>${r.schedule||'monthly'} · ${moneyWith(r.amount||0, cur)} · ${r.startMonth||0}→${(r.endMonth??-1)}</li>`).join('') || '<li>–</li>';
  const oneList = one.map(o=>`<li>${moneyWith(o.amount||0, cur)} @ M${o.atMonth||0}</li>`).join('') || '<li>–</li>';
  const name = calcDisplayName(req, idx);
  const tot = totals||{};
  return `
    <div class="legend-hover-inner">
      <div class="legend-hover-header">
        <span class="swatch" style="background:${withAlpha(color, 0.8)}; border-color:${color}"></span>
        <strong>${name}</strong>
      </div>
      <div class="row"><span>${t('form.initial')}:</span><span>${moneyWith(req.initialPrincipal||0, cur)}</span></div>
      <div class="row"><span>${t('legend.rate')}:</span><span>${numberFmt(req.annualRate||0)}</span></div>
      <div class="row"><span>${t('legend.months')}:</span><span>${req.totalMonths||0}</span></div>
      <div class="row"><span>${t('legend.totals')}:</span><span>${t('legend.principal')}: ${moneyWith(tot.principal||0, cur)} · ${t('legend.interest')}: ${moneyWith(tot.interest||0, cur)} · ${t('legend.balance')}: ${moneyWith(tot.balance||0, cur)}</span></div>
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
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    onHover: (evt, elements, c) => {
      // Detect hovered column by X-axis position only (month/year index), then pick 1 nearest calculation within that column
      try {
        const atIndex = c.getElementsAtEventForMode(evt, 'index', { intersect: false }, true);
        if (atIndex && atIndex.length > 0) {
          // All elements share the same dataIndex
          hoverIndex = atIndex[0].index;
          // Choose the element whose bar center (element.x) is closest to cursor X
          let best = atIndex[0];
          let bestDx = Number.POSITIVE_INFINITY;
          for (const el of atIndex) {
            const x = el.element && typeof el.element.x === 'number' ? el.element.x : null;
            if (x != null && typeof evt.x === 'number') {
              const dx = Math.abs(x - evt.x);
              if (dx < bestDx) { bestDx = dx; best = el; }
            }
          }
          const di = best.datasetIndex;
          const ds = c.data?.datasets?.[di];
          hoverCalcName = ds?.calcName || null;
        } else {
          hoverIndex = null;
          hoverCalcName = null;
        }
      } catch (_) {
        hoverIndex = null;
        hoverCalcName = null;
      }
    },
    plugins: {
      title: { display: true, text: (currentLang==='cs' ? 'Vývoj portfolia – ' : (currentLang==='de' ? 'Portfolioentwicklung – ' : 'Portfolio evolution – ')) + title },
      legend: { display: false },
      tooltip: {
        filter: (ti) => {
          const chart = ti.chart;
          const datasets = chart.data?.datasets || [];
          const ds = datasets[ti.datasetIndex];
          if (!ds) return false;
          // Highlight entire calculation only
          if (hoverCalcName) {
            return ds.calcName === hoverCalcName;
          }
          // Fallback: try active element's calculation
          const active = chart.getActiveElements ? chart.getActiveElements() : (chart._active || []);
          if (active && active.length > 0) {
            const activeDs = datasets[active[0].datasetIndex];
            return activeDs && activeDs.calcName === ds.calcName;
          }
          return true;
        },
        callbacks: {
          title: (items) => {
            if (!items || items.length === 0) return '';
            const ds = items[0].dataset || {};
            return ds.calcName || '';
          },
          label: (ctx)=> {
            const cur = ctx.dataset.currency || (currentLang==='cs' ? 'CZK' : (currentLang==='de' ? 'EUR' : 'USD'));
            return `${ctx.dataset.label}: ${moneyWith(ctx.parsed.y, cur)}`;
          },
          afterBody: (items)=>{
            if (!items || items.length === 0) return [];
            const it = items[0];
            const ds = it.dataset || {};
            const idx = it.dataIndex;
            const cur = ds.currency || (currentLang==='cs' ? 'CZK' : (currentLang==='de' ? 'EUR' : 'USD'));
            const balances = ds.balances || [];
            const bal = typeof balances[idx] === 'number' ? balances[idx] : 0;
            const line = `${t('legend.balance')}: ${moneyWith(bal, cur)}`;
            return [line];
          }
        }
      }
    },
    scales: { y: { stacked: true, ticks: { callback: (v)=> numberFmt(v) } }, x: { stacked: true } }
  };
  if (chart) chart.destroy();
  chart = new Chart(ctx, { type: 'bar', data, options });
  // Adjust canvas height after chart render to prevent page scroll
  fitChartHeight();
}

function setActiveTab(which){
  const btnEditor = document.getElementById('tabEditorBtn');
  const btnForm = document.getElementById('tabFormBtn');
  const tabEditor = document.getElementById('tabEditor');
  const tabForm = document.getElementById('tabForm');
  const isForm = which === 'form';
  if (btnForm && btnEditor){
    btnForm.classList.toggle('active', isForm);
    btnEditor.classList.toggle('active', !isForm);
    btnForm.setAttribute('aria-selected', String(isForm));
    btnEditor.setAttribute('aria-selected', String(!isForm));
  }
  if (tabForm && tabEditor){
    tabForm.hidden = !isForm;
    tabEditor.hidden = isForm;
  }
  if (!isForm){
    setTimeout(()=>{ try{ editor && editor.resize(); }catch{} }, 0);
  }
  setTimeout(()=>{ try{ fitChartHeight(); }catch{} }, 0);
}
function bindTabs(){
  const btnEditor = document.getElementById('tabEditorBtn');
  const btnForm = document.getElementById('tabFormBtn');
  if (btnEditor) btnEditor.addEventListener('click', () => setActiveTab('editor'));
  if (btnForm) btnForm.addEventListener('click', () => setActiveTab('form'));
  // Keyboard navigation: Left/Right arrows cycle between tabs
  const tabsContainer = document.querySelector('.tabs[role="tablist"]');
  if (tabsContainer){
    tabsContainer.addEventListener('keydown', (ev)=>{
      if (ev.key === 'ArrowLeft' || ev.key === 'ArrowRight'){
        ev.preventDefault();
        const isFormActive = document.getElementById('tabForm') && !document.getElementById('tabForm').hidden;
        if (ev.key === 'ArrowRight') setActiveTab(isFormActive ? 'editor' : 'form');
        else setActiveTab(isFormActive ? 'editor' : 'form');
      }
    });
  }
  // Ensure initial state strictly shows only one panel (Form by default)
  setActiveTab('form');
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
    const isCollapsed = !!collapsedState[idx];
    wrap.className = 'calc-card' + (isCollapsed ? ' collapsed' : '');
    const displayName = calcDisplayName(it, idx);
    const summary = `${moneyWith(it.initialPrincipal||0, it.currency|| (currentLang==='cs' ? 'CZK' : (currentLang==='de' ? 'EUR' : 'USD')))} · ${t('legend.rate')}: ${numberFmt(it.annualRate||0)} · ${t('legend.months')}: ${it.totalMonths||0}`;
    const arrow = isCollapsed ? '▼' : '▲';
    const toggleTitle = isCollapsed ? t('btn.expand') : t('btn.collapse');
    const actionsHtml = isCollapsed ? '' : (
      `<div class="actions">
          <button data-action="add-rec" data-cidx="${idx}">${t('btn.addRecurring')}</button>
          <button data-action="add-one" data-cidx="${idx}">${t('btn.addOneTime')}</button>
          <button data-action="del-calc" data-cidx="${idx}">${t('btn.delete')}</button>
        </div>`
    );
    wrap.innerHTML = `
      <div class="calc-header" data-action="toggle" data-cidx="${idx}" aria-expanded="${!isCollapsed}">
        <div class="left">
          <button class="toggle-btn" data-action="toggle" data-cidx="${idx}" title="${toggleTitle}" aria-label="${toggleTitle}">${arrow}</button>
          <strong>${displayName}</strong>
          <span class="muted">${summary}</span>
        </div>
        ${actionsHtml}
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
    wrap.querySelector('select[data-field="currency"]').value = (it.currency || (currentLang==='cs' ? 'CZK' : (currentLang==='de' ? 'EUR' : 'USD')));
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

function decimalsFromStep(stepStr){
  if (!stepStr) return 0;
  const m = String(stepStr).split('.');
  return m.length>1 ? (m[1].length||0) : 0;
}
function formatNumberForInput(val, stepStr){
  if (typeof val !== 'number' || !isFinite(val)) return '';
  const d = decimalsFromStep(stepStr);
  return d>0 ? val.toFixed(d) : String(Math.trunc(val));
}

function bindForm(){
  // Add calculation button
  document.getElementById('addCalcBtn').addEventListener('click', ()=>{
    const b = normalizeBatch(currentInput);
    const nextIdx = b.calculations.length; // zero-based, display is +1
    // Determine defaults based on existing calculations
    const last = b.calculations[nextIdx - 1];
    const lastCurrency = last?.currency || (currentLang==='cs' ? 'CZK' : 'USD');
    const maxMonths = Math.max(12, ...b.calculations.map(c => parseInt(c.totalMonths)||0));
    b.calculations.push(normalizeItem({
      name: `Calculation ${nextIdx+1}`,
      currency: lastCurrency,
      initialPrincipal: 0,
      annualRate: 0.05,
      totalMonths: maxMonths,
      recurring: [ { schedule: 'monthly', amount: 100, startMonth: 0, endMonth: -1 } ],
      oneTime: []
    }));
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
    // Update in-memory model without re-rendering the form or editor immediately
    if (e.target.classList.contains('top-field')){
      if (field === 'name') {
        it.name = String(e.target.value||'');
      } else if (field === 'currency') {
        it.currency = e.target.value || (currentLang==='cs'?'CZK':(currentLang==='de'?'EUR':'USD'));
      } else {
        const raw = e.target.value;
        // loose parsing: allow transient states like '', '-', '0.', etc.; keep previous if NaN
        let val;
        if (field === 'totalMonths') {
          const parsed = parseInt(raw);
          val = Number.isNaN(parsed) ? it.totalMonths : parsed;
        } else {
          const parsed = parseFloat(raw);
          val = Number.isNaN(parsed) ? it[field] : parsed;
        }
        it[field] = val;
      }
    } else if (!Number.isNaN(rIdx)) {
      if (e.target.closest('table').classList.contains('rec')){
        if (e.target.tagName==='SELECT') {
          it.recurring[rIdx][field] = e.target.value;
        } else {
          const raw = e.target.value;
          if (field==='amount'){
            const p = parseFloat(raw);
            it.recurring[rIdx][field] = Number.isNaN(p) ? (it.recurring[rIdx][field]||0) : p;
          } else {
            const p = parseInt(raw);
            it.recurring[rIdx][field] = (field==='endMonth' && (p===undefined||p===null||Number.isNaN(p)))? -1 : (Number.isNaN(p)? (it.recurring[rIdx][field]||0) : p);
          }
        }
      } else { // one-time
        const raw = e.target.value;
        if (field==='amount'){
          const p = parseFloat(raw);
          it.oneTime[rIdx][field] = Number.isNaN(p) ? (it.oneTime[rIdx][field]||0) : p;
        } else {
          const p = parseInt(raw);
          it.oneTime[rIdx][field] = Number.isNaN(p) ? (it.oneTime[rIdx][field]||0) : p;
        }
      }
    }
    currentInput = b;
    // Only debounce-sync editor text (non-destructive) and recompute charts; do not re-render form here
    syncEditorDebounced();
    computeDebounced();
  });

  document.getElementById('formMulti').addEventListener('click', (e)=>{
    const actEl = e.target.closest('[data-action]');
    if (!actEl) return;
    const action = actEl.getAttribute('data-action');
    const cidx = parseInt(actEl.getAttribute('data-cidx'));
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
      const rIdx = parseInt(actEl.getAttribute('data-idx'));
      const it = b.calculations[cidx];
      it.recurring.splice(rIdx,1);
      currentInput = b; setEditorValueFromObject(currentInput); renderFormMulti(); computeDebounced();
    } else if (action === 'del-one'){
      const oIdx = parseInt(actEl.getAttribute('data-idx'));
      const it = b.calculations[cidx];
      it.oneTime.splice(oIdx,1);
      currentInput = b; setEditorValueFromObject(currentInput); renderFormMulti(); computeDebounced();
    }
  });

  // On change/blur: normalize value string and refresh summaries
  function normalizeFieldValue(target, model, field){
    if (!target) return;
    const step = target.getAttribute('step')||'';
    if (field==='name' || field==='currency') return;
    if (field==='totalMonths'){
      const v = parseInt(target.value);
      const n = Number.isNaN(v) ? (model.totalMonths||0) : v;
      model.totalMonths = n;
      target.value = formatNumberForInput(n, step || '1');
    } else if (field){
      const v = parseFloat(target.value);
      const n = Number.isNaN(v) ? (model[field]||0) : v;
      model[field] = n;
      target.value = formatNumberForInput(n, step||'0.01');
    }
  }
  const formEl = document.getElementById('formMulti');
  formEl.addEventListener('change', (e)=>{
    const target = e.target;
    const cidx = parseInt(target.getAttribute('data-cidx'));
    if (Number.isNaN(cidx)) return;
    const b = normalizeBatch(currentInput);
    const it = b.calculations[cidx];
    const field = target.getAttribute('data-field');
    const rIdx = parseInt(target.getAttribute('data-idx'));
    if (target.classList.contains('top-field')){
      normalizeFieldValue(target, it, field);
    } else if (!Number.isNaN(rIdx)){
      if (target.closest('table').classList.contains('rec')){
        if (target.tagName==='SELECT'){
          // already handled on input
        } else {
          const row = it.recurring[rIdx];
          normalizeFieldValue(target, row, field);
        }
      } else {
        const row = it.oneTime[rIdx];
        normalizeFieldValue(target, row, field);
      }
    }
    currentInput = b;
    setEditorValueFromObject(currentInput);
    renderFormMulti();
    computeDebounced();
  });

  formEl.addEventListener('blur', (e)=>{
    if (!e.target || !e.target.matches('input, select')) return;
    // trigger change-like normalization on blur
    const evt = new Event('change', { bubbles: true });
    e.target.dispatchEvent(evt);
  }, true);
}

function syncEditorAndCompute(){
  setEditorValueFromObject(currentInput);
  computeDebounced();
}

function hookUI() {
  // Init splitter & collapse after DOM is ready
  setTimeout(initSplitter, 0);
  // Tabs
  bindTabs();
  // Language
  const langSel = document.getElementById('langSelect');
  const stored = localStorage.getItem('lang')||'auto';
  if (langSel) langSel.value = stored;
  currentLang = getLang(); updateLocale(); applyI18n();
  langSel.addEventListener('change', ()=>{ localStorage.setItem('lang', langSel.value); currentLang = getLang(); updateLocale(); applyI18n(); if (lastBatchJSON) { try { renderOutputBatch(JSON.parse(lastBatchJSON)); } catch(_){} } });


  // Editor mode radios (YAML/JSON)
  const rYaml = document.getElementById('modeYaml');
  const rJson = document.getElementById('modeJson');
  function applyMode(newMode){
    mode = (newMode === 'json') ? 'json' : 'yaml';
    if (rYaml) rYaml.checked = (mode === 'yaml');
    if (rJson) rJson.checked = (mode === 'json');
    setEditorValueFromObject(currentInput);
    computeDebounced();
    setTimeout(()=>{ try{ editor && editor.resize(); }catch{} }, 0);
  }
  if (rYaml) rYaml.addEventListener('change', (e)=>{ if (e.target.checked) applyMode('yaml'); });
  if (rJson) rJson.addEventListener('change', (e)=>{ if (e.target.checked) applyMode('json'); });
  // initialize radios to current mode
  if (rYaml || rJson) { applyMode(mode); }
  document.getElementById('formatBtn').addEventListener('click', () => {
    setEditorValueFromObject(readEditorAsObject() || currentInput);
    setTimeout(()=>{ try{ editor && editor.resize(); }catch{} }, 0);
  });
  document.getElementById('resetBtn').addEventListener('click', () => {
    currentInput = structuredClone ? structuredClone(sample) : JSON.parse(JSON.stringify(sample));
    setEditorValueFromObject(currentInput);
    renderFormMulti();
    computeDebounced();
    setTimeout(()=>{ try{ editor && editor.resize(); }catch{} }, 0);
  });
  document.getElementById('viewSelect').addEventListener('change', (e) => {
    e.target.dataset.userSet = 'true';
    if (!lastBatchJSON) return;
    try { renderOutputBatch(JSON.parse(lastBatchJSON)); } catch (_) {}
  });

  // Repo buttons
  const saveBtn = document.getElementById('saveRepoBtn');
  const loadBtn = document.getElementById('loadRepoBtn');
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  if (saveBtn) saveBtn.addEventListener('click', openSaveDialog);
  if (loadBtn) loadBtn.addEventListener('click', openLoadDialog);
  if (copyBtn) copyBtn.addEventListener('click', copySourceToClipboard);
  if (downloadBtn) downloadBtn.addEventListener('click', downloadSourceToFile);
  // Output JSON copy (clipboard) in Outputs header
  const copyOutBtn = document.getElementById('copyOutBtn');
  if (copyOutBtn) copyOutBtn.addEventListener('click', async ()=>{
    if (!lastBatchJSON) { try{ alert('No output yet'); }catch{} return; }
    try{
      if (navigator.clipboard && navigator.clipboard.writeText){
        await navigator.clipboard.writeText(lastBatchJSON);
        alert(t('out.copied'));
      } else {
        fallbackCopy(lastBatchJSON);
      }
    }catch{ fallbackCopy(lastBatchJSON); }
  });

  const saveConfirm = document.getElementById('saveConfirmBtn');
  const saveCancel = document.getElementById('saveCancelBtn');
  if (saveConfirm) saveConfirm.addEventListener('click', confirmSaveRepo);
  if (saveCancel) saveCancel.addEventListener('click', closeDialogs);

  const loadConfirm = document.getElementById('loadConfirmBtn');
  const loadCancel = document.getElementById('loadCancelBtn');
  const nameSel = document.getElementById('loadNameSelect');
  const verSel = document.getElementById('loadVersionSelect');
  if (loadConfirm) loadConfirm.addEventListener('click', confirmLoadRepo);
  if (loadCancel) loadCancel.addEventListener('click', closeDialogs);
  if (nameSel) nameSel.addEventListener('change', populateLoadVersions);
  if (verSel) verSel.addEventListener('change', updateLoadMeta);

  // Backdrop click and ESC to close
  const backdrop = document.getElementById('modalBackdrop');
  if (backdrop) backdrop.addEventListener('click', closeDialogs);
  document.addEventListener('keydown', (ev)=>{
    if (ev.key === 'Escape'){
      const host = document.getElementById('repoDialogs');
      if (host && !host.hidden) closeDialogs();
    }
  });
  // Resize Ace on window resize
  window.addEventListener('resize', debounce(()=>{ try{ editor && editor.resize(); }catch{} try{ fitChartHeight(); }catch{} }, 100));

  // Form bindings
  bindForm();
}

function closeDialogs(){
  const host = document.getElementById('repoDialogs');
  if (host) host.hidden = true;
  document.querySelectorAll('.repo-dialog').forEach(d=> d.hidden = true);
  const backdrop = document.getElementById('modalBackdrop');
  if (backdrop) backdrop.hidden = true;
  document.body.classList.remove('modal-open');
}
function openSaveDialog(){
  applyI18n();
  const host = document.getElementById('repoDialogs'); const dlg = document.getElementById('saveDialog');
  const inp = document.getElementById('saveNameInput');
  if (host && dlg){ host.hidden = false; dlg.hidden = false; }
  const backdrop = document.getElementById('modalBackdrop'); if (backdrop) backdrop.hidden = false;
  document.body.classList.add('modal-open');
  // Default name: last used or first calc name, fallback to "Project"
  const r = repoRead();
  let def = (r.last && r.last.name) ? r.last.name : '';
  if (!def){
    try { const b = normalizeBatch(currentInput); const nm = (b.calculations?.[0]?.name||'').trim(); if (nm) def = nm; } catch{}
  }
  if (!def) def = 'Project';
  if (inp){ inp.value = def; inp.select(); inp.focus(); }
}
function formatTs(ts){ try { return new Date(ts).toLocaleString(currentLocale); } catch { return ts; } }
function openLoadDialog(){
  applyI18n();
  const host = document.getElementById('repoDialogs'); const dlg = document.getElementById('loadDialog');
  if (host && dlg){ host.hidden = false; dlg.hidden = false; }
  const backdrop = document.getElementById('modalBackdrop'); if (backdrop) backdrop.hidden = false;
  document.body.classList.add('modal-open');
  populateLoadNames();
}
function populateLoadNames(){
  const sel = document.getElementById('loadNameSelect');
  const names = repoListNames();
  sel.innerHTML = '';
  if (names.length===0){ const opt = document.createElement('option'); opt.value=''; opt.textContent = t('repo.noNames'); sel.appendChild(opt); }
  names.forEach(n=>{ const opt = document.createElement('option'); opt.value = n; opt.textContent = n; sel.appendChild(opt); });
  populateLoadVersions();
}
function populateLoadVersions(){
  const name = document.getElementById('loadNameSelect').value;
  const sel = document.getElementById('loadVersionSelect');
  const meta = document.getElementById('loadMeta');
  sel.innerHTML = '';
  meta.textContent = '';
  if (!name){ return; }
  const versions = repoListVersions(name);
  versions.forEach(v=>{ const opt = document.createElement('option'); opt.value = v.id; opt.textContent = `${formatTs(v.ts)} · ${v.mode.toUpperCase()}`; sel.appendChild(opt); });
  updateLoadMeta();
}
function updateLoadMeta(){
  const name = document.getElementById('loadNameSelect').value;
  const ver = document.getElementById('loadVersionSelect').value;
  const meta = document.getElementById('loadMeta');
  if (!name || !ver){ meta.textContent=''; return; }
  try{
    const v = repoLoadVersion(name, ver);
    meta.textContent = `${name} — ${formatTs(v.ts)} · ${v.mode.toUpperCase()} · ${v.data.length} bytes`;
  }catch{ meta.textContent=''; }
}
function confirmSaveRepo(){
  const inp = document.getElementById('saveNameInput');
  let name = (inp?.value||'').trim();
  if (!name){ alert('Name required'); return; }
  const text = editor.getValue();
  // If name exists, ask for confirmation (new version)
  const exists = repoListNames().includes(name);
  if (exists){ if (!confirm(t('repo.confirmOverwrite'))) return; }
  repoSave(name, text, mode);
  closeDialogs();
  try { alert(t('repo.savedOk')); } catch{}
}
function confirmLoadRepo(){
  const name = document.getElementById('loadNameSelect').value;
  const ver = document.getElementById('loadVersionSelect').value;
  if (!name || !ver) { closeDialogs(); return; }
  try{
    const v = repoLoadVersion(name, ver);
    // switch mode to saved mode
    mode = (v.mode==='json')? 'json' : 'yaml';
    const toggle = document.getElementById('modeToggle'); const label = document.getElementById('modeLabel');
    if (toggle) toggle.checked = (mode==='yaml'); if (label) label.textContent = mode.toUpperCase();
    // set editor and parse
    editor.session.setMode(mode==='json'?'ace/mode/json':'ace/mode/yaml');
    editor.setValue(v.data, -1);
    const obj = readEditorAsObject();
    if (obj){ currentInput = normalizeBatch(obj); renderFormMulti(); computeDebounced(); }
  }catch(e){ showError((currentLang==='cs'?'Načtení selhalo: ':'Load failed: ') + (e.message||String(e))); }
  closeDialogs();
}
async function copySourceToClipboard(){
  const text = editor.getValue();
  if (navigator.clipboard && navigator.clipboard.writeText){
    try{ await navigator.clipboard.writeText(text); alert(t('repo.copied')); }catch{ fallbackCopy(text); }
  } else { fallbackCopy(text); }
}
function fallbackCopy(text){
  const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try{ document.execCommand('copy'); alert(t('repo.copied')); }catch{} finally{ document.body.removeChild(ta); }
}
function downloadSourceToFile(){
  const text = editor.getValue();
  const r = repoRead(); const name = (r.last?.name)||'set';
  const ext = (mode==='json')? 'json' : 'yaml';
  const ts = new Date().toISOString().replace(/[:]/g,'-');
  const fname = `${name}.${ts}.${ext}`;
  const blob = new Blob([text], { type: (mode==='json'?'application/json':'text/yaml') });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = fname; document.body.appendChild(a); a.click(); document.body.removeChild(a); setTimeout(()=>URL.revokeObjectURL(url), 0);
  try { alert(t('repo.downloaded')); } catch{}
}

// --- Splitter (40/60 with drag + collapse) ---
const SPLIT_KEY = 'ui.split.inputsWidth';
const SPLIT_COLLAPSE_KEY = 'ui.split.collapsed';
function clamp(v, min, max){ return Math.min(max, Math.max(min, v)); }
function initSplitter(){
  const container = document.querySelector('main.container');
  const inputs = document.getElementById('inputsPanel');
  const outputs = document.getElementById('outputsPanel');
  const splitter = document.getElementById('splitter');
  const collapseBtn = document.getElementById('collapseBtn');
  if (!container || !inputs || !outputs || !splitter) return;

  // Restore persisted state
  const stored = parseFloat(localStorage.getItem(SPLIT_KEY));
  const collapsed = localStorage.getItem(SPLIT_COLLAPSE_KEY) === '1';
  let basis = (!Number.isNaN(stored) && stored>0) ? stored : 40; // percent
  if (collapsed) {
    inputs.classList.add('collapsed');
    splitter.classList.add('docked-left');
    if (collapseBtn){ collapseBtn.setAttribute('aria-expanded','false'); collapseBtn.textContent = '▶'; }
  } else {
    inputs.style.flexBasis = basis + '%';
    splitter.classList.remove('docked-left');
    if (collapseBtn){ collapseBtn.setAttribute('aria-expanded','true'); collapseBtn.textContent = '◀'; }
  }

  function applyWidth(pct){
    if (inputs.classList.contains('collapsed')) return;
    basis = clamp(pct, 15, 70); // keep graph dominant
    inputs.style.flexBasis = basis + '%';
    localStorage.setItem(SPLIT_KEY, String(basis));
    // Let charts and editor adapt
    try { if (chart) chart.resize(); } catch{}
    try { if (editor) editor.resize(); } catch{}
    try { fitChartHeight(); } catch{}
  }

  let dragging = false;
  function onMove(clientX){
    const rect = container.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 100, rect.width - 100);
    const pct = (x / rect.width) * 100;
    applyWidth(pct);
  }
  splitter.addEventListener('mousedown', (e)=>{ dragging = true; e.preventDefault(); });
  window.addEventListener('mousemove', (e)=>{ if (dragging) onMove(e.clientX); });
  window.addEventListener('mouseup', ()=>{ dragging = false; });
  // Touch
  splitter.addEventListener('touchstart', (e)=>{ dragging = true; });
  window.addEventListener('touchmove', (e)=>{ if (!dragging) return; const t = e.touches[0]; if (t) onMove(t.clientX); });
  window.addEventListener('touchend', ()=>{ dragging = false; });

  // Collapse/expand
  if (collapseBtn){
    collapseBtn.addEventListener('click', ()=>{
      const isCollapsed = inputs.classList.toggle('collapsed');
      splitter.classList.toggle('docked-left', isCollapsed);
      if (isCollapsed){
        collapseBtn.setAttribute('aria-expanded','false');
        collapseBtn.textContent = '▶';
        localStorage.setItem(SPLIT_COLLAPSE_KEY, '1');
      } else {
        collapseBtn.setAttribute('aria-expanded','true');
        collapseBtn.textContent = '◀';
        localStorage.setItem(SPLIT_COLLAPSE_KEY, '0');
        // Ensure some width applied
        const restore = parseFloat(localStorage.getItem(SPLIT_KEY));
        applyWidth((!Number.isNaN(restore)&&restore>0)? restore : 40);
      }
      // Resize dependents
      try { if (chart) chart.resize(); } catch{}
      try { if (editor) editor.resize(); } catch{}
      try { fitChartHeight(); } catch{}
    });
  }
}

function main() {
  initEditor();
  hookUI();
  renderFormMulti();
  computeDebounced();
}

window.addEventListener('DOMContentLoaded', main);


// Dynamically size the chart canvas so the legend remains visible above without causing page scroll
function fitChartHeight(){
  try{
    const container = document.getElementById('chartsContainer');
    const canvas = document.getElementById('chart');
    const legend = document.getElementById('legend');
    if (!container || !canvas) return;
    // charts-container uses flex column with gap:16px in CSS
    const GAP = 16;
    const containerHeight = container.clientHeight; // visible height available for legend + canvas
    const legendHeight = legend ? legend.offsetHeight : 0;
    // Reserve one gap between legend and canvas if both present
    const reserved = legendHeight + (legendHeight > 0 ? GAP : 0);
    // Keep sensible minimum for canvas
    const target = Math.max(140, containerHeight - reserved);
    canvas.style.height = target + 'px';
    try { if (typeof chart !== 'undefined' && chart) chart.resize(); } catch {}
  } catch {}
}
