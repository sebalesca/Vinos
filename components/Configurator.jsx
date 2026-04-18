function Configurator({ onChangeEngraving, engraving, setEngraving, wine, setWine, glass, setGlass }) {
  const selectedWine = WINES.find(w => w.id === wine) || WINES[0];

  return (
    <section id="configurador" style={{
      background: '#FBF6EC',
      padding: '120px 48px',
      position: 'relative',
      borderTop: '1px solid #E5D5BA',
      borderBottom: '1px solid #E5D5BA',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 64, alignItems: 'end' }}>
          <div>
            <SectionHeader
              eyebrow="✶ Armá la tuya ahora"
              title={<>Tres decisiones<br/><em style={{ color: '#5C1A1B' }}>y está lista.</em></>}
            />
          </div>
          <div style={{ color: '#4A3E32', fontSize: 15, lineHeight: 1.6, maxWidth: 460, justifySelf: 'end' }}>
            Probá combinaciones antes de pedir. La caja de la derecha se actualiza en tiempo real — grabado, vino y copas incluidos. <strong style={{ color: '#2A2119' }}>Cuando te guste, hacés click y listo.</strong>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <ConfigStep number="01" title="Elegí el vino">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {WINES.map(w => (
                  <button key={w.id} onClick={() => setWine(w.id)} style={{
                    textAlign: 'left', padding: '18px 18px',
                    border: wine === w.id ? '1.5px solid #5C1A1B' : '1px solid #D9C9AE',
                    background: wine === w.id ? '#F4EADA' : '#FFFFFF',
                    borderRadius: 4,
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    transition: 'all 0.15s',
                  }}>
                    <div style={{
                      width: 14, height: 40, borderRadius: 2,
                      background: w.color,
                      boxShadow: 'inset -2px 0 3px rgba(0,0,0,0.2)',
                      flexShrink: 0, marginTop: 2,
                    }}/>
                    <div style={{ minWidth: 0 }}>
                      <div className="serif" style={{ fontSize: 17, color: '#2A2119', fontWeight: 500, lineHeight: 1.15 }}>{w.name}</div>
                      <div className="mono" style={{ fontSize: 9, letterSpacing: '0.15em', color: '#8A7B6A', marginTop: 3, textTransform: 'uppercase' }}>
                        {w.region} · {w.year}
                      </div>
                      <div style={{ fontSize: 12, color: '#4A3E32', marginTop: 6, lineHeight: 1.4 }}>{w.notes}</div>
                    </div>
                  </button>
                ))}
              </div>
            </ConfigStep>

            <ConfigStep number="02" title="Elegí las copas">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                {GLASSES.map(g => (
                  <button key={g.id} onClick={() => setGlass(g.id)} style={{
                    padding: '16px 12px',
                    border: glass === g.id ? '1.5px solid #5C1A1B' : '1px solid #D9C9AE',
                    background: glass === g.id ? '#F4EADA' : '#FFFFFF',
                    borderRadius: 4,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  }}>
                    <svg viewBox="0 0 60 90" width="42" height="62">
                      <g transform="translate(5 5)">
                        {g.id === 'cabernet' && <path d="M0 0 Q0 40 25 50 Q50 40 50 0 Z" fill="rgba(92,26,27,0.1)" stroke="#5C3E24" strokeWidth="0.8"/>}
                        {g.id === 'burgundy' && <path d="M-4 0 Q-4 45 25 58 Q54 45 54 0 Z" fill="rgba(92,26,27,0.1)" stroke="#5C3E24" strokeWidth="0.8"/>}
                        {g.id === 'flute' && <path d="M8 0 Q8 52 25 60 Q42 52 42 0 Z" fill="rgba(92,26,27,0.1)" stroke="#5C3E24" strokeWidth="0.8"/>}
                        <rect x="24" y={g.id === 'flute' ? 60 : g.id === 'burgundy' ? 58 : 50} width="2" height="22" fill="#5C3E24"/>
                        <ellipse cx="25" cy="82" rx="15" ry="2" fill="none" stroke="#5C3E24" strokeWidth="0.8"/>
                      </g>
                    </svg>
                    <div className="serif" style={{ fontSize: 16, color: '#2A2119' }}>{g.name}</div>
                    <div style={{ fontSize: 10, color: '#8A7B6A', textAlign: 'center', lineHeight: 1.4 }}>{g.desc}</div>
                  </button>
                ))}
              </div>
            </ConfigStep>

            <ConfigStep number="03" title="Grabá tu frase">
              <div style={{
                display: 'flex', alignItems: 'center', gap: 2,
                border: '1px solid #D9C9AE', background: '#FFF',
                borderRadius: 4, padding: '4px',
              }}>
                <input
                  value={engraving}
                  onChange={e => setEngraving(e.target.value.slice(0, 22))}
                  placeholder="Hasta 22 caracteres"
                  className="serif"
                  style={{
                    flex: 1, border: 'none', outline: 'none',
                    padding: '14px 14px', fontSize: 20,
                    background: 'transparent', color: '#2A2119',
                    fontStyle: engraving ? 'normal' : 'italic',
                  }}
                />
                <span className="mono" style={{ fontSize: 10, color: '#8A7B6A', padding: '0 14px' }}>
                  {engraving.length}/22
                </span>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
                {PRESETS.map(p => (
                  <button key={p} onClick={() => setEngraving(p)} style={{
                    padding: '8px 14px', border: '1px solid #D9C9AE',
                    borderRadius: 999, background: '#FFF',
                    fontSize: 12, color: '#4A3E32',
                  }}>
                    {p}
                  </button>
                ))}
              </div>
            </ConfigStep>

            {/* Summary */}
            <div style={{
              padding: 24, background: '#2A2119', color: '#F4EADA',
              borderRadius: 4,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
            }}>
              <div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', opacity: 0.7, textTransform: 'uppercase' }}>Total · envío incluido</div>
                <div className="serif" style={{ fontSize: 34, fontWeight: 500, marginTop: 4 }}>{PRICE.display}<span style={{ fontSize: 16, opacity: 0.6 }}>,00</span></div>
              </div>
              <button style={{
                background: '#F4EADA', color: '#2A2119',
                padding: '16px 24px', borderRadius: 999,
                fontSize: 13, letterSpacing: '0.05em', fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                Agregar al pedido
                <Icon.Arrow size={14}/>
              </button>
            </div>
          </div>

          {/* Live preview */}
          <div style={{ position: 'sticky', top: 40 }}>
            <div style={{
              background: '#F4EADA', border: '1px solid #E5D5BA',
              borderRadius: 4, padding: '32px 20px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 16, left: 16,
                display: 'flex', gap: 6, alignItems: 'center',
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5C1A1B', animation: 'pulse 2s infinite' }}/>
                <span className="mono" style={{ fontSize: 9, letterSpacing: '0.2em', color: '#5C1A1B', textTransform: 'uppercase' }}>
                  Vista previa en vivo
                </span>
              </div>
              <BoxIllustration engraving={engraving || 'Tu frase acá'} glassStyle={glass} wineColor={selectedWine.color}/>
              <div style={{ borderTop: '1px solid #D9C9AE', marginTop: 20, paddingTop: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '6px 0' }}>
                  <span style={{ color: '#8A7B6A' }}>Vino</span>
                  <span className="serif" style={{ color: '#2A2119', fontSize: 15 }}>{selectedWine.name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '6px 0' }}>
                  <span style={{ color: '#8A7B6A' }}>Copas</span>
                  <span className="serif" style={{ color: '#2A2119', fontSize: 15 }}>{GLASSES.find(g => g.id === glass)?.name} × 2</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '6px 0' }}>
                  <span style={{ color: '#8A7B6A' }}>Grabado</span>
                  <span className="serif" style={{ color: '#5C1A1B', fontStyle: 'italic', fontSize: 15, maxWidth: 200, textAlign: 'right' }}>“{engraving || '—'}”</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.3 } }`}</style>
    </section>
  );
}

function ConfigStep({ number, title, children }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>
        <span className="mono" style={{ fontSize: 11, color: '#5C1A1B', letterSpacing: '0.1em' }}>{number}</span>
        <h3 className="serif" style={{ fontSize: 24, margin: 0, color: '#2A2119', fontWeight: 500, whiteSpace: 'nowrap' }}>{title}</h3>
        <div style={{ flex: 1, height: 1, background: '#D9C9AE', minWidth: 20 }}/>
      </div>
      {children}
    </div>
  );
}

window.Configurator = Configurator;
