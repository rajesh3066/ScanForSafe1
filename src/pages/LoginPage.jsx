import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Eye,
  EyeOff,
  User,
  Lock,
  ArrowRight,
  Home,
  Zap,
  Users,
  Cloud,
  Sparkles,
} from 'lucide-react'

/* ─────────────────────────────────────────
   SVG SHIELD ILLUSTRATION  (green 3D style)
───────────────────────────────────────── */
function ShieldIllustration() {
  return (
    <svg viewBox="0 0 280 280" className="w-52 h-52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Glow backdrop */}
      <ellipse cx="140" cy="180" rx="90" ry="30" fill="#2ebd3a" fillOpacity="0.18" />

      {/* Shield shadow */}
      <path
        d="M140 240 C100 220 68 185 68 145 L68 82 L140 55 L212 82 L212 145 C212 185 180 220 140 240Z"
        fill="#0B2545"
        fillOpacity="0.25"
        transform="translate(4,6)"
      />

      {/* Shield body – dark green */}
      <path
        d="M140 232 C100 212 68 177 68 137 L68 74 L140 47 L212 74 L212 137 C212 177 180 212 140 232Z"
        fill="url(#shieldGrad)"
        stroke="#0B2545"
        strokeWidth="1.5"
      />

      {/* Shield inner highlight */}
      <path
        d="M140 210 C108 193 88 164 88 134 L88 88 L140 66 L192 88 L192 134 C192 164 172 193 140 210Z"
        fill="url(#shieldInner)"
        opacity="0.6"
      />

      {/* Grid dots pattern */}
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 6 }, (_, col) => {
          const x = 108 + col * 13
          const y = 80 + row * 13
          const opacity = Math.random() > 0.4 ? 0.5 : 0.15
          return (
            <rect
              key={`${row}-${col}`}
              x={x} y={y} width="8" height="8" rx="1.5"
              fill="white" fillOpacity={opacity}
            />
          )
        })
      )}

      {/* Check circle */}
      <circle cx="168" cy="158" r="22" fill="#2ebd3a" stroke="white" strokeWidth="2.5" />
      <circle cx="168" cy="158" r="18" fill="#2ebd3a" />
      <path
        d="M158 158 L164 164 L178 150"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Orbiting dots */}
      <circle cx="140" cy="30" r="5" fill="#4bd557" fillOpacity="0.7" />
      <circle cx="228" cy="100" r="4" fill="#7ded88" fillOpacity="0.6" />
      <circle cx="210" cy="210" r="5" fill="#4bd557" fillOpacity="0.5" />
      <circle cx="68" cy="195" r="3.5" fill="#7ded88" fillOpacity="0.6" />
      <circle cx="50" cy="100" r="4" fill="#4bd557" fillOpacity="0.5" />

      {/* Defs */}
      <defs>
        <linearGradient id="shieldGrad" x1="140" y1="47" x2="140" y2="232" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2ebd3a" />
          <stop offset="50%" stopColor="#2ebd3a" />
          <stop offset="100%" stopColor="#081c35" />
        </linearGradient>
        <linearGradient id="shieldInner" x1="140" y1="66" x2="140" y2="210" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ─────────────────────────────────────────
   FEATURE CARDS
───────────────────────────────────────── */
const FEATURES = [
  {
    icon: Home,
    label: 'Enterprise Security',
    desc: 'End-to-end protection for your ecosystem',
    tags: 'Secure • Reliable • Robust',
    tagColor: '#2ebd3a',
  },
  {
    icon: Zap,
    label: 'Lightning Fast',
    desc: 'Instant AI scanning & verification',
    tags: 'Real-time • Accurate • Fast',
    tagColor: '#d97706',
  },
  {
    icon: Users,
    label: 'Role-Based Access',
    desc: 'Granular permissions with 4 user roles',
    tags: 'Flexible • Controlled • Safe',
    tagColor: '#7c3aed',
  },
  {
    icon: Cloud,
    label: 'Cloud Scalability',
    desc: 'Reliable, secure & always available',
    tags: 'Scalable • Global • Always On',
    tagColor: '#0ea5e9',
  },
]

