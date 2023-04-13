const express = require("express");
const router = express.Router();

const conexion = require('./db.config')

const user = require("../controllers/user.controller");

console.log(conexion)

router.get("/", (req, res) => {
  res.json({ message: "oki" });
});


router.get("/users", (req, res) => {
  // conexion.query('SELECT * FROM usuarios', function (error, results, fields) {
  //   if (error)
  //       throw error;
  
  //   results.forEach(result => {
  //       console.log(result);
  //       response.status(200).json(results);
  //   });
  // });

  // res.json({ message: "ok" });
});


// router.get("/users", user.list);



module.exports = router;