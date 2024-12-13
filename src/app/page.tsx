import { auth } from "@/auth";
import CTASection from "@/components/CTASection";
import Header from "@/components/Header";
import Post from "@/components/Post";

export default async function HomePage() {
    return (
        <>
            <Header />
            <main className="container">
                <CTASection />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </main>
        </>
    );
}