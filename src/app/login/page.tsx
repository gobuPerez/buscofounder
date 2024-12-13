import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { signIn } from "@/auth";
  

export default function LoginPage() {
    return (
        <div className="h-full flex flex-col space-y-3 justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Inicia sesión en <Logo />
                    </CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        action={async () => {
                            "use server"
                            await signIn("google", { redirectTo: "/" })
                        }}
                    >
                        <Button type="submit" className="w-full">Signin with Google</Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <p>No tienes una cuenta? Regístrate aquí</p>
                </CardFooter>
            </Card>
        </div>  
    );
}