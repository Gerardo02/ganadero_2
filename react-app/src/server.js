const execSync = require("child_process").execSync;
const mysql = require("mysql");
const express = require("express");
const app1 = express();
let datos;

// Create connection
connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "633d5ca8e4",
  database: "inventario_ganadero"
});

// connect
connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected");
});

app1.listen("3000", () => {
  console.log("inicializa servidor en puerto 3000");
});

if (process.platform !== "darwin") {
  app1.get("/datos", (req, resp) => {
    connection.query("SELECT * FROM datos", (err, rows, fields) => {
      if (err) {
        throw err;
      } else {
        console.log("succes datos");
        //console.log(`El tipo es:${rows[0].tipo}`);
      }
      resp.send("Conectado a la table datos");
      datos = rows;
      console.log(datos);
    });
  });
} else if (process.platform === "darwin") {
  console.log("Output datos was:\n", outputDatos);
  app1.get("/datos", (req, resp) => {
    connection.query("SELECT * FROM datos", (err, rows, fields) => {
      if (err) {
        throw err;
        console.log("succes datos");
      } else {
        console.log("succes datos");
        //console.log(`El tipo es:${rows[0].tipo}`);
      }
      resp.send("Conectado a la table datos");
      datos = rows;
      console.log(datos);
    });
  });
}
