import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { signIn } from "@/auth";
import { FcGoogle } from "react-icons/fc";
import { Metadata } from "next";
import { SearchCheckIcon } from "lucide-react";

export const metadata: Metadata = {
    title: "buscofounder | Inicio de sesión",
    description: "Inicia sesión con tu cuenta de Google",
};

export default function LoginPage() {
    return (
        <div className="h-full flex flex-col space-y-3 justify-center items-center">
            <Card className="max-w-[400px]">
                <CardHeader>
                    <SearchCheckIcon className="mx-auto text-blue-600" size={35}/>
                    <CardTitle className="text-center">
                        <Link href="/">
                            <Logo styles="text-2xl"/>
                        </Link>
                    </CardTitle>
                    <CardDescription className="text-center">Inicia sesión en tu cuenta</CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        action={async () => {
                            "use server"
                            await signIn("google", { redirectTo: "/publicaciones" })
                        }}
                    >
                        <Button variant="outline" type="submit" className="w-full"><FcGoogle /> Iniciar sesión con Google</Button>
                    </form>
                    <CardDescription className="text-center mt-5">
                        <Link href="/register">
                            ¿No tienes una cuenta? Regístrate aquí.
                        </Link>
                    </CardDescription>
                </CardContent>
            </Card>
        </div>  
    );
}