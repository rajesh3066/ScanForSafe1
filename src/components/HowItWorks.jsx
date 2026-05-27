import { useState, useEffect } from "react";
import {
  ShoppingBag, QrCode, ShieldCheck, ArrowRight,
  Truck, Clock, Zap, Users, MapPin, MessageCircle,
  Shield, ChevronLeft, CheckCircle, Bell
} from "lucide-react";

// Brand palette
// soft-green / softGreen: #e8f8eb
// primary-brand / primaryBrand: #2ebd3a
// heading-dark / headingDark: #0B2545
// input-bg / inputBg: #f3f4f6
// text-main / textMain: #11355e

function QRCodeSVG() {
  return (
    <svg width="64" height="64" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="7" height="7" rx="1" fill="#0B2545"/>
      <rect x="1" y="1" width="5" height="5" rx="0.5" fill="white"/>
      <rect x="2" y="2" width="3" height="3" fill="#0B2545"/>
      <rect x="14" y="0" width="7" height="7" rx="1" fill="#0B2545"/>
      <rect x="15" y="1" width="5" height="5" rx="0.5" fill="white"/>
      <rect x="16" y="2" width="3" height="3" fill="#0B2545"/>
      <rect x="0" y="14" width="7" height="7" rx="1" fill="#0B2545"/>
      <rect x="1" y="15" width="5" height="5" rx="0.5" fill="white"/>
      <rect x="2" y="16" width="3" height="3" fill="#0B2545"/>
      <rect x="8" y="0" width="1" height="1" fill="#0B2545"/>
      <rect x="10" y="0" width="1" height="1" fill="#0B2545"/>
      <rect x="12" y="0" width="1" height="1" fill="#0B2545"/>
      <rect x="8" y="2" width="2" height="1" fill="#0B2545"/>
      <rect x="11" y="2" width="1" height="1" fill="#0B2545"/>
      <rect x="9" y="4" width="1" height="1" fill="#0B2545"/>
      <rect x="11" y="4" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="6" width="1" height="1" fill="#0B2545"/>
      <rect x="10" y="6" width="2" height="1" fill="#0B2545"/>
      <rect x="0" y="8" width="2" height="1" fill="#0B2545"/>
      <rect x="3" y="8" width="1" height="1" fill="#0B2545"/>
      <rect x="5" y="8" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="8" width="1" height="2" fill="#0B2545"/>
      <rect x="10" y="8" width="2" height="1" fill="#0B2545"/>
      <rect x="13" y="8" width="1" height="1" fill="#0B2545"/>
      <rect x="15" y="8" width="2" height="1" fill="#0B2545"/>
      <rect x="18" y="8" width="1" height="2" fill="#0B2545"/>
      <rect x="0" y="10" width="1" height="1" fill="#0B2545"/>
      <rect x="2" y="10" width="2" height="1" fill="#0B2545"/>
      <rect x="5" y="10" width="1" height="1" fill="#0B2545"/>
      <rect x="9" y="10" width="1" height="1" fill="#0B2545"/>
      <rect x="11" y="10" width="3" height="1" fill="#0B2545"/>
      <rect x="15" y="10" width="1" height="1" fill="#0B2545"/>
      <rect x="17" y="10" width="2" height="1" fill="#0B2545"/>
      <rect x="0" y="12" width="3" height="1" fill="#0B2545"/>
      <rect x="4" y="12" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="12" width="2" height="1" fill="#0B2545"/>
      <rect x="11" y="12" width="1" height="1" fill="#0B2545"/>
      <rect x="13" y="12" width="2" height="1" fill="#0B2545"/>
      <rect x="16" y="12" width="1" height="1" fill="#0B2545"/>
      <rect x="18" y="12" width="1" height="1" fill="#0B2545"/>
      <rect x="8" y="14" width="1" height="1" fill="#0B2545"/>
      <rect x="10" y="14" width="2" height="1" fill="#0B2545"/>
      <rect x="13" y="14" width="1" height="2" fill="#0B2545"/>
      <rect x="15" y="14" width="1" height="1" fill="#0B2545"/>
      <rect x="17" y="14" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="16" width="2" height="1" fill="#0B2545"/>
      <rect x="11" y="16" width="1" height="2" fill="#0B2545"/>
      <rect x="14" y="16" width="1" height="1" fill="#0B2545"/>
      <rect x="16" y="16" width="1" height="2" fill="#0B2545"/>
      <rect x="18" y="16" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="18" width="1" height="2" fill="#0B2545"/>
      <rect x="10" y="18" width="1" height="2" fill="#0B2545"/>
      <rect x="14" y="18" width="1" height="2" fill="#0B2545"/>
      <rect x="19" y="18" width="1" height="2" fill="#0B2545"/>
    </svg>
  );
}

