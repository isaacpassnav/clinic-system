import { useEffect, useState } from "react";

function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("#mainCarousel");   // Carrusel
      const contact = document.querySelector("#contacto");    // Contact section

      if (!hero || !contact) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const contactTop = contact.getBoundingClientRect().top;

      // Mostrar cuando ya pasaste el carrusel
      // Ocultar cuando entras a contacto
      if (heroBottom < 0 && contactTop > window.innerHeight / 3) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/51987654321?text=Hola%2C%20me%20gustaría%20más%20información%20sobre%20los%20cursos"
      className={`whatsapp-float ${visible ? "show" : "hide"}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;