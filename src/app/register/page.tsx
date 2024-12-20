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
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "buscofounder | Registro",
    description: "Regístrate con tu cuenta de Google",
};

export default function RegisterPage() {
    return (
        <div className="h-full flex flex-col space-y-3 justify-center items-center">
            <Card className="max-w-[400px]">
                <CardHeader>
                    <CardTitle className="text-center">
                        <Link href="/">
                            <Logo styles="text-2xl"/>
                        </Link>
                    </CardTitle>
                    <CardDescription className="text-center">Regístrate con tu cuenta de Google</CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        action={async () => {
                            "use server"
                            await signIn("google", { redirectTo: "/" })
                        }}
                    >
                        <Button variant="outline" type="submit" className="w-full"><FcGoogle /> Regístrate con Google</Button>

                        <CardDescription className="text-center mt-2">
                            Al registrarte, aceptas nuesta <Link href="/privacidad" className="underline">Política de privacidad</Link> y 
                            nuestros <Link href="/privacidad" className="underline">Términos del Servicio</Link>
                    </CardDescription>
                    </form>
                    <Separator className="my-3"/>
                    <CardDescription className="text-center">
                        <Link href="/login">
                            ¿Ya tienes una cuenta? Inicia sesión aquí.
                        </Link>
                    </CardDescription>
                </CardContent>
            </Card>
        </div>  
    );
}