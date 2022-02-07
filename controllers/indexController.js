const res = require("express/lib/response")

// 1. CONTROLLER

exports.getHome = (req, res) => {
    res.render("index")
}

exports.getProfile = (req, res) => {
    res.render("profile")
}