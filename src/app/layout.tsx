import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abrar Muthana Rakea",
  description: "Frontend web developer",
  // icons: "assets/me.jpg",
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
