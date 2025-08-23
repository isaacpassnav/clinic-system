import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    role: "user",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:57126/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: parseInt(formData.phone, 10), // lo casteamos a número
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setMsg("✅ Registro exitoso: " + (result.message || "Usuario creado"));
      } else {
        setMsg("❌ Error: " + (result.error || "No se pudo registrar"));
      }
    } catch (err) {
      console.error(err);
      setMsg("⚠️ Error de conexión con el servidor");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="full_name"
          type="text"
          placeholder="Nombre completo"
          value={formData.full_name}
          onChange={handleChange}
          required
          minLength={2}
        />
        <input
          id="email"
          type="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          id="password"
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
        />
        <input
          id="phone"
          type="text"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          id="address"
          type="text"
          placeholder="Dirección"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          id="city"
          type="text"
          placeholder="Ciudad"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          id="state"
          type="text"
          placeholder="Estado/Provincia"
          value={formData.state}
          onChange={handleChange}
        />

        <select id="role" value={formData.role} onChange={handleChange}>
          <option value="user">Usuario</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Registrar</button>
      </form>

      {msg && <p>{msg}</p>}
    </div>
  );
}
