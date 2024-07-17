import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import GetInTouch from "@/components/GetInTouch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catering",
  description: "Catering app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <LandingPage/>
        {children}
        <GetInTouch/>
        <Footer/>
        </body>
    </html>
  );
}
