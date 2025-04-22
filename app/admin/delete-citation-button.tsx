'use client'
import { Button } from '@/components/ui/button';
import { useState } from 'react'
import { deleteCitationAction } from './citations/citations.action';
import { useRouter } from 'next/navigation'

export function DeleteCitationButton(props: {id:number}) {
    const [isConfirm, setIsConfirm] = useState(false)
    //Rafraichir une page on utilise le hook useRouter
    const router =  useRouter()

    const onDelete = async () => {
        const result = await deleteCitationAction(props.id)
        if (result.message) {
            //Ici on raffraichis la page du navigateur 
            router.refresh()
        } else {
            
        }
    };

    return (
        <Button
            size="sm"
            onClick={() => {
                if (isConfirm) {
                    onDelete();
                } else {
                    setIsConfirm(true);
                }
            }}
            variant={isConfirm ? "destructive" : "outline"}
        >
            Supprimer
            
        </Button>
    );
}