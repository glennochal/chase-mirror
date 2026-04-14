import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chase Online | Banking, Credit Cards, Loans, Investing",
  description: "Chase online; credit cards, mortgages, commercial banking, auto loans, investing & retirement planning, checking and business banking.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
