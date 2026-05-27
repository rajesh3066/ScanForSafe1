import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+91XXXXXXXXXX',
    color: '#0057b8',
    bg: 'linear-gradient(135deg,#eff6ff,#dbeafe)',
    border: '#bfdbfe',
    emoji: '📞',
    desc: 'Mon–Sat, 9am to 7pm',
  }    ,   
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    href: 'https://wa.me/91XXXXXXXXXX',
    color: '#16a34a',
    bg: 'linear-gradient(135deg,#f0fdf4,#dcfce7)',
    border: '#bbf7d0',
    emoji: '💬',
    desc: 'Fastest — reply under 10 min',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@scanforsafe.in',
    href: 'mailto:hello@scanforsafe.in',
    color: '#7c3aed',
    bg: 'linear-gradient(135deg,#f5f3ff,#ede9fe)',
    border: '#ddd6fe',
    emoji: '✉️',
    desc: 'Reply within 2 business hours',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Your City, State – 000000',
    href: null,
    color: '#e11d48',
    bg: 'linear-gradient(135deg,#fff1f2,#ffe4e6)',
    border: '#fecdd3',
    emoji: '📍',
    desc: 'Headquarters, India',
  },
]

function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

/* Animated counter hook */
function useCounter(target, duration = 1800, active = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const prog = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - prog, 3)
      setVal(Math.floor(ease * target))
      if (prog < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return val
}

