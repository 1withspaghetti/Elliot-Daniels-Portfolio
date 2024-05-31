import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        {children}
        <div className="w-full px-4 py-8 text-center">
          <span className="opacity-50">Website made by Tyler Place :D</span>
        </div>
      </body>
    </html>
  );
}
