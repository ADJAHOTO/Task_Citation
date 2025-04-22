'use server'

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function  createCitationAction (citation: {
    author: string,
    text: string,

}) {
    try {
        await prisma.citation.create({
            data: {
                
                author: citation.author,
                text: citation.text,
            }
        
        });
       
    } catch {
        return {
            error: "Erreur lors de la création de la tache."
        };
    }

    redirect('/admin');
    
}

export async function deleteCitationAction(id: number) {
    await prisma.citation.delete({
        where: {
            id,
        }
    })

    return ({
        message:'Deleted in sucess ! '
    })
}

export async function updateCitationAction(id: number,
    citation: {
    text: string,
    author: string

}) {
    try {
        await prisma.citation.update({
            where: {id},
            data: {
                text: citation.text,
                author: citation.author,
            }
        
        });
       
    } catch {
        return {
            error: "Erreur lors de la mise a jour de la tache."
        };
    }
    redirect('/admin');
    
}