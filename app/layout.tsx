import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Menu from "@/components/Menu"
import { Inter,Nanum_Myeongjo } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const nanum_myeongjo = Nanum_Myeongjo({weight:"400",subsets:["latin"]})

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
      <body className={nanum_myeongjo.className}>
        <Menu/>
        <Header/>
        <LandingPage data=''/>
        {children}
    
        <Footer/>
        </body>
    </html>
  );
}
