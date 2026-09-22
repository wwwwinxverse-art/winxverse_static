import Hero from "../components/Hero";
import Features from "../components/Features";
import Faq from "../components/Faq";
import CTA from "../components/CTA";
import Founder from "../components/Founder";
import HomeBlog from "../components/HomeBlog";
import Poster from "../components/Posters/Poster";
import WhyChooseUs from "../components/WhyChooseUs";
import CoreValues from "../components/CoreValues";
import OurJourney from "../components/OurJourney";
import ClientTestimonials from "../components/ClientTestimonials";
import StatsCounters from "../components/StatsCounters";
import CTABanner from "../components/CTABanner";
import OurApproach from "../components/OurApproach";
import TechnologyExpertise from "../components/TechnologyExpertise";
import OurSEOApproach from "../components/OurSEOApproach";
import OurDigitalAdvantage from "../components/OurDigitalAdvantage";
import IdeasIntoProducts from "../components/IdeasIntoProducts";
import BusinessChallengesWeSolve from "../components/BusinessChallengesWeSolve";
import MadeForYourBusiness from "../components/MadeForYourBusiness";
import OurPlayground from "../components/OurPlayground";
import OnePartnerMultipleSolutions from "../components/OnePartnerMultipleSolutions";
import BehindEverySolution from "../components/BehindEverySolution";
import ClientJourney from "../components/ClientJourney";

export default function Home() {
    return (
        <>
            <Hero />
            <Founder/>
            <WhyChooseUs />
            <Features />
            <CoreValues />
            <OurJourney />
            <OurApproach />
            <ClientTestimonials />
            <StatsCounters />
            <TechnologyExpertise />
            <OurSEOApproach />
            <OurDigitalAdvantage />
            <IdeasIntoProducts />
            <BusinessChallengesWeSolve />
            <MadeForYourBusiness />
            <OurPlayground />
            <OnePartnerMultipleSolutions />
            <BehindEverySolution />
            <ClientJourney />
            <Faq />
            <Poster />
            <CTA />
            <HomeBlog />
            <CTABanner />
        </>
    )
}