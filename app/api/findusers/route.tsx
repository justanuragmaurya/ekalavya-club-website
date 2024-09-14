
import { NextResponse} from "next/server";
import { PrismaClient } from '@prisma/client';


const client = new PrismaClient();

export async function GET(){
    
    
    const data = await client.user.findMany();
    return(NextResponse.json(data))
}