function Contact() {
  return (
    <section id="contacto" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contáctanos</h2>
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="p-4 border rounded-4 h-100">
              <h5 className="fw-bold mb-3">Información</h5>
              <p className="mb-2"><i className="fa-solid fa-location-dot me-2"></i> Av. Salud 123, Lima - Perú</p>
              <p className="mb-2"><i className="fa-solid fa-phone me-2"></i> (01) 123-4567</p>
              <p className="mb-0"><i className="fa-solid fa-envelope me-2"></i> admisiones@enfer-tech-cap.edu</p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <form className="p-4 border rounded-4">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input className="form-control" placeholder="Tu nombre" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="tu@email.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" rows="4" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button type="button" className="btn btn-outline-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
