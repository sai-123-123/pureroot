import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PureRoot — Pure by Nature",
  description:
    "Discover natural ghee, traditional karam powders and everyday essentials from PureRoot.",

  openGraph: {
    title: "PureRoot — Pure by Nature",
    description:
      "Natural ghee, traditional karam powders and everyday essentials.",
    url: "https://pureroot.vercel.app",
    siteName: "PureRoot",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PureRoot — Pure by Nature",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PureRoot — Pure by Nature",
    description:
      "Natural ghee, traditional karam powders and everyday essentials.",
    images: ["/og-image.jpg"],
  },
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
