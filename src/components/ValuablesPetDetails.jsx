import { Laptop, PawPrint, Package, Droplets, Heart, Phone, MapPin, ShieldCheck } from 'lucide-react'

export default function ValuablesPetDetails() {
  return (
    <section style={{ background: 'linear-gradient(180deg,#f8fafc,#ffffff)', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="vp-grid">

          {/* Valuables */}
          <DetailCard
            icon={Laptop} color="#2ebd3a" bg="#e8f8eb"
            title="Valuables Details"
            subtitle="Laptops, Electronics & Items"
            emoji="💻"
            fields={[
              { label: 'Item Type', value: 'Laptop / Camera / Device' },
              { label: 'Brand & Model', value: 'Custom entry on register' },
              { label: 'Serial Number', value: 'Optional — for police report' },
              { label: 'Owner Note', value: 'Personal message to finder' },
              { label: 'Reward Offer', value: 'Optional reward amount' },
            ]}
            features={['NFC + QR dual layer','Instant owner notification','GPS scan location','Scan history log']}
          />

          {/* Pet Details */}
          <DetailCard
            icon={PawPrint} color="#0B2545" bg="#a7f3d0"
            title="Pet Details"
            subtitle="Dogs, Cats & Animals"
            emoji="🐕"
            fields={[
              { label: 'Pet Name', value: 'Buddy, Whiskers, etc.' },
              { label: 'Breed & Age', value: 'Labrador, 3 years' },
              { label: 'Vaccinations', value: 'Rabies, DHPP status' },
              { label: 'Medical Notes', value: 'Allergies or conditions' },
              { label: 'Vet Contact', value: 'Clinic name & number' },
            ]}
            features={['Waterproof collar tag','Vet & owner alerts','Lost pet announcement','Multi-contact fallback']}
          />
        </div>
      </div>
      <style>{`@media(max-width:768px){.vp-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}

function DetailCard({ icon: Icon, color, bg, title, subtitle, emoji, fields, features }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 24, overflow: 'hidden',
      border: '1.5px solid #e8f8eb', boxShadow: '0 8px 32px rgba(6,78,59,0.08)',
    }}>
      {/* header */}
      <div style={{ background: `linear-gradient(135deg,${color === '#2ebd3a' ? '#0B2545' : '#2ebd3a'},${color})`, padding: '24px 24px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={26} color="#e8f8eb" />
          </div>
          <div>
            <div style={{ color: '#7ded88', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{emoji} Details</div>
            <h3 style={{ color: '#f8fafc', fontWeight: 900, fontSize: 20, margin: '2px 0 0' }}>{title}</h3>
            <div style={{ color: 'rgba(232, 248, 235,0.7)', fontSize: 12, marginTop: 2 }}>{subtitle}</div>
          </div>
        </div>
      </div>

      <div style={{ padding: 24 }}>
        {/* profile fields */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Profile Fields</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {fields.map(f => (
              <div key={f.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '9px 12px', background: '#f9fafb', borderRadius: 10, gap: 8,
              }}>
                <span style={{ fontSize: 13, color: '#6b7280', fontWeight: 600, whiteSpace: 'nowrap' }}>{f.label}</span>
                <span style={{ fontSize: 12, color: '#374151', fontWeight: 500, textAlign: 'right' }}>{f.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* features */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Included Features</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {features.map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#374151', fontWeight: 500 }}>
                <ShieldCheck size={13} color="#2ebd3a" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
