import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joel Patole | Full-Stack & Backend Engineer | IoT & AI Systems",
  description:
    "Portfolio of Joel Patole, a Full-Stack & Backend Software Engineer in Mumbai specializing in Python (Flask, FastAPI), MongoDB, IoT hardware systems, and ML-driven architectures.",
  keywords: ["Joel Patole", "Full-Stack Engineer", "Backend Engineer", "IoT", "ESP8266", "Flask", "FastAPI", "MongoDB", "Mumbai", "AI Systems"],
  authors: [{ name: "Joel Patole" }],
  openGraph: {
    title: "Joel Patole | Full-Stack & Backend Engineer | IoT & AI Systems",
    description: "Explore Joel Patole's production software systems, IoT hardware platforms, and interactive diagrams.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F1C",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // "js" + "intro-on" are toggled by the portfolio script (theme, intro animation), hence suppressHydrationWarning
    <html lang="en" data-theme="dark" className="js intro-on" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=JetBrains+Mono:wght@400;500;600&family=Instrument+Sans:wght@400;500;600;700&family=Unbounded:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
