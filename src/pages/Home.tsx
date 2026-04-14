import Hero from "../components/Hero";
import Features from "../components/Features";
import Faq from "../components/Faq";
import CTA from "../components/CTA";
import Founder from "../components/Founder";
import HomeBlog from "../components/HomeBlog";

export default function Home() {
    return (
        <>
            <Hero />
            <Founder/>
            <Features />
            <Faq />
            <CTA />
            <HomeBlog />
        </>
    )
}