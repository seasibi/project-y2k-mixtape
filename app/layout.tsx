import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

// Configure the 8-bit font
const pixelFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel", // Ties it to a CSS variable
});

export const metadata: Metadata = {
  title: "Mixxtape Vol. 1",
  description: "A digital mixtape fitted for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixelFont.variable}`}>
      <body className="bg-cyberDark antialiased text-white">
        {children}
      </body>
    </html>
  );
}