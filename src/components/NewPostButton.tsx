"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button"
import NewPostForm from "./NewPostForm";
import { Post } from "@/lib/interfaces";

interface Props {
    userId: string;
    userName: string;
    photoURL: string;
    setPostArray: Dispatch<SetStateAction<Post[]>>;
    posts: Post[];
}
export default function NewPostButton({ userId, userName, photoURL, setPostArray, posts }:Props) {
    
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
                userId={userId} 
                userName={userName} 
                photoURL={photoURL} 
                setPostArray={setPostArray}
                setOpenForm={setOpenForm}
                posts={posts}
            />
        }
        </>
    );
}