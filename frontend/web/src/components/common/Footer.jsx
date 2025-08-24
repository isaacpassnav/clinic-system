function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} Enfer-tech-cap - Todos los derechos reservados
        </p>
        <p className="mb-3">
          Desarrollado con ❤️ por{" "}
          <span className="fw-bold">Isaac Lehi Pasapera Navarro</span> - Fullstack Developer
        </p>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light me-3">
            <i className="bi bi-facebook fs-5"></i>
          </a>
          <a href="https://x.com/IsaacPasapera" target="_blank" rel="noreferrer" className="text-light me-3">
            <i className="bi bi-twitter fs-5"></i>
          </a>
          <a href="https://www.instagram.com/isaac_pasapera/" target="_blank" rel="noreferrer" className="text-light me-3">
            <i className="bi bi-instagram fs-5"></i>
          </a>
          <a href="https://github.com/isaacpassnav" target="_blank" rel="noreferrer" className="text-light me-3">
            <i className="bi bi-github fs-5"></i>
          </a>
          <a href="https://www.linkedin.com/in/isaac-pasapera-navarro/" target="_blank" rel="noreferrer" className="text-light">
            <i className="bi bi-linkedin fs-5"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

