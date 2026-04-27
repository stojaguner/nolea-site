import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOLÉA | Invisible protection. Visible care.",
  description:
    "A pediatric-informed, barrier-first skincare brand for children exposed to chlorinated water and environmental stressors.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
