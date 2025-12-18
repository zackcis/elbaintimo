import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageAwareScript from "@/components/LanguageAwareScript";

export const metadata: Metadata = {
  title: "ElbaIntimo - Intimo, Pigiami e Beachwear",
  description: "Scopri la nostra selezione di intimo, pigiami e beachwear dei migliori marchi italiani e internazionali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider>
          <LanguageAwareScript />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
