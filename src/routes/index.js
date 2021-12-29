
  
const router = require('express').Router();

const customerController = require('../controladores/controladorAdmin');

router.get('/', customerController.login);
router.post('/auten', customerController.auten);
router.post('/saveUser', customerController.save);


router.post('/saveCliente',customerController.saveCliente);
router.get('/add-estudio',function(req,res){
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ESTUDIO', (err, customers) => {
         if (err) {
          res.json(err);
         }
         res.render('add-estudio', {
            data: customers
         });
        });
      });
});
router.get('/regis',function(req,res){
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Usuario', (err, customers) => {
         if (err) {
          res.json(err);
         }
         res.render('ingresoDatos', {
            data: customers
         });
        });
      });
 });
 router.get('/regisCliente',function(req,res){
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Paciente', (err, customers) => {
         if (err) {
          res.json(err);
         }
         res.render('ingresoCliente', {
            data: customers
         });
        });
      });
 });
router.post('/saveStudio',customerController.registroEstudio);
router.get('/delete/:id', customerController.delete);




module.exports = router;