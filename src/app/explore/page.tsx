'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// Chase Brand Colors
const COLORS = {
  text: '#101820',
  primary: '#0060f0',
  green: '#128842',
  secondary: '#414042',
  border: '#c6c4c4',
  lightGray: '#f5f5f5',
  darkGray: '#414042',
  white: '#ffffff',
  darkBg: '#101820',
};

// SVG Icons
const ChaseLogoIcon = ({ white = false }: { white?: boolean }) => (
  <svg width="126" height="24" viewBox="0 0 126 24" fill="none">
    <text
      x="0"
      y="20"
      fontFamily="'Helvetica Neue', Arial, sans-serif"
      fontSize="24"
      fontWeight="800"
      letterSpacing="2"
      fill={white ? '#ffffff' : '#101820'}
    >
      CHASE
    </text>
    <g transform="translate(102, 2)">
      <rect x="0" y="7" width="8" height="3.5" rx="0.5" fill="#0060f0" />
      <rect x="7" y="0" width="3.5" height="8" rx="0.5" fill="#0060f0" />
      <rect x="10.5" y="7" width="8" height="3.5" rx="0.5" fill="#0060f0" />
      <rect x="7" y="10.5" width="3.5" height="8" rx="0.5" fill="#0060f0" />
    </g>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={COLORS.text} strokeWidth="2">
    <circle cx="8" cy="8" r="7" />
    <path d="M13 13l5 5" />
  </svg>
);

const RewardsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" fill={COLORS.primary} opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M20 10L23 18H31L25 23L28 31L20 26L12 31L15 23L9 18H17L20 10Z" fill={COLORS.primary} />
  </svg>
);

const AllCardsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="6" y="10" width="28" height="20" rx="2" stroke={COLORS.primary} strokeWidth="2" />
    <line x1="6" y1="16" x2="34" y2="16" stroke={COLORS.primary} strokeWidth="1" />
  </svg>
);

const CashbackIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="12" stroke={COLORS.primary} strokeWidth="2" fill="none" />
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="bold" fill={COLORS.primary} fontFamily="Open Sans">
      $
    </text>
  </svg>
);

const BalanceTransferIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M10 20L20 10L30 20M10 20L20 30L30 20" stroke={COLORS.primary} strokeWidth="2" fill="none" />
  </svg>
);

const TravelIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M8 18C8 14 12 12 20 12C28 12 32 14 32 18" stroke={COLORS.primary} strokeWidth="2" fill="none" />
    <path d="M10 20H30" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="15" cy="26" r="2" fill={COLORS.primary} />
    <circle cx="25" cy="26" r="2" fill={COLORS.primary} />
  </svg>
);

const BusinessIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="12" width="24" height="18" rx="2" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M12 12V8C12 6 13 5 15 5H25C27 5 28 6 28 8V12" stroke={COLORS.primary} strokeWidth="2" fill="none" />
    <line x1="16" y1="20" x2="24" y2="20" stroke={COLORS.primary} strokeWidth="1" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1L10 6H15L11 9L13 14L8 11L3 14L5 9L1 6H6L8 1Z" fill={COLORS.secondary} />
  </svg>
);

const RemoveIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 2L10 10M10 2L2 10" stroke={COLORS.primary} strokeWidth="1.5" />
  </svg>
);

