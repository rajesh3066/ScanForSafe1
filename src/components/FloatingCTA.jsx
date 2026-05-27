import { Link } from 'react-router-dom'
import {
  MessageCircle,
  PhoneCall,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

export default function FloatingCTA() {
  return (
    <>
      {/* Glow Effects */}
      <div
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '22px',
          width: '70px',
          height: '70px',
          borderRadius: '9999px',
          background: 'rgba(37,211,102,0.18)',
          filter: 'blur(18px)',
          zIndex: 40,
        }}
      />

      <div
        style={{
          position: 'fixed',
          bottom: '22px',
          right: '22px',
          width: '70px',
          height: '70px',
          borderRadius: '9999px',
          background: 'rgba(37,99,235,0.18)',
          filter: 'blur(18px)',
          zIndex: 40,
        }}
      />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '96px',
          right: '24px',
          zIndex: 50,
          width: '62px',
          height: '62px',
          borderRadius: '9999px',
          background:
            'linear-gradient(135deg, #2ebd3a 0%, #249e30 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow:
            '0 12px 30px rgba(37,211,102,0.35), inset 0 1px 0 rgba(255,255,255,0.3)',
          textDecoration: 'none',
          transition: 'all 0.35s ease',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
          animation: 'float 3s ease-in-out infinite',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            'translateY(-4px) scale(1.08)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)'
        }}
      >
        {/* Shine Effect */}
        <div
          style={{
            position: 'absolute',
            width: '120%',
            height: '40%',
            background:
              'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'rotate(-25deg)',
            top: '-20%',
            left: '-120%',
            animation: 'shine 3s infinite',
          }}
        />

        <PhoneCall size={26} color="white" strokeWidth={2.5} />

        {/* Online Dot */}
        <span
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '12px',
            height: '12px',
            borderRadius: '9999px',
            background: '#fff',
            border: '2px solid #2ebd3a',
          }}
        />
      </a>

      {/* Contact Floating Button */}
      <Link
        to="/contact"
        aria-label="Send us a message"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 50,
          width: '62px',
          height: '62px',
          borderRadius: '9999px',
          background:
            'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow:
            '0 12px 30px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.3)',
          textDecoration: 'none',
          transition: 'all 0.35s ease',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
          animation: 'float 3s ease-in-out infinite',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            'translateY(-4px) scale(1.08)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)'
        }}
      >
        {/* Shine Effect */}
        <div
          style={{
            position: 'absolute',
            width: '120%',
            height: '40%',
            background:
              'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'rotate(-25deg)',
            top: '-20%',
            left: '-120%',
            animation: 'shine 3s infinite',
          }}
        />

        <MessageCircle size={28} color="white" strokeWidth={2.5} />

        {/* Sparkle */}
        <div
          style={{
            position: 'absolute',
            top: '7px',
            right: '7px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Sparkles size={14} color="#fff" />
        </div>
      </Link>

      {/* Mini Quick Action */}
      <div
        style={{
          position: 'fixed',
          bottom: '180px',
          right: '18px',
          zIndex: 45,
          background: 'rgba(11, 37, 69,0.92)',
          color: '#fff',
          padding: '10px 14px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
          fontWeight: 600,
          boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
          backdropFilter: 'blur(10px)',
        }}
      >
        Need Help?
        <ArrowUpRight size={16} />
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          @keyframes shine {
            0% {
              left: -120%;
            }
            100% {
              left: 120%;
            }
          }
        `}
      </style>
    </>
  )
}