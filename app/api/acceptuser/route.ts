import { PrismaClient } from '@prisma/client';
import { cookies } from "next/headers";

const client = new PrismaClient();

export async function POST(req: Request) {
    const _ = cookies()
    console.log(_)
    const { user } = await req.json()
    const email = user.email;
    
    if (!email) {
        return new Response(JSON.stringify({ error: "Email is required" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const data = await client.user.update({
            where: { email: email },
            data: { isMember: true }
        });
        
        return new Response(JSON.stringify({ message: "User updated successfully", data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error updating user:", error);
        return new Response(JSON.stringify({ error: "Failed to update user" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

export const fetchCache = 'force-no-store';