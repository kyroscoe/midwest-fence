export function FenceImage({ type = 'wood', label = 'Fence project', src, loading = 'lazy', fetchPriority }) {
  if (src) {
    return (
      <div className={`photo photo-real photo-${type}`} role="img" aria-label={label}>
        <img src={src} alt={label} loading={loading} fetchPriority={fetchPriority} />
      </div>
    );
  }

  return (
    <div className={`photo photo-${type}`} role="img" aria-label={label}>
      <div className="sky" />
      <div className="grass" />
      <div className="fence-scene">
        {type === 'gate' && <div className="gate-arch" />}
        {Array.from({ length: type === 'chain' || type === 'rental' ? 8 : 7 }).map((_, i) => (
          <span key={i} className="post" style={{ left: `${8 + i * 13}%` }} />
        ))}
        <span className="rail rail-one" />
        <span className="rail rail-two" />
        {type !== 'chain' && type !== 'rental' && Array.from({ length: 18 }).map((_, i) => (
          <span key={`p-${i}`} className="picket" style={{ left: `${3 + i * 5.5}%` }} />
        ))}
        {(type === 'chain' || type === 'rental') && <div className="chain-grid" />}
      </div>
    </div>
  );
}
