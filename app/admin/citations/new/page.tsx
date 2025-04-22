'use client'

// import { Button } from '@/components/ui/button'
// import { Label } from '@/components/ui/label'
// import { Input } from '@/components/ui/input'
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
// import { useFormStatus } from 'react-dom'
// import { createCitationAction } from '../citations.action'
import { CitationForm } from '../citation-form'

export default function Page() {

    // const createCitation = async (formData: FormData) => {
    //     const json = await createCitationAction({

    //         author: String(formData.get('auteur')),
    //         text: String(formData.get('text'))
    //     })

    //     if (json.error) {
    //         alert(json.error)
            
    //     }
    // }

   
    // return (
    //     <Card className='p-6'>
    //         <CardHeader>
    //             <CardTitle>Créer une Citation</CardTitle>
    //         </CardHeader>
    //         <CardContent className='flex flex-col gap-3'>
    //             <form
    //                 action={async (formData) => {
    //                     await createCitation(formData)
    //                 }}
    //             >
    //                 <Label>
    //                     Citation
    //                     <Input name="citation" />
    //                 </Label>

    //                 <div className='flex flex-col mt-4'>
    //                     <Label>
    //                         Auteur
    //                         <Input name="auteur" />
    //                     </Label>
    //                 </div>
    //                 <SubmitButton />
    //             </form>
    //         </CardContent>
    //     </Card>
    // )

    return <CitationForm />
}

// // Composant bouton de soumission
// const SubmitButton = () => {
//     const { pending } = useFormStatus()
//     return (
//         <Button type="submit" disabled={pending} className='mt-4 w-full'>
//             {pending ? 'Loading...' : 'Soumettre'}
//         </Button>
//     )
// }