function StatItem({ num, suffix, label, active, delay }) {
  const count = useCounter(num, 1600, active)
  return (
    <div style={{
      textAlign: 'center',
      opacity: active ? 1 : 0,
      transform: active ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity .6s ease ${delay}s, transform .6s ease ${delay}s`,
    }}>
      <div style={{
        fontFamily: "'Clash Display', 'Cabinet Grotesk', sans-serif",
        fontSize: 28, fontWeight: 800, color: '#fff',
        lineHeight: 1, letterSpacing: '-0.04em',
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: 11, color: 'rgba(186,230,253,0.75)', fontWeight: 600, marginTop: 4, letterSpacing: '.06em', textTransform: 'uppercase' }}>
        {label}
      </div>
    </div>
  )
}

/* Morphing blob background shape */
function Blob({ style }) {
  return (
    <div style={{
      borderRadius: '60% 40% 70% 30% / 50% 60% 40% 70%',
      animation: 'morphBlob 8s ease-in-out infinite',
      ...style,
    }} />
  )
}

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const [formRef, formInView] = useInView()
  const [infoRef, infoInView] = useInView()
  const [statsRef, statsInView] = useInView(0.3)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1600)
  }

  return (
    <div style={{ fontFamily: "'Instrument Sans', 'Cabin', sans-serif", overflowX: 'hidden' }}>

      {/* ── FONTS ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />

      <style>{`
        /* ── Keyframes ── */
        @keyframes morphBlob {
          0%,100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%; }
          25%      { border-radius: 40% 60% 30% 70% / 60% 40% 70% 50%; }
          50%      { border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%; }
          75%      { border-radius: 30% 70% 60% 40% / 70% 30% 60% 40%; }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-18px); }
        }
        @keyframes floatYSlow {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-26px) rotate(6deg); }
        }
        @keyframes scanBeam {
          0%   { top: -4px; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes glowPulse {
          0%,100% { opacity: .5; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.08); }
        }
        @keyframes badgeIn {
          from { opacity: 0; transform: translateY(-14px) scale(.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes titleIn {
          from { opacity: 0; transform: translateY(40px) skewY(2deg); }
          to   { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-30deg); opacity: 0; }
          65%  { transform: scale(1.2) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes ripple {
          0%   { transform: scale(1); opacity: .6; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes orbMove1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(60px,-40px) scale(1.1); }
          66%      { transform: translate(-30px,30px) scale(.95); }
        }
        @keyframes orbMove2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-70px,30px) scale(1.05); }
          66%      { transform: translate(40px,-50px) scale(1.1); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 64px; }
        }
        @keyframes cardHoverShine {
          from { left: -100%; }
          to   { left: 150%; }
        }
        @keyframes dotBlink {
          0%,100% { opacity: 1; }
          50%      { opacity: .3; }
        }

        /* ── Field styles ── */
        .cf-field { position: relative; }
        .cf-field label {
          display: block;
          font-family: 'Fira Code', monospace;
          font-size: 10.5px; font-weight: 500;
          letter-spacing: .14em; text-transform: uppercase;
          color: #64748b; margin-bottom: 7px;
          transition: color .2s;
        }
        .cf-field:focus-within label { color: #0057b8; }
        .cf-input {
          width: 100%; border: 2px solid #e2e8f0; border-radius: 14px;
          padding: 13px 16px; font-size: 14px; font-weight: 500;
          color: #0f172a; background: #f8fafc; outline: none;
          font-family: 'Instrument Sans', sans-serif;
          transition: all .25s cubic-bezier(.4,0,.2,1);
          box-sizing: border-box;
        }
        .cf-input::placeholder { color: #94a3b8; font-weight: 400; }
        .cf-input:focus {
          border-color: #0057b8; background: #fff;
          box-shadow: 0 0 0 4px rgba(0,87,184,0.10);
          transform: translateY(-2px);
        }

        /* ── Info card ── */
        .cf-info-card {
          position: relative; overflow: hidden;
          border-radius: 18px; padding: 18px 20px;
          border-width: 1.5px; border-style: solid;
          display: flex; align-items: flex-start; gap: 15px;
          cursor: default;
          transition: transform .3s cubic-bezier(.34,1.3,.64,1),
                      box-shadow .3s ease;
        }
        .cf-info-card::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(105deg, transparent, rgba(255,255,255,0.6), transparent);
          transition: left .5s ease;
        }
        .cf-info-card:hover { transform: translateY(-5px) scale(1.01); box-shadow: 0 18px 48px rgba(0,0,0,0.10); }
        .cf-info-card:hover::before { left: 150%; }

        /* ── Submit button ── */
        .cf-submit {
          width: 100%; padding: 16px; border-radius: 14px;
          background: linear-gradient(135deg, #0057b8 0%, #003580 100%);
          color: white; font-size: 15px; font-weight: 700;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 9px;
          transition: all .25s ease; position: relative; overflow: hidden;
          font-family: 'Instrument Sans', sans-serif;
          letter-spacing: .02em;
        }
        .cf-submit::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%);
          background-size: 200% 100%; background-position: -200% center;
          transition: background-position .6s ease;
        }
        .cf-submit:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(0,87,184,0.40);
        }
        .cf-submit:not(:disabled):hover::after { background-position: 200% center; }
        .cf-submit:disabled { opacity: .65; cursor: not-allowed; }
      `}</style>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        minHeight: 520, paddingTop: 110, paddingBottom: 80,
        background: 'linear-gradient(150deg, #020c1b 0%, #0a1f44 40%, #003d80 80%, #0057b8 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>

        {/* Animated orbs */}
        <div style={{
          position: 'absolute', width: 560, height: 560, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.18) 0%, transparent 65%)',
          top: -180, right: -120,
          animation: 'orbMove1 14s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,87,184,0.30) 0%, transparent 65%)',
          bottom: -160, left: -100,
          animation: 'orbMove2 18s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

        {/* Scan beam */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', left: 0, right: 0, height: 3,
            background: 'linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.0) 15%, rgba(74,222,128,0.9) 50%, rgba(74,222,128,0.0) 85%, transparent 100%)',
            animation: 'scanBeam 4s ease-in-out infinite',
            filter: 'blur(1px)',
          }} />
        </div>

        {/* Floating shapes */}
        <div style={{
          position: 'absolute', top: 70, left: '7%',
          width: 64, height: 64, border: '2px solid rgba(74,222,128,0.25)',
          borderRadius: 16, transform: 'rotate(15deg)',
          animation: 'floatYSlow 6s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: 80, right: '8%',
          width: 44, height: 44, border: '2px solid rgba(99,179,237,0.2)',
          borderRadius: '50%',
          animation: 'floatY 5s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 120, right: '18%',
          width: 28, height: 28,
          background: 'rgba(74,222,128,0.12)',
          borderRadius: 8, transform: 'rotate(30deg)',
          animation: 'floatYSlow 7s ease-in-out .5s infinite',
          pointerEvents: 'none',
        }} />

        {/* Hero text */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: 680 }}>

          {/* Live badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 9,
            background: 'rgba(22,163,74,0.14)',
            border: '1.5px solid rgba(74,222,128,0.35)',
            borderRadius: 99, padding: '8px 20px', marginBottom: 28,
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0) scale(1)' : 'translateY(-16px) scale(.9)',
            transition: 'opacity .7s cubic-bezier(.34,1.3,.64,1), transform .7s cubic-bezier(.34,1.3,.64,1)',
            fontFamily: "'Fira Code', monospace",
          }}>
            <span style={{ position: 'relative', display: 'inline-block', width: 8, height: 8 }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#4ade80', animation: 'ripple 1.6s ease-out infinite' }} />
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#4ade80' }} />
            </span>
            <span style={{ fontSize: 11, fontWeight: 500, color: '#86efac', letterSpacing: '.1em' }}>
              team.online • avg_reply &lt; 10min
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
            fontWeight: 800, color: '#fff',
            lineHeight: 1.08, letterSpacing: '-0.04em',
            margin: '0 0 22px',
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0) skewY(0deg)' : 'translateY(40px) skewY(2deg)',
            transition: 'opacity .75s ease .12s, transform .75s cubic-bezier(.34,1.3,.64,1) .12s',
          }}>
            Talk to a<br />
            <span style={{
              background: 'linear-gradient(90deg, #4ade80 0%, #86efac 50%, #4ade80 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              animation: heroVisible ? 'glowPulse 3s ease-in-out infinite' : 'none',
              display: 'inline-block',
            }}>
              Real Human
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 16.5, color: 'rgba(186,230,253,0.85)',
            lineHeight: 1.75, maxWidth: 500, margin: '0 auto 40px',
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity .7s ease .26s, transform .7s ease .26s',
          }}>
            Questions about your QR tag, bulk orders, or just need help with setup? We're right here — real people, real fast replies.
          </p>

          {/* Stats */}
          <div
            ref={statsRef}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48,
              paddingTop: 28,
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <StatItem num={10} suffix=" min" label="WhatsApp reply" active={statsInView} delay={0} />
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.1)' }} />
            <StatItem num={2} suffix=" hrs" label="Email response" active={statsInView} delay={0.15} />
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.1)' }} />
            <StatItem num={10000} suffix="+" label="Happy users" active={statsInView} delay={0.3} />
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, pointerEvents: 'none' }}>
          <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <path d="M0,48 C240,80 480,16 720,40 C960,64 1200,24 1440,48 L1440,72 L0,72 Z" fill="#f1f5f9" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════
          BODY
      ══════════════════════════════ */}
      <section style={{ background: '#f1f5f9', padding: '68px 24px 88px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.65fr', gap: 36, alignItems: 'start' }}>

            {/* ── LEFT: contact cards ── */}
            <div ref={infoRef}>
              {/* Section label */}
              <div style={{
                opacity: infoInView ? 1 : 0,
                transform: infoInView ? 'translateX(0)' : 'translateX(-24px)',
                transition: 'opacity .55s ease, transform .55s ease',
                marginBottom: 28,
              }}>
                <span style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 10, fontWeight: 500, letterSpacing: '.18em',
                  textTransform: 'uppercase', color: '#0057b8',
                  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
                }}>
                  <span style={{ width: 20, height: 1.5, background: '#0057b8', display: 'inline-block' }} />
                  contact channels
                </span>
                <h2 style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 26, fontWeight: 800, color: '#0f172a',
                  letterSpacing: '-0.03em', margin: '0 0 10px',
                }}>
                  Reach Us<br />Your Way
                </h2>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, fontWeight: 400 }}>
                  WhatsApp gets you the fastest reply. For detailed queries, email works great too.
                </p>
              </div>

              {/* Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {CONTACT_INFO.map(({ icon: Icon, label, value, href, color, bg, border, emoji, desc }, i) => (
                  <div
                    key={label}
                    className="cf-info-card"
                    style={{
                      background: bg,
                      borderColor: border,
                      opacity: infoInView ? 1 : 0,
                      transform: infoInView ? 'translateX(0)' : 'translateX(-28px)',
                      transition: `opacity .5s ease ${i * 0.1 + 0.1}s, transform .5s cubic-bezier(.34,1.3,.64,1) ${i * 0.1 + 0.1}s, box-shadow .3s ease, transform .3s ease`,
                    }}
                  >
                    <div style={{
                      width: 48, height: 48, borderRadius: 14,
                      background: 'rgba(255,255,255,0.7)', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      border: `1.5px solid ${border}`,
                    }}>
                      {emoji}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: 9.5, fontWeight: 500, letterSpacing: '.14em',
                        textTransform: 'uppercase', color, marginBottom: 3,
                        display: 'flex', alignItems: 'center', gap: 5,
                      }}>
                        <span style={{ width: 14, height: 1.5, background: color, display: 'inline-block' }} />
                        {label}
                      </div>
                      {href ? (
                        <a href={href} style={{
                          fontFamily: "'Instrument Sans', sans-serif",
                          fontSize: 14, fontWeight: 700, color: '#0f172a',
                          textDecoration: 'none', display: 'block', marginBottom: 3,
                          transition: 'color .2s',
                        }}
                          onMouseEnter={e => e.target.style.color = color}
                          onMouseLeave={e => e.target.style.color = '#0f172a'}
                        >{value}</a>
                      ) : (
                        <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 3 }}>{value}</div>
                      )}
                      <div style={{ fontSize: 11.5, color: '#94a3b8', fontWeight: 400 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust note */}
              <div style={{
                marginTop: 18, padding: '14px 18px', borderRadius: 14,
                background: 'linear-gradient(135deg,#f0fdf4,#dcfce7)',
                border: '1.5px solid #bbf7d0',
                display: 'flex', alignItems: 'center', gap: 10,
                opacity: infoInView ? 1 : 0,
                transform: infoInView ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity .5s ease .55s, transform .5s ease .55s',
              }}>
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#16a34a' }} />
                  <div style={{ position: 'absolute', inset: -3, borderRadius: '50%', border: '1.5px solid rgba(22,163,74,0.3)', animation: 'ripple 2s ease-out infinite' }} />
                </div>
                <span style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 12.5, fontWeight: 600, color: '#15803d',
                }}>
                  We always reply within 2 business hours — guaranteed.
                </span>
              </div>
            </div>

            {/* ── RIGHT: form ── */}
            <div
              ref={formRef}
              style={{
                background: 'white', borderRadius: 26,
                padding: '40px 38px',
                boxShadow: '0 24px 64px rgba(0,40,120,0.10), 0 4px 16px rgba(0,40,120,0.05)',
                border: '1.5px solid #e8edf3',
                opacity: formInView ? 1 : 0,
                transform: formInView ? 'translateY(0)' : 'translateY(36px)',
                transition: 'opacity .65s ease .1s, transform .65s cubic-bezier(.34,1.3,.64,1) .1s',
              }}
            >
              {submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '44px 0', textAlign: 'center' }}>
                  <div style={{
                    width: 88, height: 88, borderRadius: '50%',
                    background: 'linear-gradient(135deg,#f0fdf4,#dcfce7)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 22, border: '2px solid #bbf7d0',
                    animation: 'checkPop .65s cubic-bezier(.34,1.3,.64,1) both',
                    boxShadow: '0 0 0 8px rgba(22,163,74,0.08)',
                  }}>
                    <CheckCircle style={{ width: 40, height: 40, color: '#16a34a' }} />
                  </div>
                  <h3 style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 28, fontWeight: 800, color: '#0f172a',
                    letterSpacing: '-0.03em', marginBottom: 12,
                  }}>
                    Message Sent! 🎉
                  </h3>
                  <p style={{ fontSize: 14.5, color: '#64748b', lineHeight: 1.8, maxWidth: 340 }}>
                    We've got your message and will reply within 2 hours. Check your inbox for a confirmation shortly.
                  </p>
                  <div style={{
                    marginTop: 24, padding: '12px 28px', borderRadius: 12,
                    background: 'linear-gradient(135deg,#f0fdf4,#dcfce7)',
                    border: '1.5px solid #bbf7d0',
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: 13.5, fontWeight: 700, color: '#15803d',
                  }}>
                    Thanks, {form.name || 'friend'}! We'll be in touch 👋
                  </div>
                </div>
              ) : (
                <>
                  {/* Form header */}
                  <div style={{ marginBottom: 30 }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      background: '#eff6ff', border: '1px solid #bfdbfe',
                      borderRadius: 99, padding: '5px 14px', marginBottom: 14,
                    }}>
                      <span style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: 10, fontWeight: 500, color: '#0057b8', letterSpacing: '.1em',
                      }}>
                        &gt;_ send_message.tsx
                      </span>
                    </div>
                    <h2 style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: 25, fontWeight: 800, color: '#0f172a',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>
                      We'd Love to Hear<br />From You
                    </h2>
                    {/* Animated underline */}
                    <div style={{
                      height: 3, borderRadius: 99, marginTop: 10,
                      background: 'linear-gradient(90deg, #0057b8, #16a34a)',
                      animation: formInView ? 'lineGrow .8s cubic-bezier(.34,1.3,.64,1) .4s both' : 'none',
                    }} />
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div className="cf-field">
                        <label>Full Name *</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Rahul Sharma" className="cf-input" />
                      </div>
                      <div className="cf-field">
                        <label>Phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX" className="cf-input" />
                      </div>
                    </div>

                    <div className="cf-field">
                      <label>Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="rahul@example.com" className="cf-input" />
                    </div>

                    <div className="cf-field">
                      <label>Message *</label>
                      <textarea name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Tell us how we can help — setup, bulk orders, feedback..."
                        className="cf-input" style={{ resize: 'none' }} />
                    </div>

                    <button type="submit" disabled={loading} className="cf-submit">
                      {loading ? (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin 1s linear infinite', flexShrink: 0 }}>
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                          Sending your message...
                        </>
                      ) : (
                        <>
                          <Send style={{ width: 16, height: 16, flexShrink: 0 }} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p style={{
                      textAlign: 'center',
                      fontFamily: "'Fira Code', monospace",
                      fontSize: 10.5, color: '#94a3b8', fontWeight: 400, letterSpacing: '.04em',
                    }}>
                      🔒 encrypted • never shared • gdpr safe
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}