import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Tobams Groups",
  description: "Tobams Group is a leading digital consulting agency specializing in digital transformation, tech talent empowerment, and innovative digital solutions for global success.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}</body>
    </html>
  );
}