function SectionHeader({ eyebrow, title, align = 'left', accentColor = '#5C1A1B', eyebrowColor }) {
  return (
    <div>
      <div className="mono" style={{
        fontSize: 11,
        letterSpacing: '0.25em',
        color: eyebrowColor || accentColor,
        textTransform: 'uppercase',
        marginBottom: 16,
      }}>
        {eyebrow}
      </div>
      <h2 className="serif" style={{
        fontSize: 'clamp(40px, 5vw, 68px)',
        margin: 0,
        fontWeight: 500,
        lineHeight: 1.02,
        letterSpacing: '-0.02em',
        textAlign: align === 'center' ? 'center' : 'left',
      }}>
        {title}
      </h2>
    </div>
  );
}

window.SectionHeader = SectionHeader;
