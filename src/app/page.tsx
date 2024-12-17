import { getPosts } from "@/actions/getPosts";
import { auth } from "@/auth";
import CTASection from "@/components/CTASection";
import Header from "@/components/Header";
import NewPostButton from "@/components/NewPostButton";
import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import Link from "next/link";
  
export default async function HomePage() {

    const session = await auth();

    // await getPosts();

    return (
        <>
            <Header />
            <main className="container">
                <CTASection />
                {
                    !session ?
                    <div className="flex justify-end items-center mb-3">
                        <Button asChild><Link href="/login">Publicar mensaje</Link></Button>
                    </div>
                    :
                    <NewPostButton 
                        userId={session.user?.id || "" } 
                        userName={session.user?.name || "" } 
                        photoURL={session.user?.image || "" }
                    />
                }
                
                <Post logged={session?.user ? true : false} />
            </main>
        </>
    );
}