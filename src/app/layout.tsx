import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tobams Group | Training and Development",
  description: "Tobams Group is a leading digital consulting agency specializing in digital transformation, tech talent empowerment, and innovative digital solutions for global success.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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