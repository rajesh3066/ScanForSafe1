import { useState } from 'react'

const FEATURES = [
  {
    id: 'whatsapp',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.649 4.8 1.785 6.813L2 30l7.38-1.763A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#2ebd3a"/>
        <path d="M22.003 19.178c-.306-.153-1.81-.893-2.09-.995-.28-.102-.484-.153-.688.153-.204.306-.79.995-.969 1.2-.178.204-.357.23-.663.077-.306-.154-1.292-.476-2.46-1.517-.91-.811-1.524-1.813-1.702-2.119-.178-.306-.019-.471.134-.623.137-.136.306-.357.459-.536.153-.178.204-.306.306-.51.102-.204.051-.383-.025-.536-.077-.153-.688-1.66-.942-2.272-.248-.597-.5-.516-.688-.526l-.587-.01c-.204 0-.536.077-.816.383-.28.306-1.07 1.046-1.07 2.552 0 1.506 1.096 2.961 1.249 3.165.153.204 2.156 3.292 5.224 4.617.73.315 1.3.503 1.744.644.733.233 1.4.2 1.927.121.588-.088 1.81-.74 2.065-1.455.255-.714.255-1.326.178-1.454-.076-.128-.28-.204-.586-.357z" fill="#fff"/>
      </svg>
    ),
    iconBg: '#E8F8EF',
    accent: '#2ebd3a',
    accentDark: '#2ebd3a',
    dotColor: '#e8f8eb',
    cardBg: 'linear-gradient(145deg,#ffffff 55%,#f8fafc 100%)',
    activeBg: 'linear-gradient(145deg,#f8fafc 0%,#e8f8eb 100%)',
    tag: 'Most Loved',
    title: 'WhatsApp Notifications',
    desc: 'Get instant WhatsApp alerts the moment anyone scans your QR tag — with GPS location and a direct call option.',
    pills: ['Instant Alert', 'GPS Included', 'No App Needed'],
  },
  {
    id: 'call',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11 19.79 19.79 0 0 1 1 2.38 2 2 0 0 1 2.98.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.1 15.1z"/>
      </svg>
    ),
    iconBg: '#f8fafc',
    accent: '#4f46e5',
    accentDark: '#3730a3',
    dotColor: '#c7d2fe',
    cardBg: 'linear-gradient(145deg,#ffffff 55%,#f8fafc 100%)',
    activeBg: 'linear-gradient(145deg,#f8fafc 0%,#e0e7ff 100%)',
    tag: 'Zero Friction',
    title: 'One-Touch Call Connect',
    desc: 'Finders call you in one tap — no app, no sign-up. Works even from a basic feature phone.',
    pills: ['One Tap', 'No Sign-up', 'Any Phone'],
  },
  {
    id: 'contacts',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    iconBg: '#F3F0FF',
    accent: '#7c3aed',
    accentDark: '#5b21b6',
    dotColor: '#ddd6fe',
    cardBg: 'linear-gradient(145deg,#ffffff 55%,#f8fafc 100%)',
    activeBg: 'linear-gradient(145deg,#f8fafc 0%,#ede9fe 100%)',
    tag: 'Family Ready',
    title: 'Up to 5 Emergency Contacts',
    desc: 'Add family, friends or your vet. If the first contact misses it, the next is notified automatically.',
    pills: ['5 Contacts', 'Auto Fallback', '5-Min Retry'],
  },
  {
    id: 'gps',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#2ebd3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    iconBg: '#E8F8EF',
    accent: '#2ebd3a',
    accentDark: '#081c35',
    dotColor: '#e8f8eb',
    cardBg: 'linear-gradient(145deg,#ffffff 55%,#f8fafc 100%)',
    activeBg: 'linear-gradient(145deg,#f8fafc 0%,#e8f8eb 100%)',
    tag: 'Smart',
    title: 'GPS Location on Scan',
    desc: 'Every scan captures precise GPS coordinates and sends you a live Maps link to find your item fast.',
    pills: ['Live GPS', 'Maps Link', 'Real-Time'],
  },
  {
    id: 'setup',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    iconBg: '#FFFBEB',
    accent: '#f59e0b',
    accentDark: '#b45309',
    dotColor: '#fde68a',
    cardBg: 'linear-gradient(145deg,#ffffff 55%,#fffbeb 100%)',
    activeBg: 'linear-gradient(145deg,#fffbeb 0%,#fef3c7 100%)',
    tag: '3 Minutes',
    title: 'Instant Activation',
    desc: 'Peel, stick and you are protected. Register your tag in under 3 minutes — no technical knowledge needed.',
    pills: ['Under 3 Min', 'Guided Setup', 'Instant Live'],
  },
  {
    id: 'privacy',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    iconBg: '#FFF1F2',
    accent: '#f43f5e',
    accentDark: '#9f1239',
    dotColor: '#fecdd3',
    cardBg: 'linear-gradient(145deg,#ffffff 55%,#fff1f2 100%)',
    activeBg: 'linear-gradient(145deg,#fff1f2 0%,#ffe4e6 100%)',
    tag: 'Privacy First',
    title: 'Your Info Stays Hidden',
    desc: 'Your phone number is never on the tag. The QR links to a secure proxy — finders see only what you allow.',
    pills: ['Encrypted', 'No Personal Data', 'GDPR Safe'],
  },
  {
    id: 'history',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    iconBg: '#EFF6FF',
    accent: '#3b82f6',
    accentDark: '#1d4ed8',
    dotColor: '#bfdbfe',
    cardBg: 'linear-gradient(145deg,#ffffff 55%,#eff6ff 100%)',
    activeBg: 'linear-gradient(145deg,#eff6ff 0%,#dbeafe 100%)',
    tag: 'Full Visibility',
    title: 'Scan History & Logs',
    desc: 'Your dashboard logs every scan — time, location, device. Know exactly when and where your item was found.',
    pills: ['Full Timeline', 'Device Info', 'Exportable'],
  },
  {
    id: 'update',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
    iconBg: '#FFF7ED',
    accent: '#f97316',
    accentDark: '#c2410c',
    dotColor: '#fed7aa',
    cardBg: 'linear-gradient(145deg,#ffffff 55%,#fff7ed 100%)',
    activeBg: 'linear-gradient(145deg,#fff7ed 0%,#ffedd5 100%)',
    tag: 'Always Current',
    title: 'Update Info Anytime',
    desc: 'Changed your number? Update it in 30 seconds from any device. The physical tag never needs replacing.',
    pills: ['Instant Update', 'Any Device', 'Reassignable'],
  },
]

