import { PrismaClient } from '@prisma/client';
import { cookies } from "next/headers";

const client = new PrismaClient();

export async function GET(){
    const _ = cookies()
    console.log(_)
    const data = await client.user.findMany();
    return new Response(JSON.stringify(data),{
        headers:{
            'Content-Type':'application/json',
            'Cache-Control': 'no-store'
        }
    })
}

export const fetchCache = 'force-no-store'; 