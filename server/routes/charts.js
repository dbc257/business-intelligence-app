const express = require("express")
const router = express.Router()
const models = require("../models");
const { Op } = require("sequelize");

router.get("/apple", (req, res) => {
    models.Company.findAll({
        where: {
            [Op.or]: [
                { symbol: "AAPL", date: "2019-12-28" },
                { symbol: "AAPL", date: "2019-09-28" },
                { symbol: "AAPL", date: "2019-06-29" },
                { symbol: "AAPL", date: "2019-03-30" },
                { symbol: "AAPL", date: "2018-12-29" },
                { symbol: "AAPL", date: "2018-09-29" },
                { symbol: "AAPL", date: "2018-06-30" },
                { symbol: "AAPL", date: "2018-03-31" },
                { symbol: "AAPL", date: "2017-12-30" },
                { symbol: "AAPL", date: "2017-09-30" },
                { symbol: "AAPL", date: "2017-07-01" },
                { symbol: "AAPL", date: "2017-04-01" }
            ],
        },
    }).then((result) => res.json(result));
})

router.get("/facebook", (req, res) => {
    models.Company.findAll({
        where: {
            [Op.or]: [
                { symbol: "FB", date: "2019-12-31" },
                { symbol: "FB", date: "2019-09-30" },
                { symbol: "FB", date: "2019-06-30" },
                { symbol: "FB", date: "2019-03-31" },
                { symbol: "FB", date: "2018-12-31" },
                { symbol: "FB", date: "2018-09-30" },
                { symbol: "FB", date: "2018-06-30" },
                { symbol: "FB", date: "2018-03-31" },
                { symbol: "FB", date: "2017-12-31" },
                { symbol: "FB", date: "2017-09-30" },
                { symbol: "FB", date: "2017-06-30" },
                { symbol: "FB", date: "2017-03-31" },
            ],
        },
    }).then((result) => res.json(result));
});

router.get("/tesla", (req, res) => {
    models.Company.findAll({
        where: {
            [Op.or]: [
                { symbol: "TSLA", date: "2019-12-31" },
                { symbol: "TSLA", date: "2019-09-30" },
                { symbol: "TSLA", date: "2019-06-30" },
                { symbol: "TSLA", date: "2019-03-31" },
                { symbol: "TSLA", date: "2018-12-31" },
                { symbol: "TSLA", date: "2018-09-30" },
                { symbol: "TSLA", date: "2018-06-30" },
                { symbol: "TSLA", date: "2018-03-31" },
                { symbol: "TSLA", date: "2017-12-31" },
                { symbol: "TSLA", date: "2017-09-30" },
                { symbol: "TSLA", date: "2017-06-30" },
                { symbol: "TSLA", date: "2017-03-31" },
            ],
        },
    }).then((result) => {
        console.log(result)
        res.json(result)
    });
});

router.get("/", (req, res) => {
    models.Company.findAll({
        where: {
            [Op.or]: [
                { symbol: "TSLA", date: "2019-12-31" },
                { symbol: "TSLA", date: "2019-09-30" },
                { symbol: "TSLA", date: "2019-06-30" },
                { symbol: "TSLA", date: "2019-03-31" },
                { symbol: "TSLA", date: "2018-12-31" },
                { symbol: "TSLA", date: "2018-09-30" },
                { symbol: "TSLA", date: "2018-06-30" },
                { symbol: "TSLA", date: "2018-03-31" },
                { symbol: "TSLA", date: "2017-12-31" },
                { symbol: "TSLA", date: "2017-09-30" },
                { symbol: "TSLA", date: "2017-06-30" },
                { symbol: "TSLA", date: "2017-03-31" },
                { symbol: "FB", date: "2019-12-31" },
                { symbol: "FB", date: "2019-09-30" },
                { symbol: "FB", date: "2019-06-30" },
                { symbol: "FB", date: "2019-03-31" },
                { symbol: "FB", date: "2018-12-31" },
                { symbol: "FB", date: "2018-09-30" },
                { symbol: "FB", date: "2018-06-30" },
                { symbol: "FB", date: "2018-03-31" },
                { symbol: "FB", date: "2017-12-31" },
                { symbol: "FB", date: "2017-09-30" },
                { symbol: "FB", date: "2017-06-30" },
                { symbol: "FB", date: "2017-03-31" },
                { symbol: "AAPL", date: "2019-12-28" },
                { symbol: "AAPL", date: "2019-09-28" },
                { symbol: "AAPL", date: "2019-06-29" },
                { symbol: "AAPL", date: "2019-03-30" },
                { symbol: "AAPL", date: "2018-12-29" },
                { symbol: "AAPL", date: "2018-09-29" },
                { symbol: "AAPL", date: "2018-06-30" },
                { symbol: "AAPL", date: "2018-03-31" },
                { symbol: "AAPL", date: "2017-12-30" },
                { symbol: "AAPL", date: "2017-09-30" },
                { symbol: "AAPL", date: "2017-07-01" },
                { symbol: "AAPL", date: "2017-04-01" }
            ],
        },
    }).then((result) => {
        console.log(result.map(obj => obj.symbol))
        res.json(result)
    });
})

module.exports = router