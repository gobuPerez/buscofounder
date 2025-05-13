import { Suspense } from "react";
import { getPosts } from "@/actions/getPosts";
import { auth } from "@/auth";

import Posts from "@/components/Posts";
import { PostsResponse } from "@/lib/interfaces";
import Loader from "@/components/Loader";
  
export default async function HomePage() {

    const session = await auth();
    const posts:PostsResponse =  await getPosts();

    return (
        <main className="container">
            <Suspense fallback={<Loader />}>
                <Posts 
                    logged={session ? true : false}
                    posts={posts} 
                    userId={session?.user?.id ? session.user.id : "" } 
                    userName={session?.user?.name ? session.user.name : "" } 
                    photoURL={session?.user?.image ? session.user.image : "" }
                />
            </Suspense>
        </main> 
    );
}