import { useState } from "react";

function RecoverPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí conectaremos con backend: /auth/recover-password
    console.log("Password recovery for:", email);
  };

  return (
    <main className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Recuperar Contraseña</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Enviar enlace</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default RecoverPasswordPage;
