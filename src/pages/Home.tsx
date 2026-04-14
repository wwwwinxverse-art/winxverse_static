import Hero from "../components/Hero";
import Career from "../components/Founder";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
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
            {/* <Pricing /> */}
            <Faq />
            <CTA />
            <HomeBlog />
        </>
    )
}