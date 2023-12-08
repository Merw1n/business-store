import HeroSectionAbout from "@/components/AboutPage/HeroSection/HeroSectionAbout";
import MainContent from "@/components/AboutPage/MainContent/MainContent";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const AboutPage = () => {
    return (
        <div>
            <Header />
            <HeroSectionAbout />
            <MainContent />
            <Footer />
        </div>
    )
}

export default AboutPage;