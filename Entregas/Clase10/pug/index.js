const express = require('express');
const app = express();
const port = process.env.PORT || 8080 
const productRoutes = require("./routes/productos")

app.use(express.json())
app.use(express.urlencoded({extended: false})) // para los datos que vienen del formulario.
app.use("/productos", productRoutes)

app.set("views", "./views") //todos los motores de plantillas los va a buscar aqui.
app.set("view engine", "pug") //para que use pug

// configuracion de la plantilla


// Rutas
app.get("/", (req, res) => {
    res.render("main")
})

app.listen(port, () => {
    console.log("Server run ok on port " + port);
});