import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Diigoo — One App, Infinite Vibes | AI × Blockchain for India",
  description: "Diigoo builds an inclusive tech ecosystem in India combining decentralized architecture, AI-driven experiences, and real-world integrations. Explore products, developer tools, and partnership programs.",
  keywords: ["blockchain", "AI", "India", "decentralized", "ecosystem", "developer tools", "dApps", "Web3"],
  authors: [{ name: "Diigoo Team" }],
  openGraph: {
    title: "Diigoo — One App, Infinite Vibes | AI × Blockchain for India",
    description: "Build more than apps — build an ecosystem. Diigoo fuses decentralization with AI to create fast, low-cost, real-world-ready products for India and beyond.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diigoo — One App, Infinite Vibes",
    description: "AI × Blockchain ecosystem for India. Build more than apps — build an ecosystem.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "Diigoo", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
