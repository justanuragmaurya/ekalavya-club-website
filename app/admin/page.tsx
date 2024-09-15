"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios'
import React, { useState } from 'react'

interface User {
  id: number;
  name: string;
  regNumber: string;
  phone: string;
  email: string;
  year: number;
  program: string;
  reason: string;
}

function Page() {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getData = async () => {
    const password = prompt("Enter the admin password:");
    if (!password) return;

    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth", { password });
      if (response.data.success) {
        setIsAuthenticated(true);
        const usersResponse = await axios.get("/api/findusers");
        setData(usersResponse.data);
      } else {
        alert("Incorrect password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <Button onClick={getData} className="mb-4 bg-[#e0cc92] text-black hover:bg-[#e0cc92] hover:text-black" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'GET DATA'}
      </Button>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#e0cc92]"></div>
        </div>
      ) : isAuthenticated && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((user) => (
            <div key={user.id} className="bg-[#1a1208] p-4 rounded-lg shadow-xl border-[0.5px] border-[#3a2d00]">
              <h3 className="text-xl font-semibold text-[#e0cc92] mb-2">{user.name}</h3>
              <p className="text-neutral-300"><strong>Reg Number:</strong> {user.regNumber}</p>
              <p className="text-neutral-300"><strong>Phone:</strong> {user.phone}</p>
              <p className="text-neutral-300"><strong>Email:</strong> {user.email}</p>
              <p className="text-neutral-300"><strong>Year:</strong> {user.year}</p>
              <p className="text-neutral-300"><strong>Program:</strong> {user.program}</p>
              <p className="text-neutral-300"><strong>Reason:</strong> {user.reason}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Page