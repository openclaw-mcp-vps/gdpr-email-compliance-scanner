import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Email Compliance Scanner",
  description: "Scan email campaigns for GDPR violations before sending."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c2126de0-6282-4acb-add9-59fce1c9e53a"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
