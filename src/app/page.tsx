"use client";

import { useState } from "react";

/* ─── Figma Asset URLs ─── */
const assets = {
  heroBg: "https://www.figma.com/api/mcp/asset/2ce0d4d1-d3f7-4bad-a810-ba404745e009",
  enjoy400: "https://www.figma.com/api/mcp/asset/54677981-f015-4a19-970e-c774f496810f",
  card1: "https://www.figma.com/api/mcp/asset/65ebf3aa-675e-45ee-93a8-4439b338da16",
  card2: "https://www.figma.com/api/mcp/asset/b3b2395b-2b4f-46a3-9364-6f6afd1e432b",
  card3: "https://www.figma.com/api/mcp/asset/cd514986-4eee-4b98-93c4-5b88a0d053cc",
  bonus125: "https://www.figma.com/api/mcp/asset/b8edf51e-5009-4983-96f8-92f60a0d608e",
  bonus1000: "https://www.figma.com/api/mcp/asset/7df02662-9b1e-4db7-81dc-f676ec0686ae",
  bonus500: "https://www.figma.com/api/mcp/asset/5df9d6b2-dde1-4702-8b1e-bd2cc485dbb3",
  logo: "https://www.figma.com/api/mcp/asset/427330a8-4e6f-483d-a912-f3c66cb95fdd",
  searchIcon: "https://www.figma.com/api/mcp/asset/e4b30ce9-39f8-4cc8-98e3-247fc6ba64db",
  chevron: "https://www.figma.com/api/mcp/asset/f8bd1504-7e8d-4f6f-beb1-905bcc062bde",
  iconBriefcase: "https://www.figma.com/api/mcp/asset/ddae4b4f-378f-4f39-a2bf-aecf5248c630",
  iconCard: "https://www.figma.com/api/mcp/asset/8db8d255-1dc3-4bd9-8032-3b612bd014cf",
  iconCheck: "https://www.figma.com/api/mcp/asset/1f82e8e2-5e5f-465f-bc43-be2e2edd2a33",
  iconPlane: "https://www.figma.com/api/mcp/asset/30b7e34f-81ee-4406-a6f0-02a18c5a501a",
  iconPiggy: "https://www.figma.com/api/mcp/asset/09e7c9be-9ef3-465e-b8e2-38b75a7adfab",
  iconHome: "https://www.figma.com/api/mcp/asset/9e9430ac-b3ca-4f0b-8a0c-b1b9e7f5f5f5",
};

/* ─── Chevron SVGs ─── */
function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#101820" strokeWidth="2">
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

