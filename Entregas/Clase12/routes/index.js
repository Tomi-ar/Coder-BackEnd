const express = require('express');
const { Router } = require('express');

const router = new Router();

router.get("/", (req, res) => {
    res.sendFile("public/index.html", {root:"."});
})

module.exports = router;