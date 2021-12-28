const express = require('express');
const router = express.Router();
const conexion = require('./Db');
router.get('/', (req, res) => {
    res.render('index.html');

});

router.get('/record', (req, res) => {
    res.render('record.html');


});

router.get('/menu', (req, res) => {
    res.render('menu.html');

});


router.use('/IngresoCliente', (req, res) => {
    res.render('IngresoCliente.html');
});


router.use('/IngresoUsuario', (req, res) => {
    res.render('IngresoUsuario.html');

});
router.post('/add', (req, res) => {
    let Nombre = JSON.stringify(req.body.nombre);
    let Tel = JSON.stringify(req.body.Telefono);
    //let Tipo = JSON.stringify(req.body.Tipo);
    let Pass = JSON.stringify(req.body.Password);
    let Email = JSON.stringify(req.body.Email);
    let Celular = parseInt(Tel);
    res.end(JSON.stringify(req.body));

});

router.post('/addUser', (req, res) => {
    let Nombre = JSON.stringify(req.body.nombre);
    let Cui = JSON.stringify(req.body.Cui);
    let Telefono = JSON.stringify(req.body.Telefono);
    let Nacimiento = JSON.stringify(req.body.Nacimiento);
    let Sexo = JSON.stringify(req.body.Sexo);
    let Nit = JSON.stringify(req.body.Nit);
    try {
        conexion.add(Nombre, Cui, Telefono, Nacimiento, Sexo, Nit);
        res.render('IngresoCliente.html');

    } catch (Error) {
        console.log('Usuaio ya existe');


    }
});


router.use('/Lab', (req, res) => {
    res.render('ExamenesAsignados.html');
});






module.exports = router;