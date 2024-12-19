import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "buscofounder | Términos del servicio",
    description: "Consulta los Términos del servicio de buscofounder.com",
};

export default function ServiceTerms() {
    return (
        <div className="container space-y-4 mb-5">
            <h1 className="text-xl text-center font-bold">Términos del Servicio</h1>
            <p><strong>Última actualización:</strong> 19-12-2024</p>

            <p>
                Bienvenido a buscofounder.com, un espacio donde los usuarios pueden publicar mensajes en línea. Al acceder o utilizar este sitio web, usted acepta cumplir
                con los siguientes términos. Si no está de acuerdo, le recomendamos que no use este sitio.
            </p>

            <h2 className="font-bold">1. Aceptación de los Términos</h2>
            <p>Al registrarse o acceder a buscofounder.com, usted acepta estos Términos, así como nuestra Política de Privacidad. Si no está de acuerdo, no debe utilizar nuestros servicios.</p>

            <h2 className="font-bold">2. Registro y responsabilidad del usuario</h2>
            <p>
                Para acceder a ciertas funcionalidades del foro, se le puede pedir que se registre. Usted es responsable de mantener la confidencialidad de su cuenta. Además, es responsable 
                de todas las actividades que ocurran bajo su cuenta.
            </p>

            <h2 className="font-bold">3. Uso permitido del foro</h2>
            <p>El foro está destinado a la participación de los usuarios. Usted puede publicar mensajes con contenido relacionado con los temas del foro, siempre que:</p>
            <ul className="ml-5 font-bold">
                <li>No infrinja ninguna ley aplicable.</li>
                <li>No infrinja los derechos de propiedad intelectual de otros.</li>
                <li>No difunda contenido que sea ilegal, difamatorio, obsceno, abusivo, racista, discriminatorio o de cualquier otra forma inapropiado.</li>
            </ul>

            <h2 className="font-bold">4. Contenido del usuario</h2>
            <p>
                El contenido que los usuarios publiquen en el foro es de su exclusiva responsabilidad. Usted declara que posee los derechos sobre todo el contenido que publica 
                o que ha obtenido el permiso necesario para usarlo. Al publicar contenido en, usted otorga a buscofounder.com una licencia no exclusiva, global, transferible
                 y libre de regalías para usar, modificar, distribuir, almacenar y mostrar dicho contenido en relación con el funcionamiento del sitio.
            </p>

            <h2 className="font-bold">5. Prohibiciones</h2>
            <p>Queda estrictamente prohibido:</p>
            <ul className="ml-5 font-bold">
                <li>- Publicar contenido que viole derechos de autor, marcas registradas u otros derechos de propiedad intelectual.</li>
                <li>- Realizar amenazas, acosos o intimidaciones hacia otros usuarios.</li>
                <li>- Publicar contenido que promueva violencia, odio o discriminación hacia cualquier grupo o individuo.</li>
            </ul>

            <h2 className="font-bold">6. Moderación y control de contenidos</h2>
            <p>
                buscofounder.com se reserva el derecho de moderar, revisar y eliminar cualquier contenido publicado en el sitio que infrinja estos Términos del Servicio o que sea considerado inapropiado. 
                Si bien no estamos obligados a monitorear el contenido del foro, podemos tomar medidas según consideremos necesario para mantener un ambiente seguro y respetuoso.
            </p>

            <h2 className="font-bold">7. Privacidad</h2>
            <p>
                La recopilación y el uso de su información personal están sujetos a nuestra <Link href="/privacidad">Política de Privacidad</Link>. 
                Al utilizar el foro, usted acepta la recopilación y el uso de su información conforme a dicha política.
            </p>

            <h2 className="font-bold">8. Enlaces externos</h2>
            <p>
                Nuestro foro puede contener enlaces a sitios web de terceros. buscofounder.com no es responsable de la disponibilidad o el contenido de dichos sitios. 
                El uso de enlaces a sitios externos es bajo su propio riesgo.
            </p>

            <h2 className="font-bold">9. Modificaciones de los Términos</h2>
            <p>
                Nos reservamos el derecho de modificar estos Términos en cualquier momento. Cualquier cambio será publicado en esta página con la fecha de la última actualización. 
            </p>

            <h2 className="font-bold">10. Bloqueo de cuentas de usuario</h2>
            <p>
                Podemos suspender o finalizar su cuenta en cualquier momento, sin previo aviso, si viola estos Términos del Servicio o por cualquier otra razón relacionada con 
                el mal uso del sitio.
            </p>

            <h2 className="font-bold">11. Limitación de responsabilidad</h2>
            <p>
                buscofounder.com no será responsable por ningún daño directo, indirecto, incidental o consecuente que pueda surgir del uso de este sitio, 
                incluyendo pero no limitado a la pérdida de datos, ingresos o reputación.
            </p>

            <h2 className="font-bold">12. Ley aplicable</h2>
            <p>
                Estos Términos se regirán e interpretarán de acuerdo con las leyes del país o región en la que buscofounder.com opera.
            </p>

            <h2 className="font-bold">13. Contacto</h2>
            <p>Si tiene alguna pregunta sobre estos Términos de Servicio, no dude en ponerse en contacto con nosotros a través de: diego@buscofounder.com</p>
        </div>
    );
}