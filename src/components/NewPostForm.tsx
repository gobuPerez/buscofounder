"use client";
import { Dispatch, SetStateAction } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CircleXIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { createPost } from "@/actions/createPost";
   
const formSchema = z.object({
    publicName: z.string({required_error: "Campo obligatorio.", invalid_type_error: "Por favor, usa solo texto." }).trim()
        .min(1, { message: "Campo obligatorio." })
        .max(64, { message: "Este campo debe tener menos de 65 caracteres." }),
    problem: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    vision: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    aboutMe: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    lookingFor: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    offer: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    team: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    location: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }), 
    projectPhase: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    linkedin: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    instagram: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    twitter: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    contactEmail: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    profilePhoto: z.boolean()
});
  
interface Props {
    setOpenForm:  Dispatch<SetStateAction<boolean>>
}

export default function NewPostForm({ setOpenForm }:Props) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            publicName: "",
            problem: "",
            vision: "",
            aboutMe: "",
            lookingFor: "",
            offer: "",
            team: "",
            location: "",
            projectPhase: "",
            linkedin: "",
            instagram: "",
            twitter: "",
            contactEmail: "",
            profilePhoto: true,
        },
    })
 
    async function onSubmit(values: z.infer<typeof formSchema>) {
        await createPost();
        console.log(values)
    }

    return (
        <Card className="mb-3">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    Nuevo mensaje
                    <CircleXIcon className="size-5 hover:cursor-pointer" onClick={ () => setOpenForm(false) }/>
                </CardTitle>
                <CardDescription>
                    A continuación tienes una serie de preguntas útiles para describir tu proyecto e informar a los usuarios sobre lo que estás buscando. La mayoría
                    de los campos son opcionales, pero es recomendable completar el mayor número posible para que los usuarios te conozcan mejor a ti y a tu proyecto.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="publicName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre público (obligatorio)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Este es el nombre que aparecerá en la publicación
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="problem"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Problema (opcional)</FormLabel>
                                <FormDescription>
                                    ¿Qué problema estás intentando resolver?, ¿a quién afecta?, ¿qué soluciones existen actualmente para ese problema?
                                </FormDescription>
                                <FormControl>
                                    <Textarea
                                        placeholder="He descubierto que..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="vision"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Visión (opcional)</FormLabel>
                                <FormDescription>
                                    ¿Cuáles son las metas y aspiraciones del proyecto?
                                </FormDescription>
                                <FormControl>
                                    <Textarea
                                        placeholder="He descubierto que..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="aboutMe"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Sobre mí (opcional)</FormLabel>
                                <FormDescription>
                                    Experiencia, conocimientos, trayectoria profesional y vital. ¿Por qué trabajar contigo?
                                </FormDescription>
                                <FormControl>
                                    <Textarea
                                        placeholder="He descubierto que..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lookingFor"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Busco... (opcional)</FormLabel>
                                <FormDescription>
                                    ¿Qué habilidades debería tener una persona para unirse a tu proyecto?, ¿cuáles serían 
                                    sus responsabilidades?, ¿qué experiencia previa debería tener?, ¿algún requisito adicional?
                                </FormDescription>
                                <FormControl>
                                    <Textarea
                                        placeholder="He descubierto que..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="offer"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Ofrezco (opcional)</FormLabel>
                                <FormDescription>
                                    Salario, participaciones en la empresa, ...
                                </FormDescription>
                                <FormControl>
                                    <Textarea
                                        placeholder="He descubierto que..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="team"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Equipo (opcional)</FormLabel>
                                <FormDescription>
                                    ¿Quiénes forman parte del proyecto en este momento?
                                </FormDescription>
                                <FormControl>
                                    <Textarea
                                        placeholder="He descubierto que..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Ubicación (opcional)</FormLabel>
                                <FormDescription>
                                    ¿En qué ciudad se desarrolla el proyecto?, ¿tienes oficinas?, ¿prefieres el teletrabajo?
                                </FormDescription>
                                <FormControl>
                                    <Textarea
                                        placeholder="He descubierto que..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="projectPhase"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Hitos del proyecto (opcional)</FormLabel>
                                <FormDescription>
                                    ¿Es sólo una idea?, ¿has pasado la fase de validación?, ¿tienes clientes?, ¿has conseguido una ronda de financiación?
                                </FormDescription>
                                <FormControl>
                                    <Textarea
                                        placeholder="He descubierto que..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="profilePhoto"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                <div className="space-y-0.5">
                                    <FormLabel>Foto de perfil</FormLabel>
                                    <FormDescription>
                                        Mostrar mi foto de perfil de Google en la publicación del mensaje
                                    </FormDescription>
                                </div>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        aria-readonly
                                    />
                                </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Publicar</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}