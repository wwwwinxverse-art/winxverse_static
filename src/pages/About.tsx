import AboutContent from "../components/AboutUs/AboutContent";
import AboutFounder from "../components/AboutUs/AboutFounder";
import AboutHeader from "../components/AboutUs/AboutHeader";
import OurCoreValues from "../components/AboutUs/Ourcorevalues";
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
      {/* <OurTeam /> */}
    </>
  );
};

export default About;
