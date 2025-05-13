import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col justify-between min-h-full bg-[#f4f2ee]">
            <div>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    );
}