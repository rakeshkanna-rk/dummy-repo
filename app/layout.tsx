import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinematic",
  weight: ["400", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "ZYNORA - Enter the Stories. Live the Legends.",
  description: "A cinematic college event inspired by iconic movies and series. Breaking Bad, Game of Thrones, Squid Game, Money Heist, Pirates of the Caribbean, and Stranger Things.",
  keywords: ["ZYNORA", "college event", "cinematic", "movie inspired", "games", "challenges"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${inter.variable} antialiased bg-cinematic-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
