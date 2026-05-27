import { useState } from "react";

import bike1img from "../../assets/bike1.png";
import carimg from "../../assets/car1.png";
import petimg from "../../assets/dog.png";
import luggageimg from "../../assets/luggage1.png";
import seniorimg from "../../assets/senior.png";
import kidimg from "../../assets/kid.png"; // Fixed typo here (changed '=' to 'from')

import {
  Car,
  Bike,
  PawPrint,
  Package,
  UserRound,
  Baby,
  Plus,
  Minus,
  ShoppingCart,
  CloudRain,
  Bell,
  MapPin,
  ShieldCheck,
  Shield,
  Lock,
  Link2,
  Heart,
  Navigation,
  Phone,
  Info,
  Layers,
  Plane,
  ScanLine,
  Star,
  Zap,
  Award,
  Truck,
  RefreshCw,
  Headphones,
} from "lucide-react";

/* ─────────────────────────────────────────
   THEMES (Updated to exact brand specs)
───────────────────────────────────────── */
const THEMES = {
  green: {
    accent: "#2ebd3a",
    gradient: "linear-gradient(135deg, #2ebd3a, #0B2545)",
    soft: "#f8fafc",
    border: "#cbd5e1",
    active: "#2ebd3a",
  },
  orange: {
    accent: "#ea580c",
    gradient: "linear-gradient(135deg, #ea580c, #c2410c)",
    soft: "#fff7ed",
    border: "#cbd5e1",
    active: "#ea580c",
  },
  purple: {
    accent: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    soft: "#faf5ff",
    border: "#cbd5e1",
    active: "#7c3aed",
  },
  red: {
    accent: "#dc2626",
    gradient: "linear-gradient(135deg, #dc2626, #b91c1c)",
    soft: "#fef2f2",
    border: "#cbd5e1",
    active: "#dc2626",
  },
  blue: {
    accent: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    soft: "#eff6ff",
    border: "#cbd5e1",
    active: "#2563eb",
  },
};

/* ─────────────────────────────────────────
   PRODUCTS DATA
───────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "car",
    icon: Car,
    image: carimg,
    title: "Car Protection",
    subtitle: "Vehicle Security",
    desc: "Weatherproof QR protection for cars with instant emergency alerts and GPS tracking.",
    features: [
      { label: "Weatherproof", icon: CloudRain },
      { label: "Live Alerts", icon: Bell },
      { label: "GPS Tracking", icon: MapPin },
      { label: "24/7 Monitor", icon: ShieldCheck },
    ],
    price: 499,
    original: 999,
    discount: "50% OFF",
    color: "green",
    rating: 4.9,
    reviews: 2341,
  },
  {
    id: "bike",
    icon: Bike,
    image: bike1img,
    title: "Bike Security",
    subtitle: "Two Wheeler Shield",
    desc: "Scratch resistant QR protection with owner privacy and instant finder alerts.",
    features: [
      { label: "Scratch Resistant", icon: Shield },
      { label: "Instant Notify", icon: Bell },
      { label: "Owner Privacy", icon: Lock },
      { label: "Quick Connect", icon: Link2 },
    ],
    price: 499,
    original: 999,
    discount: "50% OFF",
    color: "green",
    popular: true,
    rating: 4.8,
    reviews: 3892,
  },
  {
    id: "pet",
    icon: PawPrint,
    image: petimg,
    title: "Pet Safety Tag",
    subtitle: "Pet Guardian",
    desc: "Smart pet QR with collar support, emergency contact and GPS location sharing.",
    features: [
      { label: "Collar Friendly", icon: Heart },
      { label: "GPS Location", icon: Navigation },
      { label: "Emergency Contact", icon: Phone },
      { label: "Vet Info", icon: Info },
    ],
    price: 499,
    original: 999,
    discount: "50% OFF",
    color: "orange",
    rating: 4.9,
    reviews: 1876,
  },
  {
    id: "luggage",
    icon: Package,
    image: luggageimg,
    title: "Luggage Guard",
    subtitle: "Travel Protection",
    desc: "Strong adhesive QR luggage tags for fast recovery and secure travel support.",
    features: [
      { label: "Multi Luggage", icon: Layers },
      { label: "Strong Adhesive", icon: Shield },
      { label: "Travel Friendly", icon: Plane },
      { label: "Quick Recovery", icon: ScanLine },
    ],
    price: 499,
    original: 999,
    discount: "50% OFF",
    color: "purple",
    rating: 4.7,
    reviews: 1243,
  },
  {
    id: "senior",
    icon: UserRound,
    image: seniorimg,
    title: "Senior Safety",
    subtitle: "Emergency Wrist Band",
    desc: "Senior citizen wrist QR support with medical info and emergency family alerts.",
    features: [
      { label: "Medical Info", icon: Shield },
      { label: "Emergency Alerts", icon: Bell },
      { label: "Family Contact", icon: Phone },
      { label: "Live Tracking", icon: MapPin },
    ],
    price: 699,
    original: 1299,
    discount: "46% OFF",
    color: "red",
    rating: 4.9,
    reviews: 987,
  },
  {
    id: "child",
    icon: Baby,
    image: kidimg,
    title: "Child Safety",
    subtitle: "Kids Guardian",
    desc: "Child QR safety patch with emergency contact and quick scan protection.",
    features: [
      { label: "QR Patch", icon: Shield },
      { label: "Emergency Alert", icon: Bell },
      { label: "Parental Contact", icon: Phone },
      { label: "Quick Scan", icon: ScanLine },
    ],
    price: 699,
    original: 1299,
    discount: "46% OFF",
    color: "blue",
    rating: 5.0,
    reviews: 2108,
  },
];

/* ─────────────────────────────────────────
   TRUST SECTION DATA
───────────────────────────────────────── */
const TRUST = [
  { icon: ShieldCheck, title: "Secure Checkout", sub: "100% Safe & Encrypted", color: "#2ebd3a" },
  { icon: Truck, title: "Free Shipping", sub: "Pan India Delivery", color: "#2563eb" },
  { icon: RefreshCw, title: "30-Day Returns", sub: "Easy Refund Policy", color: "#7c3aed" },
  { icon: Headphones, title: "24/7 Support", sub: "Always Here To Help", color: "#ea580c" },
];

