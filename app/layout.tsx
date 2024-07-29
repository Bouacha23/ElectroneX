'use client'


import type { Metadata } from "next";
import Header from "@/app/ui/shop/header"
import Background from "@/app/ui/background"
import Footer from "@/app/ui/shop/footer"
import { robots } from "@/app/ui/fonts"
import "./globals.css";
import {
  ClerkProvider,

} from '@clerk/nextjs'
import { ElectronProvider} from "@/app/(Context)/context"


const metadata: Metadata = {
  title: "ElectronX",
  description: "ecommerce platform for elctronique device",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ElectronProvider>
      <html lang="en">
        <body className={robots.className } >
          <Header/>
          <Background/>
          {children}
          <Footer/>
          </body>
      </html>
      </ElectronProvider>
    </ClerkProvider>
  );
}

