import NextAuth from "next-auth";
import authConfig from "@/auth.config";

export const publicRoutes:string[]  = [
    "/",
    "/privacidad",
    "/terminos"
];

export const authRoutes:string[] = [
    "/login",
    "/register"
];

export const apiAuthPrefix:string  = "/api/auth";
 
const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req; // ruta a la que se quiere acceder
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    // las rutas que empiezan por /api/auth siempre permiten el paso
    if (isApiAuthRoute) return; 
    // si se quiere acceder a una ruta de autenticacion (login o registro)  se comprueba si el usuario esta ya autenticado o no
    if (isAuthRoute) {
        if (isLoggedIn) return Response.redirect(new URL("/", nextUrl));
        return;
    }
    // si la ruta es privada y el usuario no esta logueado, se le envia a la pagina de login
    if (!isLoggedIn && !isPublicRoute) return Response.redirect(new URL("/auth/login", nextUrl));
});

// Middleware copiado de https://clerk.com/docs/references/nextjs/clerk-middleware#usage
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}