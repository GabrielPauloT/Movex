import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import ScrollOrchestrator from "@/components/layout/ScrollOrchestrator";

export const metadata: Metadata = {
  title: "MoverX Solutions - Trusted Interstate Removalists Since 2009",
  description: "Family-owned interstate removalists from Melbourne to Sydney, Canberra & Adelaide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ScrollOrchestrator />
        {children}
      </body>
    </html>
  );
}