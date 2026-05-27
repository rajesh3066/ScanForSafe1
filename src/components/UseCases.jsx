import { useState } from 'react'
import { Bike, PawPrint, Package, Laptop, Baby, UserCheck } from 'lucide-react'

const USE_CASES = [
  {
    icon: Bike,
    title: 'Motorcycles & Bikes',
    qrSize: '3.5 cm QR Sticker',
    description:
      'Weather-proof 3.5cm QR sticker placed on the fuel tank or handlebar. If your bike is found, the finder scans and you get an instant alert with GPS location.',
    cardBg: 'linear-gradient(135deg,#f8fafc,#e8f8eb)',
    iconBg: '#2ebd3a',
    tag: 'QR Sticker',
    tagBg: '#e8f8eb',
    tagColor: '#2ebd3a',
    image:
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
    badge: '🏍️',
    qrPosition: 'On fuel tank / handlebar',
  },
  {
    icon: Package,
    title: 'Bags & Luggage',
    qrSize: '3.5 cm QR Sticker',
    description:
      'Durable sticker or tag attached to your bag strap. Perfect for travel bags, school bags, and laptop bags. Works even in low-light.',
    cardBg: 'linear-gradient(135deg,#f8fafc,#a7f3d0)',
    iconBg: '#0B2545',
    tag: 'QR Tag',
    tagBg: '#e8f8eb',
    tagColor: '#0B2545',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    badge: '🎒',
    qrPosition: 'On bag strap / handle',
  },
  {
    icon: PawPrint,
    title: 'Dogs, Cats & Pets',
    qrSize: 'Collar QR Tag',
    description:
      "Attach a lightweight QR tag to your pet's collar. If they wander, anyone can scan it and you'll receive an instant notification with their location.",
    cardBg: 'linear-gradient(135deg,#f8fafc,#e8f8eb)',
    iconBg: '#2ebd3a',
    tag: 'Collar Tag',
    tagBg: '#e8f8eb',
    tagColor: '#2ebd3a',
    image:
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
    badge: '🐕',
    qrPosition: 'On pet collar',
  },
  {
    icon: Baby,
    title: 'Children Safety',
    qrSize: 'Hand Band / Shoulder',
    description:
      'Wearable QR wristband or shoulder tag for your child. If they get separated in crowded places, a good samaritan scans the band and you get alerted instantly.',
    cardBg: 'linear-gradient(135deg,#f8fafc,#e8f8eb)',
    iconBg: '#0B2545',
    tag: 'Hand Band',
    tagBg: '#a7f3d0',
    tagColor: '#0B2545',
    image:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
    badge: '🧒',
    qrPosition: 'On hand band / shoulder',
  },
  {
    icon: Laptop,
    title: 'Laptops & Valuables',
    qrSize: 'QR + NFC Sticker',
    description:
      'Stick a dual QR+NFC tag on your laptop, camera, or any valuable. Works with both QR scan and NFC tap for maximum recovery speed.',
    cardBg: 'linear-gradient(135deg,#f8fafc,#e8f8eb)',
    iconBg: '#2ebd3a',
    tag: 'NFC + QR',
    tagBg: '#e8f8eb',
    tagColor: '#2ebd3a',
    image:
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
    badge: '💻',
    qrPosition: 'Back of device',
  },
  {
    icon: UserCheck,
    title: 'Senior Citizens',
    qrSize: 'Emergency QR + NFC',
    description:
      'Emergency profile with medical info, blood group, and contacts. NFC tap or QR scan gives responders instant access to critical details — no app needed.',
    cardBg: 'linear-gradient(135deg,#f8fafc,#a7f3d0)',
    iconBg: '#0B2545',
    tag: 'Senior Care',
    tagBg: '#2ebd3a',
    tagColor: '#fff',
    image:
      'https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=600&q=80',
    badge: '👴',
    qrPosition: 'Wristband / wallet card',
    isNew: true,
  },
]

export default function UseCases() {
  return (
    <section
      id="use-cases"
      style={{
        background: '#ffffff',
        padding: '90px 0 80px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 20px',
              borderRadius: 100,
              background: '#e8f8eb',
              border: '1px solid #e8f8eb',
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 700, color: '#2ebd3a' }}>
              Real-World Use Cases
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px,4vw,44px)',
              fontWeight: 900,
              color: '#0B2545',
              margin: '0 0 14px',
            }}
          >
            Protect Everything You Love
          </h2>

          <p
            style={{
              color: '#4b7a62',
              fontSize: 16,
              maxWidth: 540,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            From bikes to babies — ScanForSafe QR tags and NFC chips keep your world safe and recoverable
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 24,
          }}
        >
          {USE_CASES.map((uc) => (
            <UseCard key={uc.title} {...uc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCard({
  icon: Icon,
  title,
  qrSize,
  description,
  cardBg,
  iconBg,
  tag,
  tagBg,
  tagColor,
  image,
  badge,
  qrPosition,
  isNew,
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 24,
        overflow: 'hidden',
        background: cardBg,
        border: '1.5px solid #e8f8eb',
        boxShadow: hovered ? '0 24px 56px rgba(6,78,59,0.14)' : '0 4px 24px rgba(6,78,59,0.07)',
        transition: 'all 0.3s ease',
        position: 'relative',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {isNew && (
        <div
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            zIndex: 10,
            background: '#2ebd3a',
            color: '#fff',
            fontSize: 11,
            fontWeight: 800,
            padding: '4px 12px',
            borderRadius: 100,
            letterSpacing: '0.05em',
          }}
        >
          NEW
        </div>
      )}

      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.4s ease',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 30%, rgba(6,78,59,0.65))',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            borderRadius: 10,
            padding: '6px 12px',
            fontSize: 11,
            fontWeight: 700,
            color: '#2ebd3a',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            border: '1px solid rgba(255,255,255,0.8)',
            zIndex: 2,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2ebd3a" strokeWidth="2.5">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <path d="M14 14h3v3m0 4h4m-4-4v4m4-7h-4m4 0v3" />
          </svg>
          {qrPosition}
        </div>
      </div>

      <div style={{ padding: '20px 20px 22px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: 12,
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon size={20} color="#fff" />
            </div>

            <div>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: '#0B2545' }}>
                {title}
              </h3>
              <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 600, marginTop: 2 }}>
                {badge} {qrSize}
              </div>
            </div>
          </div>

          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              padding: '4px 10px',
              borderRadius: 100,
              background: tagBg,
              color: tagColor,
              whiteSpace: 'nowrap',
            }}
          >
            {tag}
          </span>
        </div>

        <p style={{ margin: 0, fontSize: 14, color: '#374151', lineHeight: 1.65 }}>
          {description}
        </p>
      </div>
    </div>
  )
}