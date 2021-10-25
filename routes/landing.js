const express = require("express")

// create a new router object
const router = express.Router(); 
// Router() will return a new roter object

// A router object can contain routers

router.get('/', (req,res) => {
    res.render("landing/welcome")
})

router.get('/about-us', (req,res) =>{
    res.render("landing/about-us")
})

router.get('/contact-us', (req,res) => {
    res.render("landing/contact-us")
})

module.exports = router