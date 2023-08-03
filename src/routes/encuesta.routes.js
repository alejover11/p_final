const express = require("express");
const router = express.Router();

const {guardarencuesta, guardahorario} = require ('../controllers/encuesta.controllers') ;

router.post("/guardarencuesta", guardarencuesta );
router.post("/guardahorario", guardahorario );
module.exports = router;