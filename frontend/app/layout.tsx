import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PureRoot — Pure by Nature",
  description: "Natural ghee, karam powders and everyday essentials."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
