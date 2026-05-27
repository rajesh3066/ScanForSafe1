import { Heart, Phone, AlertTriangle, Wifi, QrCode, ShieldCheck, User, Droplets } from 'lucide-react'

export default function SeniorCitizenSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg,#f8fafc 0%,#e8f8eb 100%)', padding: '90px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 20px', borderRadius: 100,
            background: '#fff', border: '1.5px solid #e8f8eb', marginBottom: 16,
            boxShadow: '0 2px 8px rgba(22,101,52,0.08)',
          }}>
            <Heart size={14} color="#2ebd3a" fill="#2ebd3a" />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#2ebd3a' }}>🆕 Senior Citizen Care</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: '#0B2545', margin: '0 0 14px' }}>
            Emergency Protection for
            <span style={{ color: '#2ebd3a' }}> Senior Citizens</span>
          </h2>
          <p style={{ color: '#4b7a62', fontSize: 16, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            One scan gives responders instant access to medical details, blood group, and emergency contacts — no smartphone needed
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}
          className="senior-grid">

          {/* LEFT — profile card mockup */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              background: '#fff', borderRadius: 28, padding: 28, maxWidth: 360, width: '100%',
              boxShadow: '0 20px 60px rgba(6,78,59,0.12)', border: '1.5px solid #e8f8eb',
            }}>
              {/* header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid #f8fafc' }}>
                <div style={{
                  width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg,#2ebd3a,#0B2545)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(22,101,52,0.25)',
                }}>
                  <User size={28} color="#e8f8eb" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 18, color: '#0B2545' }}>Ramesh Nair</div>
                  <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>Age: 72 • Nellore, AP</div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 4,
                    background: '#e8f8eb', borderRadius: 6, padding: '2px 8px',
                    fontSize: 11, fontWeight: 700, color: '#2ebd3a',
                  }}>
                    <ShieldCheck size={10} /> Protected
                  </div>
                </div>
              </div>

              {/* medical info */}
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
                  Medical Information
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {[
                    { label: 'Blood Group', value: 'B+', icon: <Droplets size={13} color="#ef4444" /> },
                    { label: 'Condition', value: 'Diabetic', icon: <Heart size={13} color="#f97316" /> },
                    { label: 'Allergies', value: 'Penicillin', icon: <AlertTriangle size={13} color="#eab308" /> },
                    { label: 'Doctor', value: 'Dr. Reddy', icon: <User size={13} color="#2ebd3a" /> },
                  ].map(({ label, value, icon }) => (
                    <div key={label} style={{
                      background: '#f9fafb', borderRadius: 10, padding: '10px 12px',
                      border: '1px solid #f8fafc',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                        {icon}
                        <span style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600 }}>{label}</span>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#11355e' }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* emergency contacts */}
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
                  Emergency Contacts
                </div>
                {[
                  { name: 'Suresh Nair (Son)', phone: '+91 98765XXXXX' },
                  { name: 'Lakshmi Nair (Daughter)', phone: '+91 87654XXXXX' },
                ].map(c => (
                  <div key={c.name} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '9px 12px', background: '#f8fafc', borderRadius: 10, marginBottom: 6,
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#11355e' }}>{c.name}</span>
                    <button style={{
                      padding: '4px 12px', borderRadius: 8, background: '#2ebd3a',
                      color: '#fff', fontSize: 11, fontWeight: 700, border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: 4,
                    }}>
                      <Phone size={11} /> Call
                    </button>
                  </div>
                ))}
              </div>

              {/* NFC + QR */}
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{
                  flex: 1, background: 'linear-gradient(135deg,#0B2545,#2ebd3a)',
                  borderRadius: 12, padding: '12px 0', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: 6,
                }}>
                  <Wifi size={14} color="#e8f8eb" />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#e8f8eb' }}>NFC Tap</span>
                </div>
                <div style={{
                  flex: 1, background: '#f8fafc', borderRadius: 12, padding: '12px 0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  border: '1px solid #e8f8eb',
                }}>
                  <QrCode size={14} color="#2ebd3a" />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#2ebd3a' }}>QR Scan</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — features */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                {
                  icon: Heart, color: '#ef4444', bg: '#fef2f2',
                  title: 'Medical Profile',
                  desc: 'Blood group, conditions, allergies, medications, and doctor details — all accessible with one scan. Critical in emergencies.',
                },
                {
                  icon: AlertTriangle, color: '#f97316', bg: '#fff7ed',
                  title: 'Emergency Alert System',
                  desc: 'Tap or scan triggers an instant notification to all registered family members, with GPS location of the senior.',
                },
                {
                  icon: Wifi, color: '#2ebd3a', bg: '#f8fafc',
                  title: 'NFC + QR Dual Support',
                  desc: 'Works with both NFC tap and QR code scan. No app required for responders — opens in any browser instantly.',
                },
                {
                  icon: ShieldCheck, color: '#2ebd3a', bg: '#e8f8eb',
                  title: 'Wristband & Wallet Card',
                  desc: 'Available as a waterproof wristband or wallet-size card. Comfortable for daily use by senior citizens.',
                },
              ].map(({ icon: Icon, color, bg, title, desc }) => (
                <div key={title} style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  background: '#fff', borderRadius: 18, padding: '18px 20px',
                  border: '1px solid #e8f8eb', boxShadow: '0 2px 12px rgba(22,101,52,0.07)',
                }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 15, color: '#0B2545', marginBottom: 5 }}>{title}</div>
                    <div style={{ fontSize: 14, color: '#4b7a62', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .senior-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
