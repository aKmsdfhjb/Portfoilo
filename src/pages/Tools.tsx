import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

type ToolTab = 'land' | 'triangle' | 'concrete';
const LAND = { sqFt: 10.7639104167, ropani: 508.737, aana: 31.7960625, paisa: 7.949015625, dam: 1.98725390625, bigha: 6772.63, kattha: 338.6315, dhur: 16.931575 };
const numberValue = (value: string) => value.trim() === '' ? 0 : Number(value);
const validPositive = (...values: number[]) => values.every(v => Number.isFinite(v) && v > 0);
const fmt = (value: number, digits = 2) => Number.isFinite(value) ? value.toLocaleString('en-US', { maximumFractionDigits: digits, minimumFractionDigits: digits }) : '—';

function Field({ label, value, onChange, unit, step = 'any', min = '0' }: {label:string;value:string;onChange:(value:string)=>void;unit?:string;step?:string;min?:string}) {
  return <label className="tool-field"><span>{label}{unit ? ` (${unit})` : ''}</span><input type="number" inputMode="decimal" min={min} step={step} value={value} onChange={e=>onChange(e.target.value)} /></label>;
}

export default function Tools() {
  const [tab, setTab] = useState<ToolTab>('land');
  const [area, setArea] = useState('100');
  const [a, setA] = useState('10');
  const [b, setB] = useState('10');
  const [c, setC] = useState('10');
  const [length, setLength] = useState('5');
  const [width, setWidth] = useState('4');
  const [depth, setDepth] = useState('0.15');
  const [mix, setMix] = useState<'M15'|'M20'>('M20');

  const sqm = numberValue(area);
  const hillRopani = sqm >= 0 && Number.isFinite(sqm) ? Math.floor(sqm / LAND.ropani) : 0;
  const hillRem1 = sqm - hillRopani * LAND.ropani;
  const hillAana = Math.floor(hillRem1 / LAND.aana);
  const hillRem2 = hillRem1 - hillAana * LAND.aana;
  const hillPaisa = Math.floor(hillRem2 / LAND.paisa);
  const hillDam = (hillRem2 - hillPaisa * LAND.paisa) / LAND.dam;
  const teraiBigha = sqm >= 0 && Number.isFinite(sqm) ? Math.floor(sqm / LAND.bigha) : 0;
  const teraiRem1 = sqm - teraiBigha * LAND.bigha;
  const teraiKattha = Math.floor(teraiRem1 / LAND.kattha);
  const teraiDhur = (teraiRem1 - teraiKattha * LAND.kattha) / LAND.dhur;
  const sideA = numberValue(a), sideB = numberValue(b), sideC = numberValue(c);
  const triangleValid = validPositive(sideA, sideB, sideC) && sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA;
  const triangleArea = useMemo(() => { if (!triangleValid) return 0; const s=(sideA+sideB+sideC)/2; return Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC)); },[triangleValid,sideA,sideB,sideC]);
  const L=numberValue(length), W=numberValue(width), D=numberValue(depth);
  const concreteValid = validPositive(L,W,D);
  const wet = concreteValid ? L*W*D : 0, dry=wet*1.54;
  const ratio = mix === 'M20' ? [1,1.5,3] : [1,2,4];
  const sum = ratio.reduce((x,y)=>x+y,0);
  const cement = dry/sum/0.0347;
  const sand = dry*ratio[1]/sum*35.3147;
  const aggregate = dry*ratio[2]/sum*35.3147;

  return <main id="top" className="tools-page section-wrap">
    <p className="section-kicker">FIELD UTILITIES / 01</p>
    <h1>Engineering tools<br /><em style={{fontFamily:'var(--serif)',color:'var(--accent)'}}>for everyday work.</em></h1>
    <p className="tools-lead">Small, practical calculators for land measurement, triangle area and preliminary concrete quantity estimates. Calculations run in your browser; no account or data submission is required.</p>
    <div className="tool-tabs" role="tablist" aria-label="Engineering calculators">
      <button role="tab" aria-selected={tab==='land'} onClick={()=>setTab('land')}>01 / Land units</button>
      <button role="tab" aria-selected={tab==='triangle'} onClick={()=>setTab('triangle')}>02 / Triangulation</button>
      <button role="tab" aria-selected={tab==='concrete'} onClick={()=>setTab('concrete')}>03 / Concrete quantities</button>
    </div>
    {tab==='land' && <section className="tool-panel" aria-label="Nepal land unit converter">
      <div><p className="section-kicker">AREA CONVERSION</p><h2>Nepali land units</h2><p className="body-copy">Enter an area in square metres to see its equivalent in the Hill / Valley and Terai systems.</p><Field label="Area" unit="m²" value={area} onChange={setArea} />
        {(!Number.isFinite(sqm)||sqm<0) && <p className="error-note">Enter a valid, non-negative area.</p>}
        <p className="tool-note">Common reference values: 1 ropani ≈ 508.737 m²; 1 bigha ≈ 6,772.63 m². Local records and legal survey definitions should take precedence.</p>
      </div>
      <div className="result-panel"><h3>Hill / Valley system</h3><p className="result-value">{sqm>=0&&Number.isFinite(sqm)?hillRopani:'—'} <small>ropani</small></p><div className="result-row"><span>Aana</span><strong>{sqm>=0&&Number.isFinite(sqm)?hillAana:'—'}</strong></div><div className="result-row"><span>Paisa</span><strong>{sqm>=0&&Number.isFinite(sqm)?hillPaisa:'—'}</strong></div><div className="result-row"><span>Daam</span><strong>{sqm>=0&&Number.isFinite(sqm)?fmt(hillDam,3):'—'}</strong></div><div className="result-row"><span>Square feet</span><strong>{sqm>=0&&Number.isFinite(sqm)?fmt(sqm*LAND.sqFt):'—'} ft²</strong></div><h3 style={{marginTop:28}}>Terai system</h3><div className="result-row"><span>Bigha</span><strong>{sqm>=0&&Number.isFinite(sqm)?teraiBigha:'—'}</strong></div><div className="result-row"><span>Kattha</span><strong>{sqm>=0&&Number.isFinite(sqm)?teraiKattha:'—'}</strong></div><div className="result-row"><span>Dhur</span><strong>{sqm>=0&&Number.isFinite(sqm)?fmt(teraiDhur,3):'—'}</strong></div><p className="tool-note">Approximate decimal equivalents are shown for quick reference, not for boundary determination.</p></div>
    </section>}
    {tab==='triangle' && <section className="tool-panel" aria-label="Triangle area calculator">
      <div><p className="section-kicker">HERON'S FORMULA</p><h2>Triangulate a plot</h2><p className="body-copy">Use three measured side lengths to calculate the area of a valid triangle. This estimates one triangular section, not an entire irregular parcel.</p><Field label="Side A" unit="m" value={a} onChange={setA}/><Field label="Side B" unit="m" value={b} onChange={setB}/><Field label="Side C" unit="m" value={c} onChange={setC}/>{!triangleValid&&<p className="error-note">Use positive lengths that satisfy the triangle inequality: the sum of any two sides must exceed the third.</p>}</div>
      <div className="result-panel"><h3>Calculated triangular area</h3><p className="result-value">{triangleValid?fmt(triangleArea,3):'—'} <small>m²</small></p><div className="result-row"><span>Square feet</span><strong>{triangleValid?fmt(triangleArea*LAND.sqFt):'—'} ft²</strong></div><div className="result-row"><span>Square aana</span><strong>{triangleValid?fmt(triangleArea/LAND.aana,3):'—'} aana</strong></div><p className="tool-note">Formula: Area = √[s(s − a)(s − b)(s − c)], where s is half the perimeter. For cadastral work, use a qualified surveyor and verified measurements.</p></div>
    </section>}
    {tab==='concrete' && <section className="tool-panel" aria-label="Concrete quantity estimator">
      <div><p className="section-kicker">PRELIMINARY TAKE-OFF</p><h2>Concrete quantity estimate</h2><p className="body-copy">Estimate volume and indicative material quantities for a simple rectangular pour.</p><Field label="Length" unit="m" value={length} onChange={setLength}/><Field label="Width" unit="m" value={width} onChange={setWidth}/><Field label="Depth / thickness" unit="m" value={depth} onChange={setDepth} step="0.01"/><label className="tool-field"><span>Nominal mix assumption</span><select value={mix} onChange={e=>setMix(e.target.value as 'M15'|'M20')}><option value="M15">M15 · 1 : 2 : 4</option><option value="M20">M20 · 1 : 1.5 : 3</option></select></label><p className="tool-note">The selected ratios are nominal estimating assumptions, not a substitute for a specified or laboratory-designed concrete mix.</p></div>
      <div className="result-panel"><h3>Indicative materials</h3><p className="result-value">{concreteValid?fmt(wet,3):'—'} <small>m³ wet volume</small></p><div className="result-row"><span>Dry volume allowance (× 1.54)</span><strong>{concreteValid?fmt(dry,3):'—'} m³</strong></div><div className="result-row"><span>Cement (approx. 50 kg bags)</span><strong>{concreteValid?fmt(cement,1):'—'} bags</strong></div><div className="result-row"><span>Sand</span><strong>{concreteValid?fmt(sand):'—'} ft³</strong></div><div className="result-row"><span>Coarse aggregate</span><strong>{concreteValid?fmt(aggregate):'—'} ft³</strong></div>{!concreteValid&&<p className="error-note">All dimensions must be positive numbers.</p>}<p className="tool-note">Planning estimate only. Actual yield, wastage, aggregate moisture, batching method and mix design change quantities. Do not use this calculator for structural design or to approve a mix.</p></div>
    </section>}
    <div className="tool-bottom"><Link className="text-link" to="/">← Back to portfolio</Link><span className="tool-note">Calculations stay in this browser session.</span></div>
  </main>;
}
