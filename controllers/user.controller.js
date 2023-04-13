

module.exports.list = (req, res, next) => {
  conexion.query('SELECT * FROM usuarios', function (error, results, fields) {
    if (error)
        throw error;
  
    results.forEach(result => {
        console.log(result);
        
    });
  });
};
