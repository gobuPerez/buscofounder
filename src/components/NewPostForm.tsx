"use client";
import { Dispatch, SetStateAction, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AlertCircle, CircleXIcon, Loader2 } from "lucide-react";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Post as PostSchema, StandarResponse } from "@/lib/interfaces";
  
interface Props {
    userId: string;
    userName: string;
    photoURL: string;
    setPostArray: Dispatch<SetStateAction<PostSchema[]>>;
    setOpenForm: Dispatch<SetStateAction<boolean>>;
}

export default function NewPostForm({ userName, userId, photoURL, setPostArray, setOpenForm }:Props) {

    const [response, setResponse] = useState<StandarResponse>({ status: "empty", message: "" });

    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof newPostSchema>>({
        resolver: zodResolver(newPostSchema),
        defaultValues: {
            problem: "",
            vision: "",
            lookingFor: "",
            offer: "",
            team: "",
            location: "",
            projectPhase: "",
            publicName: userName,
            aboutMe: "",
            contactEmail: "",
            linkedin: "",
            instagram: "",
            twitter: "",
            showProfilePhoto: true
        },
    })
 
    async function onSubmit(values: z.infer<typeof newPostSchema>) {
        
        setLoading(true);

        const formResponse = await createPost({ 
            ...values, 
            userId, 
            profilePhoto: values.showProfilePhoto ? photoURL : null 
        });

        setLoading(false);

        if (formResponse.status === "error") setResponse(formResponse);
        else {
            setOpenForm(false);
        }
    }

    return (
        <Card className="mb-3">
            <CardHeader>
                <CardTitle className="flex justify-end items-center">
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
                        <h3 className="text-xl text-center font-bold">Sobre el proyecto</h3>
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
                                <FormLabel>Mi visión (opcional)</FormLabel>
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

                        <h3 className="text-xl text-center font-bold">Sobre mí</h3>
                        
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

                        <h3 className="text-xl text-center font-bold">Contacto</h3>
                        <CardDescription>   
                            Las formas de contacto que introduzcas a continuación solo serán visibles para usuarios registrados en la plataforma.
                        </CardDescription>

                        <FormField
                            control={form.control}
                            name="contactEmail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email de contacto (opcional)</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="tu-nombre@email.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="linkedin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Linkedin (opcional)</FormLabel>
                                    <FormDescription>
                                        Enlace a tu perfil de Linkedin
                                    </FormDescription>
                                    <FormControl>
                                        <Input placeholder="https://www.linkedin.com/in/tu-usuario" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="instagram"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Instagram (opcional)</FormLabel>
                                    <FormDescription>
                                        Tu nombre de usuario en Instagram
                                    </FormDescription>
                                    <FormControl>
                                        <Input placeholder="https://instagram.com/tu-usuario" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="twitter"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>X (opcional)</FormLabel>
                                    <FormDescription>
                                        Tu nombre de usuario en X
                                    </FormDescription>
                                    <FormControl>
                                        <Input placeholder="https://x.com/tu-usuario" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <CardDescription>   
                            Antes de publicar el mensaje, asegúrate que los enlaces funcionan y redirigen correctamente a tus perfiles de redes sociales.
                        </CardDescription>

                        {
                            (!loading && response.status === "error") &&
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>
                                    { response.message }
                                </AlertDescription>
                            </Alert>
                        }

                        <Button type="submit" className="w-full" disabled={loading}>
                        { 
                            loading ? 
                            <>
                                <Loader2 className="animate-spin" /> Cargando
                            </>
                            : 
                            "Publicar" 
                        }               
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}