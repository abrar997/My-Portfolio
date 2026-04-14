import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
export const metadata: Metadata = {
  title: "Abrar Muthana Rakea",
  description: "Frontend web developer",

  // icons: "assets/me.jpg",
};
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
