const express = require("express");
const app = express();
const router = require("./routes/index");

// Creo array para los mesajes
let msn = [
    {
        nombre: "Juanito",
        msn: "Estamos practicando"
    },
    {
        nombre: "Flor",
        msn: "Ta jodido esto no?"
    },
    {
        nombre: "Jose",
        msn: "Ahi va..."
    }
]

// Archivos estaticos
app.use(express.static(__dirname+"/public"))

// Server
const http = require("http")
const server = http.createServer(app)
const port = process.env.PORT || 3003;

// Socket
const { Server } = require("socket.io")
const io = new Server(server)

//Conexion Socket
io.on("connection" , (socket) => {
    //aqui trabajamos toda la config del socket
    console.log("Cliente conectado");
    socket.emit("mensaje_rta", msn);

    socket.on("mensaje_cliente", (data) =>{
        console.log(data);
    })

    //Escuchasr chat cliente
    socket.on("dataMsn", (data) => {
        msn.push(data);
        console.log(msn);
        // socket.emit("mensaje_rta", msn)
        io.sockets.emit("mensaje_rta", msn)
    })



})

//Router config
app.use("/api", router)

server.listen(port, () => {
    console.log("Server running ok!");
})