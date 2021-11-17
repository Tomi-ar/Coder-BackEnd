const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 8080 
const productRoutes = require("./routes/productos")

app.use(express.json())
app.use(express.urlencoded({extended: false})) // para los datos que vienen del formulario.
app.use("/productos", productRoutes)

app.set("views", "./views") //todos los motores de plantillas los va a buscar aqui.
app.set("view engine", "hbs") //para que use handlebars

// configuracion de la plantilla
app.engine(
    "hbs",
    handlebars({
        extname: "hbs",
        layoutsDir: __dirname+"/views/layouts",
        defaultLayout: "index",
        partialsDir: __dirname+"/views/partials",
    })
)


// Rutas
app.get("/", (req, res) => {
    res.render("main")
})

app.listen(port, () => {
    console.log("Server run ok on port " + port);
});