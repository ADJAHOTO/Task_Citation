import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CitationForm } from "../citation-form";
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

    return <CitationForm citation={ citation } />
    
}