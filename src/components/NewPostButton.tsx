"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import NewPostForm from "./NewPostForm";

interface Props {
    userId: string;
    userName: string;
    photoURL: string;
}
export default function NewPostButton({ userId, userName, photoURL }:Props) {
    
    const [openForm, setOpenForm] = useState<boolean>(false);

    return (
        <>
        {
            !openForm ?
            <div className="flex justify-end items-center mb-3">
                <Button onClick={ () => setOpenForm(true) }>Nuevo mensaje</Button>
            </div>
            :
            <NewPostForm 
                setOpenForm={setOpenForm} 
                userId={userId} 
                userName={userName} 
                photoURL={photoURL} 
            />
        }
        </>
    );
}