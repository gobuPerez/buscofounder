import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const LandingPage = () => {
    return (
         <div className="flex flex-col justify-between min-h-full bg-white">
            <div>
                <Header />
                <HeroSection />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage;