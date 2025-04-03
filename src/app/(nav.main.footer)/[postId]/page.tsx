import { Suspense } from "react";
import { auth } from "@/auth";

import Posts from "@/components/Posts";
import { PostsResponse } from "@/lib/interfaces";
import Loader from "@/components/Loader";
import { getPost } from "@/actions/getPost";

interface Props {
    params: Promise<{ postId: string }>
}
  
export default async function PostPage({ params }:Props) {

    const { postId } = await params

    const session = await auth();
    const posts:PostsResponse =  await getPost(postId);

    return (
        <main className="container">
            <Suspense fallback={<Loader />}>
                <Posts 
                    logged={session ? true : false}
                    posts={posts} 
                    userId={session?.user?.id ? session.user.id : "" } 
                    userName={session?.user?.name ? session.user.name : "" } 
                    photoURL={session?.user?.image ? session.user.image : "" }
                    onlyOnePost
                />
            </Suspense>
        </main>
    );
}