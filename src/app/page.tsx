"use client";

import { useState } from "react";

/* ─── Icon Components (matching Figma exactly) ─── */
function ChevronDown() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6l4 4 4-4" /></svg>;
}
function ChevronRight({ color = "#0060f0", size = 14 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="2"><path d="M5 2l5 5-5 5" /></svg>;
}
function ArrowLeft() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005eb8" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>;
}
function ArrowRightIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005eb8" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>;
}
function SearchIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#414042" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
}

/* Chase Logo SVG */
function ChaseLogo() {
  return (
    <svg width="126" height="24" viewBox="0 0 126 24">
      <text x="0" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="24" fontWeight="800" letterSpacing="2" fill="#101820">CHASE</text>
      <g transform="translate(102, 2)">
        <rect x="0" y="7" width="8" height="3.5" rx="0.5" fill="#0060f0" />
        <rect x="7" y="0" width="3.5" height="8" rx="0.5" fill="#0060f0" />
        <rect x="10.5" y="7" width="8" height="3.5" rx="0.5" fill="#0060f0" />
        <rect x="7" y="10.5" width="3.5" height="8" rx="0.5" fill="#0060f0" />
      </g>
    </svg>
  );
}

/* Carousel Icons — matching Figma screenshots */
function BriefcaseIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#414042" strokeWidth="1.5">
      <rect x="6" y="16" width="36" height="24" rx="2" />
      <path d="M16 16V12a4 4 0 014-4h8a4 4 0 014 4v4" />
      <line x1="6" y1="28" x2="42" y2="28" />
    </svg>
  );
}
function CreditCardIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#414042" strokeWidth="1.5">
      <rect x="4" y="12" width="40" height="24" rx="2" />
      <line x1="4" y1="20" x2="44" y2="20" />
      <rect x="8" y="28" width="12" height="3" rx="1" />
    </svg>
  );
}
function CheckingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#414042" strokeWidth="1.5">
      <rect x="8" y="8" width="32" height="24" rx="2" />
      <line x1="8" y1="16" x2="40" y2="16" />
      <rect x="8" y="36" width="32" height="4" rx="1" />
      <line x1="14" y1="38" x2="34" y2="38" />
    </svg>
  );
}
function PlaneIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#414042" strokeWidth="1.5">
      <path d="M24 6L8 20h10v14h12V20h10L24 6z" />
      <path d="M20 34v8h8v-8" />
    </svg>
  );
}
function PiggyIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#414042" strokeWidth="1.5">
      <ellipse cx="24" cy="26" rx="14" ry="12" />
      <path d="M18 14c2-4 8-4 10 0" />
      <circle cx="19" cy="24" r="1.5" fill="#414042" />
      <path d="M38 22c3 0 4 2 4 4" />
      <path d="M16 38l-2 6M32 38l2 6" />
      <path d="M26 30a3 3 0 01-4 0" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#414042" strokeWidth="1.5">
      <path d="M6 24L24 8L42 24" />
      <path d="M10 22V40H20V30H28V40H38V22" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════ */
