import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "General Robotics",
  description: "Modular AI Robots for Industrial Applications",
  icons: {
    icon: "/GR_Icone.ico",
    shortcut: "/GR_Icone.ico",
    apple: "/GR_Icone.ico",
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
