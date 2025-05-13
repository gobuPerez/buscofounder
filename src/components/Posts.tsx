"use client";
import Post from "@/components/Post";
import { PostsResponse, Post as PostSchema } from "@/lib/interfaces";
import { Button } from "@/components/ui/button";
import NewPostButton from "@/components/NewPostButton";
import Link from "next/link";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";

interface Props {
    logged: boolean;
    posts: PostsResponse;
    userId: string;
    userName: string;
    photoURL: string;
    onlyOnePost?: boolean;
}

export default function Posts({ logged, posts, userId, userName, photoURL, onlyOnePost = false }:Props) {

    const [postArray, setPostArray] = useState<PostSchema[]>(posts.data ? posts.data : []);

    return (
        <>
        {
            onlyOnePost ?
            <div className="flex justify-start items-center mb-3">
                <Link href="/publicaciones">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                </Link>
                <p className="ml-1 font-bold">Volver a Inicio</p>
            </div>
            :
            <>
            {
                !logged ?
                <div className="flex justify-between items-end mb-3">
                    <h3 className="text-2xl font-bold text-blue-600">Publicaciones</h3>
                    <Button asChild>
                        <Link href="/login">
                            Nuevo mensaje
                        </Link>
                    </Button>
                </div>
                :
                <NewPostButton 
                    userId={userId} 
                    userName={userName} 
                    photoURL={photoURL}
                    setPostArray={setPostArray}
                    posts={posts.data ? posts.data : []}
                />
            }
            </>
        }

        {
            onlyOnePost && postArray.length === 0 &&
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    La publicación no existe o ha sido eliminada.
                </AlertDescription>
            </Alert>
        }
                
        {
            posts.status === "error" ?
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    { posts.message }
                </AlertDescription>
            </Alert>
            : postArray.map(post => (
                <Post
                    key={post.id}
                    userId={userId}
                    logged={logged}
                    post={post}
                    postArray={postArray}
                    setPostArray={setPostArray}
                />
            ))
        }
        </>
    );
}