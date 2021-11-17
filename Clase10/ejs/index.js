const express = require('express');
const port = process.env.PORT || 8080 
const app = express();
const productRoutes = require("./routes/productos")

app.use(express.json())
app.use(express.urlencoded({extended: false})) // para los datos que vienen del formulario.
app.use("/productos", productRoutes)

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/" , (req,res) => {
    res.render("index")
})



app.listen(port, () => {
    console.log(`Server running ok on port ${port}`);
})