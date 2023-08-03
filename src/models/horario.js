const {Schema, model }= require("mongoose");
const bcrypt = require("bcryptjs");

const horarioSchema = new Schema({
    hora:{type: String, required: false},
    dia:{type: String, required: false },
    materia:{type: String, required: false },
    salon:{type: String, required: false },
    user:{type: String, required: false}
});

module.exports = model("horario", horarioSchema);