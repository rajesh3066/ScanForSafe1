import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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
    to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(to);

  const handlePreRegistration = () => {
    setMobileOpen(false);
    navigate("/qr-form");
  };

  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
          -webkit-tap-highlight-color:transparent;
        }

        .sfs-nav{
          position:fixed;
          top:0;
          left:0;
          right:0;
          z-index:9999;
        }

        .sfs-topbar{
          height:3px;
          background:linear-gradient(
            90deg,
            #064e3b,
            #16a34a,
            #4ade80,
            #bbf7d0,
            #4ade80,
            #16a34a,
            #064e3b
          );
          background-size:200% 100%;
          animation:topbar-slide 4s linear infinite;
        }

        @keyframes topbar-slide{
          0%{background-position:0% 0}
          100%{background-position:200% 0}
        }

        .sfs-bar{
          height:90px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 36px;
          background:rgba(255,255,255,0.98);
          backdrop-filter:blur(20px) saturate(180%);
          border-bottom:1px solid rgba(226,232,240,0.9);
          transition:all .4s cubic-bezier(.4,0,.2,1);
          box-shadow:0 2px 12px rgba(11, 37, 69,0.07);
        }

        .sfs-nav.scrolled .sfs-bar{
          height:72px;
          box-shadow:0 6px 28px rgba(11, 37, 69,0.10);
        }

        .sfs-logo{
          display:flex;
          align-items:center;
          gap:16px;
          text-decoration:none;
          flex-shrink:0;
        }

        .sfs-logo-3d{
          position:relative;
          width:78px;
          height:78px;
          flex-shrink:0;
        }

        .sfs-logo-img-wrap{
          position:absolute;
          inset:0;
          border-radius:50%;
          overflow:hidden;
          border:2px solid rgba(22,163,74,0.4);
          background:#fff;
        }

        .sfs-logo-img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .sfs-logo-text{
          display:flex;
          flex-direction:column;
          gap:4px;
        }

        .sfs-logo-name{
          display:flex;
          align-items:baseline;
          gap:5px;
          font-size:1.12rem;
          font-weight:900;
          letter-spacing:-.03em;
          white-space:nowrap;
        }

        .brand{
          background:linear-gradient(135deg,#16a34a,#059669);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .separator{
          width:4px;
          height:4px;
          border-radius:50%;
          background:#16a34a;
          opacity:0.45;
        }

        .company{
          color:#475569;
          font-weight:600;
          font-size:.87rem;
        }

        .sfs-logo-meta{
          display:flex;
          align-items:center;
          gap:10px;
        }

        .sfs-logo-pill{
          display:flex;
          align-items:center;
          gap:5px;
          background:#f0fdf4;
          border:1px solid rgba(22,163,74,0.25);
          border-radius:999px;
          padding:2px 10px 2px 7px;
        }

        .sfs-logo-pill-dot{
          width:5px;
          height:5px;
          border-radius:50%;
          background:#16a34a;
        }

        .sfs-logo-pill-text{
          font-size:9.5px;
          font-weight:800;
          letter-spacing:.2em;
          text-transform:uppercase;
          color:#15803d;
        }

        .sfs-logo-sub{
          font-size:10px;
          color:#94a3b8;
        }

        .sfs-links{
          display:flex;
          align-items:center;
          gap:2px;
          margin-left:auto;
          margin-right:16px;
        }

        .sfs-link{
          position:relative;
          padding:10px 15px;
          border-radius:12px;
          text-decoration:none;
          color:#334155;
          font-size:13.5px;
          font-weight:700;
          transition:all .22s ease;
        }

        .sfs-link:hover{
          color:#16a34a;
          background:rgba(220,252,231,.75);
        }

        .sfs-link.active{
          color:#15803d;
          background:linear-gradient(
            135deg,
            rgba(22,163,74,.13),
            rgba(187,247,208,.5)
          );
        }

        .sfs-actions{
          display:flex;
          align-items:center;
          gap:10px;
        }

        .sfs-login{
          height:42px;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:0 22px;
          border-radius:12px;
          text-decoration:none;
          font-size:13.5px;
          font-weight:700;
          color:#15803d;
          border:1.5px solid rgba(22,163,74,.25);
          background:#fff;
        }

        .sfs-prereg{
          height:46px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          padding:0 24px;
          border-radius:999px;
          background:linear-gradient(
            135deg,
            #16a34a 0%,
            #064e3b 100%
          );
          color:#fff;
          border:none;
          cursor:pointer;
          font-size:13.5px;
          font-weight:800;
          box-shadow:0 10px 28px rgba(22,163,74,.30);
          transition:all .25s ease;
        }

        .sfs-prereg:hover{
          transform:translateY(-2px);
        }

        .prereg-dot{
          width:7px;
          height:7px;
          border-radius:50%;
          background:#4ade80;
        }

        .sfs-mobile-btn{
          display:none;
          width:42px;
          height:42px;
          border:none;
          border-radius:12px;
          background:rgba(240,253,244,.9);
          cursor:pointer;
          font-size:20px;
          color:#15803d;
        }

        .sfs-mobile-overlay{
          position:fixed;
          inset:0;
          background:rgba(15,23,42,.5);
          backdrop-filter:blur(8px);
          opacity:0;
          pointer-events:none;
          transition:all .3s ease;
          z-index:9998;
        }

        .sfs-mobile-overlay.open{
          opacity:1;
          pointer-events:auto;
        }

        .sfs-mobile-drawer{
          position:absolute;
          top:0;
          right:0;
          width:min(88vw,320px);
          height:100%;
          background:#fff;
          padding:90px 22px 30px;
          display:flex;
          flex-direction:column;
          gap:10px;
          transform:translateX(100%);
          transition:all .35s ease;
        }

        .sfs-mobile-overlay.open .sfs-mobile-drawer{
          transform:translateX(0);
        }

        .sfs-mobile-link{
          padding:14px 16px;
          border-radius:14px;
          text-decoration:none;
          color:#334155;
          font-size:15px;
          font-weight:700;
        }

        .sfs-mobile-link:hover{
          background:rgba(220,252,231,.8);
          color:#15803d;
        }

        .sfs-mobile-actions{
          margin-top:18px;
          display:flex;
          flex-direction:column;
          gap:12px;
        }

        @media(max-width:980px){
          .sfs-links,
          .sfs-actions{
            display:none;
          }

          .sfs-mobile-btn{
            display:flex;
            align-items:center;
            justify-content:center;
          }

          .sfs-bar{
            height:72px;
            padding:0 18px;
          }

          .sfs-logo-3d{
            width:58px;
            height:58px;
          }
        }
      `}</style>

      <header className={`sfs-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="sfs-topbar" />

        <div className="sfs-bar">

          <Link to="/" className="sfs-logo">
            <div className="sfs-logo-3d">
              <div className="sfs-logo-img-wrap">
                <img
                  src="/logo.png"
                  alt="ScanForSafe"
                  className="sfs-logo-img"
                />
              </div>
            </div>

            <div className="sfs-logo-text">
              <div className="sfs-logo-name">
                <span className="brand">ScanForSafe</span>
                <span className="separator" />
                <span className="company">
                  Innovations Pvt Ltd
                </span>
              </div>

              <div className="sfs-logo-meta">
                <div className="sfs-logo-pill">
                  <span className="sfs-logo-pill-dot" />
                  <span className="sfs-logo-pill-text">
                    Smart Shield
                  </span>
                </div>

                <span className="sfs-logo-sub">
                  Scan · Detect · Protect
                </span>
              </div>
            </div>
          </Link>

          <nav className="sfs-links">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`sfs-link ${
                  isActive(item.to) ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="sfs-actions">
            <Link to="/login" className="sfs-login">
              Login
            </Link>

            <button
              className="sfs-prereg"
              onClick={handlePreRegistration}
            >
              <span className="prereg-dot" />
              Pre Registration
            </button>
          </div>

          <button
            className="sfs-mobile-btn"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      <div
        className={`sfs-mobile-overlay ${
          mobileOpen ? "open" : ""
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className="sfs-mobile-drawer"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "18px",
              right: "18px",
              width: "38px",
              height: "38px",
              border: "none",
              borderRadius: "10px",
              background: "rgba(240,253,244,0.9)",
              cursor: "pointer",
              fontSize: "16px",
              color: "#15803d",
            }}
          >
            ✕
          </button>

          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`sfs-mobile-link ${
                isActive(item.to) ? "active" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="sfs-mobile-actions">
            <Link
              to="/login"
              className="sfs-login"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>

            <button
              className="sfs-prereg"
              onClick={handlePreRegistration}
            >
              <span className="prereg-dot" />
              Pre Registration
            </button>
          </div>
        </div>
      </div>
    </>
  );
}