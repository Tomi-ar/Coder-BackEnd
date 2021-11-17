const express = require("express")

const app = express()

app.get("/", (req: any, res: any) => {
    res.send({message: "Hola mundos!"})
})

app.listen(4002, ()=> {
    console.log("Server running ok!");
})