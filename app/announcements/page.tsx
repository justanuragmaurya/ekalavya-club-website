import React from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Announcement {
  id: number;
  title: string;
  date: string;
  content: string;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "We are Recruting",
    date: "2024-09-14",
    content: "Join Eklavya Club and unlock your potential! 🚀 We're recruiting passionate individuals ready to learn, create, and lead—be a part of something extraordinary! 🌟."
  }
];

function Announcements() {
  return (
    <div className="relative min-h-screen bg-[#1a1208] text-neutral-200">
      <div className="absolute inset-0 bg-[#1a1208]"></div>
      <div className="relative container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-[#e0cc92] to-[#8d6531]">
          Announcements
        </h1>
        <div className="grid gap-8">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="bg-[#150f00] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-[#e0cc92] mb-2">{announcement.title}</h2>
              <p className="text-sm text-neutral-400 mb-4">{new Date(announcement.date).toLocaleDateString()}</p>
              <p className="text-neutral-300 mb-4">{announcement.content}</p>
              <Link href={`/announcements`}>
                <Button className="bg-[#e0cc92] text-black hover:bg-transparent hover:text-[#e0cc92] border border-[#e0cc92]">
                  Read More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Announcements
