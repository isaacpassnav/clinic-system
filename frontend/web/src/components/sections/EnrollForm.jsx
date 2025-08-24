import { useState } from "react";
import api from "../../services/api";

function EnrollForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "", 
    state: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", msg: "" });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ type: "", msg: "" });
    setLoading(true);
    try {
      // casteo phone → number (tu DB lo tiene BIGINT NOT NULL UNIQUE)
      const payload = {
        full_name: form.full_name,
        email: form.email,
        password: form.password,
        phone: parseInt(form.phone, 10),
        address: form.address || null,
        city: form.city || null,
        state: form.state || null,
        role: "user",
      };

      const res = await api.post("/users/register", payload);
      setAlert({
        type: "success",
        msg: res.data?.message || "✅ Registro exitoso",
      });
      setForm({
        full_name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        agree: false,
      });
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "❌ No se pudo completar el registro";
      setAlert({ type: "danger", msg });
      console.error("Error registro:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enroll-form" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Registro / Inscripción</h2>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {alert.msg && (
              <div className={`alert alert-${alert.type} mb-3`} role="alert">
                {alert.msg}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="p-4 border rounded-4 bg-white shadow-sm"
              noValidate
            >
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
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    minLength={6}
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

                <div className="col-12">
                  <label className="form-label">Dirección</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                  />
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
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={loading || !form.agree}
                >
                  {loading ? "Registrando..." : "Registrarme"}
                </button>
              </div>

              <p className="text-muted small mt-2 mb-0">
                *Recibirás confirmación por correo si el registro fue exitoso.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EnrollForm;