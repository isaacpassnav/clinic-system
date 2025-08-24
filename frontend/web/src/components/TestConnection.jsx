import { useEffect, useState } from "react";
import api from "../services/api";

const TestConnection = () => {
  let [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/")
      .then(res => {
        setMessage(res.data.message);
        console.log("✅ Frontend conectado exitosamente al backend");
      })
      .catch(err => console.error("❌ Error en la conexión:", err));
  }, []);

  return null;
};

export default TestConnection;