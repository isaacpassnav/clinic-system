import React from "react";
import { Carousel } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section className="container my-5" id="about-us">
      <div className="row align-items-center">
        {/* Texto lado izquierdo */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold">Sobre Nosotros</h2>
          <p>
            Somos una institución dedicada a la formación en <strong>enfermería</strong> 
            con más de <strong>10 años de experiencia</strong> capacitando estudiantes 
            que hoy destacan en hospitales y clínicas.
          </p>
          <ul>
            <li>✔️ Metodología práctica y actualizada</li>
            <li>✔️ Certificaciones reconocidas</li>
            <li>✔️ Equipo docente altamente calificado</li>
            <li>✔️ Más de 2,000 alumnos egresados</li>
          </ul>
        </div>

        <div className="col-md-6">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src="https://img1.wsimg.com/isteam/getty/1356078928"
                alt="Primera imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src="https://img1.wsimg.com/isteam/getty/1288103838"
                alt="Segunda imagen"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src="https://img1.wsimg.com/isteam/getty/1788198840"
                alt="Tercera imagen"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
