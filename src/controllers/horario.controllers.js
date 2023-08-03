const Horario = require("../models/horario");


const horarioController = {};

horarioController.guardarHorario = async (req, res) => {
    try {
        const { hora, dia } = req.body;
        const nuevoHorario = new Horario({
            hora,
            dia
        });

        await nuevoHorario.save();

        res.redirect("/horario"); // Corregí el nombre de la ruta aquí si es necesario
    } catch (error) {
        console.log(error);
        res.status(500).send("ocurrio un error al guardar el horario.");
    }
};

module.exports = horarioController;
