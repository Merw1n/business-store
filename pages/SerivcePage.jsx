import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSectionService from "@/components/ServicePage/HeroSection/HeroSectionService";
import MainContent from "@/components/ServicePage/MainContent/MainContent";

const ServicePage = () => {
    return (
        <div>
            <Header />
            <HeroSectionService />
            <MainContent />
            <Footer />
        </div>
    )
}

export default ServicePage;