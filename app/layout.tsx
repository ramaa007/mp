import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "WebCare by Mohini | Premium Website Maintenance & WordPress Care",
  description:
    "The premium silent guardian for your digital presence. Expert WordPress and cPanel management, security hardening, automated backups, and conversion-ready optimization.",
  keywords: [
    "website maintenance",
    "WordPress care",
    "cPanel support",
    "security hardening",
    "automated backups",
    "Brisbane web developer",
  ],
  openGraph: {
    title: "WebCare by Mohini | Premium Website Maintenance",
    description:
      "Expert WordPress and cPanel management. From deep security hardening and automated backups to checkout testing and PHP optimization.",
    type: "website",
  },
  generator: "v0.app",
  icons: {
    icon: {
      url: "/icon.svg",
      type: "image/svg+xml",
    },
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
