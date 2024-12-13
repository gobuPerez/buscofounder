"use client";

import { signOut } from "next-auth/react";
 
export default function LogoutButton() {
    return (
        <button 
            onClick={ () => signOut() } 
            className="w-full cursor-auto text-left"
        >
            Cerrar sesión
        </button>
    )
}