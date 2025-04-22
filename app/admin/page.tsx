import { buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { DeleteCitationButton } from "./delete-citation-button";

const prisma = new PrismaClient();


export default async function Page() {
    await new Promise((r) => setTimeout(r, 2000)); 

    const citations = await prisma.citation.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
   
    return (
        <Card className="px-10 ">
            <CardHeader>
                <CardTitle className="mb-4">
                    <h2 className="text-lg font-semibold">Admin Dashboard</h2>
                </CardTitle>
                <CardContent className="flex flex-col gap-4 ">
                    {
                        citations.map((citation) => (
                            <Card className="p-4 flex items-start gap-4" key={citation.id}>
                                <div className="flex flex-col gap-2 flex-1">
                                    <p className="relative pl-8 italic ">
                                        {citation.text} 
                                    </p>

                                    <p>-- { citation.author} </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <DeleteCitationButton id={citation.id} />
                                    <Link 
                                        href={`/admin/citations/${citation.id}`} 
                                        className={`${buttonVariants({
                                            size: "sm",
                                            variant: "outline",
                                        })} hover:bg-green-600`}
                                        >
                                        Editer
                                    </Link>
                                    <Link 
                                        href={`/citations/${citation.id}`} 
                                        className={`${buttonVariants({
                                            size: "sm",
                                            variant: "outline",
                                        })} hover:bg-green-600`}
                                        >
                                        Partager
                                    </Link>
                                </div>
                               
                            </Card>
                        ))
                    }

                    <Link className={`${buttonVariants({ variant: "outline", size: "lg" })} hover:bg-blue-500`}
                        href="/admin/citations/new" 
                    >
                    Creez une Citation
                    </Link>

                </CardContent>

            </CardHeader>
        </Card>
    );
}