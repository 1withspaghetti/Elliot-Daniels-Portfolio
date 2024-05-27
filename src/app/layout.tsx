import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientAnimatePresence from "@/components/ClientAnimatePresence";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elliot Daniels | Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientAnimatePresence>
          {children}
        </ClientAnimatePresence>
      </body>
    </html>
  );
}
