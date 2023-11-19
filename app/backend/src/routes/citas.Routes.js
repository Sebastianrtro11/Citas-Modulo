const express = require('express');
const router = express.Router();


const { programarCita,modificarCita,mostrarCitasPorPaciente,listarCitas  } = require('../controller/citas.controller');

router.post('/', programarCita);

router.put('/:id', modificarCita);

router.get('/paciente/:paciente', mostrarCitasPorPaciente);

router.get('/',listarCitas);

module.exports = router;
