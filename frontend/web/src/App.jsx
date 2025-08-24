import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Benefits from "./components/Benefits";
import FeaturedCourses from "./components/FeaturedCourses";
import EnrollForm from "./components/EnrollForm";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import TestConnection from "./components/TestConnection";
import AboutUs from "./components/AboutUs";
import CTA from "./components/CTA";
import WhatsAppButton from "./components/WhatsAppButton";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Header />
       <TestConnection />
      <main>
        <Carousel />
        <WhatsAppButton />
        <AboutUs />
        <Benefits />
        <FeaturedCourses />
        <EnrollForm />
        <ContactUs />
        <CTA/>
      </main>
      <Footer />
    </>
  );
}

export default App;