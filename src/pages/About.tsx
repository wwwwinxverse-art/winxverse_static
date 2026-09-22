import AboutContent from "../components/AboutUs/AboutContent";
import AboutFounder from "../components/AboutUs/AboutFounder";
import AboutHeader from "../components/AboutUs/AboutHeader";
import CaseStudies from "../components/AboutUs/CaseStudies";
import Changelog from "../components/AboutUs/Changelog";
import ComparisonTable from "../components/AboutUs/ComparisonTable";
import CSRInitiatives from "../components/AboutUs/CSRInitiatives";
import IndustriesWeServe from "../components/AboutUs/IndustriesWeServe";
import OurCoreValues from "../components/AboutUs/Ourcorevalues";
import OurProcess from "../components/AboutUs/OurProcess";
import ResourceCenter from "../components/AboutUs/ResourceCenter";
import SecurityCompliance from "../components/AboutUs/SecurityCompliance";
import TechStack from "../components/AboutUs/TechStack";
// import OurTeam from "../components/AboutUs/OurTeam";
import WhyChooseUs from "../components/AboutUs/WhyChooseUs";

const About = () => {
  return (
    <>
      <AboutHeader />
      <AboutContent />
      <WhyChooseUs />
      <AboutFounder />
      <OurCoreValues/>
      <TechStack />
      <OurProcess />
      <CSRInitiatives />
      <CaseStudies />
      <IndustriesWeServe />
      <SecurityCompliance />
      <ComparisonTable />
      <Changelog />
      <ResourceCenter />
      {/* <OurTeam /> */}
    </>
  );
};

export default About;
