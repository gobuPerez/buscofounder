import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter" 
import { db } from "@/prisma";
import authConfig from "@/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    callbacks: { // Se añade el id del usuario en la bd a la informacion de la sesion
        jwt({ token, user }) {
            if (user) token.id = user.id;
            return token;
        },
        session({ session, token }) {
            session.user.id = String(token.id);
            return session;
        },
    },
    ...authConfig
})