// SVG Credit Card Illustrations
const FreedomUnlimitedCardSVG = () => (
  <svg width="240" height="152" viewBox="0 0 240 152" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="152" rx="10" fill="url(#fuGrad)" />
    <defs>
      <linearGradient id="fuGrad" x1="0" y1="0" x2="240" y2="152">
        <stop offset="0%" stopColor="#004e92" />
        <stop offset="40%" stopColor="#0068b5" />
        <stop offset="70%" stopColor="#0077cc" />
        <stop offset="100%" stopColor="#4da6e8" />
      </linearGradient>
    </defs>
    {/* Decorative swoosh */}
    <path d="M0 100 Q60 60, 140 80 T240 50" stroke="rgba(255,255,255,0.12)" strokeWidth="40" fill="none" />
    <path d="M0 120 Q80 70, 160 95 T240 70" stroke="rgba(255,255,255,0.08)" strokeWidth="30" fill="none" />
    {/* Chase octagon */}
    <g transform="translate(16, 16)">
      <rect x="0" y="5" width="6" height="2.5" rx="0.5" fill="#fff" />
      <rect x="5" y="0" width="2.5" height="6" rx="0.5" fill="#fff" />
      <rect x="7.5" y="5" width="6" height="2.5" rx="0.5" fill="#fff" />
      <rect x="5" y="7.5" width="2.5" height="6" rx="0.5" fill="#fff" />
    </g>
    {/* "freedom" text */}
    <text x="34" y="28" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="400" fill="#fff" letterSpacing="0.5">freedom</text>
    {/* "unlimited" text */}
    <text x="34" y="42" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="300" fill="rgba(255,255,255,0.85)" letterSpacing="2">UNLIMITED</text>
    {/* "NO ANNUAL FEE" badge */}
    <text x="175" y="22" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700" fill="#fff" textAnchor="middle" transform="rotate(-15, 185, 22)">NO ANNUAL</text>
    <text x="175" y="30" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700" fill="#fff" textAnchor="middle" transform="rotate(-15, 185, 30)">FEE</text>
    {/* Chip */}
    <rect x="28" y="60" width="28" height="22" rx="3" fill="#c4a44a" opacity="0.9" />
    <line x1="28" y1="71" x2="56" y2="71" stroke="#b8963e" strokeWidth="0.5" />
    <line x1="42" y1="60" x2="42" y2="82" stroke="#b8963e" strokeWidth="0.5" />
    {/* Contactless icon */}
    <g transform="translate(68, 64)">
      <path d="M4 10 Q6 6, 8 10" stroke="#fff" strokeWidth="1" fill="none" />
      <path d="M2 10 Q6 3, 10 10" stroke="#fff" strokeWidth="1" fill="none" />
      <path d="M0 10 Q6 0, 12 10" stroke="#fff" strokeWidth="1" fill="none" />
    </g>
    {/* Cardholder name */}
    <text x="28" y="108" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="400" fill="rgba(255,255,255,0.8)" letterSpacing="1">D. BARRETT</text>
    {/* VISA logo */}
    <text x="195" y="138" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#fff" fontStyle="italic" letterSpacing="1">VISA</text>
  </svg>
);

const FreedomFlexCardSVG = () => (
  <svg width="240" height="152" viewBox="0 0 240 152" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="152" rx="10" fill="url(#ffGrad)" />
    <defs>
      <linearGradient id="ffGrad" x1="0" y1="0" x2="240" y2="152">
        <stop offset="0%" stopColor="#005eb8" />
        <stop offset="50%" stopColor="#0070cc" />
        <stop offset="100%" stopColor="#60aae0" />
      </linearGradient>
    </defs>
    {/* Decorative swoosh */}
    <path d="M0 110 Q70 65, 150 85 T240 55" stroke="rgba(255,255,255,0.1)" strokeWidth="35" fill="none" />
    {/* Chase octagon */}
    <g transform="translate(16, 16)">
      <rect x="0" y="5" width="6" height="2.5" rx="0.5" fill="#fff" />
      <rect x="5" y="0" width="2.5" height="6" rx="0.5" fill="#fff" />
      <rect x="7.5" y="5" width="6" height="2.5" rx="0.5" fill="#fff" />
      <rect x="5" y="7.5" width="2.5" height="6" rx="0.5" fill="#fff" />
    </g>
    {/* "freedom" text */}
    <text x="34" y="28" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="400" fill="#fff" letterSpacing="0.5">freedom</text>
    {/* "FLEX" text */}
    <text x="34" y="42" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="300" fill="rgba(255,255,255,0.85)" letterSpacing="2">FLEX</text>
    {/* "NO ANNUAL FEE" badge */}
    <text x="178" y="22" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700" fill="#fff" textAnchor="middle" transform="rotate(-15, 185, 22)">NO ANNUAL</text>
    <text x="178" y="30" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700" fill="#fff" textAnchor="middle" transform="rotate(-15, 185, 30)">FEE</text>
    {/* Dual chips (Mastercard style) */}
    <circle cx="175" cy="75" r="14" fill="#999" opacity="0.6" />
    <circle cx="195" cy="75" r="14" fill="#bbb" opacity="0.5" />
    {/* Chip */}
    <rect x="28" y="60" width="28" height="22" rx="3" fill="#c4a44a" opacity="0.9" />
    <line x1="28" y1="71" x2="56" y2="71" stroke="#b8963e" strokeWidth="0.5" />
    <line x1="42" y1="60" x2="42" y2="82" stroke="#b8963e" strokeWidth="0.5" />
    {/* Cardholder name */}
    <text x="28" y="108" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="400" fill="rgba(255,255,255,0.8)" letterSpacing="1">D. BARRETT</text>
    {/* Mastercard text */}
    <text x="168" y="140" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="400" fill="rgba(255,255,255,0.7)" letterSpacing="1">MASTERCARD</text>
  </svg>
);

