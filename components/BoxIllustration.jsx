// Hero photo component: uses real Unsplash images of wine gift boxes.
// Keeps an engraving overlay card so personalization message still reads.

const HERO_PHOTOS = {
  // Curated royalty-free Unsplash photos of wine + wooden box + glasses scenes
  main: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=1200&q=80&auto=format&fit=crop',
  lifestyle: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80&auto=format&fit=crop',
  detail: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1200&q=80&auto=format&fit=crop',
  couple: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=1200&q=80&auto=format&fit=crop',
  darkMoody: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=1200&q=80&auto=format&fit=crop',
  gift: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80&auto=format&fit=crop',
};

function BoxIllustration({ engraving = "Para Sofía", glassStyle = "cabernet", wineColor = "#5C1A1B", compact = false, photo = 'main' }) {
  const src = HERO_PHOTOS[photo] || HERO_PHOTOS.main;
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: compact ? '4/5' : '1/1',
      maxWidth: compact ? 380 : 560,
      borderRadius: 4,
      overflow: 'hidden',
      boxShadow: '0 30px 80px -20px rgba(42,33,25,0.45), 0 10px 30px -10px rgba(42,33,25,0.3)',
    }}>
      <img src={src} alt="Caja de vino personalizada Carilila"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
      {/* Engraving plate overlay — simulates laser-engraved brass plate */}
      <div style={{
        position: 'absolute', bottom: '8%', left: '50%',
        transform: 'translateX(-50%) rotate(-1deg)',
        padding: '10px 22px',
        background: 'rgba(244,234,218,0.95)',
        border: '1px solid rgba(92,26,27,0.3)',
        borderRadius: 2,
        backdropFilter: 'blur(4px)',
        textAlign: 'center',
        minWidth: 180,
      }}>
        <div className="mono" style={{ fontSize: 8, letterSpacing: '0.25em', color: '#8A7B6A', textTransform: 'uppercase' }}>
          — grabado láser —
        </div>
        <div className="serif" style={{ fontSize: 22, fontStyle: 'italic', color: '#5C1A1B', marginTop: 2, fontWeight: 500 }}>
          “{engraving}”
        </div>
      </div>
    </div>
  );
}

window.BoxIllustration = BoxIllustration;
window.HERO_PHOTOS = HERO_PHOTOS;
