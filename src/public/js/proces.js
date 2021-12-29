
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const cui = document.getElementById("cui");
const departamento = document.getElementById("departamento");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confir = document.getElementById("confir");
let nombreEst = document.getElementById("nombre-lab");
const precio = document.getElementById("precio");
let bar = document.getElementById("bar");

function registrar() {

    console.log(nombre.value);
    console.log(correo.value);
    console.log(contrasena.value);
    console.log(confir.value);
    if (contrasena.value == confir.value) {
        console.log('El usuario debe de estar logeado y tiene que ser administrador, debe de tener solicitud');
        alert('Datos correctos, nuevo usuario ' + nombre.value);

    } else {

        alert('Error las contraseñas no coinciden');
    }
}

function iniciar() {
    console.log(nombre.value);
    console.log('El usuario debe de estar logeado');
    
    window.confirm('Bienvenido ' + nombre.value);
    res.red
}

function start1(req, res) {
    console.log(nombre.value);
    console.log('El usuario debe de estar logeado');
    
    window.confirm('Bienvenido ' + nombre.value);
    res.render('/ingreso')
};

controller.ini = (req, res) => {
    /*const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
        console.log(customer)*/
        res.redirect('/');
      //})
    //})
  };

function ingresar() {
console.log(nombre.value);
console.log(apellido.value);
console.log(cui.value);
console.log(departamento.value);
console.log('El usuario debe estar logeado y debe de ser secretaria');
alert('Datos ingresados');
}

function cambiar(){
    console.log(bar.value);
    if(bar.value==='reg'){
        console.log(bar.value);
        location.href="./ingresoDatos.html"
    }else if(bar.value==='ini'){
        location.href="./login.html"
    }else{
        location.href="./ingresoCliente.html"
    }
}

function agregarEst(){
    console.log('Entrando a agregar');
    console.log('Prerequisito: Debe estar logueado, debe de ser un administrador y deben tener equipo para realizarlo')
if(precio.value>0){
    alert('aceptar')
}else{
    console.log('error')
    alert('Precio debe ser mayor a 0' )
}
}