export default function ChaseMirror() {
  const [activeNav, setActiveNav] = useState<number | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navLinks = ["Checking", "Savings & CDs", "Credit cards", "Home loans", "Auto", "Investing by J.P. Morgan", "Education & goals", "Travel"];

  const carouselItems = [
    { label: "Business", icon: <BriefcaseIcon /> },
    { label: "Credit cards", icon: <CreditCardIcon /> },
    { label: "Checking", icon: <CheckingIcon /> },
    { label: "Travel", icon: <PlaneIcon /> },
    { label: "Savings", icon: <PiggyIcon /> },
    { label: "Home loans", icon: <HomeIcon /> },
  ];

  const cx = { maxWidth: "1200px", margin: "0 auto", padding: "0" } as const;

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", color: "#101820", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* ═══ UTILITY BAR ═══ */}
      <div style={{ borderBottom: "1px solid #c6c4c4" }}>
        <div style={{ ...cx, display: "flex", justifyContent: "space-between", alignItems: "center", height: "40px" }}>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <a href="#" style={{ fontSize: "13px", color: "#101820", borderBottom: "2px solid #101820", paddingBottom: "2px", textDecoration: "none" }}>Personal</a>
            <a href="#" style={{ fontSize: "13px", color: "#717171", textDecoration: "none" }}>Business</a>
            <a href="#" style={{ fontSize: "13px", color: "#717171", textDecoration: "none" }}>Commercial</a>
          </div>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <a href="#" style={{ fontSize: "13px", color: "#414042", textDecoration: "none" }}>Schedule a meeting</a>
            <a href="#" style={{ fontSize: "13px", color: "#414042", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>Customer service <ChevronDown /></a>
            <a href="#" style={{ fontSize: "13px", color: "#414042", textDecoration: "none" }}>Espa&ntilde;ol</a>
            <a href="#" style={{ display: "flex" }}><SearchIcon /></a>
          </div>
        </div>
      </div>

      {/* ═══ LOGO ═══ */}
      <div style={{ borderBottom: "1px solid #c6c4c4" }}>
        <div style={{ ...cx, display: "flex", alignItems: "center", height: "56px" }}>
          <ChaseLogo />
        </div>
      </div>

      {/* ═══ NAV ═══ */}
      <div style={{ borderBottom: "1px solid #c6c4c4", position: "sticky", top: 0, zIndex: 50, background: "#fff" }}>
        <div style={cx}>
          <nav style={{ display: "flex" }}>
            {navLinks.map((link, i) => (
              <div key={i} onMouseEnter={() => setActiveNav(i)} onMouseLeave={() => setActiveNav(null)}>
                <a href="#" style={{
                  display: "block", padding: "12px 16px", fontSize: "14px", color: activeNav === i ? "#0060f0" : "#101820",
                  borderBottom: activeNav === i ? "3px solid #0b6efd" : "3px solid transparent", whiteSpace: "nowrap", textDecoration: "none",
                }}>{link}</a>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* ═══ HERO ═══ */}
      <section style={{
        background: "linear-gradient(135deg, #001d3d 0%, #003566 20%, #0060a9 45%, #1a8fe3 70%, #5fb8f0 85%, #7ecbf5 95%, #a8ddf8 100%)",
        minHeight: "400px", position: "relative", overflow: "hidden",
      }}>
        {/* Decorative light streaks */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "100%", background: "linear-gradient(120deg, transparent 0%, rgba(100,180,240,0.15) 30%, rgba(150,210,255,0.2) 50%, rgba(100,180,240,0.1) 70%, transparent 100%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "20%", right: "10%", width: "40%", height: "60%", background: "radial-gradient(ellipse, rgba(150,210,255,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ ...cx, display: "flex", alignItems: "flex-start", position: "relative", zIndex: 1, minHeight: "400px", paddingTop: "50px", paddingBottom: "50px" }}>
          {/* Hero content */}
          <div style={{ flex: 1, paddingRight: "60px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "32px" }}>
              <div>
                <p style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginBottom: "4px" }}>Enjoy</p>
                <p style={{ color: "#fff", fontSize: "96px", fontWeight: 300, lineHeight: 0.9, letterSpacing: "-3px" }}>$400</p>
              </div>
              <div style={{ paddingTop: "8px" }}>
                <h1 style={{ color: "#fff", fontSize: "28px", fontWeight: 700, lineHeight: 1.2, marginBottom: "12px" }}>
                  New Chase checking<br />customers
                </h1>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                  Open a Chase Total Checking<sup>&reg;</sup> account with qualifying activities.
                </p>
                <a href="#" style={{
                  display: "inline-block", background: "#128842", color: "#fff", fontSize: "14px", fontWeight: 600,
                  padding: "8px 20px", borderRadius: "4px", textDecoration: "none",
                }}>Open an account</a>
              </div>
            </div>
          </div>

          {/* Sign-in card */}
          <div style={{
            width: "340px", flexShrink: 0, background: "#fff", borderRadius: "5px",
            border: "1px solid #ccc", padding: "28px 20px 24px",
          }}>
            <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#414042", marginBottom: "24px" }}>Welcome back</h2>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "14px", color: "#414042", marginBottom: "4px" }}>Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{
                width: "100%", border: "none", borderBottom: "1px solid #8c8e90", padding: "8px 0", fontSize: "16px",
                outline: "none", background: "transparent", fontFamily: "inherit",
              }} />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "14px", color: "#414042", marginBottom: "4px" }}>Password</label>
              <div style={{ position: "relative" }}>
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} style={{
                  width: "100%", border: "none", borderBottom: "1px solid #8c8e90", padding: "8px 0", fontSize: "16px",
                  outline: "none", background: "transparent", paddingRight: "50px", fontFamily: "inherit",
                }} />
                <button onClick={() => setShowPassword(!showPassword)} style={{
                  position: "absolute", right: 0, top: "8px", fontSize: "13px", fontWeight: 600,
                  color: "#0060f0", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit",
                }}>{showPassword ? "Hide" : "Show"}</button>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ width: "18px", height: "18px", accentColor: "#0060f0" }} />
                <span style={{ fontSize: "13px", color: "#414042" }}>Remember me</span>
              </label>
              <a href="#" style={{ fontSize: "13px", fontWeight: 600, color: "#0060f0", display: "flex", alignItems: "center", gap: "2px", textDecoration: "none" }}>
                Use token <ChevronRight size={12} />
              </a>
            </div>

            <button style={{
              width: "100%", background: "#0060f0", color: "#fff", fontSize: "16px", fontWeight: 600,
              border: "none", borderRadius: "5px", padding: "10px 0", cursor: "pointer", marginBottom: "16px", fontFamily: "inherit",
            }}>Sign in</button>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href="#" style={{ fontSize: "13px", color: "#0060f0", display: "flex", alignItems: "center", gap: "2px", textDecoration: "none" }}>
                Forgot username/password? <ChevronRight size={12} />
              </a>
              <a href="#" style={{ fontSize: "13px", color: "#0060f0", display: "flex", alignItems: "center", gap: "2px", textDecoration: "none" }}>
                Not Enrolled? Sign Up Now. <ChevronRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AGENTIC BANKING SECTION ═══ */}
      <section style={{
        background: "linear-gradient(135deg, #001d3d 0%, #003566 30%, #0060a9 60%, #1a8fe3 100%)",
        padding: "60px 0",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle light overlay */}
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          background: "radial-gradient(ellipse at 70% 50%, rgba(150,210,255,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div style={{ ...cx, position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 style={{
            color: "#fff", fontSize: "36px", fontWeight: 700, marginBottom: "8px", letterSpacing: "-0.5px",
          }}>
            Start Seamless Banking Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", marginBottom: "32px" }}>
            Powered by intelligent assistance to help you bank smarter
          </p>
          <div style={{
            maxWidth: "640px", margin: "0 auto",
          }}>
            <div style={{
              background: "#fff", borderRadius: "12px", padding: "6px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              display: "flex", flexDirection: "column", gap: "0",
            }}>
              <textarea
                placeholder="What are you looking for today?"
                rows={3}
                style={{
                  width: "100%", border: "none", outline: "none", resize: "none",
                  fontSize: "16px", color: "#101820", padding: "16px 18px 12px",
                  fontFamily: "'Open Sans', sans-serif", borderRadius: "12px 12px 0 0",
                  background: "transparent",
                }}
              />
              <div style={{ display: "flex", justifyContent: "flex-end", padding: "0 12px 12px" }}>
                <button style={{
                  background: "#0060f0", color: "#fff", border: "none", borderRadius: "8px",
                  padding: "10px 32px", fontSize: "15px", fontWeight: 600,
                  cursor: "pointer", fontFamily: "'Open Sans', sans-serif",
                  transition: "background 0.2s",
                }}>
                  Explore
                </button>
              </div>
            </div>
            <div style={{
              display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px", flexWrap: "wrap",
            }}>
              {["Open a checking account", "Compare credit cards", "Mortgage rates", "Start investing"].map((suggestion, i) => (
                <button key={i} style={{
                  background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "20px", padding: "8px 18px", color: "#fff", fontSize: "13px",
                  cursor: "pointer", fontFamily: "'Open Sans', sans-serif",
                  backdropFilter: "blur(4px)", transition: "background 0.2s",
                }}>
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHOOSE WHAT'S RIGHT ═══ */}
      <section style={{ padding: "32px 0 0" }}>
        <div style={cx}>
          <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: 700, marginBottom: "24px" }}>
            Choose what&apos;s right for you
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "72px", padding: "8px 0 16px" }}>
            {carouselItems.map((item, i) => (
              <a key={i} href="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                {item.icon}
                <span style={{ fontSize: "16px", color: "#005eb8" }}>{item.label}</span>
              </a>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", paddingBottom: "28px" }}>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}><ArrowLeft /></button>
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#005eb8" }} />
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#fff", border: "2px solid #005eb8" }} />
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}><ArrowRightIcon /></button>
          </div>
        </div>
      </section>

      {/* ═══ 3 PROMO CARDS ═══ */}
      <section>
        <div style={{ ...cx, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", paddingBottom: "20px" }}>
          {[
            { topBg: "linear-gradient(135deg, #001d3d, #0060a9, #1a8fe3)", topLabel: "Get a $400\nchecking offer", icon: "card", title: "Chase Total Checking\u00AE", desc: "New checking customers receive a $400 bonus offer when you open Chase Total Checking and complete qualifying activities.", btn: "Open an account", btnBg: "#128842" },
            { topBg: "linear-gradient(135deg, #003566, #0060f0)", topLabel: "Plus, earn\nup to $500", icon: "people", title: "Refer friends, get rewarded", desc: "Existing eligible Chase checking customers earn $50 per friend who opens a qualifying account, up to $500 each year.", btn: "Learn more", btnBg: "#0060f0" },
            { topBg: "linear-gradient(135deg, #001d3d, #003566, #0060a9)", topLabel: "That's up to\n$900 just for you", icon: "target", title: "Get $400 + Earn up to $500", desc: "Join Chase Total Checking\u00AE & get $400 w/ qual. activities and get up to $500 by referring friends who open a qual. account.", btn: "Learn more", btnBg: "#0060f0" },
          ].map((card, i) => (
            <div key={i} style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e0e0e0", background: "#fff" }}>
              {/* Top colored section */}
              <div style={{ background: card.topBg, padding: "24px", minHeight: "120px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <p style={{ color: "#fff", fontSize: "18px", fontWeight: 700, whiteSpace: "pre-line", lineHeight: 1.3 }}>{card.topLabel}</p>
                <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    {card.icon === "card" && <><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></>}
                    {card.icon === "people" && <><circle cx="9" cy="7" r="4" /><path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" /><circle cx="19" cy="7" r="3" /><path d="M22 21v-2a3 3 0 00-3-3" /></>}
                    {card.icon === "target" && <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>}
                  </svg>
                </div>
              </div>
              {/* Bottom white section */}
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#101820", marginBottom: "12px" }}>{card.title}</h3>
                <p style={{ fontSize: "14px", color: "#414042", lineHeight: 1.6, marginBottom: "20px" }}>{card.desc}</p>
                <a href="#" style={{
                  display: "inline-block", background: card.btnBg, color: "#fff", fontSize: "14px", fontWeight: 600,
                  padding: "8px 24px", borderRadius: "4px", textDecoration: "none",
                }}>{card.btn}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURE SECTIONS ═══ */}
      <section>
        <div style={cx}>
          {/* Feature 1 */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px", padding: "36px 0", borderTop: "1px solid #e0e0e0" }}>
            <div style={{ width: "500px", height: "313px", flexShrink: 0, borderRadius: "10px", overflow: "hidden", position: "relative", background: "#0060f0" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <p style={{ color: "#fff", fontSize: "64px", fontWeight: 800, lineHeight: 1 }}>$125</p>
                  <p style={{ color: "#fff", fontSize: "32px", fontWeight: 800, letterSpacing: "4px" }}>BONUS</p>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: "28px", fontWeight: 600, color: "#414042", marginBottom: "12px" }}>Start your money journey today</h3>
              <p style={{ fontSize: "16px", color: "#414042", lineHeight: 1.6, marginBottom: "20px" }}>
                As a new Chase checking customer, get $125 when you open a Chase Secure Banking&#8480; account with qualifying transactions. Plus, <strong>$0 Monthly Service Fee for customers age 17&ndash;24.</strong>
              </p>
              <a href="#" style={{ display: "inline-block", background: "#128842", color: "#fff", fontSize: "14px", padding: "6px 16px", borderRadius: "4px", textDecoration: "none" }}>Open now</a>
            </div>
          </div>

          {/* Feature 2 */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px", padding: "36px 0", borderTop: "1px solid #e0e0e0", flexDirection: "row-reverse" }}>
            <div style={{ width: "500px", height: "313px", flexShrink: 0, borderRadius: "10px", overflow: "hidden", background: "linear-gradient(135deg, #0060a9, #001d3d)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", marginBottom: "8px" }}>Earn up to</p>
                <p style={{ color: "#fff", fontSize: "48px", fontWeight: 700, lineHeight: 1 }}>$1,000</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginTop: "8px" }}>cash bonus</p>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: "28px", fontWeight: 600, color: "#414042", marginBottom: "12px" }}>Commission-free online trades &ndash; plus a bonus</h3>
              <p style={{ fontSize: "16px", color: "#414042", lineHeight: 1.6, marginBottom: "20px" }}>
                This is an invitation to get up to $1,000 when you open and fund a J.P. Morgan Self-Directed Investing account&mdash;an investing experience that puts you in control.
              </p>
              <a href="#" style={{ display: "inline-block", background: "#128842", color: "#fff", fontSize: "14px", padding: "6px 16px", borderRadius: "4px", textDecoration: "none" }}>Continue</a>
            </div>
          </div>

          {/* Feature 3 */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px", padding: "36px 0", borderTop: "1px solid #e0e0e0" }}>
            <div style={{ width: "500px", height: "313px", flexShrink: 0, borderRadius: "10px", overflow: "hidden", background: "linear-gradient(135deg, #003566, #0060f0)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", marginBottom: "8px" }}>Earn up to</p>
                <p style={{ color: "#fff", fontSize: "48px", fontWeight: 700, lineHeight: 1 }}>$500</p>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: "28px", fontWeight: 600, color: "#414042", marginBottom: "12px" }}>Keep your business moving forward with Chase</h3>
              <p style={{ fontSize: "16px", color: "#414042", lineHeight: 1.6, marginBottom: "20px" }}>
                Open a new Chase Business Complete Checking<sup>&reg;</sup> account with qualifying activities. For new business checking customers only.
              </p>
              <a href="#" style={{ display: "inline-block", background: "#128842", color: "#fff", fontSize: "14px", padding: "6px 16px", borderRadius: "4px", textDecoration: "none" }}>Open account</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ borderTop: "1px solid #c6c4c4", marginTop: "20px" }}>
        <div style={{ ...cx, paddingTop: "48px" }}>
          <div style={{ marginBottom: "32px" }}><ChaseLogo /></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "24px", marginBottom: "32px" }}>
            {[
              { t: "Checking Accounts", d: "Choose the checking account that works best for you. See our Chase Total Checking\u00AE offer for new customers. Make purchases with your debit card, and bank from almost anywhere." },
              { t: "Savings Accounts & CDs", d: "It's never too early to begin saving. Open a savings account or open a Certificate of Deposit and start saving your money." },
              { t: "Credit Cards", d: "Chase credit cards can help you buy the things you need. Many of our cards offer rewards that can be redeemed for cash back or travel-related perks." },
              { t: "Mortgages", d: "Apply for a mortgage or refinance your mortgage with Chase. View today's mortgage rates or calculate what you can afford with our mortgage calculator." },
            ].map((c, i) => (
              <div key={i}>
                <h4 style={{ fontSize: "12px", fontWeight: 600, marginBottom: "8px" }}>{c.t}</h4>
                <div style={{ width: "40px", height: "2px", background: "#676c6f", marginBottom: "12px" }} />
                <p style={{ fontSize: "12px", color: "#414042", lineHeight: 1.5 }}>{c.d}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "24px", marginBottom: "32px" }}>
            {[
              { t: "Auto", d: "Chase Auto is here to help you get the right car. Apply for auto financing for a new or used car with Chase." },
              { t: "Chase for Business", d: "With Chase for Business you'll receive guidance from a team of business professionals who specialize in helping improve cash flow." },
              { t: "Sports & Entertainment", d: "Chase gives you access to unique sports, entertainment and culinary events through Chase Experiences." },
              { t: "Chase Security Center", d: "Our suite of security features can help you protect your info, money and give you peace of mind." },
            ].map((c, i) => (
              <div key={i}>
                <h4 style={{ fontSize: "12px", fontWeight: 600, marginBottom: "8px" }}>{c.t}</h4>
                <div style={{ width: "40px", height: "2px", background: "#676c6f", marginBottom: "12px" }} />
                <p style={{ fontSize: "12px", color: "#414042", lineHeight: 1.5 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #c6c4c4", padding: "16px 0 24px" }}>
          <div style={{ ...cx, display: "flex", gap: "24px" }}>
            <p style={{ fontSize: "11px", color: "#414042", lineHeight: 1.5, flex: 1 }}>
              &ldquo;Chase,&rdquo; &ldquo;JPMorgan,&rdquo; &ldquo;JPMorgan Chase,&rdquo; the JPMorgan Chase logo and the Octagon Symbol are trademarks of JPMorgan Chase Bank, N.A.
            </p>
            <p style={{ fontSize: "11px", color: "#414042", lineHeight: 1.5, flex: 1 }}>
              Deposit products and related services are offered by JPMorgan Chase Bank, N.A. Member FDIC.
            </p>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", fontSize: "11px", marginBottom: "6px" }}>
                {["J.P. Morgan", "JPMorganChase", "Media Center", "Careers", "Site Map"].map((l, i) => (
                  <a key={i} href="#" style={{ color: "#0060f0", fontSize: "11px", textDecoration: "none" }}>{l}</a>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", fontSize: "11px", marginBottom: "6px" }}>
                {["Privacy", "Security", "Terms of Use", "Accessibility", "AdChoices"].map((l, i) => (
                  <a key={i} href="#" style={{ color: "#0060f0", fontSize: "11px", textDecoration: "none" }}>{l}</a>
                ))}
              </div>
              <div style={{ display: "flex", gap: "14px", fontSize: "11px" }}>
                <a href="#" style={{ color: "#0060f0", fontSize: "11px", textDecoration: "none" }}>Give feedback</a>
                <span style={{ color: "#414042" }}>Member FDIC</span>
                <span style={{ color: "#414042" }}>Equal Housing Opportunity</span>
              </div>
            </div>
          </div>
          <div style={{ ...cx, marginTop: "12px" }}>
            <p style={{ fontSize: "11px", color: "#414042" }}>&copy; 2026 JPMorgan Chase &amp; Co.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