/* ─────────────────────────────────────────
   PRODUCT CARD COMPONENT (Compact Layout)
───────────────────────────────────────── */
function ProductCard({ product }) {
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(false);

  const t = THEMES[product.color];
  const Icon = product.icon;

  return (
    <div
      onClick={() => setActive(!active)}
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "visible",
        border: active ? `2px solid ${t.active}` : `1px solid #cbd5e1`,
        boxShadow: active ? "0 12px 28px rgba(0,0,0,0.08)" : "0 4px 16px rgba(0,0,0,0.03)",
        position: "relative",
        cursor: "pointer",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: active ? "translateY(-4px)" : "translateY(0px)",
        padding: "20px 16px 16px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* POPULAR BADGE */}
      {product.popular && (
        <div
          style={{
            position: "absolute",
            top: -12,
            left: 20,
            background: t.gradient,
            color: "#fff",
            fontSize: 10,
            fontWeight: 800,
            padding: "4px 12px",
            borderRadius: 20,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            gap: 4,
            letterSpacing: "0.5px",
          }}
        >
          <Zap size={10} fill="#fff" />
          MOST POPULAR
        </div>
      )}

      {/* TOP HEADER ROW */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          {/* ICON EMBLEM */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: t.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon color="#fff" size={20} />
          </div>

          {/* RATING & REVIEWS */}
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700 }}>
            <Star size={12} fill="#f59e0b" color="#f59e0b" />
            <span style={{ color: "#0B2545" }}>{product.rating}</span>
            <span style={{ color: "#9ca3af", fontWeight: 400 }}>
              | {product.reviews.toLocaleString()} reviews
            </span>
          </div>
        </div>

        {/* HEADINGS */}
        <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0B2545", margin: "0 0 2px 0" }}>
          {product.title}
        </h3>
        <p style={{ color: t.accent, fontWeight: 700, fontSize: 12, margin: "0 0 12px 0" }}>
          {product.subtitle}
        </p>

        {/* MIDDLE SECTION: IMAGE LEFT, SPECS RIGHT */}
        <div style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 12, alignItems: "start", marginBottom: 14 }}>
          {/* PRODUCT VISUAL ASSET */}
          <div
            style={{
              background: "#f8fafc",
              borderRadius: 14,
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 8,
              border: "1px solid #f1f5f9",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>

          {/* DESCRIPTION & DETAILED FEATURES */}
          <div>
            <p style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.5, margin: "0 0 10px 0" }}>
              {product.desc}
            </p>

            {/* FEATURES GRID */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
              {product.features.map(({ label, icon: FIcon }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <FIcon size={13} color={t.accent} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 11, fontWeight: 500, color: "#374151" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER: PRICING & ACTIONS */}
      <div>
        {/* PRICING TAGS */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
          <span style={{ fontSize: 24, fontWeight: 900, color: t.accent }}>
            ₹{product.price}
          </span>
          <span style={{ textDecoration: "line-through", color: "#9ca3af", fontSize: 14, fontWeight: 500 }}>
            ₹{product.original}
          </span>
          <span style={{ color: t.accent, fontSize: 11, fontWeight: 700, marginLeft: "auto", background: t.soft, padding: "2px 8px", borderRadius: 12 }}>
            {product.discount}
          </span>
        </div>

        {/* CTA ROW */}
        <div style={{ display: "flex", gap: 8 }}>
          {/* QUANTITY CONTROL BAR */}
          <div style={{ display: "flex", alignItems: "center", border: "1px solid #e2e8f0", borderRadius: 10, overflow: "hidden", height: 36 }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQty((q) => Math.max(1, q - 1));
              }}
              style={qtyBtnStyle}
            >
              <Minus size={12} />
            </button>
            <div style={{ width: 28, textAlign: "center", fontWeight: 700, fontSize: 13, color: "#0B2545" }}>
              {qty}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQty((q) => q + 1);
              }}
              style={qtyBtnStyle}
            >
              <Plus size={12} />
            </button>
          </div>

          {/* CHECKOUT BUTTON */}
          <button
            onClick={(e) => e.stopPropagation()}
            style={{
              flex: 1,
              height: 36,
              border: "none",
              borderRadius: 10,
              background: t.gradient,
              color: "#fff",
              fontWeight: 700,
              fontSize: 13,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              cursor: "pointer",
            }}
          >
            <ShoppingCart size={13} />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

const qtyBtnStyle = {
  width: 32,
  height: "100%",
  border: "none",
  background: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#6b7280",
};

/* ─────────────────────────────────────────
   MAIN HERO SECTION COMPONENT
───────────────────────────────────────── */
export default function Products() {
  return (
    <section
      style={{
        padding: "60px 0",
        background: "linear-gradient(180deg, #f4fbf7 0%, #ffffff 100%)",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
      `}</style>

      <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        
        {/* TOP ACCENTS & HEADERS */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#fff",
              border: "1px solid #e8f8eb",
              borderRadius: 30,
              padding: "6px 16px",
              marginBottom: 16,
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
            }}
          >
            <Award size={14} color="#2ebd3a" />
            <span style={{ fontWeight: 800, fontSize: 11, color: "#0B2545", letterSpacing: "0.5px" }}>
              OUR PRODUCTS
            </span>
          </div>

          <h2 style={{ fontSize: 44, lineHeight: 1.1, fontWeight: 900, marginBottom: 12, color: "#0B2545", letterSpacing: "-1px" }}>
            Choose Your <span style={{ color: "#2ebd3a" }}>Protection Plan</span>
          </h2>

          <p style={{ maxWidth: 640, margin: "0 auto", color: "#4b5563", lineHeight: 1.6, fontSize: 15 }}>
            Smart QR solutions for vehicles, pets, luggage, children and senior citizens with instant emergency communication and recovery support.
          </p>
        </div>

        {/* HIGH-DENSITY COMPACT PRODUCT GRID (3x2 Desktop Layout) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 24,
            marginBottom: 44,
          }}
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* BOTTOM ACCREDITATION / TRUST SECTION */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
            border: "1px solid #f1f5f9",
          }}
        >
          {TRUST.map(({ icon: Icon, title, sub, color }) => (
            <div key={title} style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={20} color={color} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 14, color: "#0B2545" }}>{title}</div>
                <div style={{ color: "#6b7280", fontSize: 12 }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}