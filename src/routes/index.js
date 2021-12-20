const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');

});

router.get('/record', (req, res) => {
    res.render('record.html');

});

router.use('/menu', (req, res) => {
    res.render('menu.html');

});


router.use('/IngresoCliente', (req, res) => {
    res.render('IngresoCliente.html');
});





module.exports = router;