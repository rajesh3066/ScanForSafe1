import { Car, Bike, MapPin, ShieldCheck, Bell, QrCode, Wifi, Camera } from 'lucide-react'

export default function VehicleDetails() {
  return (
    <section style={{ background: '#ffffff', padding: '90px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px',
            borderRadius: 100, background: '#e8f8eb', border: '1px solid #e8f8eb', marginBottom: 16,
          }}>
            <Car size={14} color="#2ebd3a" />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#2ebd3a' }}>Vehicle Protection</span>
          </div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, color: '#0B2545', margin: '0 0 12px' }}>
            Vehicle Details & Protection
          </h2>
          <p style={{ color: '#4b7a62', fontSize: 16, maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            Add your vehicle info once. Let the QR sticker do the rest — 24/7 protection, instant alerts, and GPS tracking
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: 20 }}>
          {[
            {
              icon: Car, title: 'Vehicle Info', color: '#2ebd3a', bg: '#e8f8eb',
              items: ['Registration Number', 'Make & Model', 'Color & Year', 'Insurance Details'],
            },
            {
              icon: MapPin, title: 'GPS Tracking', color: '#0891b2', bg: '#ecfeff',
              items: ['Live scan location', 'Google Maps link', 'Scan history log', 'Last seen timestamp'],
            },
            {
              icon: Bell, title: 'Alert System', color: '#f97316', bg: '#fff7ed',
              items: ['Instant app notification', 'WhatsApp for emergencies', 'SMS fallback alert', '5 emergency contacts'],
            },
            {
              icon: ShieldCheck, title: 'Security', color: '#2ebd3a', bg: '#f8fafc',
              items: ['Tamper-evident sticker', 'Privacy controls', 'Anti-theft mode', 'QR + NFC dual layer'],
            },
          ].map(({ icon: Icon, title, color, bg, items }) => (
            <div key={title} style={{
              background: '#fafafa', borderRadius: 20, padding: '22px 22px 24px',
              border: '1px solid #e5e7eb', transition: 'all 0.25s',
            }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 16px 40px rgba(22,101,52,0.1)'; e.currentTarget.style.borderColor='#e8f8eb'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; e.currentTarget.style.borderColor='#e5e7eb'; }}
            >
              <div style={{ width: 46, height: 46, borderRadius: 14, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Icon size={22} color={color} />
              </div>
              <h3 style={{ margin: '0 0 12px', fontSize: 17, fontWeight: 800, color: '#0B2545' }}>{title}</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#374151' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* QR sticker size callout */}
        <div style={{
          marginTop: 40, background: 'linear-gradient(135deg,#0B2545,#2ebd3a)',
          borderRadius: 24, padding: '32px 36px', display: 'flex', alignItems: 'center',
          gap: 32, flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ color: '#7ded88', fontWeight: 800, fontSize: 13, marginBottom: 8, letterSpacing: '0.05em' }}>📏 OFFICIAL QR SIZE</div>
            <h3 style={{ color: '#f8fafc', fontWeight: 900, fontSize: 'clamp(22px,3vw,34px)', margin: '0 0 8px' }}>
              3.5 cm × 3.5 cm
            </h3>
            <p style={{ color: 'rgba(232, 248, 235,0.8)', fontSize: 14, margin: 0, lineHeight: 1.6 }}>
              Optimized for bike fuel tanks and bag straps. Weather-proof, UV resistant, scan-able from 30cm away
            </p>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {['🏍️ Bike Sticker','🎒 Bag Tag','🚗 Car Sticker'].map(label => (
              <div key={label} style={{
                background: 'rgba(232, 248, 235,0.15)', border: '1px solid rgba(232, 248, 235,0.3)',
                borderRadius: 12, padding: '12px 18px', color: '#e8f8eb', fontSize: 13, fontWeight: 700,
              }}>{label}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
