const express = require('express'),
    rest = express.Router()

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


rest.route('/')
    .get((req, res) => {
        res.send("1234")
    })

rest.route('/home')
    .get((req, res) => {
        res.json(myhome)
    })
    .post((req, res) => {
        var keephome = {}
        console.log(req.body);

        keephome.id = myhome.length > 0 ? myhome[myhome.length - 1].id + 1 : 0
        keephome.name = req.body.name
        keephome.des = req.body.des
        keephome.latitude = req.body.latitude
        keephome.longitude = req.body.longitude
        keephome.price = req.body.price
        keephome.area = req.body.area
        keephome.type = req.body.type
        keephome.category = req.body.category
        keephome.tel = req.body.tel
        myhome.push(keephome)

        res.json({ message: "add ok" })
    })

rest.route('/edit/:id')
    .delete((req, res) => {
        var index = myhome.findIndex(p => +p.id === +req.params.id)
        myhome.splice(index, 1)
        res.json({ message: "delete" })
    })
    .put((req, res) => {
        console.log(req.body);


        var index = myhome.findIndex(p => +p.id === +req.params.id)
        myhome[index].name = req.body.name
        myhome[index].des = req.body.des
        myhome[index].latitude = req.body.latitude
        myhome[index].longitude = req.body.longitude
        myhome[index].price = req.body.price
        myhome[index].area = req.body.area
        myhome[index].type = req.body.type
        myhome[index].category = req.body.category
        myhome[index].tel = req.body.tel
        res.json({ message: "update" })
    })
module.exports = rest