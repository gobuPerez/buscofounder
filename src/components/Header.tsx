import Link from "next/link";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutButton from "@/components/LogoutButton";
import Logo from "@/components/Logo";
import { SquareArrowOutUpRight } from "lucide-react";

export default async function Header() {

    const session = await auth();

    return (
        <header className="border-b mb-5 py-3 bg-white">
            <div className="container flex justify-between items-center">
                <Link href="/">
                    <Logo styles="text-2xl"/>
                </Link>
                {
                    !session ?
                    <Button asChild>
                        <Link href="/login">Acceder</Link>
                    </Button>
                    :
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                        <img
                            alt="Menú"
                            src={session.user?.image || undefined}
                            className="inline-block size-8 rounded-full"
                        />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-4 sm:mr-0">
                            {/* <DropdownMenuItem>Mis publicaciones</DropdownMenuItem>
                            <DropdownMenuItem>Sugerencias</DropdownMenuItem> */}
                            <DropdownMenuItem>
                                <a 
                                    href="https://dashboard.simpleanalytics.com/buscofounder.com"
                                    target="__blank"
                                    className="flex justify-start items-center"
                                >
                                    Métricas <SquareArrowOutUpRight className="inline size-4 ml-1"/>   
                                </a> 
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LogoutButton />    
                            </DropdownMenuItem>
                          {/*   <DropdownMenuSeparator />
                            <DropdownMenuItem>Eliminar cuenta</DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>

                }
            </div>
        </header>
    );
}