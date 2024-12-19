import { MailIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t py-3 bg-white text-gray-600">
            <div className="container space-y-1">
                <h4 className="text-center">&copy; buscofounder</h4>
                <div className="flex justify-between items-center">
                    <Link href="/terminos" className="underline">Términos del Servicio</Link>
                    <Link href="/privacidad" className="underline">Política de Privacidad</Link>
                </div>
                <span className="flex items-center justify-center">
                    <MailIcon size={15} className="inline mr-1"/>diego@buscofounder.com
                </span>
            </div>
        </footer>
    );
}