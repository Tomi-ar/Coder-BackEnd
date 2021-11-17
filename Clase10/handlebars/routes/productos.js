const express = require("express");
const { Router } = express;
let arr = require("../db/arrProds")

const router = new Router()

// let arr = [
//     {name: "cable",
//     price: "100"},
//     {name: "lampara",
//     price: "200"},
//     {name: "adaptador",
//     price: "50"},
// ]

router.get("/", (req, res) => {
    let check = false;
    arr.length === 0 ? check = true : check = false;
    res.render("productos", {data: arr, check: check});
})

router.get("/form", (req, res) => {
    res.render("form")
})

router.post("/form", (req, res) => {
    console.log(req.body);
    let items = arr.length;
    let id = arr[items - 1].id + 1;
    let newProd = {
        id: id,
        nombre: req.body.nombre,
        precio: req.body.precio,
        thumb: req.body.thumb,
    }
    arr.push(newProd);
    res.redirect("/productos")
})

module.exports = router;