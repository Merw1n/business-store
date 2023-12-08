import HeroSection from "@/components/BlogPage/HeroSection/HeroSection";
import MainSection from "@/components/BlogPage/MainSection/MainSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const BlogPage = ({title}) => {
    return (
        <div>
            <Header />
                <HeroSection />
                <MainSection title={title}/>
            <Footer />
        </div>
    )
}

export default BlogPage;