import { useEffect, useState } from "react";

function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("#mainCarousel");   
      const contact = document.querySelector("#contacto");   
      if (!hero || !contact) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const contactTop = contact.getBoundingClientRect().top;

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