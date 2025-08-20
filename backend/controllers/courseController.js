const { getPool } = require("../config/db");

const  getCourses = async (req, res) => {
    try {
        const pool = await getPool();
        const [rows] = await pool.query("SELECT * FROM courses");
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener cursos:", error);
        res.status(500).json({ error: "Error al obtener cursos" });
    }
};
const createCourse = async (req, res) => {
    try {
        const { title, description, teacher_name, teacher_email, duration_weeks, price, start_date, schedule, days } = req.body;

        const requiredFields = ["title", "teacher_name", "teacher_email", "duration_weeks", "price", "start_date"];
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({ error: `El campo ${field} es requerido` });
            }
        }

        if (title.length < 3) {
            return res.status(400).json({ error: "El título debe tener al menos 3 caracteres" });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(teacher_email)) {
            return res.status(400).json({ error: "El correo del docente no es válido" });
        }
        if (duration_weeks <= 0) {
            return res.status(400).json({ error: "La duración debe ser mayor a 0 semanas" });
        }
        if (price <= 0) {
            return res.status(400).json({ error: "El precio debe ser mayor a 0" });
        }
        const today = new Date();
        const startDateObj = new Date(start_date);
        if (startDateObj < today.setHours(0, 0, 0, 0)) {
            return res.status(400).json({ error: "La fecha de inicio no puede ser en el pasado" });
        }
        const pool = await getPool();

        const [existing] = await pool.query(
            "SELECT id FROM courses WHERE title = ?",
            [title]
        );
        if (existing.length > 0) {
            return res.status(400).json({ error: "❌ Ya existe un curso con ese título" });
        }
        const [result] = await pool.query(
            `INSERT INTO courses (title, description, teacher_name, teacher_email, duration_weeks, price, start_date, schedule, days) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [title, description, teacher_name, teacher_email, duration_weeks, price, start_date, schedule, days]
        );

        return res.status(201).json({message: "✅ Curso creado",courseId: result.insertId});
    } catch (error) {
        console.error("Error al crear curso:", error);
        return res.status(500).json({ error: "Error al crear curso" });
    }
};

const  updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, teacher_name } = req.body;

    if (!title || !description || !price || !teacher_name) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    try {
        const pool = await getPool();
        const [result] = await pool.query(
            "UPDATE courses SET title = ?, teacher_name = ?, description = ?, price = ? WHERE id = ?",
            [title, teacher_name, description, price, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Curso no encontrado" });
        }

        res.json({ message: "✅ Curso actualizado" });
    } catch (error) {
        console.error("Error al actualizar curso:", error);
        res.status(500).json({ error: "Error al actualizar curso" });
    }
}

const  deleteCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getPool();
        const [result] = await pool.query("DELETE FROM courses WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Curso no encontrado" });
        }

        res.json({ message: "✅ Curso eliminado" });
    } catch (error) {
        console.error("Error al eliminar curso:", error);
        res.status(500).json({ error: "Error al eliminar curso" });
    }
}

module.exports = {getCourses, createCourse,updateCourse,deleteCourse};