function DotPattern({ color }) {
  return (
    <svg width="80" height="62" viewBox="0 0 80 62" style={{ position: 'absolute', bottom: 10, right: 10, opacity: 0.4, pointerEvents: 'none' }}>
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={col * 12 + 6} cy={row * 12 + 6} r="2.5" fill={color} />
        ))
      )}
    </svg>
  )
}

function CheckBadge({ color, isActive }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" style={{ position: 'absolute', top: 13, right: 13, transition: 'transform 0.3s ease', transform: isActive ? 'scale(1.15)' : 'scale(1)' }}>
      <circle cx="11" cy="11" r="11" fill={color} opacity={isActive ? '.2' : '.1'} />
      <circle cx="11" cy="11" r="8" fill={color} opacity={isActive ? '1' : '0.5'} />
      <polyline points="7,11.5 10,14.5 15,9" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FeatureCard({ feature, isActive, onClick }) {
  const { icon, iconBg, accent, accentDark, dotColor, cardBg, activeBg, tag, title, desc, pills } = feature

  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        borderRadius: 20,
        padding: '22px 20px 28px',
        background: isActive ? activeBg : cardBg,
        // Always-visible accent border: thicker + colored when active, visible tinted when idle
        border: isActive
          ? `2px solid ${accent}`
          : `2px solid ${accent}55`,
        boxShadow: isActive
          ? `0 16px 48px ${accent}30, 0 4px 12px ${accent}18, inset 0 0 0 1px ${accent}20`
          : `0 2px 10px rgba(0,0,0,0.06), inset 0 0 0 1px ${accent}15`,
        transform: isActive ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
        transition: 'all 0.32s cubic-bezier(0.34,1.3,0.64,1)',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <CheckBadge color={accent} isActive={isActive} />
      <DotPattern color={dotColor} />

      {/* Colored top-edge accent stripe — always visible, brighter when active */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 4,
        borderRadius: '20px 20px 0 0',
        background: isActive
          ? `linear-gradient(90deg, ${accent}, ${accent}bb)`
          : `linear-gradient(90deg, ${accent}70, ${accent}30)`,
        transition: 'all 0.35s ease',
      }} />

      {/* Tag pill */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        background: isActive ? `${accent}20` : `${accent}12`,
        color: isActive ? accentDark : accentDark,
        border: `1px solid ${isActive ? `${accent}50` : `${accent}35`}`,
        borderRadius: 99, padding: '3px 10px',
        fontSize: 10, fontWeight: 700, letterSpacing: '0.07em',
        textTransform: 'uppercase', marginBottom: 14,
        transition: 'all 0.25s',
      }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: accent }} />
        {tag}
      </div>

      {/* Icon */}
      <div style={{
        width: 56, height: 56, borderRadius: '50%',
        background: isActive ? `${accent}20` : iconBg,
        border: `1.5px solid ${isActive ? `${accent}55` : `${accent}30`}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16,
        transform: isActive ? 'scale(1.1)' : 'scale(1)',
        transition: 'all 0.3s ease',
      }}>
        {icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 15.5, fontWeight: 800,
        color: isActive ? '#0B2545' : '#11355e',
        marginBottom: 7,
        lineHeight: 1.28, letterSpacing: '-0.02em',
        transition: 'color 0.25s',
      }}>
        {title}
      </h3>

      {/* Accent line */}
      <div style={{
        width: isActive ? 44 : 28, height: 3, borderRadius: 99,
        background: isActive ? `linear-gradient(90deg, ${accent}, ${accent}88)` : `${accent}50`,
        marginBottom: 10,
        transition: 'all 0.35s ease',
      }} />

      {/* Description */}
      <p style={{
        fontSize: 13,
        color: isActive ? '#334155' : '#4b5563',
        lineHeight: 1.7, marginBottom: 16,
        fontWeight: isActive ? 450 : 400,
        transition: 'color 0.25s',
      }}>
        {desc}
      </p>

      {/* Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
        {pills.map(p => (
          <span key={p} style={{
            fontSize: 10.5, fontWeight: 600,
            padding: '3px 9px', borderRadius: 99,
            background: isActive ? `${accent}16` : `${accent}0e`,
            color: isActive ? accentDark : accentDark,
            border: `1px solid ${isActive ? `${accent}45` : `${accent}30`}`,
            transition: 'all 0.25s',
          }}>
            {p}
          </span>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, height: 3,
        width: isActive ? '100%' : '0%',
        background: `linear-gradient(90deg, ${accent}, ${accent}55)`,
        transition: 'width 0.4s ease',
      }} />
    </div>
  )
}

export default function Features() {
  const [activeId, setActiveId] = useState('whatsapp')

  return (
    <section style={{
      background: 'linear-gradient(180deg,#f8fafc 0%,#f8fafc 100%)',
      padding: '72px 24px 56px',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 1160, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: '#f8fafc', border: '1.5px solid #e8f8eb',
            borderRadius: 99, padding: '6px 16px',
            fontSize: 12, fontWeight: 600, color: '#2ebd3a', marginBottom: 18,
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            Why ScanForSafe
          </div>

          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1.7rem,3.8vw,2.8rem)', fontWeight: 800,
            color: '#0B2545', letterSpacing: '-0.04em',
            lineHeight: 1.1, margin: '0 0 16px',
          }}>
            Powerful Features for <span style={{ color: '#2ebd3a' }}>Peace of Mind</span>
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 48, height: 1.5, background: 'linear-gradient(90deg,transparent,#2ebd3a)' }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2ebd3a" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div style={{ width: 48, height: 1.5, background: 'linear-gradient(90deg,#2ebd3a,transparent)' }} />
          </div>

          <p style={{ fontSize: 14.5, color: '#475569', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            Everything you need to keep your loved ones safe — <strong style={{ color: '#11355e', fontWeight: 600 }}>no app needed on the finder's end.</strong>
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 14 }}>
          {FEATURES.map(f => (
            <FeatureCard
              key={f.id}
              feature={f}
              isActive={activeId === f.id}
              onClick={() => setActiveId(f.id)}
            />
          ))}
        </div>

        {/* Trust bar */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'center',
          gap: '8px 28px', marginTop: 48,
          paddingTop: 24, borderTop: '1.5px solid #e2e8f0',
        }}>
          {[
            { label: 'ISO-grade data privacy', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
            { label: 'Works 24/7 — even offline', path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
            { label: 'Any smartphone camera', path: 'M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1l2-2h6l2 2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zM12 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0z' },
            { label: 'End-to-end encrypted', path: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4' },
          ].map(({ label, path }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ebd3a" strokeWidth="2.2" strokeLinecap="round">
                <path d={path} />
              </svg>
              <span style={{ fontSize: 12.5, fontWeight: 600, color: '#475569' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}