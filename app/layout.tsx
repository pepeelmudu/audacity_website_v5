import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ModeProvider } from "@/contexts/ModeContext";

// Aeonik Font Family
const aeonikRegular = localFont({
  src: "../public/fonts/Aeonik/AeonikTRIAL-Regular.otf",
  variable: "--font-aeonik-regular",
  display: "swap",
});

const aeonikMedium = localFont({
  src: "../public/fonts/Aeonik/AeonikTRIAL-Medium.otf",
  variable: "--font-aeonik-medium",
  display: "swap",
});

const aeonikSemiBold = localFont({
  src: "../public/fonts/Aeonik/AeonikTRIAL-SemiBold.otf",
  variable: "--font-aeonik-semibold",
  display: "swap",
});

const aeonikBold = localFont({
  src: "../public/fonts/Aeonik/AeonikTRIAL-Bold.otf",
  variable: "--font-aeonik-bold",
  display: "swap",
});

const aeonikLight = localFont({
  src: "../public/fonts/Aeonik/AeonikTRIAL-Light.otf",
  variable: "--font-aeonik-light",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AUDACITY - AI-Powered Recruiting",
  description: "Find AI-native talent and fill open roles faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aeonikRegular.variable} ${aeonikMedium.variable} ${aeonikSemiBold.variable} ${aeonikBold.variable} ${aeonikLight.variable} antialiased`}
        style={{ fontFamily: 'var(--font-aeonik-regular)' }}
      >
        <ModeProvider>
          {children}
        </ModeProvider>
      </body>
    </html>
  );
}
