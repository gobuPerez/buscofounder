import { Metadata } from "next";

export const metadata: Metadata = {
    title: "buscofounder | Política de privacidad",
    description: "Consulta la política de privacidad de buscofounder.com",
};

export default function PrivacyPage() {
    return (
        <div className="container space-y-4 mb-5">
            <h1 className="text-xl text-center font-bold">Política de Privacidad</h1>
            <p><strong>Última actualización:</strong> 13-05-2025</p>

            <p>
                Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos su información personal cuando utiliza nuestro sitio web, 
                especialmente en lo que respecta al uso de cookies y el rastreo del comportamiento de los usuarios. Al acceder o utilizar nuestro sitio, 
                usted acepta los términos de esta política.
            </p>

            <h2 className="font-bold text-center">1. Información que recopilamos</h2>
            <h3 className="font-bold">Autenticación de usuario con cookies</h3>
            <p>
                Utilizamos cookies únicamente para la autenticación de los usuarios. Estas cookies son necesarias para permitirle iniciar sesión y acceder a
                las áreas restringidas del sitio. Estas cookies no contienen información personal identificable, solo se utilizan para mantener la sesión activa 
                mientras navega por el sitio.
            </p>

            <h3 className="font-bold">Rastreo del comportamiento del usuario</h3>
            <p>En buscofounder.com, rastreamos el comportamiento de los usuarios dentro del sitio para mejorar la experiencia general de navegación. Esto incluye, pero no se limita a, la recopilación de información como la interacción con las páginas, las secciones visitadas y el tiempo pasado en el sitio.</p>
            <p>Es importante destacar que este rastreo se realiza de manera anónima. No utilizamos cookies ni ninguna otra tecnología que pueda identificar de manera individual a un usuario o vincular la información recopilada a su identidad personal.</p>

            <h2 className="font-bold text-center">2. ¿Cómo usamos la información?</h2>
            <p>La información recopilada a través del rastreo del comportamiento de los usuarios se utiliza exclusivamente con fines estadísticos y para mejorar la funcionalidad del sitio. Nos ayuda a comprender cómo los usuarios interactúan con nuestro contenido y nos permite realizar mejoras para hacer la experiencia más amigable y eficiente.</p>
            <p>Las cookies utilizadas para la autenticación de usuarios se emplean únicamente para mantener su sesión activa y garantizar que pueda navegar por el sitio sin tener que ingresar sus credenciales repetidamente.</p>

            <h2 className="font-bold text-center">3. ¿Cómo protegemos su información?</h2>
            <p>Nos comprometemos a proteger su información personal. La información que recopilamos, como la autenticación mediante cookies, se almacena de manera segura y solo se utiliza con fines internos relacionados con la funcionalidad del sitio.</p>
            <p>No compartimos, vendemos ni alquilamos su información personal a terceros. Además, no utilizamos tecnologías que permitan identificar personalmente a los usuarios a través del rastreo del comportamiento.</p>

            <h2 className="font-bold text-center">4. Uso de cookies</h2>
            <p>Como se mencionó anteriormente, utilizamos cookies únicamente con fines de autenticación de usuario. Estas cookies son estrictamente necesarias para el funcionamiento del sitio y no se utilizan para ningún otro propósito, como publicidad o seguimiento fuera de nuestro dominio.</p>
            <p>Puede configurar su navegador para que rechace las cookies o le avise cuando se envíen. Sin embargo, al hacerlo, es posible que algunas funciones de nuestro sitio no funcionen correctamente, especialmente las relacionadas con la autenticación de su cuenta.</p>

            <h2 className="font-bold text-center">5. Derechos de los usuarios</h2>
            <p>Usted tiene derecho a:</p>
            <ul className="ml-5 font-bold">
                <li>- Acceder a la información que hemos recopilado sobre usted.</li>
                <li>- Rectificar cualquier dato personal incorrecto o incompleto que tengamos.</li>
                <li>- Eliminar su cuenta o solicitar la eliminación de datos relacionados con su cuenta, siempre que no haya motivos legales para retenerlos.</li>
            </ul>
            <p>Para ejercer estos derechos, puede ponerse en contacto con nosotros a través de los medios de contacto proporcionados al final de esta política.</p>

            <h2 className="font-bold text-center">6. Modificaciones a la política de privacidad</h2>
            <p>
                Nos reservamos el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento. Las modificaciones se publicarán en esta página, y la fecha de 
                la última actualización será reflejada al comienzo de este documento.
            </p>

            <h2 className="font-bold text-center">7. Contacto</h2>
            <p>Si tiene preguntas sobre esta Política de Privacidad o sobre el tratamiento de su información personal, no dude en ponerse en contacto con nosotros a través de:</p>
            <ul className="ml-5 font-bold text-center">
                <li>Email: gobuperez@gmail.com</li>
            </ul>
        </div>
    );
}