/* ─────────────────────────────────────────
   MAIN LOGIN PAGE
───────────────────────────────────────── */
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!username.trim()) e.username = 'Username is required'
    if (!password) e.password = 'Password is required'
    else if (password.length < 6) e.password = 'Password must be at least 6 characters'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    setTimeout(() => setLoading(false), 1800)
  }

  return (
    <div className="min-h-screen flex font-sans" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>

      {/* ───── LEFT PANEL ───── */}
      <div
        className="hidden lg:flex lg:w-[55%] flex-col p-10 relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #f8fafc 0%, #e8f8eb 40%, #e8f8eb 100%)',
        }}
      >
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, #7ded88 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Blur blob */}
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #4bd557, transparent 70%)' }} />
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #2ebd3a, transparent 70%)' }} />

        {/* Brand header */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
            style={{ background: 'linear-gradient(135deg, #2ebd3a, #0B2545)' }}>
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-black text-lg text-gray-900 tracking-tight leading-none block">Scan for Safe</span>
            <span className="text-[10px] text-green-700 font-semibold tracking-widest uppercase">Product Protection Platform</span>
          </div>
        </div>

        {/* AI badge */}
        <div className="relative z-10 mt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-300 bg-white/60 backdrop-blur-sm text-xs font-bold text-green-800 tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            AI Powered · Trusted · Secure
          </div>
        </div>

        {/* Hero text + illustration */}
        <div className="relative z-10 mt-8 flex gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-4xl font-black text-gray-900 leading-tight tracking-tight">
              Smart Product<br />
              Safety &{' '}
              <span style={{ color: '#2ebd3a' }}>Authentication</span>
            </h2>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed max-w-xs font-medium">
              AI-driven verification, counterfeit detection, and real-time monitoring to protect your products, customers, and brand integrity.
            </p>
          </div>
          <div className="flex-shrink-0 mt-[-12px]">
            <ShieldIllustration />
          </div>
        </div>

        {/* Feature grid */}
        <div className="relative z-10 mt-6 grid grid-cols-2 gap-4">
          {FEATURES.map(({ icon: Icon, label, desc, tags, tagColor }) => (
            <div
              key={label}
              className="bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-4 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${tagColor}18`, border: `1px solid ${tagColor}30` }}>
                <Icon className="w-4 h-4" style={{ color: tagColor }} />
              </div>
              <p className="text-gray-900 text-sm font-black leading-tight">{label}</p>
              <p className="text-gray-500 text-[11px] mt-1 leading-snug">{desc}</p>
              <p className="text-[10px] font-bold mt-2" style={{ color: tagColor }}>{tags}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ───── RIGHT PANEL ───── */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center items-center px-8 sm:px-14 py-12 bg-white relative">

        {/* Mobile brand */}
        <div className="lg:hidden flex items-center gap-2 mb-10">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #2ebd3a, #0B2545)' }}>
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-xl text-gray-900">Scan for Safe</span>
        </div>

        <div className="w-full max-w-sm">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Welcome <span style={{ color: '#2ebd3a' }}>Back!</span>
            </h1>
            <p className="text-gray-500 text-sm mt-2 font-medium">
              Sign in to continue to your dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">

            {/* Username */}
            <div>
              <label className="block text-[11px] font-black text-gray-700 tracking-widest uppercase mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => { setUsername(e.target.value); setErrors((p) => ({ ...p, username: '' })) }}
                  placeholder="Enter your username"
                  className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${
                    errors.username
                      ? 'border-red-300 focus:ring-red-100'
                      : 'border-gray-200 focus:border-green-400 focus:ring-green-50'
                  }`}
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-[11px] font-semibold mt-1.5 ml-1">{errors.username}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[11px] font-black text-gray-700 tracking-widest uppercase">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs font-bold hover:underline" style={{ color: '#2ebd3a' }}>
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: '' })) }}
                  placeholder="Enter your password"
                  className={`w-full pl-10 pr-11 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${
                    errors.password
                      ? 'border-red-300 focus:ring-red-100'
                      : 'border-gray-200 focus:border-green-400 focus:ring-green-50'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-[11px] font-semibold mt-1.5 ml-1">{errors.password}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl text-white font-black text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed mt-1"
              style={{
                background: 'linear-gradient(135deg, #2ebd3a, #0B2545)',
                boxShadow: '0 10px 28px rgba(46, 189, 58,.28)',
              }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                  </svg>
                  Signing in…
                </>
              ) : (
                <>
                  Access Dashboard
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Security note */}
            <div className="flex items-center justify-center gap-2 text-gray-400 text-[11px] font-semibold">
              <Lock className="w-3.5 h-3.5" />
              Your data is encrypted and secure
            </div>
          </form>

          {/* Register link */}
          <p className="text-center text-xs text-gray-500 font-medium mt-8">
            Don't have an account?{' '}
            <Link to="/register" className="font-black hover:underline" style={{ color: '#2ebd3a' }}>
              Get started free →
            </Link>
          </p>
        </div>
      </div>

    </div>
  )
}