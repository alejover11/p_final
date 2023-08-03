// models/matricula.js
const { Schema, model } = require('mongoose');

const matriculaSchema = new Schema({
  carrera_universitaria: { type: String, required: true },
  semestre: { type: String, required: true },
  materias: [String], // Un arreglo de cadenas para almacenar las materias
});

module.exports = model('Matricula', matriculaSchema);


  