function Carousel() {
  return (
    <div id="mainCarousel"className="carousel slide"data-bs-ride="carousel"data-bs-interval="7000">
      
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#mainCarousel"data-bs-slide-to="0"className="active" aria-current="true"aria-label="Slide 1"></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://img1.wsimg.com/isteam/getty/2191182540" className="d-block w-100 carousel-img"alt="Carrusel 1"/>
          <div className="carousel-caption text-start mb-8">
            <h2 className="fw-bold">Aprende con los mejores</h2>
            <p>Únete a nuestros cursos y potencia tus habilidades.</p>
            <a href="#register" className="btn btn-primary btn-lg">Inscríbete</a>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://img1.wsimg.com/isteam/getty/2198864187"className="d-block w-100 carousel-img" alt="Carrusel 2"/>
          <div className="carousel-caption text-start">
            <h2 className="fw-bold">Cursos 100% prácticos</h2>
            <p>Aprende de manera aplicada con proyectos reales.</p>
            <a href="#register" className="btn btn-warning btn-lg">Inscríbete</a>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://img1.wsimg.com/isteam/getty/2191425878"className="d-block w-100 carousel-img"alt="Carrusel 3"/>
          <div className="carousel-caption text-start">
            <h2 className="fw-bold">Flexibilidad de horarios</h2>
            <p>Estudia cuando y donde quieras.</p>
            <a href="#register" className="btn btn-success btn-lg">Inscríbete</a>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://img1.wsimg.com/isteam/getty/2121983954"className="d-block w-100 carousel-img" alt="Carrusel 4"/>
          <div className="carousel-caption text-start">
            <h2 className="fw-bold">Docentes expertos</h2>
            <p>Recibe clases de profesionales con experiencia.</p>
            <a href="#register" className="btn btn-danger btn-lg">Inscríbete</a>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://img1.wsimg.com/isteam/getty/2173809200" className="d-block w-100 carousel-img"alt="Carrusel 5"/>
          <div className="carousel-caption text-start">
            <h2 className="fw-bold">Certificación al completar</h2>
            <p>Recibe un certificado válido al terminar tu curso.</p>
            <a href="#register" className="btn btn-info btn-lg">Inscríbete</a>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://img1.wsimg.com/isteam/getty/79340502"className="d-block w-100 carousel-img"alt="Carrusel 6"/>
          <div className="carousel-caption text-start">
            <h2 className="fw-bold">Comienza hoy mismo</h2>
            <p>No esperes más para transformar tu futuro.</p>
            <a href="#register" className="btn btn-primary btn-lg">Inscríbete</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
