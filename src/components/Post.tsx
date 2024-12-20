"use client";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { Mail, Trash } from "lucide-react";
import Link from "next/link";
import { Post as PostSchema } from "@/lib/interfaces";
import PostSection from "@/components/PostSection";
import { elapsedTime } from "@/lib/utils"; 
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DeletePostButton from "./DeletePostButton";
  
interface Props {
    logged: boolean;
    post: PostSchema;
    userId: string;
    postArray: PostSchema[]
    setPostArray: Dispatch<SetStateAction<PostSchema[]>>
}

export default function Post({ logged, post, userId, postArray, setPostArray }: Props) {

    const [showContactInfo, setShowContactInfo] = useState<boolean>(false);

    const [openDialog, setOpenDialog] = useState(false);

    return (
        <section className="border rounded-md p-4 bg-white mb-5 shadow-md space-y-4">

            <div className="flex flex-row justify-start items-center space-x-5 mb-5">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-12 rounded-full"
                />
                
                <div className="flex flex-col">
                    <p className="font-bold">{post.publicName}</p>
                    <p>{elapsedTime(post.createdAt)}</p>
                </div>
            </div>
            
            {
                post.problem &&
                <>
                    <PostSection
                        title="El problema que quiero resolver"
                        content={post.problem}
                        iconName="puzzle" 
                        iconForeground="text-rose-700" 
                        iconBackground="bg-rose-50"
                    />
                </>
            }
            
            {
                post.vision &&
                <>
                    <PostSection
                        title="Mi visión"
                        content={post.vision}
                        iconName="eye" 
                        iconForeground="text-teal-700" 
                        iconBackground="bg-teal-50"
                    />
                </>
            }

            {
                post.lookingFor &&
                <>
                    <PostSection
                        title="Busco"
                        content={post.lookingFor}
                        iconName="scan-search" 
                        iconForeground="text-sky-700" 
                        iconBackground="bg-sky-50"
                    />
                </>
            }

            {
                post.offer &&
                <>
                    <PostSection
                        title="Ofrezo"
                        content={post.offer}
                        iconName="hand-shake" 
                        iconForeground="text-yellow-700" 
                        iconBackground="bg-yellow-50"
                    />
                </>
            }


            {
                post.team &&
                <>
                    <PostSection
                        title="Sobre el equipo"
                        content={post.team}
                        iconName="users-round" 
                        iconForeground="text-indigo-700" 
                        iconBackground="bg-indigo-50"
                    />
                </>
            }


            {
                post.location &&
                <>
                    <PostSection
                        title="Ubicación"
                        content={post.location}
                        iconName="map-pin" 
                        iconForeground="text-red-700" 
                        iconBackground="bg-red-50"
                    />
                </>
            }


            {
                post.projectPhase &&
                <>
                    <PostSection
                        title="Fase del proyecto"
                        content={post.projectPhase}
                        iconName="chart-no-axes-gantt" 
                        iconForeground="text-emerald-700" 
                        iconBackground="bg-emerald-50"
                    />
                </>
            }


            {
                post.aboutMe &&
                <>
                    <PostSection
                        title="Sobre mí"
                        content={post.aboutMe}
                        iconName="user" 
                        iconForeground="text-purple-700" 
                        iconBackground="bg-purple-50"
                    />
                </>
            }


            {
                ((logged && userId === post.authorId) || (logged && showContactInfo)) &&
                <>

                    <PostSection
                        title="Contacto"
                        content={null}
                        iconName="mail" 
                        iconForeground="text-gray-700" 
                        iconBackground="bg-gray-50"
                    />

                    <div className="flex flex-col space-y-2">

                        {
                            post.contactEmail &&
                            <Button variant="outline">
                                <Mail /> { post.contactEmail }
                            </Button>
                        }


                        {
                            post.linkedin &&
                            <Button asChild variant="outline">
                                <a href={`${post.linkedin}`} target="__blank" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                    Visitar perfil de Linkedin
                                </a>
                            </Button>
                        }

                        {
                            post.instagram &&
                            <Button asChild variant="outline">
                                <a href={post.instagram} target="__blank" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                    Visitar perfil de Instagram
                                </a>
                            </Button>
                        }


                        {
                            post.twitter &&
                            <Button asChild variant="outline">
                                <a href={post.twitter} target="__blank" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                                    Visitar perfil de X
                                </a>
                            </Button>
                        }

                    </div>
                </>
            }

            {
                ((logged && !showContactInfo) && (logged && userId !== post.authorId)) ?
                <Button className="w-full" onClick={ () => setShowContactInfo(true) }>Mostrar información de contacto</Button>
                : (!logged || (logged && userId !== post.authorId)) &&
                <Button asChild className="w-full">
                    <Link href="/login">
                        Mostrar información de contacto
                    </Link>
                </Button>
            }

            {
                (logged && userId === post.authorId) &&
                    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                        <DialogTrigger asChild>
                            <Button variant="destructive" className="w-full"> 
                                <Trash />Eliminar mensaje
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Eliminar mensaje</DialogTitle>
                                <DialogDescription>
                                    ¿Estás seguro de que quieres eliminar el mensaje?
                                </DialogDescription>
                            </DialogHeader>
                            <DeletePostButton 
                                userId={userId} 
                                authorId={post.authorId}
                                postId={post.id}
                                setOpenDialog={setOpenDialog}
                                postArray={postArray}
                                setPostArray={setPostArray}
                            />
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                    Cancelar
                                </Button>
                            </DialogClose>
                        </DialogContent>
                    </Dialog>
            }

        </section>
    );
}