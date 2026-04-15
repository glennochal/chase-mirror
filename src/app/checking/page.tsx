'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

/* Chase Logo matching home page */
function ChaseLogo({ fill = '#101820' }: { fill?: string }) {
  return (
    <svg width="160" height="28" viewBox="0 0 160 28" fill="none">
      <text x="0" y="22" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="26" fontWeight="800" letterSpacing="3" fill={fill}>CHASE</text>
      <g transform="translate(120, 2)">
        <path d="M12 0h7.5a2 2 0 012 2v7.5h-2V2h-7.5V0z" fill="#0060f0"/>
        <path d="M23.5 12v7.5a2 2 0 01-2 2H14v-2h7.5V12h2z" fill="#0060f0"/>
        <path d="M12 23.5H4.5a2 2 0 01-2-2V14h2v7.5H12v2z" fill="#0060f0"/>
        <path d="M0.5 12V4.5a2 2 0 012-2H10v2H2.5V12h-2z" fill="#0060f0"/>
      </g>
    </svg>
  );
}

export default function CheckingPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');
  const [query, setQuery] = useState('');

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", color: '#101820' }}>
      {/* UTILITY BAR */}
      <div
        style={{
          height: '36px',
          borderBottom: '1px solid #c6c4c4',
          backgroundColor: '#fff',
          fontSize: '12px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Personal</span>
            <span>Business</span>
            <span>Commercial</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span>Schedule a meeting</span>
            <span>Customer service</span>
            <span>Español</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#101820"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>
      </div>

      {/* CHASE LOGO BAR */}
      <div
        style={{
          height: '60px',
          backgroundColor: '#fff',
          borderBottom: '1px solid #c6c4c4',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ChaseLogo />
        </div>
      </div>

      {/* NAV BAR - STICKY */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: '#fff',
          borderBottom: '1px solid #c6c4c4',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            gap: '28px',
            height: '48px',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              borderBottom: '3px solid #0060f0',
              paddingBottom: '12px',
              color: '#0060f0',
              fontWeight: '600',
              fontSize: '14px',
              whiteSpace: 'nowrap',
            }}
          >
            Checking
          </span>
          <span style={{ fontSize: '14px', color: '#414042', whiteSpace: 'nowrap' }}>Savings & CDs</span>
          <span style={{ fontSize: '14px', color: '#414042', whiteSpace: 'nowrap' }}>Credit cards</span>
          <span style={{ fontSize: '14px', color: '#414042', whiteSpace: 'nowrap' }}>Home loans</span>
          <span style={{ fontSize: '14px', color: '#414042', whiteSpace: 'nowrap' }}>Auto</span>
          <span style={{ fontSize: '14px', color: '#414042', whiteSpace: 'nowrap' }}>Investing by J.P. Morgan</span>
          <span style={{ fontSize: '14px', color: '#414042', whiteSpace: 'nowrap' }}>Education & goals</span>
          <span style={{ fontSize: '14px', color: '#414042', whiteSpace: 'nowrap' }}>Travel</span>
        </div>
      </div>

      {/* ═══ AGENTIC BANKING SECTION ═══ */}
      <section style={{
        background: 'linear-gradient(135deg, #001d3d 0%, #003566 30%, #0060a9 60%, #1a8fe3 100%)',
        padding: '48px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(ellipse at 70% 50%, rgba(150,210,255,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{
            color: '#fff', fontSize: '32px', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.5px',
          }}>
            Start Seamless Banking Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', marginBottom: '28px' }}>
            Powered by intelligent assistance to help you bank smarter
          </p>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div style={{
              background: '#fff', borderRadius: '12px', padding: '6px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              display: 'flex', flexDirection: 'column',
            }}>
              <textarea
                placeholder="What are you looking for today?"
                rows={3}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey && query.trim()) { e.preventDefault(); router.push(`/explore?q=${encodeURIComponent(query.trim())}`); } }}
                style={{
                  width: '100%', border: 'none', outline: 'none', resize: 'none',
                  fontSize: '16px', color: '#101820', padding: '16px 18px 12px',
                  fontFamily: "'Open Sans', sans-serif", borderRadius: '12px 12px 0 0',
                  background: 'transparent',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 12px 12px' }}>
                <button
                  onClick={() => { if (query.trim()) router.push(`/explore?q=${encodeURIComponent(query.trim())}`); }}
                  style={{
                    background: '#0060f0', color: '#fff', border: 'none', borderRadius: '8px',
                    padding: '10px 32px', fontSize: '15px', fontWeight: 600,
                    cursor: 'pointer', fontFamily: "'Open Sans', sans-serif",
                  }}>
                  Explore
                </button>
              </div>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '16px', flexWrap: 'wrap',
            }}>
              {['Open a checking account', 'Compare credit cards', 'Mortgage rates', 'Start investing'].map((suggestion, i) => (
                <button key={i} onClick={() => { if (suggestion === 'Open a checking account') { /* already here */ } else { router.push(`/explore?q=${encodeURIComponent(suggestion)}`); } }} style={{
                  background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '20px', padding: '8px 18px', color: '#fff', fontSize: '13px',
                  cursor: 'pointer', fontFamily: "'Open Sans', sans-serif",
                  backdropFilter: 'blur(4px)',
                }}>
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '36px 20px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        {/* LEFT SIDE - BONUS GRAPHIC */}
        <div style={{
          position: 'relative',
          height: '220px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Blue card background */}
          <div style={{
            width: '320px',
            height: '200px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #0047b3 0%, #0060f0 50%, #3d8bf5 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0,96,240,0.25)',
            overflow: 'hidden',
          }}>
            {/* Decorative circles */}
            <div style={{
              position: 'absolute', top: '-30px', right: '-30px',
              width: '120px', height: '120px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
            }} />
            <div style={{
              position: 'absolute', bottom: '-20px', left: '-20px',
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
            }} />
            {/* Content */}
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <p style={{
                color: '#fff', fontSize: '72px', fontWeight: 800,
                lineHeight: 1, letterSpacing: '-2px', margin: 0,
              }}>$125</p>
              <p style={{
                color: 'rgba(255,255,255,0.9)', fontSize: '24px', fontWeight: 700,
                letterSpacing: '6px', margin: '4px 0 0',
              }}>BONUS</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - TEXT CONTENT */}
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.3' }}>
            Start your money journey today
          </h1>
          <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '30px', color: '#414042' }}>
            As a new Chase checking customer, get{' '}
            <span style={{ fontWeight: '700' }}>
              $125 when you open a Chase Secure Banking℠ account with qualifying transactions
            </span>
            . Plus,{' '}
            <span style={{ fontWeight: '700' }}>
              $0 Monthly Service Fee for customers age 17-24
            </span>
            .
          </p>
          <button
            style={{
              backgroundColor: '#128842',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 32px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            Open now
          </button>
        </div>
      </div>

      {/* TAB SECTION */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '32px auto 0',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <p style={{ fontSize: '15px', marginBottom: '20px', color: '#414042' }}>
          Choose the checking accounts for:
        </p>

        <div style={{ display: 'flex', gap: '40px', borderBottom: '1px solid #c6c4c4' }}>
          {['all', 'students', 'premium'].map((tab) => {
            const tabLabels: { [key: string]: string } = {
              all: 'All',
              students: 'Students & Kids',
              premium: 'Premium',
            };

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: '16px 0',
                  fontSize: '15px',
                  fontWeight: activeTab === tab ? '600' : '400',
                  color: activeTab === tab ? '#0060f0' : '#414042',
                  borderBottom: activeTab === tab ? '3px solid #0060f0' : 'none',
                  cursor: 'pointer',
                  fontFamily: "'Open Sans', sans-serif",
                  marginBottom: '-1px',
                }}
              >
                {tabLabels[tab]}
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB CONTENT */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 20px' }}>
        {/* ALL TAB */}
        {activeTab === 'all' && (
          <div>
            {/* Main Account Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '30px',
                marginBottom: '48px',
              }}
            >
              {/* Card 1: Chase Total Checking */}
              <div
                style={{
                  border: '1px solid #c6c4c4',
                  borderRadius: '8px',
                  padding: '24px',
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>
                  Chase Total Checking®
                </h3>
                <p style={{ fontSize: '14px', color: '#414042', marginBottom: '16px' }}>
                  Our most popular checking account with the banking essentials.
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    marginBottom: '20px',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#414042',
                  }}
                >
                  <li style={{ marginBottom: '8px' }}>• Comes with Chase Overdraft Assist℠</li>
                  <li>• Ability to write checks and wire money</li>
                </ul>
                <p style={{ fontSize: '12px', color: '#414042', marginBottom: '8px' }}>
                  Monthly Service Fee
                </p>
                <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>$15 or $0</p>
                <p style={{ fontSize: '14px', marginBottom: '24px' }}>
                  <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                    Avoid fee
                  </a>
                </p>
                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#128842',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: "'Open Sans', sans-serif",
                    marginBottom: '12px',
                  }}
                >
                  Open now
                </button>
                <p style={{ fontSize: '14px', textAlign: 'center' }}>
                  <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                    Account details
                  </a>
                </p>
              </div>

              {/* Card 2: Chase Secure Banking */}
              <div
                style={{
                  border: '1px solid #c6c4c4',
                  borderRadius: '8px',
                  padding: '24px',
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>
                  Chase Secure Banking℠
                </h3>
                <p style={{ fontSize: '14px', color: '#414042', marginBottom: '16px' }}>
                  A simple checking account with no overdraft fees.
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    marginBottom: '20px',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#414042',
                  }}
                >
                  <li style={{ marginBottom: '8px' }}>
                    • Direct deposits up to two business days early
                  </li>
                  <li>• $0 Monthly Service Fee for account owners who are 17-24 years old</li>
                </ul>
                <p style={{ fontSize: '12px', color: '#414042', marginBottom: '8px' }}>
                  Monthly Service Fee
                </p>
                <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>$4.95 or $0</p>
                <p style={{ fontSize: '14px', marginBottom: '24px' }}>
                  <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                    Avoid fee
                  </a>
                </p>
                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#128842',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: "'Open Sans', sans-serif",
                    marginBottom: '12px',
                  }}
                >
                  Open now
                </button>
                <p style={{ fontSize: '14px', textAlign: 'center' }}>
                  <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                    Account details
                  </a>
                </p>
              </div>

              {/* Card 3: Chase Premier Plus Checking */}
              <div
                style={{
                  border: '1px solid #c6c4c4',
                  borderRadius: '8px',
                  padding: '24px',
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>
                  Chase Premier Plus Checking℠
                </h3>
                <p style={{ fontSize: '14px', color: '#414042', marginBottom: '16px' }}>
                  Keep more of your money for your financial goals
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    marginBottom: '20px',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#414042',
                  }}
                >
                  <li style={{ marginBottom: '8px' }}>
                    • No Chase fees on ATMs across the globe, no foreign exchange rate adjustment fees,
                    and more
                  </li>
                  <li>
                    • Perks for military members with $0 Monthly Service Fee and no minimum deposit
                    required
                  </li>
                </ul>
                <p style={{ fontSize: '12px', color: '#414042', marginBottom: '8px' }}>
                  Monthly Service Fee
                </p>
                <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>$25 or $0</p>
                <p style={{ fontSize: '14px', marginBottom: '24px' }}>
                  <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                    Avoid fee
                  </a>
                </p>
                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#128842',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: "'Open Sans', sans-serif",
                    marginBottom: '12px',
                  }}
                >
                  Open now
                </button>
                <p style={{ fontSize: '14px', textAlign: 'center' }}>
                  <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                    Account details
                  </a>
                </p>
              </div>
            </div>

            {/* STUDENTS & KIDS SECTION */}
            <div style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#f0f0f0" stroke="#0060f0" strokeWidth="2" />
                  <path
                    d="M20 12L28 18L26 28H14L12 18L20 12Z"
                    fill="#0060f0"
                  />
                  <line x1="20" y1="22" x2="20" y2="28" stroke="#fff" strokeWidth="1.5" />
                  <line x1="16" y1="25" x2="24" y2="25" stroke="#fff" strokeWidth="1.5" />
                </svg>
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>Students & Kids</h2>
                  <p style={{ fontSize: '13px', color: '#414042', margin: '4px 0 0 0' }}>
                    Accounts subject to approval
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                {/* Chase High School Checking */}
                <div
                  style={{
                    border: '1px solid #c6c4c4',
                    borderRadius: '8px',
                    padding: '24px',
                  }}
                >
                  <p style={{ fontSize: '14px', color: '#414042', marginBottom: '16px' }}>
                    Parent co-owned for teens ages 13 to 17. Must be opened in branch.
                  </p>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      marginBottom: '20px',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: '#414042',
                    }}
                  >
                    <li style={{ marginBottom: '8px' }}>
                      • A checking account with tools for teens, in partnership with parents
                    </li>
                    <li>• Access to Zelle® and direct deposit</li>
                  </ul>
                  <p style={{ fontSize: '12px', color: '#414042', marginBottom: '8px' }}>
                    Monthly Service Fee
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>$0</p>
                  <p style={{ fontSize: '13px', marginBottom: '24px' }}>
                    <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                      Qualifying activities
                    </a>
                  </p>
                  <button
                    style={{
                      width: '100%',
                      backgroundColor: '#128842',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '12px 16px',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontFamily: "'Open Sans', sans-serif",
                      marginBottom: '12px',
                    }}
                  >
                    Schedule a meeting
                  </button>
                  <p style={{ fontSize: '14px', textAlign: 'center' }}>
                    <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                      Account details
                    </a>
                  </p>
                </div>

                {/* Chase First Banking */}
                <div
                  style={{
                    border: '1px solid #c6c4c4',
                    borderRadius: '8px',
                    padding: '24px',
                  }}
                >
                  <p style={{ fontSize: '14px', color: '#414042', marginBottom: '16px' }}>
                    Parent-owned and designed with kids ages 6-12 in mind and available for kids 6-17
                    years old.
                  </p>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      marginBottom: '20px',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: '#414042',
                    }}
                  >
                    <li style={{ marginBottom: '8px' }}>
                      • A debit card for kids with oversight by parents
                    </li>
                    <li>
                      • Gives kids tools, tips and safety features to help them learn money basics
                    </li>
                  </ul>
                  <p style={{ fontSize: '12px', color: '#414042', marginBottom: '8px' }}>
                    Monthly Service Fee
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>$0</p>
                  <p style={{ fontSize: '13px', marginBottom: '24px' }}>
                    <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                      Requires eligible account to open
                    </a>
                  </p>
                  <button
                    style={{
                      width: '100%',
                      backgroundColor: '#128842',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '12px 16px',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontFamily: "'Open Sans', sans-serif",
                      marginBottom: '12px',
                    }}
                  >
                    Open now
                  </button>
                  <p style={{ fontSize: '14px', textAlign: 'center' }}>
                    <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                      Account details
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* PREMIUM SECTION */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#f0f0f0" stroke="#0060f0" strokeWidth="2" />
                  <path
                    d="M20 10L26 16L20 22L14 16Z"
                    fill="#0060f0"
                  />
                  <path
                    d="M20 18L26 24L20 30L14 24Z"
                    fill="#0060f0"
                    opacity="0.6"
                  />
                </svg>
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>Premium</h2>
                  <p style={{ fontSize: '13px', color: '#414042', margin: '4px 0 0 0' }}>
                    Accounts subject to approval
                  </p>
                </div>
              </div>

              <div style={{ maxWidth: '400px' }}>
                <div
                  style={{
                    border: '1px solid #c6c4c4',
                    borderRadius: '8px',
                    padding: '24px',
                  }}
                >
                  <p style={{ fontSize: '14px', color: '#414042', marginBottom: '16px' }}>
                    Dedicated banker support and investing guidance from J.P. Morgan Wealth Management.
                  </p>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      marginBottom: '20px',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: '#414042',
                    }}
                  >
                    <li style={{ marginBottom: '8px' }}>• Higher limits on everyday transactions</li>
                    <li>• No ATM fees worldwide plus 24/7 priority service line</li>
                  </ul>
                  <p style={{ fontSize: '12px', color: '#414042', marginBottom: '8px' }}>
                    Monthly Service Fee
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>$35 or $0</p>
                  <p style={{ fontSize: '14px', marginBottom: '24px' }}>
                    <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                      Avoid fee
                    </a>
                  </p>
                  <button
                    style={{
                      width: '100%',
                      backgroundColor: '#128842',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '12px 16px',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontFamily: "'Open Sans', sans-serif",
                      marginBottom: '12px',
                    }}
                  >
                    Schedule a meeting
                  </button>
                  <p style={{ fontSize: '14px', textAlign: 'center' }}>
                    <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                      Account details
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STUDENTS & KIDS TAB */}
        {activeTab === 'students' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" fill="#f0f0f0" stroke="#0060f0" strokeWidth="2" />
                <path
                  d="M20 12L28 18L26 28H14L12 18L20 12Z"
                  fill="#0060f0"
                />
                <line x1="20" y1="22" x2="20" y2="28" stroke="#fff" strokeWidth="1.5" />
                <line x1="16" y1="25" x2="24" y2="25" stroke="#fff" strokeWidth="1.5" />
              </svg>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>Students & Kids</h2>
                <p style={{ fontSize: '13px', color: '#414042', margin: '4px 0 0 0' }}>
                  Accounts subject to approval
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              {/* Chase High School Checking */}
              <div
                style={{
                  border: '1px solid #c6c4c4',
                  borderRadius: '8px',
                  padding: '24px',
                }}
              >
                <p style={{ fontSize: '14px', color: '#414042', marginBottom: '16px' }}>
                  Parent co-owned for teens ages 13 to 17. Must be opened in branch.
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    marginBottom: '20px',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#414042',
                  }}
                >
                  <li style={{ marginBottom: '8px' }}>
                    • A checking account with tools for teens, in partnership with parents
                  </li>
                  <li>• Access to Zelle® and direct deposit</li>
                </ul>
                <p style={{ fontSize: '12px', color: '#414042', marginBottom: '8px' }}>
                  Monthly Service Fee
                </p>
                <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>$0</p>
                <p style={{ fontSize: '13px', marginBottom: '24px' }}>
                  <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                    Qualifying activities
                  </a>
                </p>
                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#128842',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: "'Open Sans', sans-serif",
                    marginBottom: '12px',
                  }}
                >
                  Schedule a meeting
                </button>
                <p style={{ fontSize: '14px', textAlign: 'center' }}>
                  <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                    Account details
                  </a>
                </p>
              </div>

              {/* Chase First Banking */}
              <div
                style={{
                  border: '1px solid #c6c4c4',
                  borderRadius: '8px',
                  padding: '24px',
                }}
              >
                <p style={{ fontSize: '14px', color: '#414042', marginBottom: '16px' }}>
                  Parent-owned and designed with kids ages 6-12 in mind and available for kids 6-17
                  years old.
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    marginBottom: '20px',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#414042',
                  }}
                >
                  <li style={{ marginBottom: '8px' }}>
                    • A debit card for kids with oversight by parents
                  </li>
                  <li>
                    • Gives kids tools, tips and safety features to help them learn money basics
                  </li>
                </ul>
                <p style={{ fontSize: '12px', color: '#414042', marginBottom: '8px' }}>
                  Monthly Service Fee
                </p>
                <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>$0</p>
                <p style={{ fontSize: '13px', marginBottom: '24px' }}>
                  <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                    Requires eligible account to open
                  </a>
                </p>
                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#128842',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: "'Open Sans', sans-serif",
                    marginBottom: '12px',
                  }}
                >
                  Open now
                </button>
                <p style={{ fontSize: '14px', textAlign: 'center' }}>
                  <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                    Account details
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PREMIUM TAB */}
        {activeTab === 'premium' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" fill="#f0f0f0" stroke="#0060f0" strokeWidth="2" />
                <path
                  d="M20 10L26 16L20 22L14 16Z"
                  fill="#0060f0"
                />
                <path
                  d="M20 18L26 24L20 30L14 24Z"
                  fill="#0060f0"
                  opacity="0.6"
                />
              </svg>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>Premium</h2>
                <p style={{ fontSize: '13px', color: '#414042', margin: '4px 0 0 0' }}>
                  Accounts subject to approval
                </p>
              </div>
            </div>

            <div style={{ maxWidth: '400px' }}>
              <div
                style={{
                  border: '1px solid #c6c4c4',
                  borderRadius: '8px',
                  padding: '24px',
                }}
              >
                <p style={{ fontSize: '14px', color: '#414042', marginBottom: '16px' }}>
                  Dedicated banker support and investing guidance from J.P. Morgan Wealth Management.
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    marginBottom: '20px',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#414042',
                  }}
                >
                  <li style={{ marginBottom: '8px' }}>• Higher limits on everyday transactions</li>
                  <li>• No ATM fees worldwide plus 24/7 priority service line</li>
                </ul>
                <p style={{ fontSize: '12px', color: '#414042', marginBottom: '8px' }}>
                  Monthly Service Fee
                </p>
                <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>$35 or $0</p>
                <p style={{ fontSize: '14px', marginBottom: '24px' }}>
                  <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                    Avoid fee
                  </a>
                </p>
                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#128842',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: "'Open Sans', sans-serif",
                    marginBottom: '12px',
                  }}
                >
                  Schedule a meeting
                </button>
                <p style={{ fontSize: '14px', textAlign: 'center' }}>
                  <a href="#" style={{ color: '#0060f0', textDecoration: 'none' }}>
                    Account details
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* EXPERIENCE SECTION */}
      <div
        style={{
          backgroundColor: '#f9f9f9',
          padding: '48px 20px',
          marginTop: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            Experience seamless banking with Chase
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
            }}
          >
            {/* Feature 1: ATMs & Branches */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" fill="none" stroke="#128842" strokeWidth="2" />
                  <path
                    d="M30 18L42 26V40H18V26L30 18Z"
                    fill="#128842"
                  />
                  <circle cx="30" cy="35" r="3" fill="#fff" />
                </svg>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                Convenience at 14,000 ATMs and branches
              </h3>
              <p style={{ fontSize: '14px', color: '#414042', lineHeight: '1.6' }}>
                Access your money when and where you need it across the Chase network
              </p>
            </div>

            {/* Feature 2: Mobile App */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" fill="none" stroke="#128842" strokeWidth="2" />
                  <rect x="24" y="16" width="12" height="28" rx="1" fill="none" stroke="#128842" strokeWidth="2" />
                  <circle cx="30" cy="40" r="1" fill="#128842" />
                </svg>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                Chase Mobile® App
              </h3>
              <p style={{ fontSize: '14px', color: '#414042', lineHeight: '1.6' }}>
                Bank on the go with our easy-to-use mobile banking application
              </p>
            </div>

            {/* Feature 3: Card Lock */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" fill="none" stroke="#128842" strokeWidth="2" />
                  <rect x="20" y="20" width="20" height="18" rx="2" fill="none" stroke="#128842" strokeWidth="2" />
                  <circle cx="30" cy="32" r="2" fill="#128842" />
                  <path d="M26 20V17C26 15 27 14 30 14C33 14 34 15 34 17V20" stroke="#128842" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>Card lock</h3>
              <p style={{ fontSize: '14px', color: '#414042', lineHeight: '1.6' }}>
                Lock or unlock your card instantly with a single tap in the app
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: '#101820',
          color: '#fff',
          padding: '60px 20px 40px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <ChaseLogo fill="#fff" />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '40px',
              marginBottom: '40px',
              fontSize: '13px',
            }}
          >
            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '12px' }}>Banking</h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                <li>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                    Checking
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                    Savings
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                    CDs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '12px' }}>Products</h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                <li>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                    Credit Cards
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                    Auto Loans
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                    Mortgages
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '12px' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                <li>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                    Locations
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '12px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                <li>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                    Disclosures
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid #414042',
              paddingTop: '20px',
              fontSize: '12px',
              color: '#999',
            }}
          >
            <p>© 2026 JPMorgan Chase & Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
