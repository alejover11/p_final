const encuesta = require("../models/encuesta");
const horario = require("../models/horario");

const encuestacontroller = {};

encuestacontroller.guardarencuesta = async (req,res) => {
    try{
        const{nombre,identificacion,carrera_universitaria,semestre,materia,salon} = req.body;
        console.log(nombre);

        //crear nueva instancia de la encuesta
        const nuevaencuesta = new encuesta({
            nombre,
            identificacion,
            carrera_universitaria,
            semestre,
            materia,
            salon
        });
        nuevaencuesta.user = req.user.id;
        //guardar encuesta en la base de datos
        await nuevaencuesta.save();
        res.redirect("/home");

        //ReturnDocument.redirect("/home");

    } catch (error){
        console.log(error);
        res.status(500).send("ocurrio un error al guardar la encuesta.");
    }
};

encuestacontroller.guardahorario = async(req,res) =>{
    const {hora, dia, materia,salon} = req.body;
    const encuestahorario =new horario({hora, dia, materia,salon});
    encuestahorario.user = req.user.id;
    await encuestahorario.save();
    res.redirect("/home");

}

module.exports = encuestacontroller;
