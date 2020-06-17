const express = require('express'),
    webhook = express.Router()

webhook.route('/webhook')
    .post((req, res) => {
        res.send("1234")
    })




module.exports = webhook