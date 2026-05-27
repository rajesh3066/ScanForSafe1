import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "Use Cases", to: "/use-cases" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      <style>{`
        *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}

        .sfs-nav{position:fixed;top:0;left:0;right:0;z-index:9999;}

        .sfs-topbar{
          height:3px;
          background:linear-gradient(90deg,#0B2545,#2ebd3a,#4bd557,#e8f8eb,#4bd557,#2ebd3a,#0B2545);
          background-size:200% 100%;
          animation:topbar-slide 4s linear infinite;
        }
        @keyframes topbar-slide{0%{background-position:0% 0}100%{background-position:200% 0}}

        .sfs-bar{
          height:90px;
          display:flex;align-items:center;justify-content:space-between;
          padding:0 36px;
          background:rgba(255,255,255,0.98);
          backdrop-filter:blur(20px) saturate(180%);
          -webkit-backdrop-filter:blur(20px) saturate(180%);
          border-bottom:1px solid rgba(226,232,240,0.9);
          transition:all .4s cubic-bezier(.4,0,.2,1);
          box-shadow:0 2px 12px rgba(11, 37, 69,0.07);
        }
        .sfs-nav.scrolled .sfs-bar{
          height:72px;
          box-shadow:0 6px 28px rgba(11, 37, 69,0.10);
        }

        /* ══════════════════════════════
           LOGO — CREATIVE BADGE DESIGN
        ══════════════════════════════ */
        .sfs-logo{
          display:flex;align-items:center;gap:16px;
          text-decoration:none;flex-shrink:0;
        }

        /* Outer rotating dashed ring */
        .sfs-logo-badge{
          position:relative;
          width:76px;height:76px;
          flex-shrink:0;
          transition:all .4s cubic-bezier(.4,0,.2,1);
        }
        .sfs-nav.scrolled .sfs-logo-badge{width:62px;height:62px;}

        /* Animated spinning dashed border */
        .sfs-logo-badge::before{
          content:"";
          position:absolute;
          inset:-5px;
          border-radius:50%;
          border:2px dashed rgba(46, 189, 58,0.4);
          animation:badge-spin 10s linear infinite;
        }
        /* Solid inner glow ring */
        .sfs-logo-badge::after{
          content:"";
          position:absolute;
          inset:-2px;
          border-radius:50%;
          border:2px solid rgba(46, 189, 58,0.25);
          box-shadow:
            0 0 0 4px rgba(46, 189, 58,0.07),
            0 6px 24px rgba(46, 189, 58,0.22);
        }

        @keyframes badge-spin{
          0%{transform:rotate(0deg)}
          100%{transform:rotate(360deg)}
        }

        /* Circle image container */
        .sfs-logo-img-wrap{
          width:100%;height:100%;
          border-radius:50%;
          overflow:hidden;
          background:linear-gradient(135deg,#f8fafc,#e8f8eb);
          border:2.5px solid rgba(46, 189, 58,0.45);
          box-shadow:inset 0 2px 8px rgba(46, 189, 58,0.15);
          position:relative;
          z-index:1;
          transition:all .4s ease;
        }
        .sfs-logo:hover .sfs-logo-img-wrap{
          border-color:rgba(46, 189, 58,0.75);
          box-shadow:
            inset 0 2px 8px rgba(46, 189, 58,0.2),
            0 0 20px rgba(46, 189, 58,0.25);
        }
        .sfs-logo:hover .sfs-logo-badge::before{
          border-color:rgba(46, 189, 58,0.7);
          animation-duration:4s;
        }

        .sfs-logo-img{
          width:100%;height:100%;
          object-fit:cover;
          object-position:center;
          display:block;
          transition:transform .4s ease;
        }
        .sfs-logo:hover .sfs-logo-img{transform:scale(1.08);}

        /* ══ TEXT BLOCK ══ */
        .sfs-logo-text{display:flex;flex-direction:column;gap:3px;}

        .sfs-logo-name{
          font-size:1.15rem;font-weight:900;
          letter-spacing:-.025em;
          font-family:Inter,system-ui,sans-serif;
          white-space:nowrap;line-height:1.15;
        }
        .sfs-logo-name .brand{
          background:linear-gradient(135deg,#2ebd3a,#059669);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          background-clip:text;
        }
        .sfs-logo-name .company{color:#0B2545;}

        /* Tagline row */
        .sfs-logo-tag{
          display:flex;align-items:center;gap:8px;
        }
        .sfs-logo-tag-line{
          flex:1;height:1.5px;
          background:linear-gradient(90deg,#2ebd3a,#4bd557,transparent);
          border-radius:2px;
          max-width:28px;
        }
        .sfs-logo-tag-line.right{
          background:linear-gradient(270deg,#2ebd3a,#4bd557,transparent);
        }
        .sfs-logo-tagtext{
          font-size:9px;font-weight:900;
          letter-spacing:.28em;text-transform:uppercase;
          background:linear-gradient(90deg,#2ebd3a,#059669);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          background-clip:text;
          white-space:nowrap;
        }

        /* ══ NAV LINKS ══ */
        .sfs-links{
          display:flex;align-items:center;gap:2px;
          margin-left:auto;margin-right:16px;
        }
        .sfs-link{
          position:relative;padding:10px 15px;border-radius:12px;
          text-decoration:none;color:#334155;font-size:13.5px;font-weight:700;
          font-family:Inter,system-ui,sans-serif;
          transition:all .22s ease;
        }
        .sfs-link:hover{color:#2ebd3a;background:rgba(232, 248, 235,.75);}
        .sfs-link.active{
          color:#0B2545;
          background:linear-gradient(135deg,rgba(46, 189, 58,.13),rgba(232, 248, 235,.5));
          box-shadow:inset 0 0 0 1px rgba(46, 189, 58,.12);
        }
        .sfs-link.active::after{
          content:"";position:absolute;
          left:15px;right:15px;bottom:6px;
          height:2px;border-radius:999px;
          background:linear-gradient(90deg,#2ebd3a,#4bd557);
        }

        /* ══ ACTIONS ══ */
        .sfs-actions{display:flex;align-items:center;gap:10px;flex-shrink:0;}
        .sfs-login{
          height:42px;display:flex;align-items:center;justify-content:center;
          padding:0 22px;border-radius:12px;text-decoration:none;
          font-size:13.5px;font-weight:700;color:#0B2545;
          border:1.5px solid rgba(46, 189, 58,.25);background:rgba(255,255,255,.9);
          transition:all .22s ease;letter-spacing:-.01em;
        }
        .sfs-login:hover{
          background:#fff;transform:translateY(-1px);
          box-shadow:0 8px 20px rgba(46, 189, 58,.12);
          border-color:rgba(46, 189, 58,.45);
        }

        .sfs-prereg{
          height:46px;display:flex;align-items:center;justify-content:center;gap:8px;
          padding:0 24px;border-radius:999px;
          background:linear-gradient(135deg,#2ebd3a 0%,#0B2545 100%);
          color:#fff;border:none;cursor:pointer;
          font-size:13.5px;font-weight:800;
          font-family:Inter,system-ui,sans-serif;
          letter-spacing:-.01em;
          box-shadow:0 10px 28px rgba(46, 189, 58,.30),inset 0 1px 0 rgba(255,255,255,.15);
          transition:all .25s ease;white-space:nowrap;
        }
        .sfs-prereg:hover{
          transform:translateY(-2px);
          box-shadow:0 16px 36px rgba(46, 189, 58,.38),inset 0 1px 0 rgba(255,255,255,.15);
        }
        .prereg-dot{
          width:7px;height:7px;border-radius:50%;
          background:#4bd557;flex-shrink:0;
          animation:dot-pulse 1.5s ease-in-out infinite;
        }
        @keyframes dot-pulse{
          0%,100%{opacity:.5;transform:scale(.85)}
          50%{opacity:1;transform:scale(1.25)}
        }

        /* ══ MOBILE BTN ══ */
        .sfs-mobile-btn{
          display:none;width:42px;height:42px;border:none;
          border-radius:12px;
          background:rgba(240,253,244,.9);
          border:1px solid rgba(46, 189, 58,.15);
          cursor:pointer;font-size:20px;color:#0B2545;
        }

        /* ══ MOBILE MENU ══ */
        .sfs-mobile-overlay{
          position:fixed;inset:0;background:rgba(11, 37, 69,.5);
          backdrop-filter:blur(8px);opacity:0;pointer-events:none;
          transition:all .3s ease;z-index:9998;
        }
        .sfs-mobile-overlay.open{opacity:1;pointer-events:auto;}
        .sfs-mobile-drawer{
          position:absolute;top:0;right:0;
          width:min(88vw,320px);height:100%;
          background:rgba(255,255,255,.97);backdrop-filter:blur(30px);
          padding:90px 22px 30px;display:flex;flex-direction:column;gap:10px;
          transform:translateX(100%);transition:all .35s ease;
          box-shadow:-12px 0 48px rgba(11, 37, 69,.15);
        }
        .sfs-mobile-overlay.open .sfs-mobile-drawer{transform:translateX(0);}
        .sfs-mobile-link{
          padding:14px 16px;border-radius:14px;text-decoration:none;
          color:#334155;font-size:15px;font-weight:700;transition:all .18s ease;
        }
        .sfs-mobile-link:hover,.sfs-mobile-link.active{
          background:rgba(232, 248, 235,.8);color:#0B2545;
        }
        .sfs-mobile-actions{margin-top:18px;display:flex;flex-direction:column;gap:12px;}

        /* ══ PRE-REG MODAL ══ */
        .prereg-overlay{
          position:fixed;inset:0;
          background:rgba(11, 37, 69,.6);
          backdrop-filter:blur(12px);
          display:flex;align-items:center;justify-content:center;
          z-index:99999;padding:20px;
          opacity:0;pointer-events:none;
          transition:opacity .3s ease;
        }
        .prereg-overlay.open{opacity:1;pointer-events:auto;}
        .prereg-modal{
          background:#fff;border-radius:24px;
          width:100%;max-width:440px;
          padding:40px 36px 36px;
          box-shadow:0 40px 80px rgba(11, 37, 69,.25);
          transform:translateY(24px) scale(.96);
          transition:transform .35s ease;
          position:relative;
        }
        .prereg-overlay.open .prereg-modal{transform:translateY(0) scale(1);}
        .prereg-modal-close{
          position:absolute;top:16px;right:16px;
          width:34px;height:34px;border-radius:10px;
          border:1px solid #e2e8f0;background:#f8fafc;
          cursor:pointer;font-size:15px;color:#64748b;
          display:flex;align-items:center;justify-content:center;
          transition:all .18s ease;
        }
        .prereg-modal-close:hover{background:#fee2e2;border-color:#fca5a5;color:#dc2626;}

        @media(max-width:980px){
          .sfs-links,.sfs-actions{display:none;}
          .sfs-mobile-btn{display:flex;align-items:center;justify-content:center;}
          .sfs-bar{height:72px;padding:0 18px;}
          .sfs-logo-badge{width:56px;height:56px;}
          .sfs-logo-name{font-size:.95rem;}
        }
        @media(max-width:400px){
          .sfs-logo-name{font-size:.82rem;}
          .sfs-logo-tagtext{font-size:7.5px;}
        }
      `}</style>

      <header className={`sfs-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="sfs-topbar" />
        <div className="sfs-bar">

          {/* ── LOGO ── */}
          <Link to="/" className="sfs-logo">
            <div className="sfs-logo-badge">
              <div className="sfs-logo-img-wrap">
                <img src="/logo.png" alt="ScanForSafe" className="sfs-logo-img" />
              </div>
            </div>
            <div className="sfs-logo-text">
              <div className="sfs-logo-name">
                <span className="brand">ScanForSafe</span>{" "}
                <span className="company">Innovations Pvt Ltd</span>
              </div>
              <div className="sfs-logo-tag">
                <div className="sfs-logo-tag-line" />
                <span className="sfs-logo-tagtext">Smart Shield</span>
                <div className="sfs-logo-tag-line right" />
              </div>
            </div>
          </Link>

          {/* ── NAV LINKS ── */}
          <nav className="sfs-links">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`sfs-link ${isActive(item.to) ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ── ACTIONS ── */}
          <div className="sfs-actions">
            <Link to="/login" className="sfs-login">Login</Link>
            <button className="sfs-prereg" onClick={() => setModalOpen(true)}>
              <span className="prereg-dot" />
              Pre Registration
            </button>
          </div>

          <button className="sfs-mobile-btn" onClick={() => setMobileOpen(true)}>☰</button>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      <div
        className={`sfs-mobile-overlay ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="sfs-mobile-drawer" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setMobileOpen(false)}
            style={{position:"absolute",top:"18px",right:"18px",width:"38px",height:"38px",border:"none",borderRadius:"10px",background:"rgba(240,253,244,0.9)",cursor:"pointer",fontSize:"16px",color:"#0B2545"}}
          >✕</button>
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`sfs-mobile-link ${isActive(item.to) ? "active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="sfs-mobile-actions">
            <Link to="/login" className="sfs-login" onClick={() => setMobileOpen(false)}>Login</Link>
            <button className="sfs-prereg" onClick={() => { setMobileOpen(false); setModalOpen(true); }}>
              <span className="prereg-dot" /> Pre Registration
            </button>
          </div>
        </div>
      </div>

      {/* ── PRE-REGISTRATION MODAL ── */}
      <div
        className={`prereg-overlay ${modalOpen ? "open" : ""}`}
        onClick={() => setModalOpen(false)}
      >
        <div className="prereg-modal" onClick={(e) => e.stopPropagation()}>
          <button className="prereg-modal-close" onClick={() => setModalOpen(false)}>✕</button>
          {/* Add your pre-registration form here */}
        </div>
      </div>
    </>
  );
}