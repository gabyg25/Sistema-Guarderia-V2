const express = require('express')
const router = express.Router();
const reservacionDAO = require('../models/reservacionDAO');

router.get('/', (req, res) => {
   reservacionDAO.getAllReservation((data) => {
       res.send(data);
   });
});

router.get('/inicio', (req, res) => {
    res.render('index');
});

router.post('/save', (req, res) => {
    var num_random =  Math.round(Math.random() * (50000 - 90000) + 90000);
    const nombres = req.body.nombre;
    const cod = num_random;
    const telep = req.body.telefono;
    const correos = req.body.correo;
    const dates = req.body.fecha;
    const ser = req.body.servicio;
    console.log(nombres +' Codigo:' +cod +' Cel: '+ telep + ' Co: '+ correos +' Dia: ' +dates +' Servicio:' + ser);
});


module.exports = router;