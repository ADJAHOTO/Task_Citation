import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { prisma } from "@/lib/prisma"; 

export default async function Page(
    props: {
        params: Promise<{ citationId: string }>;
        searchParams : Promise<Record<string,  string | string[] >>;
    }
) {
    const params = await props.params;
    const citationId = params.citationId;

    const citation = await prisma.citation.findFirst({
        where: {
            id: Number(params.citationId)
        }
    })

    if (!citation) {
        return (
            <Card>
                <CardHeader >
                    <CardTitle>
                        The Citation {citationId} not exist....
                    </CardTitle>
                </CardHeader>
            </Card>
        );
    }
    // const searchParams = await props.searchParams

    return (
        <div className="min-h-screen flex  justify-center items-center w-full p-4  ">
            <Card className="p-4 flex items-start gap-4 w-[600px] hover:bg-blue-500 " key={citation.id}>
                <div className="flex flex-col gap-2 flex-1">
                        <p className="relative pl-8 italic ">
                            {citation.text} 
                        </p>

                        <p>-- { citation.author} </p>
                </div>
            </Card>
        

        </div>
       
            
        
    )
    
}