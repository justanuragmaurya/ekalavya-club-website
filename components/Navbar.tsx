"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="flex justify-between items-center px-4 sm:px-8 py-2 backdrop-blur-sm sticky top-0 z-10 text-white shadow-lg border-b-[1px] border-[#2a1704]">
      <div className="">
        <Link href="/" className="flex items-center justify-center">
        <img src="/favicon.png" alt="Logo" className="w-8 sm:w-10" />
        <h2 className="bg-clip-text text-transparent bg-gradient-to-br from-[#e0cc92] to-[#8d6531] text-lg sm:text-xl font-bold ml-2">Eklavya</h2>
        </Link>
      </div>
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#fafafa] focus:outline-none p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row lg:items-center absolute lg:static left-0 top-full w-full lg:w-auto bg-black lg:bg-transparent py-4 lg:py-0 px-4 lg:px-0 gap-4 lg:gap-5`}
      >
        <Link href="/" className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#e0cc92] to-[#8d6531] hover:scale-105 transition-all">
          Home
        </Link>
        <Link href="/announcements" className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#e0cc92] to-[#8d6531] hover:scale-105 transition-all">
          Announcements
        </Link>
        <Link href="/events" className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#e0cc92] to-[#8d6531] hover:scale-105 transition-all">
          Upcoming Events
        </Link>
        <Link href="/gallery" className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#e0cc92] to-[#8d6531] hover:scale-105 transition-all">
          Gallery
        </Link>
        <Link href="/join">
          <Button className="w-full lg:w-auto bg-neutral-200 hover:bg-neutral-300 hover:scale-105 transition-all  text-[#1a1a1a]">
            Join Us !
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;