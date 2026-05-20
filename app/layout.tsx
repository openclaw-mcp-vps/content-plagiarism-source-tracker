import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content Plagiarism Source Tracker — Track Where Your Content Gets Stolen",
  description: "Monitor the web for plagiarized content, send DMCA takedown notices, and track enforcement success. Built for bloggers, course creators, and content agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="68970397-0368-44e5-b2ac-2be60ac453d8"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
