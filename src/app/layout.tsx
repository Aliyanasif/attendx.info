import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  metadataBase: new URL("https://attendx.info"),

  title: "AttendX | Attendance & Payroll Software in Pakistan",

  description:
    "AttendX helps Pakistani businesses manage employee attendance, payroll, overtime, staff records, and workforce reports from one smart system.",
    manifest: "/manifest.json",
    verification: {
      google: "42KXYDEzeFdQqxY-Kbaw2OifXpaJiyBYIHBeXTYQE9s",
    },

    alternates: {
      canonical: "https://attendx.info",
    },

  openGraph: {
    title: "AttendX | Attendance & Payroll Software in Pakistan",
    description:
      "Manage attendance, payroll, employees, overtime, and workforce operations with AttendX.",
    url: "https://attendx.info",
    siteName: "AttendX",
    images: [
      {
        url: "https://attendx.info/og-image.png",
        width: 1200,
        height: 630,
        alt: "AttendX Dashboard",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

// export const metadata = {
//   title: "AttendX | Attendance & Payroll Software in Pakistan",
//   description:
//     "AttendX helps Pakistani businesses manage employee attendance, payroll, overtime, staff records, and workforce reports from one smart system.",
//   manifest: "/manifest.json",
//   verification: {
//     google: "42KXYDEzeFdQqxY-Kbaw2OifXpaJiyBYIHBeXTYQE9s",
//   },
//   openGraph: {
//     title: "AttendX | Attendance & Payroll Software in Pakistan",
//     description:
//       "Manage attendance, payroll, employees, overtime, and workforce operations with AttendX.",
//     url: "https://attendx.info",
//     siteName: "AttendX",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "AttendX Dashboard",
//       },
//     ],
//     locale: "en_PK",
//     type: "website",
//   },
// };




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