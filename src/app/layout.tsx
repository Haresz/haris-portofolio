import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { fonts } from "./fonts";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Haris's Portofolio",
  description: "Muhammad Haris Al Fikri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.montserrat.variable} ${fonts.spaceGrotesk.variable}`}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
