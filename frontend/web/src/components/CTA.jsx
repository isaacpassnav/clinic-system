import React, { useState, useEffect } from "react";

const CTA = () => {
  const [showCTA, setShowCTA] = useState(false);
  const [inContact, setInContact] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !inContact) {
        setShowCTA(true);
      } else {
        setShowCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Observer para detectar cuando Contact está visible
    const contactSection = document.getElementById("contacto");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInContact(true);
            setShowCTA(false); 
          } else {
            setInContact(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contactSection) observer.observe(contactSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (contactSection) observer.unobserve(contactSection);
    };
  }, [inContact]);

  if (!showCTA) return null;

  return (
    <div
      className="text-white py-3 px-4 d-flex justify-content-between align-items-center shadow animate__animated animate__fadeInUp"
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        zIndex: "1050",
        background: "linear-gradient(90deg, #0066cc, #00b894)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div>
        <h5 className="mb-1 fw-bold">¡Inscríbete hoy!</h5>
        <small>
          Asegura tu lugar en nuestras certificaciones en enfermería.
        </small>
      </div>
      <a
        href="#enroll-form"
        className="btn btn-light fw-bold shadow-sm px-3"
      >
        Quiero inscribirme
      </a>
    </div>
  );
};

export default CTA;