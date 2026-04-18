// Main app: ties it all together + Tweaks

const DEFAULTS = JSON.parse(document.getElementById('tweak-defaults').textContent.replace('/*EDITMODE-BEGIN*/', '').replace('/*EDITMODE-END*/', ''));

function App() {
  const [tweaks, setTweaks] = React.useState(DEFAULTS);
  const [tweakOpen, setTweakOpen] = React.useState(false);

  // Config state (shared between hero preview & configurator)
  const [engraving, setEngraving] = React.useState('Para Sofía');
  const [wine, setWine] = React.useState('malbec');
  const [glass, setGlass] = React.useState('cabernet');

  // Tweaks host protocol
  React.useEffect(() => {
    function onMsg(e) {
      if (e.data?.type === '__activate_edit_mode') setTweakOpen(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweakOpen(false);
    }
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const setTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  const scrollToConfig = () => {
    document.getElementById('configurador')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Hero variant={tweaks.heroVariant} engraving={engraving} onCtaClick={scrollToConfig}/>
      {tweaks.showConfigurator && (
        <Configurator
          engraving={engraving}
          setEngraving={setEngraving}
          wine={wine} setWine={setWine}
          glass={glass} setGlass={setGlass}
        />
      )}
      <ProcessSection/>
      <GallerySection/>
      <StoriesSection/>
      <FAQSection/>
      <FinalCTA onCtaClick={scrollToConfig}/>
      <Footer/>

      {tweakOpen && <TweaksPanel tweaks={tweaks} setTweak={setTweak} onClose={() => setTweakOpen(false)}/>}

      {/* Floating WhatsApp */}
      <a style={{
        position: 'fixed', bottom: 24, left: 24, zIndex: 40,
        width: 52, height: 52, borderRadius: '50%',
        background: '#25D366', color: '#FFF',
        display: 'grid', placeItems: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
        cursor: 'pointer',
      }}>
        <Icon.WA size={24}/>
      </a>
    </>
  );
}

function TweaksPanel({ tweaks, setTweak, onClose }) {
  const variants = [
    { id: 'classic', label: 'Clásico', desc: 'Dos columnas, cream + vino' },
    { id: 'editorial', label: 'Editorial', desc: 'Fondo oscuro, revista' },
    { id: 'artisan', label: 'Artesanal', desc: 'Cálido, asimétrico, sello' },
  ];
  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 50,
      width: 300, background: '#FBF6EC',
      border: '1px solid #D9C9AE', borderRadius: 6,
      boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
      fontFamily: 'DM Sans, sans-serif',
    }}>
      <div style={{ padding: '14px 16px', borderBottom: '1px solid #D9C9AE', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, color: '#2A2119' }}>Tweaks</div>
        <button onClick={onClose} style={{ color: '#8A7B6A', fontSize: 18 }}>×</button>
      </div>
      <div style={{ padding: 16 }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: '#8A7B6A', textTransform: 'uppercase', marginBottom: 10 }}>Hero</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {variants.map(v => (
            <button key={v.id} onClick={() => setTweak('heroVariant', v.id)} style={{
              textAlign: 'left', padding: '10px 12px',
              border: tweaks.heroVariant === v.id ? '1.5px solid #5C1A1B' : '1px solid #D9C9AE',
              background: tweaks.heroVariant === v.id ? '#F4EADA' : '#FFF',
              borderRadius: 4,
            }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, color: '#2A2119' }}>{v.label}</div>
              <div style={{ fontSize: 11, color: '#8A7B6A', marginTop: 2 }}>{v.desc}</div>
            </button>
          ))}
        </div>

        <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: '#8A7B6A', textTransform: 'uppercase', margin: '20px 0 10px' }}>Secciones</div>
        <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#2A2119', cursor: 'pointer' }}>
          <input type="checkbox" checked={tweaks.showConfigurator} onChange={e => setTweak('showConfigurator', e.target.checked)}/>
          Mostrar configurador
        </label>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
