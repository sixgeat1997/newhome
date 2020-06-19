const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    router = express.Router(),
    fs = require('fs'),
    db = require('./config/db'),
    rest = require('./routes/Rest'),
    search = require('./routes/Search'),
    // webhook = require('./routes/Webhook'),
    request = require('request')
   
    // { WebhookClient } = require('dialogflow-fulfillment')


let port = process.env.PORT || 4444

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }), router)

var myhome = [
    {
        id: 0,
        name: "chayanon",
        tel: "0954321078",
        description: "คำอธิบาย",
        latitude: 56,
        longitude: 23,
        price: 5000, //บาท
        area: 100, //หน่วยตารางเมตร
        type: "sale", // sale/rent
        category: "condo" // condo/house
    },
    {
        id: 1,
        name: "chayanon",
        tel: "0954321078",
        description: "คำอธิบาย",
        latitude: 56,
        longitude: 23,
        price: 5000, //บาท
        area: 100, //หน่วยตารางเมตร
        type: "sale", // sale/rent
        category: "condo" // condo/house
    },
    {
        id: 2,
        name: "chayanon",
        tel: "0954321078",
        description: "คำอธิบาย",
        latitude: 56,
        longitude: 23,
        price: 5000, //บาท
        area: 100, //หน่วยตารางเมตร
        type: "sale", // sale/rent
        category: "condo" // condo/house
    },
    {
        id: 3,
        name: "chayanon",
        tel: "0954321078",
        description: "คำอธิบาย",
        latitude: 56,
        longitude: 23,
        price: 5000, //บาท
        area: 100, //หน่วยตารางเมตร
        type: "sale", // sale/rent
        category: "condo" // condo/house
    }
]

app.use('/api', rest)
app.use('/search', search)
// app.use('/line', webhook)


app.use("*", (req, res) => res.status(404).send("404 not found"))
app.listen(port, () => {
    console.log("server is ok");

})



