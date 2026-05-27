import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Lock,
  Leaf,
  ArrowRight,
  Twitter,
  Linkedin,
  Send,
  Globe
} from "lucide-react";

const logo = "/logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "Use Cases", to: "/use-cases" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Contact", to: "/contact" }
  ];

  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Send, href: "https://telegram.org", label: "Telegram" }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .sfs-footer {
          position: relative;
          background-image: url('/footer_bg.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
          border-top: 3px solid #2ebd3a;
          color: #f1f5f9;
          font-family: 'Inter', sans-serif;
          width: 100%;
          overflow: hidden;
        }

        /* Parallax support for Safari/mobile where fixed attachment breaks */
        @media (hover: none) {
          .sfs-footer {
            background-attachment: scroll;
          }
        }

        .sfs-footer-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(11, 37, 69, 0.95) 0%, rgba(5, 18, 36, 0.96) 100%);
          z-index: 1;
        }

        .sfs-footer-container {
          position: relative;
          max-width: 1300px;
          margin: 0 auto;
          padding: 80px clamp(20px, 5vw, 60px) 30px;
          z-index: 2;
        }

        /* ══ GRID LAYOUT ══ */
        .sfs-footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: clamp(30px, 5vw, 80px);
          margin-bottom: 60px;
        }

        /* ══ COLUMN 1: BRAND ══ */
        .sfs-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sfs-footer-logo-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .sfs-footer-logo-box {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid #2ebd3a;
          box-shadow: 0 0 20px rgba(46, 189, 58, 0.3);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sfs-footer-logo-img {
          width: 82%;
          height: auto;
          object-fit: contain;
        }

        .sfs-footer-title {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 800;
          margin: 0;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .sfs-footer-title span {
          color: #2ebd3a;
          text-shadow: 0 0 10px rgba(46, 189, 58, 0.2);
        }

        .sfs-footer-tagline {
          font-size: 10px;
          font-weight: 700;
          color: #2ebd3a;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .sfs-footer-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #cbd5e1;
          margin: 0;
          max-width: 440px;
        }

        /* Social Icons */
        .sfs-footer-socials {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .sfs-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .sfs-social-icon:hover {
          background: #2ebd3a;
          color: #ffffff;
          border-color: #2ebd3a;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(46, 189, 58, 0.4);
        }

        /* ══ COLUMN 2: NAVIGATION ══ */
        .sfs-footer-section-title {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #2ebd3a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0 0 24px 0;
          position: relative;
          display: inline-block;
        }

        .sfs-footer-section-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 32px;
          height: 2px;
          background: #2ebd3a;
          border-radius: 2px;
        }

        .sfs-footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sfs-footer-link {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .sfs-footer-link:hover {
          color: #ffffff;
          transform: translateX(5px);
        }

        .sfs-footer-link-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2ebd3a;
          opacity: 0.6;
          transition: all 0.2s ease;
        }

        .sfs-footer-link:hover .sfs-footer-link-dot {
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 8px #2ebd3a;
        }

        /* ══ COLUMN 3: CONTACT ══ */
        .sfs-footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sfs-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .sfs-footer-contact-icon {
          color: #2ebd3a;
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .sfs-footer-contact-text strong {
          color: #ffffff;
          display: block;
          margin-bottom: 2px;
        }

        /* ══ NEWSLETTER ROW ══ */
        .sfs-footer-newsletter-wrap {
          border-top: 1.5px dashed rgba(255, 255, 255, 0.1);
          border-bottom: 1.5px dashed rgba(255, 255, 255, 0.1);
          padding: 30px 0;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .sfs-newsletter-info h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .sfs-newsletter-info p {
          font-size: 13.5px;
          color: #cbd5e1;
          margin: 0;
        }

        .sfs-newsletter-form {
          display: flex;
          width: 100%;
          max-width: 440px;
          background: rgba(255, 255, 255, 0.04);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 4px;
          transition: all 0.25s ease;
        }

        .sfs-newsletter-form:focus-within {
          border-color: #2ebd3a;
          box-shadow: 0 0 16px rgba(46, 189, 58, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .sfs-newsletter-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          padding: 10px 14px;
          font-size: 13.5px;
          width: 100%;
        }

        .sfs-newsletter-input::placeholder {
          color: #94a3b8;
        }

        .sfs-newsletter-btn {
          background: #2ebd3a;
          color: #ffffff;
          border: none;
          outline: none;
          border-radius: 10px;
          padding: 0 20px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .sfs-newsletter-btn:hover {
          background: #239c2d;
          box-shadow: 0 4px 12px rgba(46, 189, 58, 0.3);
        }

        /* ══ FOOTER BOTTOM ══ */
        .sfs-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 30px;
          border-top: 1.5px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
        }

        .sfs-footer-copy {
          font-size: 13px;
          color: #94a3b8;
          margin: 0;
        }

        .sfs-footer-copy strong {
          color: #cbd5e1;
        }

        .sfs-footer-badges {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .sfs-footer-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #94a3b8;
          font-weight: 500;
        }

        .sfs-footer-badge-icon {
          color: #2ebd3a;
        }

        /* ══ RESPONSIVE BREAKPOINTS ══ */
        @media (max-width: 992px) {
          .sfs-footer-main {
            grid-template-columns: 1.2fr 1fr;
          }
          .sfs-footer-brand {
            grid-column: span 2;
          }
        }

        @media (max-width: 600px) {
          .sfs-footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sfs-footer-brand {
            grid-column: span 1;
          }
          .sfs-footer-container {
            padding-top: 60px;
          }
          .sfs-footer-newsletter-wrap {
            flex-direction: column;
            align-items: flex-start;
          }
          .sfs-newsletter-form {
            max-width: 100%;
          }
          .sfs-footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .sfs-footer-badges {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="sfs-footer">
        <div className="sfs-footer-overlay"></div>
        <div className="sfs-footer-container">
          
          {/* NEWSLETTER ROW */}
          <div className="sfs-footer-newsletter-wrap">
            <div className="sfs-newsletter-info">
              <h3>Get Safety Alerts & Updates</h3>
              <p>Subscribe to our corporate newsletter for modern verification insights.</p>
            </div>
            
            <form onSubmit={handleSubscribe} className="sfs-newsletter-form">
              <input
                className="sfs-newsletter-input"
                type="email"
                required
                placeholder={submitted ? "Thanks for subscribing!" : "Enter your corporate email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitted}
              />
              <button type="submit" className="sfs-newsletter-btn" disabled={submitted}>
                {submitted ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>

          {/* MAIN COLUMN GRID */}
          <div className="sfs-footer-main">
            
            {/* COLUMN 1: BRAND INFORMATION */}
            <div className="sfs-footer-brand">
              <Link to="/" className="sfs-footer-logo-wrap" style={{ textDecoration: 'none' }}>
                <div className="sfs-footer-logo-box">
                  <img src={logo} alt="ScanForSafe Logo" className="sfs-footer-logo-img" />
                </div>
                <div>
                  <h2 className="sfs-footer-title">
                    Scan<span>ForSafe</span>
                  </h2>
                  <div className="sfs-footer-tagline">Smart Shield</div>
                </div>
              </Link>
              
              <p className="sfs-footer-desc">
                Pioneering secure QR code solutions, visual verification systems, and smart tracking technologies. Empowering a safer and more authentic world through trusted hardware and visual tags.
              </p>
              
              <div className="sfs-footer-socials">
                {socialLinks.map(({ Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sfs-social-icon"
                    title={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN 2: NAVIGATION */}
            <div>
              <h4 className="sfs-footer-section-title">Navigation</h4>
              <div className="sfs-footer-links">
                {navLinks.map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    className="sfs-footer-link"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <span className="sfs-footer-link-dot"></span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* COLUMN 3: CONTACT INFORMATION */}
            <div>
              <h4 className="sfs-footer-section-title">Contact Us</h4>
              <div className="sfs-footer-contact-list">
                
                <div className="sfs-footer-contact-item">
                  <Phone className="sfs-footer-contact-icon" size={17} />
                  <div className="sfs-footer-contact-text">
                    <strong>Phone</strong>
                    +91 98765 43210
                  </div>
                </div>

                <div className="sfs-footer-contact-item">
                  <Mail className="sfs-footer-contact-icon" size={17} />
                  <div className="sfs-footer-contact-text">
                    <strong>Email</strong>
                    info@scanforsafe.com
                  </div>
                </div>

                <div className="sfs-footer-contact-item">
                  <MapPin className="sfs-footer-contact-icon" size={17} />
                  <div className="sfs-footer-contact-text">
                    <strong>Corporate Office</strong>
                    SFSI Innovations Tower, Phase-2,
                    Cyber Heights, Hyderabad, India
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* FOOTER BOTTOM ROW */}
          <div className="sfs-footer-bottom">
            <p className="sfs-footer-copy">
              &copy; {new Date().getFullYear()} <strong>ScanForSafe Innovations Pvt Ltd</strong>. All rights reserved.
            </p>

            <div className="sfs-footer-badges">
              <span className="sfs-footer-badge">
                <Lock size={14} className="sfs-footer-badge-icon" />
                SSL Secured
              </span>
              
              <span className="sfs-footer-badge">
                <ShieldCheck size={14} className="sfs-footer-badge-icon" />
                ISO 27001 Certified
              </span>
              
              <span className="sfs-footer-badge">
                <Leaf size={14} className="sfs-footer-badge-icon" />
                Eco Friendly tags
              </span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}