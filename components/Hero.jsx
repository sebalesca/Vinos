// Hero — 3 variantes con copy vendedor y fotos reales

function Hero({ variant = "classic", engraving, onCtaClick }) {
  if (variant === "editorial") return <HeroEditorial engraving={engraving} onCtaClick={onCtaClick}/>;
  if (variant === "artisan") return <HeroArtisan engraving={engraving} onCtaClick={onCtaClick}/>;
  return <HeroClassic engraving={engraving} onCtaClick={onCtaClick}/>;
}

function NavBar({ dark = false }) {
  const c = dark ? '#F4EADA' : '#2A2119';
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '22px 48px', color: c, position: 'relative', zIndex: 5,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          border: `1.2px solid ${c}`,
          display: 'grid', placeItems: 'center',
          fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 17,
        }}>EW</div>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, letterSpacing: '0.02em' }}>Encuentros Wine
</span>
      </div>
      <div style={{ display: 'flex', gap: 36, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        <a href="#configurador">Personalizar</a>
        <a href="#proceso">Proceso</a>
        <a href="#galeria">Cajas</a>
        <a href="#historias">Historias</a>
      </div>
      <button style={{
        border: `1px solid ${c}`, padding: '10px 20px', borderRadius: 999,
        color: c, fontSize: 13, letterSpacing: '0.05em',
        background: 'transparent',
      }}>Mi pedido (0)</button>
    </nav>
  );
}

function UrgencyPill({ dark = false }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '8px 16px', borderRadius: 999,
      background: dark ? 'rgba(212,165,116,0.15)' : 'rgba(92,26,27,0.08)',
      border: `1px solid ${dark ? 'rgba(212,165,116,0.4)' : 'rgba(92,26,27,0.25)'}`,
      color: dark ? '#D4A574' : '#5C1A1B',
      marginBottom: 28,
    }}>
      <span style={{
        width: 7, height: 7, borderRadius: '50%',
        background: dark ? '#D4A574' : '#5C1A1B',
        animation: 'pulse 2s infinite',
      }}/>
      <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>
        Últimas 14 cajas · entregamos antes del 30
      </span>
    </div>
  );
}

/* =========================================================
   VARIANT 1 — Classic (foto grande + copy punchy)
   ========================================================= */
