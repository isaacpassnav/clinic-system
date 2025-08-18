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
}

const  createCourse = async (req, res) => {
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    try {
        const pool = await getPool();
        const [result] = await pool.query(
            "INSERT INTO courses (title, description, price) VALUES (?, ?, ?)",
            [title, description, price]
        );
        res.status(201).json({ message: "✅ Curso creado", courseId: result.insertId });
    } catch (error) {
        console.error("Error al crear curso:", error);
        res.status(500).json({ error: "Error al crear curso" });
    }
}

const  updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    try {
        const pool = await getPool();
        const [result] = await pool.query(
            "UPDATE courses SET title = ?, description = ?, price = ? WHERE id = ?",
            [title, description, price, id]
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
