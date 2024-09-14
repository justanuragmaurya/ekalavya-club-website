"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useToast } from "@/hooks/use-toast"

import { bouncy } from 'ldrs'



function Join() {

  // Default values shown
  const [name, setName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [program, setProgram] = useState("");
  const [reason, setReason] = useState("");

  const [loading, setLoading] = useState(false);

  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setLoading(true);
    const response = await axios.post("/api/join", { name, regNumber, phone, email, year, program, reason })
    response.status == 200 ? toast({
      title: "Done",
      description: "Data posted to server !",
    }) : toast({
      variant: "destructive",
      title: "Failed",
      description: "Server issue or email already exists"
    });
    setLoading(false);
  };

  useEffect(() => {
    bouncy.register()
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen m-2">
      <div className="w-full max-w-lg p-8 space-y-6 bg-[#1a1a1a] rounded-lg shadow-xl z-10">
        <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#e0cc92] to-[#8d6531]">
          Join Eklavya
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-200">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="mt-1 block w-full px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#e0cc92]"
              required
            />
          </div>
          <div>
            <label htmlFor="regNumber" className="block text-sm font-medium text-neutral-200">
              Registration Number
            </label>
            <input
              type="text"
              id="regNumber"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              placeholder="e.g., 124xxxx8"
              className="mt-1 block w-full px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#e0cc92]"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-200">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 9876543210"
              className="mt-1 block w-full px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#e0cc92]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@example.com"
              className="mt-1 block w-full px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#e0cc92]"
              required
            />
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-neutral-200">
              Current Year
            </label>
            <select
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#e0cc92]"
              required
            >
              <option value="">Select your year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>
          <div>
            <label htmlFor="program" className="block text-sm font-medium text-neutral-200">
              Program
            </label>
            <input
              type="text"
              id="program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              placeholder="e.g., B.Tech Computer Science"
              className="mt-1 block w-full px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#e0cc92]"
              required
            />
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-neutral-200">
              Why do you want to join the club?
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Share your motivation for joining Ekalavya..."
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#e0cc92]"
              required
            ></textarea>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-[#e0cc92] to-[#8d6531] text-[#1a1a1a] hover:from-[#d6c28a] hover:to-[#7d5c2c]">
            {loading?<l-bouncy
              size="45"
              speed="1.75"
              color="white"
            ></l-bouncy> :"Submit Application"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Join;