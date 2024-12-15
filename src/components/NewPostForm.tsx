"use client";
import { Dispatch, SetStateAction } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CircleXIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { createPost } from "@/actions/createPost";
import { newPostSchema } from "@/zod";
  
interface Props {
    setOpenForm:  Dispatch<SetStateAction<boolean>>;
    userId: string;
    userName: string;
    photoURL: string;
}

export default function NewPostForm({ setOpenForm, userName, userId, photoURL }:Props) {

    const form = useForm<z.infer<typeof newPostSchema>>({
        resolver: zodResolver(newPostSchema),
        defaultValues: {
            publicName: userName,
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
            showProfilePhoto: true
        },
    })
 
    async function onSubmit(values: z.infer<typeof newPostSchema>) {
        const response = await createPost({ 
            ...values, 
            userId, 
            profilePhoto: values.showProfilePhoto ? photoURL : null 
        });

        console.log(response)
        /* console.log({ ...values, userId, photoURL }); */
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
                                <FormLabel>Equipo actual (opcional)</FormLabel>
                                <FormDescription>
                                    ¿Quiénes forman parte del proyecto en este momento?
                                </FormDescription>
                                <FormControl>
                                    <Textarea
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
                            name="showProfilePhoto"
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