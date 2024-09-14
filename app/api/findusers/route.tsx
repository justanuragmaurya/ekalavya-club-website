
import { NextRequest , NextResponse} from "next/server";
import { PrismaClient } from '@prisma/client';
import { cookies } from "next/headers";


const client = new PrismaClient();

export async function GET(){
    const _ = cookies()
    const data = await client.user.findMany();
    return(NextResponse.json(data))
}