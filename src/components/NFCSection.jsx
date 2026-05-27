import { Wifi, Smartphone, ShieldCheck, Zap, QrCode, Bell } from 'lucide-react'

export default function NFCSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg,#0B2545 0%,#2ebd3a 50%,#081c35 100%)', padding: '90px 0', overflow: 'hidden', position: 'relative' }}>
      {/* dots grid bg */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.07,
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
        backgroundSize: '28px 28px', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}
          className="nfc-grid">

          {/* LEFT — NFC visual */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 320, height: 320 }}>
              {/* pulsing rings */}
              {[1,2,3].map(i => (
                <div key={i} style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  border: '1.5px solid rgba(232, 248, 235,0.3)',
                  animation: `nfcPulse ${1.6 + i*0.5}s ease-out ${i*0.4}s infinite`,
                }} />
              ))}
              {/* center phone */}
              <div style={{
                position: 'absolute', inset: '60px',
                background: 'linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.08))',
                backdropFilter: 'blur(12px)', borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 60px rgba(232, 248, 235,0.2)',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <Wifi size={52} color="#e8f8eb" strokeWidth={1.5} />
                  <div style={{ color: '#e8f8eb', fontWeight: 800, fontSize: 14, marginTop: 8 }}>NFC Ready</div>
                </div>
              </div>

              {/* floating chips */}
              {[
                { top: '5%', left: '50%', label: 'Tap to Scan', icon: <Smartphone size={16} color="#2ebd3a" /> },
                { top: '50%', left: '5%', label: 'Instant Alert', icon: <Bell size={16} color="#2ebd3a" /> },
                { bottom: '8%', right: '10%', label: 'No App Needed', icon: <Zap size={16} color="#2ebd3a" /> },
              ].map(({ top, left, bottom, right, label, icon }) => (
                <div key={label} style={{
                  position: 'absolute', top, left, bottom, right,
                  transform: 'translate(-50%,-50%)',
                  background: '#e8f8eb', borderRadius: 12, padding: '8px 14px',
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontSize: 12, fontWeight: 700, color: '#2ebd3a',
                  boxShadow: '0 8px 24px rgba(6,78,59,0.3)',
                  whiteSpace: 'nowrap',
                }}>
                  {icon} {label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — text */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 18px', borderRadius: 100,
              background: 'rgba(232, 248, 235,0.15)', border: '1px solid rgba(232, 248, 235,0.3)', marginBottom: 20,
            }}>
              <Wifi size={14} color="#e8f8eb" />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#e8f8eb' }}>🔥 New Feature</span>
            </div>

            <h2 style={{ fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 900, color: '#f8fafc', margin: '0 0 16px', lineHeight: 1.1 }}>
              NFC Integration —
              <span style={{ color: '#7ded88' }}> Just Tap & Go</span>
            </h2>
            <p style={{ color: 'rgba(232, 248, 235,0.85)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              Every ScanForSafe tag now includes an NFC chip. No QR scan needed — just tap any NFC phone and the owner's details appear instantly. Faster than ever.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 32 }}>
              {[
                { icon: Smartphone, title: 'Tap Any Phone', sub: 'Works on all modern NFC phones' },
                { icon: Zap,        title: 'Instant Access', sub: 'Under 0.5 seconds response time' },
                { icon: ShieldCheck,title: 'No App Needed', sub: 'Browser-based — works anywhere' },
                { icon: QrCode,     title: 'Dual Mode',     sub: 'NFC tap + QR scan both work' },
              ].map(({ icon: Icon, title, sub }) => (
                <div key={title} style={{
                  background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)',
                  borderRadius: 16, padding: '14px 16px', border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <Icon size={20} color="#7ded88" style={{ marginBottom: 8 }} />
                  <div style={{ color: '#f8fafc', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{title}</div>
                  <div style={{ color: 'rgba(232, 248, 235,0.65)', fontSize: 12 }}>{sub}</div>
                </div>
              ))}
            </div>

            <div style={{
              background: 'rgba(232, 248, 235,0.1)', border: '1px solid rgba(232, 248, 235,0.2)',
              borderRadius: 16, padding: '16px 20px',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: '#e8f8eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Wifi size={22} color="#2ebd3a" />
              </div>
              <div>
                <div style={{ color: '#f8fafc', fontWeight: 700, fontSize: 14 }}>Available on all new tags</div>
                <div style={{ color: 'rgba(232, 248, 235,0.7)', fontSize: 12, marginTop: 3 }}>
                  Order a new ScanForSafe tag to get NFC + QR dual protection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes nfcPulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @media (max-width: 768px) {
          .nfc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
