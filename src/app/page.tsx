"use client";

import { useState } from "react";

/* ───────── Chase Logo (SVG octagon) ───────── */
function ChaseLogo({ size = 36, color = "#0060a9" }: { size?: number; color?: string }) {
  const unit = size / 4;
  const gap = 1.5;
  const r = 1.5;
  const pieces = [
    { x: 0, y: unit + gap, w: unit * 2 - gap, h: unit - gap },
    { x: unit + gap, y: 0, w: unit - gap, h: unit * 2 - gap },
    { x: unit * 2 + gap, y: unit + gap, w: unit * 2 - gap, h: unit - gap },
    { x: unit + gap, y: unit * 2 + gap, w: unit - gap, h: unit * 2 - gap },
  ];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {pieces.map((p, i) => (
        <rect key={i} x={p.x} y={p.y} width={p.w} height={p.h} rx={r} fill={color} />
      ))}
    </svg>
  );
}

/* ───────── Icons (simple SVG) ───────── */
function CreditCardIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0060a9" strokeWidth="1.5">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 14h4" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0060a9" strokeWidth="1.5">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M8 10v11M12 10v11M16 10v11M20 10v11" />
    </svg>
  );
}

function SavingsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0060a9" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12M8 10h8M8 14h8" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0060a9" strokeWidth="1.5">
      <path d="M5 17h14M5 17a2 2 0 01-2-2V9a2 2 0 012-2h1l2-3h8l2 3h1a2 2 0 012 2v6a2 2 0 01-2 2" />
      <circle cx="7.5" cy="17" r="1.5" />
      <circle cx="16.5" cy="17" r="1.5" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0060a9" strokeWidth="1.5">
      <path d="M3 12l9-9 9 9" />
      <path d="M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
    </svg>
  );
}

function InvestIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0060a9" strokeWidth="1.5">
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
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

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ───────── NAV DATA ───────── */
const navItems = [
  {
    label: "Credit Cards",
    links: [
      "Explore All Credit Cards",
      "Chase Sapphire",
      "Chase Freedom",
      "Chase Slate",
      "Ink Business Cards",
      "Disney Visa Cards",
      "Amazon Rewards Cards",
      "Marriott Bonvoy",
      "Southwest Airlines",
      "United Airlines",
      "IHG One Rewards",
    ],
  },
  {
    label: "Checking",
    links: [
      "Compare Checking Accounts",
      "Chase Total Checking",
      "Chase Secure Banking",
      "Chase Premier Plus Checking",
      "Chase Sapphire Checking",
      "Chase College Checking",
      "Chase First Banking",
    ],
  },
  {
    label: "Savings & CDs",
    links: [
      "Chase Savings",
      "Chase Premier Savings",
      "Certificates of Deposit",
      "Savings Calculator",
    ],
  },
  {
    label: "Home Lending",
    links: [
      "Buy a Home",
      "Refinance",
      "Home Equity",
      "Mortgage Rates",
      "Mortgage Calculator",
      "Affordable Lending Options",
    ],
  },
  {
    label: "Auto",
    links: ["Finance a Car", "Refinance a Car", "Manage My Auto Loan"],
  },
  {
    label: "Investing",
    links: [
      "J.P. Morgan Self-Directed Investing",
      "J.P. Morgan Personal Advisors",
      "J.P. Morgan Wealth Plan",
      "Retirement",
      "529 College Savings",
    ],
  },
  {
    label: "Business Banking",
    links: [
      "Business Checking",
      "Business Credit Cards",
      "Business Line of Credit",
      "Business Lending",
      "Chase for Business",
    ],
  },
];

/* ───────── PRODUCT CARDS DATA ───────── */
const productCards = [
  {
    icon: <CreditCardIcon />,
    title: "Credit Cards",
    description: "Find the right card for your spending habits. Earn rewards, cash back, and travel benefits.",
    cta: "Compare credit cards",
    highlight: "Earn up to 5% cash back",
  },
  {
    icon: <BankIcon />,
    title: "Checking Accounts",
    description: "Manage your money with ease. Access 15,000+ ATMs and 4,700+ branches nationwide.",
    cta: "Open an account",
    highlight: "No minimum deposit to open",
  },
  {
    icon: <SavingsIcon />,
    title: "Savings",
    description: "Grow your savings and earn competitive rates on CDs and savings accounts.",
    cta: "Start saving",
    highlight: "Earn 4.00% APY on CDs",
  },
  {
    icon: <HomeIcon />,
    title: "Home Lending",
    description: "Whether buying or refinancing, find the mortgage that fits your needs.",
    cta: "Explore mortgages",
    highlight: "See today's rates",
  },
  {
    icon: <CarIcon />,
    title: "Auto Loans",
    description: "Finance or refinance your vehicle with competitive rates and flexible terms.",
    cta: "Get started",
    highlight: "Quick pre-qualification",
  },
  {
    icon: <InvestIcon />,
    title: "Investing by J.P. Morgan",
    description: "Build your financial future with self-directed investing or expert guidance.",
    cta: "Start investing",
    highlight: "$0 commission trades",
  },
];

