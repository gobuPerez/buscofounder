import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t py-5 bg-white text-gray-600">
            <div className="container space-y-3">
                <h4 className="text-center">&copy; buscofounder</h4>
                <div className="flex justify-between items-center">
                    <Link href="/terminos" className="underline">Términos del Servicio</Link>
                    <Link href="/privacidad" className="underline">Política de Privacidad</Link>
                </div>
            </div>
        </footer>
    );
}