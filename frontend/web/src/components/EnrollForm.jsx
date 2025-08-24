import { useState } from "react";

function EnrollForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    course: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔒 Por ahora solo UI. Luego conectamos a backend (por ejemplo /leads o /users/register con validaciones).
    console.log("Pre-inscripción:", form);
    alert("✅ ¡Gracias! Hemos recibido tu interés. Te contactaremos pronto.");
    setForm({ full_name: "", email: "", phone: "", city: "", state: "", course: "", agree: false });
  };

  return (
    <section id="inscripcion" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Pre-inscripción</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <form onSubmit={handleSubmit} className="p-4 border rounded-4 bg-white shadow-sm">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    className="form-control"
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                    required
                    minLength={2}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{6,}"
                    placeholder="Solo números"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Ciudad</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Provincia/Estado</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Curso de interés</label>
                  <select
                    className="form-select"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un curso</option>
                    <option value="Primeros Auxilios">Primeros Auxilios</option>
                    <option value="Cuidados Intensivos">Cuidados Intensivos</option>
                    <option value="Geriatría">Geriatría</option>
                  </select>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="agreeCheck"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="agreeCheck">
                      Acepto ser contactado y la política de privacidad.
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-grid d-sm-flex justify-content-sm-end mt-4">
                <button type="submit" className="btn btn-primary btn-lg">
                  Enviar pre-inscripción
                </button>
              </div>
              <p className="text-muted small mt-2 mb-0">
                *Luego podrás crear tu cuenta para completar la matrícula.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EnrollForm;