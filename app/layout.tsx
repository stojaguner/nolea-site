import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nolea.skin"),
  title: "NOLEA — Aqua Veil",
  description:
    "Refined swim skincare for skin under constant exposure. Aqua Veil is a protective mist designed to support the skin barrier before and after chlorine and environmental stress.",
  openGraph: {
    title: "NOLEA — Aqua Veil",
    description:
      "Refined swim skincare for skin under constant exposure.",
    url: "https://nolea.skin",
    siteName: "NOLEA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOLEA — Aqua Veil",
    description:
      "Refined swim skincare for skin under constant exposure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
        <style>{`
          :root {
            --font-sans: ${inter.style.fontFamily};
            --font-serif: ${cormorant.style.fontFamily};
            --bg: #f7f8f6;
            --text: #1d2628;
          }

          * {
            box-sizing: border-box;
          }

          html, body {
            margin: 0;
            padding: 0;
            background: var(--bg);
            color: var(--text);
          }

          body {
            font-family: var(--font-sans), sans-serif;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-serif), serif;
          }

          a {
            color: inherit;
            text-decoration: none;
          }
        `}</style>
      </body>
    </html>
  );
}
