"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import NewPostForm from "./NewPostForm";

export default function NewPostButton() {
    
    const [openForm, setOpenForm] = useState<boolean>(false);

    return (
        <>
        {
            !openForm ?
            <div className="flex justify-end items-center mb-3">
                <Button onClick={ () => setOpenForm(true) }>Nuevo mensaje</Button>
            </div>
            :
            <NewPostForm setOpenForm={setOpenForm}/>
        }
        </>
    );
}