export default function ProgressBar({ current, total }) {
  const pct = total > 0 ? (current / total) * 100 : 0

  return (
    <div style={{
      width: '100%',
      height: '3px',
      background: 'rgba(255,255,255,0.06)',
      borderRadius: '2px',
      overflow: 'hidden',
    }}>
      <div style={{
        height: '100%',
        width: '100%',
        background: 'var(--gold)',
        borderRadius: '2px',
        transform: `scaleX(${pct / 100})`,
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
      }} />
    </div>
  )
}
