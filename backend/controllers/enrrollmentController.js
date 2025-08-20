const { getPool } = require("../config/db");

const getEnrrollments = async (req, res) => {
  try {
    const pool = await getPool();
    const [rows] = await pool.query(`
      SELECT 
        e.id AS enrrollment_id,
        u.full_name AS student_name,
        u.email AS student_email,
        c.title AS course_title,
        c.teacher_name AS teacher,
        c.teacher_email AS teacher_email,
        c.schedule,
        c.days,
        e.status,
        e.enrrolled_at
      FROM enrrollments e
      JOIN users u ON e.user_id = u.id
      JOIN courses c ON e.course_id = c.id
    `);
    res.json(rows);
  } catch (error) {
    console.error("❌ Error al obtener inscripciones:", error);
    res.status(500).json({ error: "Error al obtener inscripciones" });
  }
};

const createEnrrollment = async (req, res) => {
  const { user_id, course_id } = req.body;

  if (!user_id || !course_id) {
    return res.status(400).json({ error: "El user_id y course_id son requeridos" });
  }

  try {
    const pool = await getPool();

    const [user] = await pool.query("SELECT id FROM users WHERE id = ?", [user_id]);
    if (user.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const [course] = await pool.query("SELECT id FROM courses WHERE id = ?", [course_id]);
    if (course.length === 0) {
      return res.status(404).json({ error: "Curso no encontrado" });
    }

    const [existing] = await pool.query(
      "SELECT id FROM enrrollments WHERE user_id = ? AND course_id = ?",
      [user_id, course_id]
    );
    if (existing.length > 0) {
      return res.status(400).json({ error: "El usuario ya está inscrito en este curso" });
    }
    const [result] = await pool.query(
      "INSERT INTO enrrollments (user_id, course_id) VALUES (?, ?)",
      [user_id, course_id]
    );

    res.status(201).json({ message: "✅ Inscripción creada", enrollmentId: result.insertId });
  } catch (error) {
    console.error("❌ Error al crear inscripción:", error);
    res.status(500).json({ error: "Error al crear inscripción" });
  }
};

const deleteEnrrollment = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getPool();
    const [result] = await pool.query("DELETE FROM enrrollments WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Inscripción no encontrada" });
    }
    res.json({ message: "✅ Inscripción eliminada" });
  } catch (error) {
    console.error("❌ Error al eliminar inscripción:", error);
    res.status(500).json({ error: "Error al eliminar inscripción" });
  }
};

module.exports = {getEnrrollments,createEnrrollment,deleteEnrrollment,};
