let express = require("express");
let router = express.Router();
const models = require("../models");
const { Op } = require("sequelize");

router.get("/2019", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "AAPL", date: "2019-12-28" },
        { symbol: "AAPL", date: "2019-09-28" },
        { symbol: "AAPL", date: "2019-06-29" },
        { symbol: "AAPL", date: "2019-03-30" },
        { symbol: "AAPL", date: "2020-03-28" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/2018", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "AAPL", date: "2018-12-29" },
        { symbol: "AAPL", date: "2018-09-29" },
        { symbol: "AAPL", date: "2018-06-30" },
        { symbol: "AAPL", date: "2018-03-31" },
      ],
    },
  }).then((result) => {
    console.log(result);
    res.json(result);
  });
});

router.get("/2017", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "AAPL", date: "2017-12-30" },
        { symbol: "AAPL", date: "2017-09-30" },
        { symbol: "AAPL", date: "2017-07-01" },
        { symbol: "AAPL", date: "2017-04-01" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/", (req, res) => {
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
        { symbol: "AAPL", date: "2017-04-01" },
        { symbol: "AAPL", date: "2020-03-28" },
      ],
    },
  }).then((result) => {
    console.log(JSON.stringify(result));
    res.json(result);
  });
});

module.exports = router;
