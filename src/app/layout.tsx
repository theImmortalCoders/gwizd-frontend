import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
/* Components */
import Navbar from "../components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gwizd",
  description: "The best website!!!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
