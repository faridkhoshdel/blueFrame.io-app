import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "blueframeAI",
  description: "AI Innovation Platform",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0F172A" />
        <link rel="apple-touch-icon" href="https://via.placeholder.com/192/3B82F6/FFFFFF?text=AI" />
      </head>
      <body>{children}</body>
    </html>
  );
}