/* ───────── FOOTER DATA ───────── */
const footerSections = [
  {
    title: "About Chase",
    links: ["About Us", "Careers", "Diversity & Inclusion", "Media Center", "Sustainability"],
  },
  {
    title: "Products & Services",
    links: ["Credit Cards", "Checking Accounts", "Savings Accounts", "Mortgages", "Auto Financing", "Investing"],
  },
  {
    title: "Resources",
    links: ["Account Security", "Privacy & Security", "Report Fraud", "ATM & Branch Locator", "Contact Us"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Use", "Accessibility", "Site Map", "AdChoices"],
  },
];

/* ═══════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════ */
export default function ChaseMirror() {
  const [activeNav, setActiveNav] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const tabs = ["For You", "Credit Cards", "Checking", "Savings & CDs", "Lending", "Investing"];

  return (
    <div className="min-h-screen flex flex-col">
      {/* ─── UTILITY BAR ─── */}
      <div className="utility-bar">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xs">Personal</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xs font-semibold border-b border-gray-600">Business</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xs">Commercial</a>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xs flex items-center gap-1">
              <SearchIcon /> Search
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xs">Espa&ntilde;ol</a>
          </div>
        </div>
      </div>

      {/* ─── MAIN HEADER ─── */}
      <header className="main-header">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 py-3">
            <ChaseLogo size={36} />
            <span className="text-xl font-bold" style={{ color: "#0060a9" }}>Chase</span>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item, i) => (
              <div
                key={i}
                className="nav-group relative"
                onMouseEnter={() => setActiveNav(i)}
                onMouseLeave={() => setActiveNav(null)}
              >
                <a href="#" className={`nav-item flex items-center gap-1 ${activeNav === i ? "active" : ""}`}>
                  {item.label} <ChevronDown />
                </a>
                {activeNav === i && (
                  <div className="mega-menu" style={{ display: "block", left: "-200px", width: "600px" }}>
                    <div className="grid grid-cols-2 gap-3">
                      {item.links.map((link, j) => (
                        <a
                          key={j}
                          href="#"
                          className="text-sm text-gray-700 hover:text-blue-700 py-1.5 px-2 rounded hover:bg-blue-50 transition-colors"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Sign In */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Username"
                className="sign-in-input"
                style={{ width: "130px" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="sign-in-input"
                style={{ width: "130px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn-primary flex items-center gap-1.5 text-sm py-2.5 px-5">
              <LockIcon /> Sign in
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
              {showMobileMenu ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 space-y-4">
              <div className="flex gap-2 mb-4">
                <input type="text" placeholder="Username" className="sign-in-input flex-1" />
                <input type="password" placeholder="Password" className="sign-in-input flex-1" />
                <button className="btn-primary text-sm py-2 px-4">Sign in</button>
              </div>
              {navItems.map((item, i) => (
                <div key={i}>
                  <a href="#" className="block py-2 font-semibold text-gray-800">{item.label}</a>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ─── HERO SECTION ─── */}
      <section className="hero-section flex items-center relative">
        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
          <div className="max-w-lg py-16">
            <p className="text-blue-200 text-sm font-semibold tracking-wider uppercase mb-3">
              Limited-time offer
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
              Chase Sapphire Preferred<sup>&reg;</sup> Card
            </h1>
            <p className="text-blue-100 text-lg mb-2">
              Earn 60,000 bonus points after you spend $4,000 on purchases in the first 3 months from account opening.
            </p>
            <p className="text-blue-200 text-sm mb-8">
              That&apos;s $750 toward travel when you redeem through Chase Travel.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="btn-white">Learn more</a>
              <a href="#" className="btn-secondary" style={{ borderColor: "white", color: "white" }}>
                Apply now
              </a>
            </div>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)" }}
          />
          <div
            className="absolute right-[100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
          />
        </div>
      </section>

      {/* ─── PROMOTIONAL BANNER ─── */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="promo-banner">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-full p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Chase was awarded &ldquo;Best National Bank&rdquo; by Bankrate for 2024-2025</p>
                <p className="text-blue-200 text-sm">Recognized for outstanding products, competitive rates, and nationwide availability</p>
              </div>
            </div>
            <a href="#" className="text-white font-semibold text-sm whitespace-nowrap flex items-center gap-1 hover:underline">
              Learn more <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT TABS & CARDS ─── */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-heading">Explore Products</h2>
            <p className="section-subheading">Find the right account or card for your financial needs</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center border-b border-gray-200 mb-10 overflow-x-auto">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`tab-button ${activeTab === i ? "active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCards.map((card, i) => (
              <div key={i} className="product-card flex flex-col">
                <div className="product-icon bg-blue-50">{card.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-3 flex-1">{card.description}</p>
                {card.highlight && (
                  <p className="text-sm font-semibold text-green-700 mb-4">
                    {card.highlight}
                  </p>
                )}
                <a href="#" className="text-sm font-semibold flex items-center gap-1" style={{ color: "#0060a9" }}>
                  {card.cta} <ArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHASE SECTION ─── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Chase?</h2>
            <p className="section-subheading">America&apos;s largest bank with a commitment to serving you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "4,700+", label: "Branches nationwide", desc: "Bank in person at a location near you" },
              { number: "15,000+", label: "Chase ATMs", desc: "Convenient access to your cash coast-to-coast" },
              { number: "#1", label: "Most visited banking portal", desc: "Trusted digital experience for millions" },
              { number: "24/7", label: "Customer support", desc: "We're here whenever you need us" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold mb-2" style={{ color: "#0060a9" }}>{stat.number}</p>
                <p className="font-semibold text-gray-900 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED OFFERS ─── */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="section-heading mb-8">Featured Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Offer 1 */}
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="h-48 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1a3c5e, #0060a9)" }}>
                <div className="text-center text-white px-6">
                  <p className="text-sm uppercase tracking-wider mb-2 text-blue-200">Chase Total Checking</p>
                  <p className="text-3xl font-bold">$300</p>
                  <p className="text-sm text-blue-200">New account bonus</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Open a Chase Total Checking account</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Enjoy a $300 bonus when you open a new Chase Total Checking account and set up direct deposit within 90 days.
                </p>
                <a href="#" className="btn-primary inline-block text-sm">Open an account</a>
              </div>
            </div>
            {/* Offer 2 */}
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="h-48 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0a2540, #1a8fe3)" }}>
                <div className="text-center text-white px-6">
                  <p className="text-sm uppercase tracking-wider mb-2 text-blue-200">Chase Savings</p>
                  <p className="text-3xl font-bold">$200</p>
                  <p className="text-sm text-blue-200">New savings bonus</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Grow your money with Chase Savings</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Earn a $200 bonus when you open a new Chase Savings account with qualifying activities within 90 days.
                </p>
                <a href="#" className="btn-primary inline-block text-sm">Start saving</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MOBILE APP BANNER ─── */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0a2540, #0060a9)" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-8">
            <div className="max-w-lg">
              <h2 className="text-white text-3xl font-bold mb-4">
                Bank from almost anywhere with the Chase Mobile app
              </h2>
              <p className="text-blue-200 mb-6">
                Manage your accounts, deposit checks, transfer money, pay bills, and more — all from your phone.
              </p>
              <div className="flex gap-4">
                <a href="#" className="btn-white text-sm">Download on the App Store</a>
                <a href="#" className="btn-white text-sm">Get it on Google Play</a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-48 h-96 bg-white/10 rounded-3xl border-2 border-white/20 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" />
                  </svg>
                  <p className="text-xs mt-2">Chase Mobile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECURITY SECTION ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0060a9" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
            <h2 className="section-heading">Your security is our priority</h2>
            <p className="text-gray-600 mt-4 mb-6">
              We use advanced security measures to protect your accounts, including real-time fraud monitoring,
              two-factor authentication, and zero liability protection.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#" className="btn-secondary text-sm">Learn about security</a>
              <a href="#" className="btn-secondary text-sm">Report suspicious activity</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer flex-shrink-0">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Footer top */}
          <div className="flex items-center gap-3 mb-10">
            <ChaseLogo size={28} color="#ffffff" />
            <span className="text-white font-bold text-lg">Chase</span>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {footerSections.map((section, i) => (
              <div key={i}>
                <h4 className="footer-heading">{section.title}</h4>
                <div className="flex flex-col gap-2.5">
                  {section.links.map((link, j) => (
                    <a key={j} href="#">{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-6 mb-8">
            {["Facebook", "Twitter", "Instagram", "YouTube", "LinkedIn"].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-white text-sm">
                {social}
              </a>
            ))}
          </div>

          {/* Footer bottom */}
          <div className="footer-bottom">
            <div className="flex flex-wrap gap-4 mb-4">
              <a href="#" className="text-xs">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-xs">Terms of Use</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-xs">Accessibility</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-xs">CCPA / Do Not Sell My Info</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-xs">AdChoices</a>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 mb-4">
              <span>JPMorgan Chase Bank, N.A. Member FDIC</span>
              <span>Equal Housing Lender</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              &copy; 2025 JPMorgan Chase &amp; Co. All rights reserved. &ldquo;Chase&rdquo;, &ldquo;JPMorgan&rdquo;,
              &ldquo;JPMorgan Chase&rdquo;, the JPMorgan Chase logo and the Octagon Symbol are trademarks of JPMorgan
              Chase Bank, N.A. JPMorgan Chase Bank, N.A. is a wholly-owned subsidiary of JPMorgan Chase &amp; Co.
            </p>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              Deposit products provided by JPMorgan Chase Bank, N.A. Member FDIC.
              Equal Opportunity Lender.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
