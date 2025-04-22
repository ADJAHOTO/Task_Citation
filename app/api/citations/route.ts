import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
export async function GET() {
    return (
        NextResponse.json(
            {
                ok: true,
                env: process.env.NODE_ENV,
            }
        )
    )
} 

export async function POST(request:NextRequest) {
    const json = await request.json()

    await new Promise((resolve) => setTimeout(resolve, 2000))

    // const data = {
    //     citation: FormData.get('citation'),
    //     auteur: FormData.get('auteur')
    // };

    console.log(FormData)

    const newCitation = await prisma.citation.create(
        {
            data: {
                text: json.citation,
                author: json.auteur
            }
        }
    )

    return NextResponse.json(
        {
           citation: newCitation
        }
    )
}