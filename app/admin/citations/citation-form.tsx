'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useFormStatus } from 'react-dom'
import { createCitationAction, updateCitationAction } from './citations.action'
import { Citation } from '@prisma/client'

export  function CitationForm(props: {citation?: Citation }) {
    const onsubmit = async (formData: FormData) => {
        let error: null | string = null;
        if (props.citation) {
            const json = await updateCitationAction(props.citation.id, {
                author: String(formData.get('auteur')),
                text: String(formData.get('text'))
            })
            error = json.error
        } else {
            const json = await createCitationAction({
                author: String(formData.get('auteur')),
                text: String(formData.get('text'))
            })
            error = json.error
        }
        if (error) {
            alert(error)
        } else {
            alert("Citation created or updated successfully")
        }
}

   
    return (
        <Card className='p-6'>
            <CardHeader>
                <CardTitle>{ props.citation ? "Update" : "Create"} Citation</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-3'>
                <form
                    action={async (formData) => {
                        await onsubmit(formData)
                    }}
                    className='flex flex-col gap-2'
                >
                    <Label>
                        Citation
                        <Input defaultValue={props.citation?.text} name="text" />
                    </Label>

                    <div className='flex flex-col mt-4'>
                        <Label>
                            Auteur
                            <Input defaultValue={props.citation?.author} name="auteur" />
                        </Label>
                    </div>
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
    )
}

// Composant bouton de soumission
const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <Button type="submit" disabled={pending} className='mt-4 w-full'>
            {pending ? 'Loading...' : 'Soumettre'}
        </Button>
    )
}
