import Hero from "./Hero";
import Features from "./Features";
import Faq from "./Faq";
import CTA from "./CTA";
import Founder from "./Founder";
import HomeBlog from "./HomeBlog";

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