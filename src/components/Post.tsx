import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default async function Post() {
/*     https://tailwindui.com/components/application-ui/lists/grid-lists */
    return (
        <section className="border rounded-md p-4 bg-white mb-5 shadow-md">
            <p className="font-bold">El problema que quiero resolver</p>
            <p>
                Muchos emprendedores encuentran dificultades a la hora de encontrar cofundador para
                su proyecto
            </p>
            <p className="font-bold">La visión</p>
            <p>
                Creo que en el futuro no existirán los coches
            </p>
            <p className="font-bold">Sobre mí</p>
            <p>Soy un ingeniero informático y desarrollador web full-stack.</p>
            <p className="font-bold">Busco</p>
            <p>Me gustaría encontrar a una persona que se encargara de crear campañas de publicidad
                y optimizara el gasto en marketing.
            </p>
            <p className="font-bold">Ofrezco</p>
            <p>
                Participaciones en la empresa y un salario base.
            </p>
            <p className="font-bold">Sobre el equipo</p>
            <p>
                Actualmente el equipo está formado por 2 personas, un ingeniero y un diseñador
            </p>
            <p className="font-bold">Ubicación</p>
            <p>
                Aceptamos teletrabajo, aunque tenemos una oficina en Barcelona con 200 metros de oficina.
            </p>
            <p className="font-bold">Fase del proyecto</p>
            <p>
                El proyecto se encuentra en fase inicial, bootstraping
            </p>
            <div className="flex items-center space-x-2">
            <label
                htmlFor="social"
                className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Mostrar enlace a mi perfil de Linkedin
            </label>
            </div>                

            <div className="flex items-center space-x-2">
                <Switch id="profile-photo" />
                <Label htmlFor="profile-photo">Mostrar mi foto de perfil</Label>
            </div>

            <Button className="w-full">Contactar en Linkedin</Button>
        </section>
    );
}