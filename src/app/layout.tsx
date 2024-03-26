import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { fonts } from "./fonts";

export const metadata: Metadata = {
  title: "Haris’s Portofolio",
  description: "Muhammad Haris Al Fikri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.montserrat.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
