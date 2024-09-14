"use client";
import React from "react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";


export default function GridBackgroundDemo() {
  return (
    <div className="flex justify-center items-center mt-56">
      <div className="flex flex-col items-center justify-center text-neutral-200">
        <p className="opacity-70 text-xs sm:text-xl">Student Organization</p>

        <p className="text-4xl tracking-wide sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-[#e0cc92] to-[#8d6531] py-2">
          Ekalavya
        </p>
        <p className="sm:text-xl text-lg bg-clip-text text-transparent font-bold bg-gradient-to-b from-neutral-200 to-neutral-400 ">अंतः अस्ति प्रारंभ</p>

        
      </div>
    </div>
  );
}
