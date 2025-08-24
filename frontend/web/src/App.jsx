import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Carousel from "./components/layout/Carousel";
import Benefits from "./components/sections/Benefits";
import FeaturedCourses from "./components/sections/FeaturedCourses";
import EnrollForm from "./components/sections/EnrollForm";
import ContactUs from "./components/sections/ContactUs";
import Footer from "./components/common/Footer";
import TestConnection from "./components/TestConnection";
import AboutUs from "./components/sections/AboutUs";
import CTA from "./components/layout/CTA";
import WhatsAppButton from "./components/layout/WhatsAppButton";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <Header />
      <TestConnection />

      <Routes>
        {/* Ruta principal (Home) */}
        <Route
          path="/"
          element={
            <main>
              <Carousel />
              <WhatsAppButton />
              <AboutUs />
              <Benefits />
              <FeaturedCourses />
              <ContactUs />
              <CTA />
            </main>
          }
        />

        {/* Ruta de inscripción */}
        <Route path="/signup" element={<EnrollForm />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;