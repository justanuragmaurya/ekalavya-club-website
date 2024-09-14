import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
 

const mont  = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eklavya",
  description: "Eklavya is a student organization dedicated to fostering learning, innovation, and collaboration. We organize workshops, hackathons, and networking events to help students grow their skills and connect with industry professionals.",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mont.className} antialiased`}>
        <Navbar/>
        {children}
        <Toaster />
        <Analytics />
        <h2 className="text-white text-sm text-center opacity-50">*website made by <a href="https://anuragmaurya.me" target="_blank" rel="noopener noreferrer"> <span className="underline py-5 text-[#e0cc92]">ANURAG MAURYA</span></a></h2>
        <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-40",
        )}
      />
      </body>
    </html>
  );
}


