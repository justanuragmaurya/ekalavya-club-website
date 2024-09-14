import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


export async function POST(req: NextRequest){
    const data = await req.json();

    await client.user.create({
        data: {
            name: data.name,
            regNumber: data.regNumber,
            phone: data.phone,
            email: data.email,
            year: parseInt(data.year),
            program: data.program,
            reason: data.reason
        }
    });
    
    return NextResponse.json(data);
}