function HeroClassic({ engraving, onCtaClick }) {
  return (
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <NavBar/>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.05fr 1fr',
        alignItems: 'center', gap: 60,
        padding: '40px 48px 80px',
        maxWidth: 1400, margin: '0 auto',
      }}>
        <div>
          <UrgencyPill/>
          <h1 className="serif" style={{
            fontSize: 'clamp(40px, 4.2vw, 76px)', lineHeight: 1.02,
            margin: '0 0 28px', fontWeight: 500, color: '#2A2119',
            letterSpacing: '-0.025em',
          }}>
            El regalo que<br/>
            <em style={{ color: '#5C1A1B', fontWeight: 500 }}>guardan para siempre</em><br/>
            (y la botella<br/>
            la toman juntos).
          </h1>
          <p style={{
            fontSize: 19, lineHeight: 1.55, color: '#4A3E32',
            maxWidth: 500, margin: '0 0 36px',
          }}>
            Cajas de madera grabadas con el nombre, la fecha o la frase que vos
            quieras. Adentro: un Malbec mendocino y dos copas de cristal. 
            <strong style={{ color: '#2A2119' }}> Armala en 3 minutos. Lista en 4 días. Impacto garantizado.</strong>
          </p>

          {/* Quick benefits row */}
          <div style={{ display: 'flex', gap: 20, marginBottom: 40, flexWrap: 'wrap' }}>
            {[
              { icon: '✓', t: 'Grabado láser incluido' },
              { icon: '✓', t: 'Envío gratis AR' },
              { icon: '✓', t: 'Listo para regalar' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#2A2119' }}>
                <span style={{
                  width: 20, height: 20, borderRadius: '50%', background: '#5C1A1B', color: '#F4EADA',
                  display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700,
                }}>{b.icon}</span>
                {b.t}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={onCtaClick} style={{
              background: '#5C1A1B', color: '#F4EADA',
              padding: '20px 34px', borderRadius: 999,
              fontSize: 15, letterSpacing: '0.04em',
              display: 'flex', alignItems: 'center', gap: 10,
              fontWeight: 600,
              boxShadow: '0 10px 30px -8px rgba(92,26,27,0.5)',
            }}>
              Personalizar mi caja →
            </button>
            <div style={{ fontSize: 13, color: '#8A7B6A', lineHeight: 1.4 }}>
              <div style={{ color: '#2A2119', fontWeight: 600 }}>Desde USD 28</div>
              <div>Sin costo adicional por grabado</div>
            </div>
          </div>

          <div style={{
            display: 'flex', gap: 12, alignItems: 'center', marginTop: 48, paddingTop: 32,
            borderTop: '1px solid #D9C9AE',
          }}>
            <div style={{ display: 'flex' }}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: ['#B8895A','#8B6440','#5C1A1B','#D4A574'][i],
                  border: '2px solid #FBF6EC', marginLeft: i === 0 ? 0 : -10,
                  color: '#F4EADA', display: 'grid', placeItems: 'center',
                  fontSize: 12, fontFamily: 'Cormorant Garamond, serif',
                }}>{['M','S','J','A'][i]}</div>
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', gap: 3, color: '#5C1A1B' }}>
                {[0,1,2,3,4].map(i => <Icon.Star key={i} size={13}/>)}
                <span style={{ marginLeft: 6, color: '#2A2119', fontWeight: 600, fontSize: 14 }}>4.9/5</span>
              </div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.15em', color: '#8A7B6A', marginTop: 3, textTransform: 'uppercase' }}>
                +1.200 clientes · +340 reseñas
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            position: 'absolute', inset: '-5%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184,137,90,0.18), transparent 60%)',
          }}/>
          <BoxIllustration engraving={engraving} photo="main"/>

          {/* floating reviews badge */}
          <div style={{
            position: 'absolute', bottom: '-4%', left: '-4%',
            padding: '14px 18px', background: '#FBF6EC',
            border: '1px solid #D9C9AE', borderRadius: 6,
            boxShadow: '0 10px 30px rgba(42,33,25,0.15)',
            maxWidth: 220,
          }} className="desktop-only">
            <div style={{ display: 'flex', gap: 3, color: '#5C1A1B', marginBottom: 6 }}>
              {[0,1,2,3,4].map(i => <Icon.Star key={i} size={11}/>)}
            </div>
            <div className="serif" style={{ fontSize: 14, color: '#2A2119', fontStyle: 'italic', lineHeight: 1.4 }}>
              “Mi mujer lloró. Literal. La caja quedó en el living.”
            </div>
            <div className="mono" style={{ fontSize: 9, color: '#8A7B6A', marginTop: 6, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Joaquín · Aniversario
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   VARIANT 2 — Editorial full-bleed oscuro
   ========================================================= */
function HeroEditorial({ engraving, onCtaClick }) {
  return (
    <section style={{ minHeight: '100vh', background: '#1C1510', color: '#F4EADA', position: 'relative', overflow: 'hidden' }}>
      <NavBar dark/>
      {/* Full-bleed background photo */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '58%', height: '100%',
        backgroundImage: `url(${HERO_PHOTOS.darkMoody})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}/>
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '58%', height: '100%',
        background: 'linear-gradient(90deg, #1C1510 0%, transparent 30%, transparent 100%)',
      }}/>

      <div style={{
        position: 'relative', maxWidth: 1400, margin: '0 auto',
        padding: '40px 48px 100px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center',
      }}>
        <div>
          <UrgencyPill dark/>
          <h1 className="serif" style={{
            fontSize: 'clamp(48px, 5vw, 92px)', lineHeight: 0.98,
            margin: '0 0 32px', fontWeight: 400,
            letterSpacing: '-0.03em',
          }}>
            No es un<br/>
            regalo más.<br/>
            <em style={{ color: '#D4A574' }}>Es EL regalo.</em>
          </h1>
          <div style={{
            padding: '24px 0', borderTop: '1px solid rgba(244,234,218,0.2)',
            borderBottom: '1px solid rgba(244,234,218,0.2)',
            maxWidth: 480, marginBottom: 40,
          }}>
            <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0, color: '#D9C9AE' }}>
              Cuando abren la caja de madera con su nombre grabado, cuando ven el
              Malbec y las dos copas, cuando entienden que pensaste cada detalle
              — <strong style={{ color: '#F4EADA' }}>ese momento no se compra en ningún otro lado.</strong>
            </p>
          </div>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={onCtaClick} style={{
              background: '#D4A574', color: '#1C1510',
              padding: '22px 36px', borderRadius: 0,
              fontSize: 14, letterSpacing: '0.15em', textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: 12,
              fontWeight: 700,
            }}>
              Armar la mía ahora
              <Icon.Arrow size={14}/>
            </button>
            <div>
              <div className="serif" style={{ fontSize: 26, color: '#D4A574', fontStyle: 'italic' }}>USD 28</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: '#B08851', textTransform: 'uppercase' }}>
                envío gratis · 4 días
              </div>
            </div>
          </div>

          {/* social proof strip */}
          <div style={{
            marginTop: 56, padding: '18px 24px',
            background: 'rgba(244,234,218,0.06)',
            border: '1px solid rgba(244,234,218,0.15)',
            borderRadius: 4,
            display: 'flex', alignItems: 'center', gap: 20,
          }}>
            <div className="serif" style={{ fontSize: 40, color: '#D4A574', fontWeight: 500, lineHeight: 1 }}>+1.200</div>
            <div>
              <div style={{ fontSize: 13, color: '#F4EADA', fontWeight: 500 }}>cajas ya regaladas</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.15em', color: '#B08851', marginTop: 3, textTransform: 'uppercase' }}>
                y nadie la olvidó
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom ticker */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '18px 48px', borderTop: '1px solid rgba(244,234,218,0.15)',
        background: 'rgba(28,21,16,0.9)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 11, letterSpacing: '0.2em', color: '#D4A574', textTransform: 'uppercase',
      }} className="mono">
        <span>✶ Aniversarios</span>
        <span>✶ Bodas</span>
        <span>✶ Cumpleaños</span>
        <span>✶ Día del padre</span>
        <span>✶ Jubilaciones</span>
        <span>✶ Corporativo</span>
      </div>
    </section>
  );
}

/* =========================================================
   VARIANT 3 — Artisan (cálido, cercano, persuasivo)
   ========================================================= */
function HeroArtisan({ engraving, onCtaClick }) {
  return (
    <section style={{ minHeight: '100vh', background: '#EADFC9', position: 'relative', overflow: 'hidden' }}>
      <NavBar/>

      <div className="serif" style={{
        position: 'absolute', top: '22%', left: '-4%',
        fontSize: 'clamp(180px, 22vw, 380px)', fontStyle: 'italic',
        color: 'rgba(92,26,27,0.07)', fontWeight: 500,
        letterSpacing: '-0.04em', lineHeight: 0.9, pointerEvents: 'none',
      }}>
        inolvidable
      </div>

      <div style={{
        position: 'relative', maxWidth: 1400, margin: '0 auto',
        padding: '40px 48px 80px',
        display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 40, alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 14px', border: '1px dashed #5C1A1B', borderRadius: 2,
            transform: 'rotate(-2deg)', marginBottom: 32,
          }}>
            <span style={{ width: 6, height: 6, background: '#5C1A1B', borderRadius: '50%' }}/>
            <span className="mono" style={{ fontSize: 10, letterSpacing: '0.25em', color: '#5C1A1B', textTransform: 'uppercase' }}>
              Hecho a mano · Mendoza
            </span>
          </div>

          <h1 className="serif" style={{
            fontSize: 'clamp(44px, 4.6vw, 82px)', lineHeight: 1.02,
            margin: '0 0 28px', fontWeight: 400, color: '#2A2119',
            letterSpacing: '-0.025em',
          }}>
            Dejá de regalar<br/>
            lo mismo de siempre.<br/>
            <em style={{ color: '#5C1A1B', fontWeight: 400 }}>Regalá un recuerdo.</em>
          </h1>

          <p style={{
            fontSize: 19, lineHeight: 1.6, color: '#4A3E32',
            maxWidth: 520, margin: '0 0 36px',
          }}>
            Una caja de madera <strong>con su nombre grabado</strong>, un Malbec 
            mendocino seleccionado y dos copas de cristal. Llega envuelta,
            lista para entregar. <em className="serif" style={{ fontSize: 22 }}>
            Vos quedás como un genio — nosotros nos ocupamos de todo.</em>
          </p>

          {/* Benefits with icons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 40, maxWidth: 480 }}>
            {[
              { t: 'Grabado láser gratis', s: 'Nombre, fecha o frase' },
              { t: 'Malbec incluido', s: 'Bodegas mendocinas' },
              { t: '2 copas de cristal', s: 'No plástico' },
              { t: 'Llega envuelta', s: 'Lista para regalar' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: '#5C1A1B', color: '#F4EADA',
                  display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 2,
                }}><Icon.Check size={12}/></div>
                <div>
                  <div style={{ fontSize: 14, color: '#2A2119', fontWeight: 600 }}>{b.t}</div>
                  <div style={{ fontSize: 12, color: '#8A7B6A', marginTop: 2 }}>{b.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={onCtaClick} style={{
              background: '#2A2119', color: '#F4EADA',
              padding: '22px 36px', borderRadius: 4,
              fontSize: 14, letterSpacing: '0.08em',
              display: 'flex', alignItems: 'center', gap: 12,
              fontWeight: 600, textTransform: 'uppercase',
              boxShadow: '0 10px 30px -8px rgba(42,33,25,0.5)',
            }}>
              Quiero la mía →
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#5C1A1B' }}>
              <div style={{ display: 'flex' }}>
                {[0,1,2,3,4].map(i => <Icon.Star key={i} size={14}/>)}
              </div>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: '#5C3E24' }}>
                4.9 · +340 reseñas reales
              </span>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ transform: 'rotate(-3deg)' }}>
            <BoxIllustration engraving={engraving} photo="lifestyle"/>
          </div>
          {/* price sticker */}
          <div style={{
            position: 'absolute', top: '4%', left: '-2%',
            width: 130, height: 130, borderRadius: '50%',
            background: '#5C1A1B', color: '#F4EADA',
            display: 'grid', placeItems: 'center',
            transform: 'rotate(-18deg)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            zIndex: 3,
          }}>
            <div style={{ textAlign: 'center', padding: 10 }}>
              <div className="serif" style={{ fontSize: 13, fontStyle: 'italic' }}>solo</div>
              <div className="serif" style={{ fontSize: 38, fontWeight: 500, lineHeight: 1 }}>USD 28</div>
              <div className="mono" style={{ fontSize: 8, letterSpacing: '0.2em', marginTop: 6 }}>ENVÍO GRATIS</div>
            </div>
          </div>
          {/* corner testimonial */}
          <div style={{
            position: 'absolute', bottom: '-2%', right: '-4%',
            padding: '16px 20px', background: '#FBF6EC',
            border: '1px solid #D9C9AE', borderRadius: 6,
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
            maxWidth: 240, transform: 'rotate(2deg)',
          }} className="desktop-only">
            <div style={{ display: 'flex', gap: 2, color: '#5C1A1B', marginBottom: 6 }}>
              {[0,1,2,3,4].map(i => <Icon.Star key={i} size={11}/>)}
            </div>
            <div className="serif" style={{ fontSize: 15, color: '#2A2119', fontStyle: 'italic', lineHeight: 1.35 }}>
              “Quedé como un rey. La repito seguro.”
            </div>
            <div className="mono" style={{ fontSize: 9, color: '#8A7B6A', marginTop: 6, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Martín · Día del padre
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
