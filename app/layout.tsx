import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok-v2",
  description: "TikTok v2 created by Tjsm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
