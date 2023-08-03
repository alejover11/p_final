const {Schema, model} = require("mongoose");

const bcrypt = require("bcryptjs");

const encuestaSchema = new Schema({
    nombre: {type: String, required: false },
    identificacion: {type: Number, required: false},
    carrera_universitaria: {type: String, required: false},
    semestre:{type: String, required: false},
    materia:{type: String, required: false},
    salon:{type: Number, required: false}
});

module.exports = model("encuesta",encuestaSchema);