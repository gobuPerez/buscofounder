import { Suspense } from "react";
import { getPosts } from "@/actions/getPosts";
import { auth } from "@/auth";
import CTASection from "@/components/CTASection";

import { PostResponse } from "@/lib/interfaces";
import Posts from "@/components/Posts";
import { Loader2 } from "lucide-react";

function Loader() {
    return (
        <div className="flex justify-center items-center my-10">
            <Loader2 className="animate-spin text-blue-600" />
        </div>
    )
}
  
export default async function HomePage() {

    const session = await auth();
    const posts:PostResponse =  await getPosts();

    return (
        <main className="container">
            <CTASection />
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