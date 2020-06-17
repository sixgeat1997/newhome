const express = require('express'),
    search = express.Router(),
    db = require('../config/db')

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
        category: "house" // condo/house
    },
    {
        id: 3,
        name: "chayanon",
        tel: "0954321078",
        description: "คำอธิบาย",
        latitude: 56,
        longitude: 23,
        price: 1900, //บาท
        area: 100, //หน่วยตารางเมตร
        type: "sale", // sale/rent
        category: "condo" // condo/house
    }
]

search.route('/price')
    .get((req, res) => {

        const { fPrice, ePrice } = { ...req.body }
        const item = myhome.filter(item => {
            if (item.price >= fPrice && item.price <= ePrice)
                return item
        })

        res.json(item)


    })

search.route('/category')
    .get((req, res) => {
        const category = req.body.category
        const item = myhome.filter(item => {
            if (item.category == category)
                return item
        })

        res.json(item)



    })

module.exports = search

