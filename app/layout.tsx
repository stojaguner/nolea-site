import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nolea.skin"),
  title: {
    default: "NOLEA",
    template: "%s | NOLEA",
  },
  description:
    "Barrier-first skincare for young swimmers. Join the waitlist for early access and launch updates from NOLEA.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NOLEA",
    description:
      "Barrier-first skincare for young swimmers. Join the waitlist for early access and launch updates.",
    url: "https://nolea.skin",
    siteName: "NOLEA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOLEA",
    description:
      "Barrier-first skincare for young swimmers. Join the waitlist for early access and launch updates.",
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