function ChevronRight({ color = "#0060f0", size = 14 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="2">
      <path d="M5 2l5 5-5 5" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005eb8" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005eb8" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE - Chase Personal Banking (from Figma)
   ═══════════════════════════════════════════════ */
export default function ChaseMirror() {
  const [activeNav, setActiveNav] = useState<number | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navLinks = [
    "Checking", "Savings & CDs", "Credit cards", "Home loans",
    "Auto", "Investing by J.P. Morgan", "Education & goals", "Travel",
  ];

  const carouselItems = [
    { label: "Business", icon: assets.iconBriefcase },
    { label: "Credit cards", icon: assets.iconCard },
    { label: "Checking", icon: assets.iconCheck },
    { label: "Travel", icon: assets.iconPlane },
    { label: "Savings", icon: assets.iconPiggy },
    { label: "Home loans", icon: assets.iconHome },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Open Sans', sans-serif" }}>

      {/* ═══ TOP UTILITY BAR ═══ */}
      <div style={{ borderBottom: "1px solid #c6c4c4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 0", display: "flex", justifyContent: "space-between", alignItems: "center", height: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <a href="#" style={{ fontSize: "13px", color: "#101820", fontWeight: 400, borderBottom: "2px solid #101820", paddingBottom: "1px" }}>
              Personal
            </a>
            <a href="#" style={{ fontSize: "13px", color: "#717171" }}>Business</a>
            <a href="#" style={{ fontSize: "13px", color: "#717171" }}>Commercial</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <a href="#" style={{ fontSize: "13px", color: "#414042" }}>Schedule a meeting</a>
            <a href="#" style={{ fontSize: "13px", color: "#414042", display: "flex", alignItems: "center", gap: "4px" }}>
              Customer service <ChevronDown />
            </a>
            <a href="#" style={{ fontSize: "13px", color: "#414042" }}>Espa&ntilde;ol</a>
            <a href="#" style={{ display: "flex" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#414042" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ═══ LOGO ROW ═══ */}
      <div style={{ borderBottom: "1px solid #c6c4c4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", height: "56px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assets.logo} alt="Chase" style={{ height: "24px" }} />
        </div>
      </div>

      {/* ═══ NAVIGATION ═══ */}
      <div style={{ borderBottom: "1px solid #c6c4c4", position: "sticky", top: 0, zIndex: 50, background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "0" }}>
            {navLinks.map((link, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveNav(i)}
                onMouseLeave={() => setActiveNav(null)}
              >
                <a
                  href="#"
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: activeNav === i ? "#0060f0" : "#101820",
                    borderBottom: activeNav === i ? "3px solid #0b6efd" : "3px solid transparent",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* ═══ HERO SECTION ═══ */}
      <section style={{ position: "relative", minHeight: "400px", overflow: "hidden" }}>
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assets.heroBg}
          alt=""
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", minHeight: "400px", paddingTop: "40px", paddingBottom: "40px" }}>
          {/* Left: Hero promo content — overlaid on the image */}
          <div style={{ flex: 1, paddingRight: "40px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assets.enjoy400}
              alt="Enjoy up to $900"
              style={{ maxWidth: "480px", width: "100%" }}
            />
          </div>

          {/* Right: Sign-in card */}
          <div style={{
            width: "340px",
            flexShrink: 0,
            background: "#fff",
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "28px 17px 24px",
          }}>
            <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#414042", marginBottom: "24px" }}>
              Welcome back
            </h2>

            {/* Username */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "14px", color: "#414042", marginBottom: "4px" }}>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: "100%",
                  border: "none",
                  borderBottom: "1px solid #8c8e90",
                  padding: "8px 0",
                  fontSize: "16px",
                  outline: "none",
                  background: "transparent",
                  fontFamily: "inherit",
                }}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "14px", color: "#414042", marginBottom: "4px" }}>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "1px solid #8c8e90",
                    padding: "8px 0",
                    fontSize: "16px",
                    outline: "none",
                    background: "transparent",
                    paddingRight: "50px",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: "absolute", right: 0, top: "8px", fontSize: "12px", fontWeight: 600, color: "#0060f0", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember me + Use token */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ width: "20px", height: "20px", accentColor: "#0060f0", cursor: "pointer" }}
                />
                <span style={{ fontSize: "12px", color: "#414042" }}>Remember me</span>
              </label>
              <a href="#" style={{ fontSize: "12px", fontWeight: 600, color: "#0060f0", display: "flex", alignItems: "center", gap: "2px" }}>
                Use token <ChevronRight size={12} />
              </a>
            </div>

            {/* Sign in button */}
            <button style={{
              width: "100%",
              background: "#0060f0",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 600,
              border: "none",
              borderRadius: "5px",
              padding: "8px 0",
              cursor: "pointer",
              marginBottom: "16px",
              fontFamily: "inherit",
            }}>
              Sign in
            </button>

            {/* Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href="#" style={{ fontSize: "12px", color: "#0060f0", display: "flex", alignItems: "center", gap: "2px" }}>
                Forgot username/password? <ChevronRight size={12} />
              </a>
              <a href="#" style={{ fontSize: "12px", color: "#0060f0", display: "flex", alignItems: "center", gap: "2px" }}>
                Not Enrolled? Sign Up Now. <ChevronRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHOOSE WHAT'S RIGHT ═══ */}
      <section style={{ padding: "32px 0 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: 700, color: "#101820", marginBottom: "0" }}>
            Choose what&apos;s right for you
          </h2>

          {/* Carousel */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", padding: "20px 0" }}>
            {carouselItems.map((item, i) => (
              <a key={i} href="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                <div style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.icon} alt={item.label} style={{ width: "48px", height: "48px" }} />
                </div>
                <span style={{ fontSize: "16px", color: "#005eb8", whiteSpace: "nowrap" }}>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Carousel dots */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", paddingBottom: "24px" }}>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}><ArrowLeft /></button>
            <div style={{ width: "17px", height: "17px", borderRadius: "50%", background: "#005eb8" }} />
            <div style={{ width: "17px", height: "17px", borderRadius: "50%", background: "#fff", border: "2px solid #005eb8" }} />
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}><ArrowRight /></button>
          </div>
        </div>
      </section>

      {/* ═══ PROMO CARDS ═══ */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Card Row 1: Three image cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", marginBottom: "0" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="#"><img src={assets.card1} alt="Get a $400 checking offer" style={{ width: "100%", borderRadius: "10px", display: "block" }} /></a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="#"><img src={assets.card2} alt="Refer friends, get rewarded" style={{ width: "100%", borderRadius: "10px", display: "block" }} /></a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="#"><img src={assets.card3} alt="That's up to $900 just for you" style={{ width: "100%", borderRadius: "10px", display: "block" }} /></a>
          </div>

          {/* Feature 1: $125 Bonus */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px", padding: "36px 0", borderBottom: "1px solid #e0e0e0" }}>
            <div style={{ width: "500px", flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.bonus125} alt="$125 bonus" style={{ width: "100%", borderRadius: "10px" }} />
            </div>
            <div>
              <h3 style={{ fontSize: "28px", fontWeight: 600, color: "#414042", marginBottom: "12px" }}>
                Start your money journey today
              </h3>
              <p style={{ fontSize: "16px", color: "#414042", lineHeight: 1.5, marginBottom: "20px" }}>
                As a new Chase checking customer, get $125 when you open a Chase Secure Banking&#8480; account with qualifying transactions. Plus, $0 Monthly Service Fee for customers age 17&ndash;24.
              </p>
              <a href="#" style={{
                display: "inline-block",
                background: "#128842",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 400,
                padding: "6px 16px",
                borderRadius: "4px",
                textDecoration: "none",
              }}>
                Open now
              </a>
            </div>
          </div>

          {/* Feature 2: $1,000 Cash Bonus */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px", padding: "36px 0", borderBottom: "1px solid #e0e0e0", flexDirection: "row-reverse" }}>
            <div style={{ width: "500px", flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.bonus1000} alt="Earn up to $1,000 cash bonus" style={{ width: "100%", borderRadius: "10px" }} />
            </div>
            <div>
              <h3 style={{ fontSize: "28px", fontWeight: 600, color: "#414042", marginBottom: "12px" }}>
                Commission-free online trades &ndash; plus a bonus
              </h3>
              <p style={{ fontSize: "16px", color: "#414042", lineHeight: 1.5, marginBottom: "20px" }}>
                This is an invitation to get up to $1,000 when you open and fund a J.P. Morgan Self-Directed Investing account&mdash;an investing experience that puts you in control.
              </p>
              <a href="#" style={{
                display: "inline-block",
                background: "#128842",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 400,
                padding: "6px 16px",
                borderRadius: "4px",
                textDecoration: "none",
              }}>
                Continue
              </a>
            </div>
          </div>

          {/* Feature 3: $500 Business */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px", padding: "36px 0" }}>
            <div style={{ width: "500px", flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.bonus500} alt="Earn up to $500" style={{ width: "100%", borderRadius: "10px" }} />
            </div>
            <div>
              <h3 style={{ fontSize: "28px", fontWeight: 600, color: "#414042", marginBottom: "12px" }}>
                Keep your business moving forward with Chase
              </h3>
              <p style={{ fontSize: "16px", color: "#414042", lineHeight: 1.5, marginBottom: "20px" }}>
                Open a new Chase Business Complete Checking<sup>&reg;</sup> account with qualifying activities. For new business checking customers only.
              </p>
              <a href="#" style={{
                display: "inline-block",
                background: "#128842",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 400,
                padding: "6px 16px",
                borderRadius: "4px",
                textDecoration: "none",
              }}>
                Open account
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: "#fff", borderTop: "1px solid #c6c4c4", marginTop: "40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "48px" }}>
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assets.logo} alt="Chase" style={{ height: "24px", marginBottom: "32px" }} />

          {/* Footer columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "24px", marginBottom: "40px" }}>
            {[
              { title: "Checking Accounts", text: "Choose the checking account that works best for you. See our Chase Total Checking\u00AE offer for new customers." },
              { title: "Savings Accounts & CDs", text: "It's never too early to begin saving. Open a savings account or open a Certificate of Deposit." },
              { title: "Credit Cards", text: "Chase credit cards can help you buy the things you need. Many of our cards offer rewards that can be redeemed for cash back or travel-related perks." },
              { title: "Mortgages", text: "Apply for a mortgage or refinance your mortgage with Chase. View today's mortgage rates or calculate what you can afford." },
            ].map((col, i) => (
              <div key={i}>
                <h4 style={{ fontSize: "12px", fontWeight: 600, color: "#101820", marginBottom: "8px" }}>{col.title}</h4>
                <div style={{ width: "40px", height: "2px", background: "#676c6f", marginBottom: "12px" }} />
                <p style={{ fontSize: "12px", color: "#414042", lineHeight: 1.5 }}>{col.text}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "24px", marginBottom: "40px" }}>
            {[
              { title: "Auto", text: "Chase Auto is here to help you get the right car. Apply for auto financing for a new or used car." },
              { title: "Chase for Business", text: "With Chase for Business you'll receive guidance from a team of business professionals who specialize in helping improve cash flow." },
              { title: "Sports & Entertainment", text: "Chase gives you access to unique sports, entertainment and culinary events through Chase Experiences." },
              { title: "Chase Security Center", text: "Our suite of security features can help you protect your info, money and give you peace of mind." },
            ].map((col, i) => (
              <div key={i}>
                <h4 style={{ fontSize: "12px", fontWeight: 600, color: "#101820", marginBottom: "8px" }}>{col.title}</h4>
                <div style={{ width: "40px", height: "2px", background: "#676c6f", marginBottom: "12px" }} />
                <p style={{ fontSize: "12px", color: "#414042", lineHeight: 1.5 }}>{col.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div style={{ borderTop: "1px solid #c6c4c4", padding: "16px 0 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "24px" }}>
            <p style={{ fontSize: "12px", color: "#414042", lineHeight: 1.5, flex: 1 }}>
              &ldquo;Chase,&rdquo; &ldquo;JPMorgan,&rdquo; &ldquo;JPMorgan Chase,&rdquo; the JPMorgan Chase logo and the Octagon Symbol are trademarks of JPMorgan Chase Bank, N.A. JPMorgan Chase Bank, N.A. is a wholly-owned subsidiary of JPMorgan Chase &amp; Co.
            </p>
            <p style={{ fontSize: "12px", color: "#414042", lineHeight: 1.5, flex: 1 }}>
              Bank deposit accounts, such as checking and savings, may be subject to approval. Deposit products and related services are offered by JPMorgan Chase Bank, N.A. Member FDIC.
            </p>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", fontSize: "12px", marginBottom: "8px" }}>
                {["J.P. Morgan", "JPMorganChase", "Media Center", "Careers", "Site Map"].map((link, i) => (
                  <a key={i} href="#" style={{ color: "#0060f0", fontSize: "12px" }}>{link}</a>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", fontSize: "12px", marginBottom: "8px" }}>
                {["Privacy", "Security", "Terms of Use", "Accessibility", "AdChoices"].map((link, i) => (
                  <a key={i} href="#" style={{ color: "#0060f0", fontSize: "12px" }}>{link}</a>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", fontSize: "12px" }}>
                <a href="#" style={{ color: "#0060f0", fontSize: "12px" }}>Give feedback</a>
                <span style={{ color: "#414042", fontSize: "12px" }}>Member FDIC</span>
                <span style={{ color: "#414042", fontSize: "12px" }}>Equal Housing Opportunity</span>
              </div>
            </div>
          </div>
          <div style={{ maxWidth: "1200px", margin: "12px auto 0" }}>
            <p style={{ fontSize: "12px", color: "#414042" }}>&copy; 2026 JPMorgan Chase &amp; Co.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
