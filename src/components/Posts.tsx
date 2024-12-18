import Post from "@/components/Post";
import { PostResponse, Post as PostSchema } from "@/lib/interfaces";
import { Button } from "@/components/ui/button";
import NewPostButton from "@/components/NewPostButton";
import Link from "next/link";

interface Props {
    logged: boolean;
    posts: PostResponse;
    userId: string;
    userName: string;
    photoURL: string;
}

export default function Posts({ logged, posts, userId, userName, photoURL }:Props) {

    return (
        <>
        {
            !logged ?
            <div className="flex justify-end items-center mb-3">
                <Button asChild>
                    <Link href="/login">
                        Publicar mensaje
                    </Link>
                </Button>
            </div>
            :
            <NewPostButton 
                userId={userId} 
                userName={userName} 
                photoURL={photoURL}
            />
        }
                
        {
            posts.status === "error" ?
            <h1>error</h1>
            : posts.data?.map(post => (
                <Post
                    key={post.id}
                    logged={logged}
                    post={post}
                />
            ))
        }
        </>
    );
}