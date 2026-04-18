function ProcessSection() {
  return (
    <section id="proceso" style={{ padding: '120px 48px', background: '#F4EADA' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 64, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <SectionHeader
              eyebrow="✶ Es más fácil de lo que pensás"
              title={<>De tu idea<br/>a su mano<br/><em style={{ color: '#5C1A1B' }}>en 4 pasos.</em></>}
            />
          </div>
          <div style={{ maxWidth: 380, color: '#4A3E32', fontSize: 16, lineHeight: 1.6 }}>
            Sin diseñadores gráficos, sin cotizaciones por WhatsApp, sin sorpresas feas.
            <strong style={{ color: '#2A2119' }}> Hacés click, escribís tu frase, recibís la caja.</strong>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid #B8895A' }}>
          {PROCESS_STEPS.map((s, i) => {
            const IconCmp = Icon[s.iconKey];
            return (
              <div key={s.n} style={{
                padding: '36px 28px 36px 0',
                borderRight: i < 3 ? '1px solid #D9C9AE' : 'none',
                paddingLeft: i > 0 ? 28 : 0,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                  <span className="mono" style={{ fontSize: 12, letterSpacing: '0.2em', color: '#5C1A1B' }}>{s.n}</span>
                  <div style={{ color: '#5C1A1B' }}><IconCmp size={28}/></div>
                </div>
                <h3 className="serif" style={{ fontSize: 26, margin: '0 0 12px', fontWeight: 500, color: '#2A2119', lineHeight: 1.15 }}>{s.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: '#4A3E32', margin: 0 }}>{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="galeria" style={{ padding: '120px 48px', background: '#FBF6EC' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <SectionHeader
            eyebrow="✶ Elegí tu base favorita"
            title={<>4 cajas. Todas personalizables. <em style={{ color: '#5C1A1B' }}>Ninguna igual.<br/></em></>}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {GALLERY_BOXES.map((b, i) => (
            <div key={i} style={{
              background: '#F4EADA', border: '1px solid #E5D5BA',
              borderRadius: 4, overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(42,33,25,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{
                aspectRatio: '4/5', background: '#EADFC9',
                position: 'relative',
                borderBottom: '1px solid #E5D5BA',
              }}>
                <img src={SECTION_PHOTOS[b.photo]} alt={b.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                <div style={{
                  position: 'absolute', top: 14, left: 14,
                  padding: '6px 10px', background: '#2A2119', color: '#F4EADA',
                  fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
                  borderRadius: 2,
                }} className="mono">{b.tag}</div>
                {/* Engraving overlay */}
                <div style={{
                  position: 'absolute', bottom: 12, left: 12, right: 12,
                  padding: '8px 12px', background: 'rgba(244,234,218,0.95)',
                  borderRadius: 2, textAlign: 'center',
                }}>
                  <div className="serif" style={{ fontSize: 14, fontStyle: 'italic', color: '#5C1A1B' }}>
                    “{b.engraving}”
                  </div>
                </div>
              </div>
              <div style={{ padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 className="serif" style={{ margin: 0, fontSize: 22, color: '#2A2119', fontWeight: 500 }}>{b.title}</h4>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', color: '#8A7B6A', marginTop: 4, textTransform: 'uppercase' }}>{b.sub}</div>
                </div>
                <div className="serif" style={{ fontSize: 20, color: '#5C1A1B', fontWeight: 500 }}>{b.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoriesSection() {
  return (
    <section id="historias" style={{ padding: '120px 48px', background: '#2A2119', color: '#F4EADA' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, marginBottom: 64, alignItems: 'end' }}>
          <div>
            <SectionHeader
              eyebrow="✶ No nos creas a nosotros"
              eyebrowColor="#B08851"
              title={<>Creele<br/><em style={{ color: '#D4A574' }}>a los que</em><br/>ya regalaron.</>}
            />
          </div>
          <div style={{ display: 'flex', gap: 32, alignSelf: 'end' }}>
            <div>
              <div className="serif" style={{ fontSize: 56, color: '#D4A574', fontWeight: 500, lineHeight: 1 }}>4.9</div>
              <div style={{ display: 'flex', gap: 3, color: '#D4A574', marginTop: 8 }}>{[0,1,2,3,4].map(i => <Icon.Star key={i} size={14}/>)}</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.15em', color: '#B08851', marginTop: 8, textTransform: 'uppercase' }}>
                +340 reseñas reales
              </div>
            </div>
            <div style={{ width: 1, background: 'rgba(244,234,218,0.2)' }}/>
            <div>
              <div className="serif" style={{ fontSize: 56, color: '#D4A574', fontWeight: 500, lineHeight: 1 }}>1.200+</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.15em', color: '#B08851', marginTop: 20, textTransform: 'uppercase' }}>
                regalos memorables
              </div>
            </div>
            <div style={{ width: 1, background: 'rgba(244,234,218,0.2)' }}/>
            <div>
              <div className="serif" style={{ fontSize: 56, color: '#D4A574', fontWeight: 500, lineHeight: 1 }}>97%</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.15em', color: '#B08851', marginTop: 20, textTransform: 'uppercase' }}>
                vuelve a pedir
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {STORIES.map((s, i) => (
            <div key={i} style={{
              padding: 32, background: 'rgba(244,234,218,0.04)',
              border: '1px solid rgba(244,234,218,0.15)',
              borderRadius: 4,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              minHeight: 340,
            }}>
              <div>
                <div style={{ display: 'flex', gap: 3, color: '#D4A574', marginBottom: 16 }}>
                  {[0,1,2,3,4].map(k => <Icon.Star key={k} size={13}/>)}
                </div>
                <p className="serif" style={{ fontSize: 20, lineHeight: 1.45, margin: 0, fontWeight: 400, color: '#F4EADA', fontStyle: 'italic' }}>
                  “{s.quote}”
                </p>
              </div>
              <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(244,234,218,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <div>
                  <div style={{ fontSize: 14, color: '#F4EADA', fontWeight: 500 }}>{s.name}</div>
                  <div className="mono" style={{ fontSize: 10, color: '#B08851', letterSpacing: '0.15em', marginTop: 4, textTransform: 'uppercase' }}>{s.city}</div>
                </div>
                <div className="mono" style={{ fontSize: 10, color: '#B08851', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{s.occasion}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ padding: '120px 48px', background: '#F4EADA' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionHeader
            align="center"
            eyebrow="✶ Antes de que preguntes"
            title={<>Las dudas que todos tienen <em style={{ color: '#5C1A1B' }}>(y sus respuestas).</em></>}
          />
        </div>
        <div style={{ borderTop: '1px solid #B8895A' }}>
          {FAQS.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid #D9C9AE' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', padding: '28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                textAlign: 'left', color: '#2A2119',
              }}>
                <span className="serif" style={{ fontSize: 22, fontWeight: 500 }}>{f.q}</span>
                <span style={{ color: '#5C1A1B' }}>
                  {open === i ? <Icon.Minus size={20}/> : <Icon.Plus size={20}/>}
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '0 0 28px', fontSize: 16, lineHeight: 1.65, color: '#4A3E32', maxWidth: 720 }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onCtaClick }) {
  return (
    <section style={{
      padding: '140px 48px', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
      color: '#F4EADA',
    }}>
      {/* bg image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${SECTION_PHOTOS.cta})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.35)',
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(28,21,16,0.85) 0%, rgba(42,33,25,0.75) 100%)',
      }}/>
      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '0.3em', color: '#D4A574', marginBottom: 24, textTransform: 'uppercase' }}>
          ✶ Tu próximo regalo inolvidable, acá
        </div>
        <h2 className="serif" style={{
          fontSize: 'clamp(44px, 5.2vw, 88px)', margin: '0 0 32px',
          fontWeight: 400, lineHeight: 1, letterSpacing: '-0.03em',
        }}>
          Alguien te va a<br/>
          <em style={{ color: '#D4A574' }}>abrazar fuerte</em><br/>
          cuando abra esta caja.
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: '#D9C9AE', maxWidth: 560, margin: '0 auto 48px' }}>
          Tardás 3 minutos en armarla. Te llega lista en 4 días. 
          <strong style={{ color: '#F4EADA' }}> Y a esa persona le cambiás la semana.</strong>
        </p>
        <button onClick={onCtaClick} style={{
          background: '#D4A574', color: '#1C1510',
          padding: '24px 44px', borderRadius: 999,
          fontSize: 16, letterSpacing: '0.05em',
          display: 'inline-flex', alignItems: 'center', gap: 12, fontWeight: 700,
          boxShadow: '0 20px 50px rgba(212,165,116,0.4)',
        }}>
          Personalizar mi caja ahora →
        </button>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: '#D4A574', marginTop: 24, textTransform: 'uppercase' }}>
          USD 28 · Envío gratis · Llega en 4 días
        </div>
        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', fontSize: 12, color: '#B08851' }} className="mono">
          <span>✓ Grabado gratis</span>
          <span>✓ Cristal real</span>
          <span>✓ Garantía total</span>
          <span>✓ Llega envuelta</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '60px 48px 40px', background: '#1C1510', color: '#B8A48A', fontSize: 13 }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', border: '1.2px solid #D4A574',
                display: 'grid', placeItems: 'center', color: '#D4A574',
                fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 17,
              }}>EW</div>
              <span className="serif" style={{ fontSize: 22, color: '#F4EADA' }}>Encuentros Wine
</span>
            </div>
            <p style={{ lineHeight: 1.65, maxWidth: 340, margin: 0 }}>
              Cajas de madera con vino y copas, hechas a mano en Mendoza. El regalo que convierte cualquier ocasión en un recuerdo.
            </p>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: '#D4A574', marginBottom: 16, textTransform: 'uppercase' }}>Comprar</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a>Personalizar</a><a>Todas las cajas</a><a>Para empresas</a><a>Tarjeta regalo</a>
            </div>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: '#D4A574', marginBottom: 16, textTransform: 'uppercase' }}>Ayuda</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a>Preguntas</a><a>Envíos</a><a>Cambios</a><a>Contacto</a>
            </div>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: '#D4A574', marginBottom: 16, textTransform: 'uppercase' }}>Seguinos</div>
            <div style={{ display: 'flex', gap: 12 }}>
              <a style={{ width: 36, height: 36, border: '1px solid #3A2818', borderRadius: '50%', display: 'grid', placeItems: 'center' }}><Icon.IG size={16}/></a>
              <a style={{ width: 36, height: 36, border: '1px solid #3A2818', borderRadius: '50%', display: 'grid', placeItems: 'center' }}><Icon.WA size={16}/></a>
            </div>
            <div style={{ marginTop: 20, fontSize: 12, lineHeight: 1.6 }}>
              hola@carilila.com.ar<br/>
              +54 261 555 0123
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 24, borderTop: '1px solid #3A2818', display: 'flex', justifyContent: 'space-between', fontSize: 11 }} className="mono">
          <span>© 2026 CARILILA · MENDOZA, AR</span>
          <span>BEBER CON MODERACIÓN · PROHIBIDA SU VENTA A MENORES DE 18</span>
        </div>
      </div>
    </footer>
  );
}

window.ProcessSection = ProcessSection;
window.GallerySection = GallerySection;
window.StoriesSection = StoriesSection;
window.FAQSection = FAQSection;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
