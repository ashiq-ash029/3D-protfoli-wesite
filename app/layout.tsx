
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Global3DBackground from "@/components/Global3DBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Ashiq S | AI Digital Marketing & Development",
    template: "%s | Muhammad Ashiq S",
  },
  description:
    "Portfolio of Muhammad Ashiq S — AI digital marketing, SEO, AEO, GEO, AI-assisted content, and web development.",
  openGraph: {
    title: "Muhammad Ashiq S | AI Digital Marketing & Development",
    description:
      "SEO, AEO & GEO, AI-assisted content, and web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
<body className="min-h-full flex flex-col">
  <Global3DBackground />

  <div className="site-content">
    <div id="top" />
    <SiteHeader />
    {children}
    <SiteFooter />
  </div>
</body>

    </html>
  );
}
