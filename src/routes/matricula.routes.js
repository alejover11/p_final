// routes/matricula.routes.js
const express = require('express');
const router = express.Router();
const Matricula = require('../models/matricula');

router.post('/guardarmatricula', async (req, res) => {
  try {
    const { materias } = req.body;

    // Guardar las materias en la base de datos
    const nuevaMatricula = new Matricula({ materias });
    await nuevaMatricula.save();

    // Respuesta exitosa
    return res.json({ message: 'Materias guardadas exitosamente' });
  } catch (error) {
    console.error('Error al guardar las materias:', error);
    return res.status(500).json({ error: 'Hubo un error al guardar las materias' });
  }
});

module.exports = router;
