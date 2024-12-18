import { Suspense } from "react";
import { getPosts } from "@/actions/getPosts";
import { auth } from "@/auth";
import CTASection from "@/components/CTASection";
import Header from "@/components/Header";

import { PostResponse } from "@/lib/interfaces";
import Posts from "@/components/Posts";
  
export default async function HomePage() {

    const session = await auth();
    const posts:PostResponse =  await getPosts();

    return (
        <Suspense fallback={<h1>Cargando</h1>}>
            <Header />
            <main className="container">
                <CTASection />
                <Posts 
                    logged={session ? true : false}
                    posts={posts} 
                    userId={session?.user?.id ? session.user.id : "" } 
                    userName={session?.user?.name ? session.user.name : "" } 
                    photoURL={session?.user?.image ? session.user.image : "" }
                />
            </main>
        </Suspense>
    );
}