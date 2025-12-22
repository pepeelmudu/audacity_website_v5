import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ModeProvider } from "@/contexts/ModeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const beltramTest = localFont({
  src: "../fonts/beltram/BeltramTest-Medium.otf",
  variable: "--font-beltram-medium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AUDACITY - AI-Powered Recruiting",
  description: "Revoluciona el reclutamiento con inteligencia artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${beltramTest.variable} antialiased`}
      >
        <ModeProvider>
          {children}
        </ModeProvider>
      </body>
    </html>
  );
}
