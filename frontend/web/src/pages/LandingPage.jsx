import Carousel from "../components/layout/Carousel";
import WhatsAppButton from "../components/layout/WhatsAppButton";
import AboutUs from "../components/sections/AboutUs";
import Benefits from "../components/sections/Benefits";
import FeaturedCourses from "../components/sections/FeaturedCourses";
import ContactUs from "../components/sections/ContactUs";
import CTA from "../components/layout/CTA";

function LandingPage() {
  return (
    <main>
      <Carousel />
      <WhatsAppButton />
      <AboutUs />
      <Benefits />
      <FeaturedCourses />
      <ContactUs />
      <CTA />
    </main>
  );
}

export default LandingPage;
