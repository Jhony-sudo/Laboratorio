const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'PRUEBALAB',
    user: 'Jhony',
    password: 'Jhony1920.'
});

conexion.connect(function(Error) {
    if (Error) {
        throw Error;
    } else {
        console.log('Conexion established');
    }
});

function IngresarUsuario(Nombre, Email, Telefono, Tipo, Password) {
    var sql = 'INSERT INTO Usuario(Nombre,Email,Tipo,Password,Telefono) VALUES(' +
        Nombre + ',' + Email + ',' + 1 + ',' +
        Password + ',' + parseInt(Telefono) + ')';
    conexion.query(sql, function(Error, result) {
        if (Error) {
            throw Error;
        } else {
            console.log('record inserted');
        }
    })
}

function IngresarPaciente(Nombre, Cui, Telefono, Nacimiento, Sexo, NIT) {
    var sql = 'INSERT INTO Paciente VALUES(' + Cui + ',' + Nombre + ',' + Nacimiento + ',' +
        Sexo + ',' + NIT + ',' + Telefono + ')';
    try {
        conexion.query(sql);
        console.log('Saved record');
    } catch (Error) {
        throw Error;
    }
}
exports.add = IngresarPaciente;