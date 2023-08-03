const express = require("express");
const router = express.Router();
const { guardarHorario } = require('../controllers/horario.controllers');

router.post("/guardarhorario", guardarHorario);

module.exports = router;
