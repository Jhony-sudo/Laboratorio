const controller = {};
var dataString;

controller.login = (req, res) => {
  res.render("login");
  console.log("Estamos en el login");
  //res.redirect('/regis');
};
controller.auten = (req, res) => {
  const user = JSON.stringify(req.body.nombre);
  const pass = JSON.stringify(req.body.contrasena);
  console.log(user + " " + pass);
  if (user && pass) {
    req.getConnection((err, connection) => {
      connection.query(
        "SELECT * FROM Usuario WHERE Nombre = " +
          user +
          " and Password = " +
          pass +
          "",
        (err, rows) => {
          console.log(err);
          if (rows.length == 0) {
            res.render("login", {
              alert: true,
              alertTitle: "Error",
              alertMessage: "USUARIO y/o PASSWORD incorrectas",
              alertIcon: "error",
              showConfirmButton: true,
              timer: false,
              ruta: "",
            });
            console.log("error loging");
            //Mensaje simple y poco vistoso
            //res.send('Incorrect Username and/or Password!');
          } else {
            //creamos una var de session y le asignamos true si INICIO SESSION
            let tipo = rows[0].Tipo;
            console.log("aceptado " + rows[0].Codigo);
            if (tipo == 1) {
              res.redirect("/regis");
            } else if (tipo== 2) {
              console.log('secre')
              res.redirect('/regisCliente');
            }
          }
          res.end();
        }
      );
    });
  }
};

controller.registroEstudio = (req, res) => {
  const nameStudio = JSON.stringify(req.body.nombreStudio);
  const precio = JSON.stringify(req.body.precio);
  const data = JSON.stringify(req.body);
  console.log(nameStudio + " tiene un precio " + data);
  req.getConnection((err, connection) => {
    const query = connection.query(
      "INSERT INTO ESTUDIO set Nombre=" +
        nameStudio +
        ", Precio=" +
        precio +
        "",
      (err, customer) => {
        //res.redirect('/add-estudio');
        if (err) {
          console.log("eror");
          
        } else {
          console.log(customer);
        }
        res.redirect("/add-estudio",);
      }
    );
  });
};

controller.save = (req, res) => {
  const name = JSON.stringify(req.body);
  console.log("sabe users en db datos nuevoss " + name);

  /*req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
        console.log(customer)
        res.redirect('/');
      })
    })*/
};
controller.saveUser = (req, res) => {
  const nombre = JSON.stringify(req.body.nombre);
  const telefono = JSON.stringify(req.body.telefono);
  const email = JSON.stringify(req.body.email);
  const tipo = JSON.stringify(req.body.tipo);
  const password = JSON.stringify(req.body.contrasena);
  const confir = JSON.stringify(req.body.confir);
  console.log(nombre + " y " +JSON.stringify(req.body));
  if(password==confir){
    console.log('IGUALES');
    req.getConnection((err, connection) => {
      const query = connection.query(
        "INSERT INTO Usuario set Nombre=" +nombre + ", Email=" + email+", Tipo="+tipo+", Password="+password+", Telefono="+telefono+"",(err, customer) => {
          //res.redirect('/add-estudio');
          if (err) {
            console.log(err);
            
          } else {
            console.log(customer+'GUARDADO');
          }
          res.redirect("/regis",);
        }
      );
    });
  }else{
    res.send('Contraseñas no aceptada')
    console.log('ErrOR CONTRASEÑAS NO CINCIDEN');
    res.redirect("/regis",);
  }
  
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM ESTUDIO WHERE Nombre = ?",
      [id],
      (err, rows) => {
        res.redirect("/add-estudio");
      }
    );
  });
};
controller.saveCliente = (req, res) => {
  const nombre = JSON.stringify(req.body.nombre);
  const telefono = JSON.stringify(req.body.telefono);
  const cui = JSON.stringify(req.body.cui);
  const sexo = JSON.stringify(req.body.sexo);
  const nit = JSON.stringify(req.body.nit);
  const date = JSON.stringify(req.body.date);
  console.log(nombre + " y " +JSON.stringify(req.body));
    console.log('IGUALES');
    req.getConnection((err, connection) => {
      const query = connection.query(
        "INSERT INTO Paciente set Cui="+cui+", Nombre=" +nombre + ", Nacimiento=" +date+", Sexo="+sexo+", NIT="+nit+", Telefono="+telefono+"",(err, customer) => {
          //res.redirect('/add-estudio');
          if (err) {
            console.log(err);
            
          } else {
            console.log(customer+'GUARDADO');
          }
          res.redirect("/regisCliente",);
        }
      );
    });
  
  
};

module.exports = controller;
