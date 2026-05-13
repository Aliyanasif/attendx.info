import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "AttendX | Attendance & Payroll Software in Pakistan",
  description:
    "AttendX helps Pakistani businesses manage employee attendance, payroll, overtime, staff records, and workforce reports from one smart system.",
  manifest: "/manifest.json",
  verification: {
    google: "42KXYDEzeFdQqxY-Kbaw2OifXpaJiyBYIHBeXTYQE9s",
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
      <GoogleAnalytics gaId="G-GXCCRJXC2E" />
    </html>
  );
}

{/* <head>
  <meta name="google-site-verification" content="42KXYDEzeFdQqxY-Kbaw2OifXpaJiyBYIHBeXTYQE9s" />
  <head/> */}