const SlateCardSVG = () => (
  <svg width="240" height="152" viewBox="0 0 240 152" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="152" rx="10" fill="url(#slGrad)" />
    <defs>
      <linearGradient id="slGrad" x1="0" y1="0" x2="240" y2="152">
        <stop offset="0%" stopColor="#004c6d" />
        <stop offset="40%" stopColor="#00627a" />
        <stop offset="100%" stopColor="#007a8a" />
      </linearGradient>
    </defs>
    {/* Subtle pattern overlay */}
    <path d="M0 90 Q80 50, 160 75 T240 45" stroke="rgba(255,255,255,0.06)" strokeWidth="40" fill="none" />
    {/* Chase octagon */}
    <g transform="translate(16, 16)">
      <rect x="0" y="5" width="6" height="2.5" rx="0.5" fill="#fff" />
      <rect x="5" y="0" width="2.5" height="6" rx="0.5" fill="#fff" />
      <rect x="7.5" y="5" width="6" height="2.5" rx="0.5" fill="#fff" />
      <rect x="5" y="7.5" width="2.5" height="6" rx="0.5" fill="#fff" />
    </g>
    {/* "SLATE" text */}
    <text x="80" y="42" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="300" fill="#fff" letterSpacing="6">SLATE</text>
    {/* "NO ANNUAL FEE" badge */}
    <text x="185" y="22" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700" fill="#fff" textAnchor="middle" transform="rotate(-15, 185, 22)">NO ANNUAL</text>
    <text x="185" y="30" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700" fill="#fff" textAnchor="middle" transform="rotate(-15, 185, 30)">FEE</text>
    {/* Chip */}
    <rect x="28" y="60" width="28" height="22" rx="3" fill="#c4a44a" opacity="0.9" />
    <line x1="28" y1="71" x2="56" y2="71" stroke="#b8963e" strokeWidth="0.5" />
    <line x1="42" y1="60" x2="42" y2="82" stroke="#b8963e" strokeWidth="0.5" />
    {/* Contactless icon */}
    <g transform="translate(68, 64)">
      <path d="M4 10 Q6 6, 8 10" stroke="#fff" strokeWidth="1" fill="none" />
      <path d="M2 10 Q6 3, 10 10" stroke="#fff" strokeWidth="1" fill="none" />
      <path d="M0 10 Q6 0, 12 10" stroke="#fff" strokeWidth="1" fill="none" />
    </g>
    {/* Cardholder name */}
    <text x="28" y="108" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="400" fill="rgba(255,255,255,0.8)" letterSpacing="1">D. BARRETT</text>
    {/* VISA logo */}
    <text x="195" y="138" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#fff" fontStyle="italic" letterSpacing="1">VISA</text>
  </svg>
);

// Card SVG map
const cardSVGMap: Record<string, React.ReactNode> = {
  'freedom-unlimited': <FreedomUnlimitedCardSVG />,
  'freedom-flex': <FreedomFlexCardSVG />,
  'slate': <SlateCardSVG />,
};

