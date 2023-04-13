

const mysql = require('mysql');
let conexion = mysql.createConnection({
    host : 'hd-europe2712.banahosting.com',
    database : 'ayavlgeb_mensajeria',
    user : 'ayavlgeb_root',
    password : 'Cambiar2006',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
    // console.log({conexion})
});


conexion.query('SELECT * FROM usuarios where id = 1', function (error, results, fields) {
  if (error)
      throw error;

  results.forEach(result => {
      console.log(result);
  });
});


conexion.end();


module.export = {conexion}

//Cambiar2006



