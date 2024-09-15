"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios'
import React, { useState } from 'react'
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
  const [sendingEmail, setSendingEmail] = useState<number | null>(null);
  const { toast } = useToast();

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

  const sendMail = async (user: User, index: number) => {
    setSendingEmail(index);
    try {
      const response = await axios.post("/api/sendmail", { user });
      console.log(response.data);
      toast({
        title: "Email Sent",
        description: `Email successfully sent to ${user.name}`,
        duration: 3000,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send email. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setSendingEmail(null);
    }
  };

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
          {data.map((user, index) => (
            <div key={user.id} className="bg-[#1a1208] p-4 rounded-lg shadow-xl border-[0.5px] border-[#3a2d00]">
              <h3 className="text-xl font-semibold text-[#e0cc92] mb-2">{user.name}</h3>
              <p className="text-neutral-300"><strong>Reg Number:</strong> {user.regNumber}</p>
              <p className="text-neutral-300"><strong>Phone:</strong> {user.phone}</p>
              <p className="text-neutral-300"><strong>Email:</strong> {user.email}</p>
              <p className="text-neutral-300"><strong>Year:</strong> {user.year}</p>
              <p className="text-neutral-300"><strong>Program:</strong> {user.program}</p>
              <p className="text-neutral-300"><strong>Reason:</strong> {user.reason}</p>
              <div className='flex gap-5 mt-2'>
                <Button 
                className='bg-green-500 text-black hover:bg-green-700 hover:text-black'
                  onClick={() => sendMail(user, index)} 
                  disabled={sendingEmail === index}
                >
                  {sendingEmail === index ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Accept'
                  )}
                </Button>
                <Button className='bg-red-500 text-black hover:bg-red-700 hover:text-black'> Reject </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Page