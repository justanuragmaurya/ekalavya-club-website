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
  const [acceptingEmail, setAcceptingEmail] = useState<number | null>(null);
  const [rejectingEmail, setRejectingEmail] = useState<number | null>(null);
  const [members, setMembers] = useState<User[]>([]);
  const [showingMembers, setShowingMembers] = useState(false);

  const { toast } = useToast();

  const getMembers = async () => {
    const password = prompt("Enter the admin password:");
    if (!password) return;

    setIsLoading(true);
    try {
      const authResponse = await axios.post("/api/auth", { password });
      if (authResponse.data.success) {
        const response = await axios.get("/api/findmembers");
        setMembers(response.data);
        setShowingMembers(true);
        setIsAuthenticated(true);
      } else {
        alert("Incorrect password");
      }
    } catch (error) {
      console.error("Error fetching members:", error);
      toast({
        title: "Error",
        description: "Failed to fetch members. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

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
        setShowingMembers(false);
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

  const sendMail = async (user: User, index: number, action: 'accept' | 'reject') => {
    if (action === 'accept') {
      setAcceptingEmail(index);
    } else {
      setRejectingEmail(index);
    }

    try {
      if (action === 'accept') {
        const emailResponse = await axios.post("/api/sendmail", { user });
        const acceptResponse = await axios.post("/api/acceptuser", { user });

        if (emailResponse.status === 200 && acceptResponse.status === 200) {
          toast({
            title: "User Accepted",
            description: `Email sent and user status updated for ${user.name}`,
            duration: 3000,
          });
        } else {
          throw new Error("Failed to process user");
        }
      } else {
        const rejectResponse = await axios.post("/api/rejectuser", { user });

        if (rejectResponse.status === 200) {
          toast({
            title: "User Rejected",
            description: `Rejection email sent and user removed for ${user.name}`,
            duration: 3000,
          });
        } else {
          throw new Error("Failed to reject user");
        }
      }
      const usersResponse = await axios.get("/api/findusers");
      setData(usersResponse.data);
    } catch (error) {
      console.error("Error processing user:", error);
      toast({
        title: "Error",
        description: `Failed to ${action} user. Please try again.`,
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setAcceptingEmail(null);
      setRejectingEmail(null);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div className='flex gap-5'>
        <Button onClick={getData} className="mb-4 bg-[#e0cc92] text-black hover:bg-[#e0cc92] hover:text-black" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Show Applicants'}
        </Button>
        <Button onClick={getMembers} className="mb-4 bg-[#e0cc92] text-black hover:bg-[#e0cc92] hover:text-black" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Show Members'}
        </Button>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#e0cc92]"></div>
        </div>
      ) : isAuthenticated && (
        <>
          <div>
            <h2 className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#e0cc92] to-[#8d6531] my-5 text-3xl'>
              {showingMembers ? `Total Members: ${members.length}` : `Total Applicants: ${data.length}`}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(showingMembers ? members : data).map((user, index) => (
              <div key={user.id} className="bg-[#1a1208] p-4 rounded-lg shadow-xl border-[0.5px] border-[#3a2d00]">
                <h3 className="text-xl font-semibold text-[#e0cc92] mb-2">{user.name}</h3>
                <p className="text-neutral-300"><strong>Reg Number:</strong> {user.regNumber}</p>
                <p className="text-neutral-300"><strong>Phone:</strong> {user.phone}</p>
                <p className="text-neutral-300"><strong>Email:</strong> {user.email}</p>
                <p className="text-neutral-300"><strong>Year:</strong> {user.year}</p>
                <p className="text-neutral-300"><strong>Program:</strong> {user.program}</p>
                <p className="text-neutral-300"><strong>Reason:</strong> {user.reason}</p>
                {!showingMembers && (
                  <div className='flex gap-5 mt-2'>
                    <Button
                      className='bg-green-500 text-black hover:bg-green-700 hover:text-black'
                      onClick={() => sendMail(user, index, 'accept')}
                      disabled={acceptingEmail === index || rejectingEmail === index}
                    >
                      {acceptingEmail === index ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Accepting...
                        </>
                      ) : (
                        'Accept'
                      )}
                    </Button>
                    <Button
                      className='bg-red-500 text-black hover:bg-red-700 hover:text-black'
                      onClick={() => sendMail(user, index, 'reject')}
                      disabled={acceptingEmail === index || rejectingEmail === index}
                    >
                      {rejectingEmail === index ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Rejecting...
                        </>
                      ) : (
                        'Reject'
                      )}
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Page