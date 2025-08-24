export default function Benefits() {
  const items = [
    { icon: "fa-user-nurse", title: "Docentes expertos", text: "Profesionales activos de la salud." },
    { icon: "fa-certificate", title: "Certificación", text: "Constancia al finalizar cada curso." },
    { icon: "fa-laptop-medical", title: "Enfoque práctico", text: "Simulación y casos reales." },
    { icon: "fa-clock", title: "Horarios flexibles", text: "Mañana, tarde y noche." },
    { icon: "fa-globe", title: "Modalidad híbrida", text: "Online y/o presencial." },
    { icon: "fa-hand-holding-medical", title: "Bolsa de prácticas", text: "Vinculación con centros." },
  ];

  return (
    <section id="beneficios" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Beneficios</h2>
        <div className="row g-4">
          {items.map((b, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-4">
              <div className="h-100 p-4 border rounded-4 bg-white shadow-sm">
                <i className={`fa-solid ${b.icon} fs-2 mb-3`}></i>
                <h5 className="fw-bold">{b.title}</h5>
                <p className="mb-0 text-muted">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
