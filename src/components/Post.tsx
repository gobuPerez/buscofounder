"use client";
import { Button } from "@/components/ui/button";
import PostTitle from "./PostTitle";
import { useState } from "react";
import { EllipsisVertical, Mail } from "lucide-react";
import Link from "next/link";
  
interface Props {
    logged: boolean;
}

export default function Post({ logged }: Props) {

    const [showContactInfo, setShowContactInfo] = useState<boolean>(false);

    return (
        <section className="border rounded-md p-4 bg-white mb-5 shadow-md space-y-4">

            <div className="flex flex-row justify-start itesm-center space-x-5 mb-5">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-12 rounded-full"
                />
                
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col">
                        <p className="font-bold">Diego</p>
                        <p>Hace 12 horas</p>
                    </div>
                    <EllipsisVertical className="text-gray-400 hover:cursor-pointer" />
                </div>
            </div>
            
            
            <PostTitle
                title="El problema que quiero resolver"
                iconName="puzzle" 
                iconForeground="text-rose-700" 
                iconBackground="bg-rose-50"
            />
            <p>
                Muchos emprendedores encuentran dificultades a la hora de encontrar cofundador para
                su proyecto
            </p>
            
            <PostTitle
                title="Mi visión"
                iconName="eye" 
                iconForeground="text-teal-700" 
                iconBackground="bg-teal-50"
            />
            <p>
                Creo que en el futuro no existirán los coches
            </p>

            <PostTitle
                title="Busco"
                iconName="scan-search" 
                iconForeground="text-sky-700" 
                iconBackground="bg-sky-50"
            />
            <p>
                Muchos emprendedores encuentran dificultades a la hora de encontrar cofundador para
                su proyecto
            </p>

            <PostTitle
                title="Ofrezo"
                iconName="hand-shake" 
                iconForeground="text-yellow-700" 
                iconBackground="bg-yellow-50"
            />
            <p>
                Muchos emprendedores encuentran dificultades a la hora de encontrar cofundador para
                su proyecto
            </p>

            <PostTitle
                title="Sobre el equipo"
                iconName="users-round" 
                iconForeground="text-indigo-700" 
                iconBackground="bg-indigo-50"
            />
            <p>
                Muchos emprendedores encuentran dificultades a la hora de encontrar cofundador para
                su proyecto
            </p>

            <PostTitle
                title="Ubicación"
                iconName="map-pin" 
                iconForeground="text-rose-700" 
                iconBackground="bg-rose-50"
            />
            <p>
                Muchos emprendedores encuentran dificultades a la hora de encontrar cofundador para
                su proyecto
            </p>

            <PostTitle
                title="Fase del proyecto"
                iconName="chart-no-axes-gantt" 
                iconForeground="text-emerald-700" 
                iconBackground="bg-emerald-50"
            />
            <p>
                Muchos emprendedores encuentran dificultades a la hora de encontrar cofundador para
                su proyecto
            </p>

            <PostTitle
                title="Sobre mí"
                iconName="user" 
                iconForeground="text-purple-700" 
                iconBackground="bg-purple-50"
            />
            <p>
                Muchos emprendedores encuentran dificultades a la hora de encontrar cofundador para
                su proyecto
            </p>

            {
                (logged && showContactInfo) &&
                <>
                    <PostTitle
                        title="Contacto"
                        iconName="mail" 
                        iconForeground="text-rose-700" 
                        iconBackground="bg-rose-50"
                    />

                    <div className="flex flex-col space-y-2">

                        <Button variant="outline">
                            <Mail /> usuario@gmail.com
                        </Button>

                        <Button asChild variant="outline">
                            <a href="/login" target="__blank" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                Visitar perfil de Linkedin
                            </a>
                        </Button>

                        <Button asChild variant="outline">
                            <a href="/login" target="__blank" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                Visitar perfil de Instagram
                            </a>
                        </Button>

                        <Button asChild variant="outline">
                            <a href="/login" target="__blank" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                                Visitar perfil de X
                            </a>
                        </Button>
                    </div>
                </>
            }

            {
                (logged && !showContactInfo) ?
                <Button className="w-full" onClick={ () => setShowContactInfo(true) }>Mostrar información de contacto</Button>
                : !logged &&
                <Button asChild className="w-full">
                    <Link href="/login">
                        Mostrar información de contacto
                    </Link>
                </Button>
            }

        </section>
    );
}