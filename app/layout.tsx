import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nolea.skin"),
  title: {
    default: "NOLÉA",
    template: "%s | NOLÉA",
  },
  description: "Barrier-first skincare for young swimmers.",
  applicationName: "NOLÉA",
  keywords: [
    "NOLÉA",
    "skincare for swimmers",
    "children's skincare",
    "barrier-first skincare",
    "chlorine skincare",
    "swim skincare",
    "pediatric skincare",
  ],
  authors: [{ name: "NOLÉA" }],
  creator: "NOLÉA",
  publisher: "NOLÉA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NOLÉA",
    description: "Barrier-first skincare for young swimmers.",
    url: "https://nolea.skin",
    siteName: "NOLÉA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOLÉA",
    description: "Barrier-first skincare for young swimmers.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: ["/favicon.ico"],
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
