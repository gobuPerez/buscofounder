import Link from "next/link";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import LogoutButton from "@/app/login/LogoutButton";
  

export default async function Header() {

    const session = await auth();

    return (
        <header className="border-b mb-5 py-3 bg-white">
            <div className="container flex justify-between items-center">
                <div className="text-2xl">
                    <span className="font-bold text-blue-400">bus</span><span className="font-bold text-blue-600">cofounder</span>
                </div>
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
                            src={session.user?.image || ""}
                            className="inline-block size-8 rounded-full"
                        />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-4 sm:mr-0">
                            <DropdownMenuItem>Mis publicaciones</DropdownMenuItem>
                            <DropdownMenuItem>Sugerencias</DropdownMenuItem>
                            <DropdownMenuItem>
                                <LogoutButton />    
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Eliminar cuenta</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                }
            </div>
        </header>
    );
}