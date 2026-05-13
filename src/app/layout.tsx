import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AttendX | Elite Workforce Management",
  description:
    "AttendX is a smart attendance and payroll management software for businesses in Pakistan. Manage attendance, payroll, employees, reports, and workforce operations from one system.",
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
    </html>
  );
}

{/* <head>
  <meta name="google-site-verification" content="42KXYDEzeFdQqxY-Kbaw2OifXpaJiyBYIHBeXTYQE9s" />
  <head/> */}