import AboutContent from "./AboutUs/AboutContent";
import AboutFounder from "./AboutUs/AboutFounder";
import AboutHeader from "./AboutUs/AboutHeader";
// import OurTeam from "../components/AboutUs/OurTeam";
import WhyChooseUs from "./AboutUs/WhyChooseUs";

const About = () => {
  return (
    <>
      <AboutHeader />
      <AboutContent />
      <WhyChooseUs />
      <AboutFounder />
      {/* <OurTeam /> */}
    </>
  );
};

export default About;