function IPhoneMockup() {
  return (
    <div style={{ position: "relative", width: 280, height: 560, flexShrink: 0 }}>
      {/* Floating notification bubbles */}
      <div style={{
        position: "absolute", right: -50, top: "28%",
        background: "#2ebd3a", borderRadius: "50%",
        width: 44, height: 44,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 16px rgba(37,211,102,0.4)",
        zIndex: 10,
      }}>
        <MessageCircle size={22} color="white" fill="white" />
      </div>
      <div style={{
        position: "absolute", right: -44, top: "52%",
        background: "white", borderRadius: "50%",
        width: 38, height: 38,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
        zIndex: 10,
      }}>
        <Bell size={18} color="#0B2545" />
      </div>

      <div style={{
        position: "absolute", inset: 0,
        borderRadius: 46,
        background: "linear-gradient(160deg, #5a5a5a 0%, #3a3a3a 30%, #2a2a2a 60%, #1e1e1e 100%)",
        boxShadow: `
          0 0 0 1px #666 inset,
          2px 4px 0 0 #555 inset,
          -1px -2px 0 0 #111 inset,
          0 30px 80px rgba(0,0,0,0.55),
          0 8px 24px rgba(0,0,0,0.35),
          0 2px 6px rgba(0,0,0,0.25)
        `,
      }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: 46, background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 40%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -3, top: 120, width: 3, height: 34, background: "linear-gradient(180deg, #555 0%, #3a3a3a 100%)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 3px rgba(0,0,0,0.4)" }} />
        <div style={{ position: "absolute", left: -3, top: 165, width: 3, height: 34, background: "linear-gradient(180deg, #555 0%, #3a3a3a 100%)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 3px rgba(0,0,0,0.4)" }} />
        <div style={{ position: "absolute", left: -3, top: 88, width: 3, height: 22, background: "linear-gradient(180deg, #555 0%, #3a3a3a 100%)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 3px rgba(0,0,0,0.4)" }} />
        <div style={{ position: "absolute", right: -3, top: 140, width: 3, height: 70, background: "linear-gradient(180deg, #555 0%, #3a3a3a 100%)", borderRadius: "0 2px 2px 0", boxShadow: "1px 0 3px rgba(0,0,0,0.4)" }} />

        <div style={{ position: "absolute", inset: 6, borderRadius: 41, background: "#0a0a0a", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 3, borderRadius: 38, background: "white", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 100, height: 30, background: "#0a0a0a", borderRadius: 20, zIndex: 20 }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px 0", fontSize: 10, fontWeight: 700, color: "#111" }}>
              <span>9:41</span>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <svg width="14" height="10" viewBox="0 0 14 10"><rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="#111"/><rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="#111"/><rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="#111"/><rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="#111"/></svg>
                <svg width="13" height="10" viewBox="0 0 13 10"><path d="M6.5 7.5 L6.5 9.5" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 5.5 Q6.5 3.5 9 5.5" stroke="#111" strokeWidth="1.2" fill="none" strokeLinecap="round"/><path d="M1.5 3 Q6.5 -0.5 11.5 3" stroke="#111" strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>
                <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0" y="1" width="19" height="9" rx="2" stroke="#111" strokeWidth="1" fill="none"/><rect x="19.5" y="3.5" width="2" height="4" rx="1" fill="#111"/><rect x="1.5" y="2.5" width="15" height="6" rx="1" fill="#111"/></svg>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 16px 6px", borderBottom: "1px solid #f0f0f0" }}>
              <ChevronLeft size={18} color="#333" strokeWidth={2.5} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>Found Item</div>
                <div style={{ fontSize: 9, color: "#777", display: "flex", alignItems: "center", gap: 3 }}><QrCode size={9} color="#777"/>Scan QR Code</div>
              </div>
              <div style={{ width: 18 }} />
            </div>

            <div style={{ margin: "10px 12px 6px", background: "#e8f8eb", borderRadius: 12, padding: "10px 12px", border: "1px solid #e8f8eb", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ background: "white", borderRadius: 8, padding: 4, border: "1px solid #ddd", flexShrink: 0 }}>
                <QRCodeSVG />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#0B2545", letterSpacing: "-0.3px" }}>PET-7G4K-2L8M</div>
                <div style={{ fontSize: 10, color: "#2ebd3a", marginBottom: 4 }}>Pet ID Tag</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 3, background: "#2ebd3a", borderRadius: 4, padding: "2px 6px", fontSize: 9, fontWeight: 700, color: "white" }}>
                  <CheckCircle size={8} color="white" fill="white"/>Verified
                </div>
              </div>
            </div>

            <div style={{ padding: "0 12px", flex: 1, display: "flex", flexDirection: "column", gap: 0 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "7px 0", borderBottom: "1px solid #f5f5f5" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#e8f8eb", border: "1.5px solid #2ebd3a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Shield size={12} color="#0B2545" />
                  </div>
                  <div style={{ width: 1.5, height: 28, background: "#e0e0e0" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 1 }}>OTP Verification</div>
                  <div style={{ fontSize: 8.5, color: "#777" }}>Enter OTP sent to</div>
                  <div style={{ fontSize: 8.5, color: "#777" }}>+91 98765 43210</div>
                </div>
                <div style={{ background: "#f3f4f6", borderRadius: 6, padding: "4px 8px", fontSize: 13, fontWeight: 800, color: "#0B2545", letterSpacing: 1 }}>5321</div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "7px 0", borderBottom: "1px solid #f5f5f5" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#e8f8eb", border: "1.5px solid #2ebd3a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Bell size={12} color="#0B2545" />
                  </div>
                  <div style={{ width: 1.5, height: 28, background: "#e0e0e0" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 1 }}>Owner Notified</div>
                  <div style={{ fontSize: 8.5, color: "#777" }}>WhatsApp alert sent</div>
                  <div style={{ fontSize: 8.5, color: "#777" }}>instantly</div>
                </div>
                <CheckCircle size={16} color="#2ebd3a" fill="#2ebd3a" style={{ flexShrink: 0, marginTop: 4 }} />
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "7px 0" }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#e8f8eb", border: "1.5px solid #2ebd3a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={12} color="#0B2545" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 1 }}>Live Location</div>
                  <div style={{ fontSize: 8.5, color: "#777" }}>Sharing location</div>
                  <div style={{ fontSize: 8.5, color: "#777" }}>for safe return</div>
                </div>
                <div style={{ width: 42, height: 38, borderRadius: 6, background: "linear-gradient(135deg, #e8f8eb 0%, #e8f8eb 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden", position: "relative", border: "1px solid #7ded88" }}>
                  <div style={{ position: "absolute", inset: 0 }}>
                    <div style={{ position: "absolute", left: "33%", top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.5)" }} />
                    <div style={{ position: "absolute", left: "66%", top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.5)" }} />
                    <div style={{ position: "absolute", top: "33%", left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.5)" }} />
                    <div style={{ position: "absolute", top: "66%", left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.5)" }} />
                  </div>
                  <MapPin size={14} color="#c62828" fill="#c62828" />
                </div>
              </div>
            </div>

            <div style={{ margin: "6px 10px 10px", background: "linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)", borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShieldCheck size={18} color="white" />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: "white" }}>Protection Active</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.75)" }}>We've got it covered 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({ number, icon: Icon, title, description, badge, badgeIcon: BadgeIcon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "white",
        borderRadius: 20,
        padding: "28px 22px 20px",
        flex: 1,
        minWidth: 0,
        position: "relative",
        boxShadow: hovered
          ? "0 16px 48px rgba(22,101,52,0.14), 0 2px 8px rgba(0,0,0,0.07)"
          : "0 4px 20px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
        // Dotted outline using border
        border: hovered ? "2px dashed #2ebd3a" : "2px dashed #e8f8eb",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Number badge */}
      <div style={{
        position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)",
        width: 34, height: 34, borderRadius: "50%",
        background: "linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 15, fontWeight: 800, color: "white",
        boxShadow: "0 4px 12px rgba(6,78,59,0.35)",
        fontFamily: "Georgia, serif",
      }}>{number}</div>

      {/* Icon */}
      <div style={{
        width: 62, height: 62, borderRadius: "50%",
        background: "linear-gradient(135deg, #e8f8eb 0%, #f8fafc 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "10px auto 16px",
        border: "1.5px solid #7ded88",
      }}>
        <Icon size={26} color="#2ebd3a" strokeWidth={1.8} />
      </div>

      <h3 style={{
        fontSize: 16, fontWeight: 800, color: "#0B2545",
        textAlign: "center", marginBottom: 10, lineHeight: 1.3,
        fontFamily: "Georgia, serif",
      }}>{title}</h3>

      <p style={{
        fontSize: 12.5, color: "#11355e", textAlign: "center",
        lineHeight: 1.65, flex: 1, marginBottom: 14,
        opacity: 0.75,
      }}>{description}</p>

      {/* Badge */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
        background: "#e8f8eb", borderRadius: 20,
        padding: "6px 12px",
        fontSize: 11, fontWeight: 700, color: "#2ebd3a",
      }}>
        <BadgeIcon size={12} color="#2ebd3a" />
        {badge}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  const steps = [
    {
      number: "1", icon: ShoppingBag,
      title: "Order Your QR Tag",
      description: "Choose the right protection plan for your need and place your order. We deliver premium weatherproof QR tags to your doorstep within 3–5 business days.",
      badge: "Delivered across India", badgeIcon: Truck,
    },
    {
      number: "2", icon: QrCode,
      title: "Activate & Personalise",
      description: "Scan your tag to activate it, then fill in your contact details, emergency info, and any important notes. Takes less than 3 minutes — no tech skills needed.",
      badge: "Set up in 3 minutes", badgeIcon: Clock,
    },
    {
      number: "3", icon: ShieldCheck,
      title: "Stay Protected 24/7",
      description: "Attach the tag to your pet, vehicle, or valuables and you're done. Anyone who finds your item scans the code — you get a WhatsApp alert instantly.",
      badge: "Always-on protection", badgeIcon: Zap,
    },
  ];

  const stats = [
    { icon: Users, label: "Trusted by", value: "10,000+ Families" },
    { icon: () => <span style={{ fontSize: 18 }}>🇮🇳</span>, label: "Made in India", value: "Premium Quality" },
    { icon: Truck, label: "3–5 Day", value: "Fast Delivery" },
    { icon: MessageCircle, label: "24/7", value: "WhatsApp Alerts" },
    { icon: Shield, label: "Bank-level", value: "Data Security" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #f8fafc 0%, #fafcfa 50%, #f8fafc 100%)",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      overflow: "hidden",
    }}>
      {/* Dot grid background */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "radial-gradient(circle, #7ded88 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        opacity: 0.35,
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 1140, margin: "0 auto",
        padding: "52px 28px 48px",
      }}>

        {/* Top pill badge */}
        <div style={{
          display: "flex", justifyContent: "center", marginBottom: 22,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-12px)",
          transition: "all 0.5s ease",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "white",
            borderRadius: 40, padding: "7px 18px",
            fontSize: 11, fontWeight: 700, color: "#2ebd3a",
            letterSpacing: "0.08em", textTransform: "uppercase",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            border: "1px solid #7ded88",
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#2ebd3a", boxShadow: "0 0 0 3px rgba(22,101,52,0.2)" }} />
            Simple Process
          </div>
        </div>

        {/* Main content grid */}
        <div style={{
          display: "flex", alignItems: "flex-start", gap: 48,
          flexWrap: "wrap",
        }}>

          {/* LEFT — text + cards */}
          <div style={{
            flex: "1 1 520px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-24px)",
            transition: "all 0.6s ease 0.1s",
          }}>
            <h1 style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 900,
              color: "#0B2545",
              lineHeight: 1.15,
              marginBottom: 14,
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}>
              Up and Running in<br />
              <span style={{ color: "#2ebd3a" }}>3 Easy Steps</span>
            </h1>

            <p style={{
              fontSize: 15, color: "#11355e", marginBottom: 36,
              lineHeight: 1.6, maxWidth: 520, opacity: 0.7,
            }}>
              No complicated setup. No technical knowledge needed.<br />
              Just order, activate, and relax.
            </p>

            {/* Step cards with dotted connector lines between them */}
            <div style={{ position: "relative", display: "flex", gap: 16, flexWrap: "wrap" }}>
              {/* Dotted connector line between cards — only visible on wide layout */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "calc(33.33% - 8px)",
                right: "calc(33.33% - 8px)",
                height: 0,
                borderTop: "2px dashed #7ded88",
                zIndex: 0,
                pointerEvents: "none",
              }} />
              {steps.map((s, i) => (
                <StepCard key={i} {...s} />
              ))}
            </div>

            {/* CTA bar */}
            <div style={{
              marginTop: 28,
              background: "white",
              borderRadius: 18,
              padding: "18px 22px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              gap: 16, flexWrap: "wrap",
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              border: "1px solid #e8f8eb",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "#e8f8eb",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Shield size={20} color="#2ebd3a" />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#0B2545" }}>Peace of mind in 3 simple steps</div>
                  <div style={{ fontSize: 11.5, color: "#11355e", opacity: 0.6 }}>Join thousands of smart families who trust our QR protection.</div>
                </div>
              </div>
              <button style={{
                background: "linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",
                color: "white", border: "none",
                borderRadius: 12, padding: "13px 24px",
                fontSize: 13.5, fontWeight: 700,
                cursor: "pointer",
                display: "flex", alignItems: "center", gap: 8,
                boxShadow: "0 4px 16px rgba(6,78,59,0.35)",
                whiteSpace: "nowrap",
                transition: "transform 0.15s ease",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                Start Protecting Now <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT — iPhone mockup */}
          <div style={{
            flex: "0 0 auto",
            display: "flex", justifyContent: "center",
            paddingTop: 20,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(24px)",
            transition: "all 0.6s ease 0.15s",
          }}>
            <IPhoneMockup />
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          marginTop: 48,
          background: "white",
          borderRadius: 20,
          padding: "18px 28px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
          border: "1px solid #e8f8eb",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.6s ease 0.35s",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 9,
              flex: "1 1 140px",
              justifyContent: "center",
              padding: "4px 0",
              borderRight: i < stats.length - 1 ? "1px solid #e8f8eb" : "none",
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "#e8f8eb",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {typeof s.icon === "function" && s.icon.toString().includes("span")
                  ? <s.icon />
                  : <s.icon size={16} color="#2ebd3a" />
                }
              </div>
              <div>
                <div style={{ fontSize: 10, color: "#11355e", opacity: 0.6 }}>{s.label}</div>
                <div style={{ fontSize: 12.5, fontWeight: 800, color: "#0B2545" }}>{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}