// Card Component
const CreditCard = ({
  cardId,
  title,
  onApply,
  onDetails,
  badgeLabel,
}: {
  cardId: string;
  title: string;
  onApply: () => void;
  onDetails: () => void;
  badgeLabel?: string;
}) => (
  <div style={{ position: 'relative', width: '100%' }}>
    {badgeLabel && (
      <div
        style={{
          position: 'absolute',
          top: '-8px',
          right: '20px',
          backgroundColor: badgeLabel === 'LIMITED TIME OFFER' ? '#f5c518' : badgeLabel === 'NEW OFFER' ? '#f5c518' : COLORS.primary,
          color: (badgeLabel === 'LIMITED TIME OFFER' || badgeLabel === 'NEW OFFER') ? '#101820' : 'white',
          padding: '4px 12px',
          fontSize: '10px',
          fontWeight: 'bold',
          borderRadius: '3px',
          zIndex: 10,
          letterSpacing: '0.5px',
        }}
      >
        {badgeLabel}
      </div>
    )}
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
      {cardSVGMap[cardId]}
    </div>
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          fontSize: '14px',
          fontWeight: 'bold',
          color: COLORS.text,
          fontFamily: 'Open Sans',
          marginBottom: '14px',
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          marginBottom: '12px',
        }}
      >
        <button
          onClick={onApply}
          style={{
            padding: '8px 16px',
            backgroundColor: COLORS.primary,
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: 'bold',
            fontFamily: 'Open Sans',
            cursor: 'pointer',
            width: '118px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Apply Now
        </button>
        <button
          onClick={onDetails}
          style={{
            padding: '8px 16px',
            backgroundColor: 'transparent',
            color: COLORS.primary,
            border: `1px solid ${COLORS.primary}`,
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: 'bold',
            fontFamily: 'Open Sans',
            cursor: 'pointer',
            width: '136px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          See details &gt;
        </button>
      </div>
      <div style={{ fontSize: '12px', marginBottom: '8px' }}>
        <a href="#" style={{ color: COLORS.primary, textDecoration: 'underline', fontFamily: 'Open Sans' }}>
          <sup style={{ fontSize: '8px' }}>&dagger;</sup>Pricing &amp; Terms
        </a>
      </div>
      <div style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
        <span style={{ fontSize: '14px' }}>&#x2605;</span>
        <a href="#" style={{ color: COLORS.primary, textDecoration: 'none', fontFamily: 'Open Sans' }}>
          Remove
        </a>
      </div>
    </div>
  </div>
);

// Comparison Section Component
const ComparisonSection = ({
  title,
  cards,
}: {
  title: string;
  cards: { col1: React.ReactNode; col2: React.ReactNode; col3: React.ReactNode };
}) => (
  <div style={{ marginBottom: '40px' }}>
    <h3
      style={{
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        color: COLORS.text,
        borderTop: `1px solid ${COLORS.border}`,
        paddingTop: '24px',
        marginBottom: '24px',
        fontFamily: 'Open Sans',
      }}
    >
      {title}
    </h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      <div style={{ fontSize: '13px', lineHeight: '1.5', color: COLORS.text, fontFamily: 'Open Sans' }}>
        {cards.col1}
      </div>
      <div style={{ fontSize: '13px', lineHeight: '1.5', color: COLORS.text, fontFamily: 'Open Sans' }}>
        {cards.col2}
      </div>
      <div style={{ fontSize: '13px', lineHeight: '1.5', color: COLORS.text, fontFamily: 'Open Sans' }}>
        {cards.col3}
      </div>
    </div>
  </div>
);

// Main Page Component
export default function ExplorePage() {
  return (
    <Suspense fallback={<div style={{ fontFamily: 'Open Sans, sans-serif', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
      <ExplorePageInner />
    </Suspense>
  );
}

function ExplorePageInner() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [selectedCards, setSelectedCards] = useState<string[]>([
    'freedom-unlimited',
    'freedom-flex',
    'slate',
  ]);

  const removeCard = (cardId: string) => {
    setSelectedCards(selectedCards.filter((id) => id !== cardId));
  };

  return (
    <div style={{ fontFamily: 'Open Sans, sans-serif', color: COLORS.text, backgroundColor: '#ffffff' }}>
      {/* HEADER */}
      {/* Utility Bar */}
      <div
        style={{
          backgroundColor: COLORS.lightGray,
          padding: '0 20px',
          fontSize: '12px',
          borderBottom: `1px solid ${COLORS.border}`,
          height: '40px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', gap: '20px', fontFamily: 'Open Sans' }}>
            <a href="#" style={{ color: COLORS.primary, textDecoration: 'none' }}>
              Personal
            </a>
            <a href="#" style={{ color: COLORS.primary, textDecoration: 'none' }}>
              Business
            </a>
            <a href="#" style={{ color: COLORS.primary, textDecoration: 'none' }}>
              Commercial
            </a>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontFamily: 'Open Sans' }}>
            <a href="#" style={{ color: COLORS.primary, textDecoration: 'none' }}>
              Schedule a meeting
            </a>
            <a href="#" style={{ color: COLORS.primary, textDecoration: 'none' }}>
              Customer service
            </a>
            <a href="#" style={{ color: COLORS.primary, textDecoration: 'none' }}>
              Español
            </a>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Chase Logo Bar */}
      <div
        style={{
          padding: '0 20px',
          borderBottom: `1px solid ${COLORS.border}`,
          height: '56px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <ChaseLogoIcon />
        </div>
      </div>

      {/* Navigation Bar */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderBottom: `1px solid ${COLORS.border}`,
          padding: '0 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            gap: '30px',
            fontSize: '14px',
            fontFamily: 'Open Sans',
          }}
        >
          <a href="#" style={{ color: COLORS.text, textDecoration: 'none', padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
            Checking
          </a>
          <a href="#" style={{ color: COLORS.text, textDecoration: 'none', padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
            Savings &amp; CDs
          </a>
          <a href="#" style={{ color: COLORS.primary, textDecoration: 'none', padding: '12px 16px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            Credit cards
          </a>
          <a href="#" style={{ color: COLORS.text, textDecoration: 'none', padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
            Home loans
          </a>
          <a href="#" style={{ color: COLORS.text, textDecoration: 'none', padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
            Auto
          </a>
          <a href="#" style={{ color: COLORS.text, textDecoration: 'none', padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
            Investing by J.P. Morgan
          </a>
          <a href="#" style={{ color: COLORS.text, textDecoration: 'none', padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
            Education &amp; goals
          </a>
          <a href="#" style={{ color: COLORS.text, textDecoration: 'none', padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
            Travel
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', marginBottom: '24px' }}>
            <a href="#" style={{ color: COLORS.primary, textDecoration: 'none' }}>
              Credit cards home
            </a>
            {query && <span style={{ color: COLORS.secondary }}> / Results for: &quot;{query}&quot;</span>}
          </div>

          {/* Main Heading */}
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '48px',
              color: COLORS.text,
            }}
          >
            Compare Credit Cards
          </h1>

          {/* Comparison Grid Section */}
          <div style={{ marginBottom: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {/* Card 1: Freedom Unlimited */}
              {selectedCards.includes('freedom-unlimited') && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CreditCard
                    cardId="freedom-unlimited"
                    title="Chase Freedom Unlimited® Credit Card"
                    onApply={() => console.log('Apply Freedom Unlimited')}
                    onDetails={() => console.log('Details Freedom Unlimited')}
                    badgeLabel="LIMITED TIME OFFER"
                  />
                </div>
              )}

              {/* Card 2: Freedom Flex */}
              {selectedCards.includes('freedom-flex') && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CreditCard
                    cardId="freedom-flex"
                    title="Chase Freedom Flex℠ Credit Card"
                    onApply={() => console.log('Apply Freedom Flex')}
                    onDetails={() => console.log('Details Freedom Flex')}
                  />
                </div>
              )}

              {/* Card 3: Slate */}
              {selectedCards.includes('slate') && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CreditCard
                    cardId="slate"
                    title="Chase Slate® Credit Card"
                    onApply={() => console.log('Apply Slate')}
                    onDetails={() => console.log('Details Slate')}
                    badgeLabel="NEW OFFER"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Comparison Sections */}
          <ComparisonSection
            title="New Cardmember Offer"
            cards={{
              col1: (
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Earn a total $250 bonus</div>
                  <div>Earn a $200 bonus after you spend $500 on purchases in the first 3 months from account opening.</div>
                </div>
              ),
              col2: (
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Earn a $300 bonus</div>
                  <div>Earn a $300 bonus after you spend $500 on purchases in the first 3 months from account opening.</div>
                </div>
              ),
              col3: (
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Intro Offer</div>
                  <div>0% Intro APR for 15 months on purchases and balance transfers, then a variable APR of 21.49%-29.99%.</div>
                </div>
              ),
            }}
          />

          <ComparisonSection
            title="Annual Fee"
            cards={{
              col1: <div>$0†</div>,
              col2: <div>$0†</div>,
              col3: <div>$0†</div>,
            }}
          />

          <ComparisonSection
            title="Foreign Transaction Fee"
            cards={{
              col1: <div>3% of each transaction in U.S. dollars.†</div>,
              col2: <div>3% of each transaction in U.S. dollars.†</div>,
              col3: <div>3% of each transaction in U.S. dollars.†</div>,
            }}
          />

          <ComparisonSection
            title="APR"
            cards={{
              col1: (
                <div>
                  0% intro APR for 15 months from account opening on purchases and balance transfers.† After the intro period, a variable APR of
                  19.24%-27.99%.†
                </div>
              ),
              col2: (
                <div>
                  0% intro APR for 15 months from account opening on purchases and balance transfers.† After the intro period, a variable APR of
                  19.24%-27.99%.†
                </div>
              ),
              col3: (
                <div>
                  0% Intro APR for 15 months on purchases and balance transfers.† After the intro period, a variable APR of 21.49%-29.99%.†
                </div>
              ),
            }}
          />

          <ComparisonSection
            title="Earning Rewards"
            cards={{
              col1: (
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Unlimited 1.5% cash back is just the beginning</div>
                  <ul style={{ paddingLeft: '20px', margin: '0' }}>
                    <li>Earn 5% cash back on groceries (up to $1,500/quarter)</li>
                    <li>Earn 5% cash back on gas stations and transit</li>
                    <li>Earn unlimited 1.5% on everything else</li>
                  </ul>
                </div>
              ),
              col2: (
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Earn 5% cash back on up to $1,500 in combined purchases</div>
                  <ul style={{ paddingLeft: '20px', margin: '0' }}>
                    <li>Earn 5% cash back on quarterly rotating bonus categories</li>
                    <li>Earn 1% cash back on all other purchases</li>
                    <li>Activate bonus categories for best rewards</li>
                  </ul>
                </div>
              ),
              col3: (
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Designed for balance transfers</div>
                  <ul style={{ paddingLeft: '20px', margin: '0' }}>
                    <li>0% Intro APR for 15 months on purchases and balance transfers</li>
                    <li>$0 Intro balance transfer fee for the first 60 days</li>
                    <li>Free access to your credit score with Credit Journey</li>
                    <li>No annual fee</li>
                  </ul>
                </div>
              ),
            }}
          />

          <ComparisonSection
            title="Using Rewards"
            cards={{
              col1: <div>No minimum to redeem for cash back. Cash Back rewards do not expire as long as your account is open.</div>,
              col2: <div>No minimum to redeem for cash back. Cash Back rewards do not expire as long as your account is open.</div>,
              col3: (
                <div>
                  No rewards program. Chase Slate is built for simplicity — focus on paying down balances with 0% Intro APR and no annual fee.
                </div>
              ),
            }}
          />

          <ComparisonSection
            title="Additional Benefits"
            cards={{
              col1: (
                <div>
                  <ul style={{ paddingLeft: '20px', margin: '0' }}>
                    <li>24/7 customer service</li>
                    <li>Zero Fraud Liability</li>
                    <li>Purchase protection</li>
                  </ul>
                </div>
              ),
              col2: (
                <div>
                  <ul style={{ paddingLeft: '20px', margin: '0' }}>
                    <li>Credit Journey tools</li>
                    <li>24/7 customer service</li>
                    <li>Zero Fraud Liability</li>
                    <li>Purchase protection</li>
                  </ul>
                </div>
              ),
              col3: (
                <div>
                  <ul style={{ paddingLeft: '20px', margin: '0' }}>
                    <li>0% Intro APR for 15 months</li>
                    <li>$0 Intro balance transfer fee for 60 days</li>
                    <li>Credit Journey — free credit score</li>
                    <li>Zero Fraud Liability</li>
                    <li>24/7 customer service</li>
                    <li>Purchase protection</li>
                    <li>No annual fee</li>
                  </ul>
                </div>
              ),
            }}
          />


          {/* Browse by Category */}
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '40px',
              color: COLORS.text,
              fontFamily: 'Open Sans',
            }}
          >
            Browse credit cards by category
          </h2>

          {/* Category Icons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '30px' }}>
            <a
              href="#"
              style={{
                textAlign: 'center',
                textDecoration: 'none',
                color: COLORS.text,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <RewardsIcon />
              <span style={{ fontSize: '14px', fontFamily: 'Open Sans' }}>Rewards</span>
            </a>
            <a
              href="#"
              style={{
                textAlign: 'center',
                textDecoration: 'none',
                color: COLORS.text,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <AllCardsIcon />
              <span style={{ fontSize: '14px', fontFamily: 'Open Sans' }}>All Cards</span>
            </a>
            <a
              href="#"
              style={{
                textAlign: 'center',
                textDecoration: 'none',
                color: COLORS.text,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <CashbackIcon />
              <span style={{ fontSize: '14px', fontFamily: 'Open Sans' }}>Cashback</span>
            </a>
            <a
              href="#"
              style={{
                textAlign: 'center',
                textDecoration: 'none',
                color: COLORS.text,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <BalanceTransferIcon />
              <span style={{ fontSize: '14px', fontFamily: 'Open Sans' }}>Balance Transfer</span>
            </a>
            <a
              href="#"
              style={{
                textAlign: 'center',
                textDecoration: 'none',
                color: COLORS.text,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <TravelIcon />
              <span style={{ fontSize: '14px', fontFamily: 'Open Sans' }}>Travel</span>
            </a>
            <a
              href="#"
              style={{
                textAlign: 'center',
                textDecoration: 'none',
                color: COLORS.text,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <BusinessIcon />
              <span style={{ fontSize: '14px', fontFamily: 'Open Sans' }}>Business</span>
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ backgroundColor: COLORS.darkBg, color: 'white', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Footer Logo */}
          <div style={{ marginBottom: '40px' }}>
            <ChaseLogoIcon white={true} />
          </div>

          {/* Footer Links Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px', fontFamily: 'Open Sans' }}>Credit Cards</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '12px', fontFamily: 'Open Sans' }}>
                    Rewards credit cards
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '12px', fontFamily: 'Open Sans' }}>
                    Cash back credit cards
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '12px', fontFamily: 'Open Sans' }}>
                    Travel credit cards
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px', fontFamily: 'Open Sans' }}>More Chase Products</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '12px', fontFamily: 'Open Sans' }}>
                    Checking accounts
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '12px', fontFamily: 'Open Sans' }}>
                    Savings accounts
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '12px', fontFamily: 'Open Sans' }}>
                    Mortgages
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px', fontFamily: 'Open Sans' }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '12px', fontFamily: 'Open Sans' }}>
                    Learning center
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '12px', fontFamily: 'Open Sans' }}>
                    Security
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '12px', fontFamily: 'Open Sans' }}>
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright and Legal */}
          <div style={{ borderTop: `1px solid ${COLORS.border}`, paddingTop: '20px', fontSize: '11px', color: '#b0b0b0', fontFamily: 'Open Sans' }}>
            <p>
              © 2024 JPMorgan Chase &amp; Co. All rights reserved. | <a href="#" style={{ color: '#b0b0b0' }}>Privacy</a> |{' '}
              <a href="#" style={{ color: '#b0b0b0' }}>Legal</a> | <a href="#" style={{ color: '#b0b0b0' }}>Accessibility</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
