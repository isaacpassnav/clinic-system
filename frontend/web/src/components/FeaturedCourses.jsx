function FeaturedCourses() {
    const courses = [
        {
            id: 1,
            title: "Primeros Auxilios",
            description: "Actuación inicial ante emergencias y soporte básico.",
            duration_weeks: 4,
            price: 120,
            start_date: "2025-09-10",
            days: "Sáb - Dom",
        },
        {
            id: 2,
            title: "Cuidados Intensivos",
            description: "Monitoreo, ventilación y manejo de pacientes críticos.",
            duration_weeks: 8,
            price: 280,
            start_date: "2025-09-20",
            days: "Lun - Mié",
        },
        {
             id: 3,
            title: "Geriatría",
            description: "Atención integral a personas adultas mayores.",
            duration_weeks: 6,
            price: 200,
            start_date: "2025-10-01",
            days: "Mar - Jue",
        },
    ];
    return (
        <section id="cursos" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Cursos destacados</h2>
                <div className="row g-4">
                {courses.map((c) => (
                    <div key={c.id} className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm rounded-4">
                            <div className="card-body d-flex flex-column">
                            <h5 className="card-title fw-bold">{c.title}</h5>
                            <p className="card-text text-muted">{c.description}</p>
                            <ul className="list-unstyled small mb-4">
                                <li><i className="fa-regular fa-calendar me-2"></i>Inicio: {c.start_date}</li>
                                <li><i className="fa-regular fa-clock me-2"></i>Duración: {c.duration_weeks} semanas</li>
                                <li><i className="fa-solid fa-calendar-days me-2"></i>Días: {c.days}</li>
                                <li><i className="fa-solid fa-tag me-2"></i>S/ {c.price}</li>
                            </ul>
                            <a href="#inscripcion" className="btn btn-primary mt-auto">Inscribirme</a>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};
export default FeaturedCourses;