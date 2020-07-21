let express = require("express");
let router = express.Router();
const models = require("../models");
const { Op } = require("sequelize");

router.get("/charts-profit-tsla2019", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "TSLA", date: "2019-12-31" },
        { symbol: "TSLA", date: "2019-09-30" },
        { symbol: "TSLA", date: "2019-06-30" },
        { symbol: "TSLA", date: "2019-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-profit-tsla2018", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "TSLA", date: "2018-12-31" },
        { symbol: "TSLA", date: "2018-09-30" },
        { symbol: "TSLA", date: "2018-06-30" },
        { symbol: "TSLA", date: "2018-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-profit-tsla2017", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "TSLA", date: "2017-12-31" },
        { symbol: "TSLA", date: "2017-09-30" },
        { symbol: "TSLA", date: "2017-06-30" },
        { symbol: "TSLA", date: "2017-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-expenses-tsla2019", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "TSLA", date: "2019-12-31" },
        { symbol: "TSLA", date: "2019-09-30" },
        { symbol: "TSLA", date: "2019-06-30" },
        { symbol: "TSLA", date: "2019-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-expenses-tsla2018", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "TSLA", date: "2018-12-31" },
        { symbol: "TSLA", date: "2018-09-30" },
        { symbol: "TSLA", date: "2018-06-30" },
        { symbol: "TSLA", date: "2018-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-expenses-tsla2017", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "TSLA", date: "2017-12-31" },
        { symbol: "TSLA", date: "2017-09-30" },
        { symbol: "TSLA", date: "2017-06-30" },
        { symbol: "TSLA", date: "2017-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-revenue-tsla2019", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "TSLA", date: "2019-12-31" },
        { symbol: "TSLA", date: "2019-09-30" },
        { symbol: "TSLA", date: "2019-06-30" },
        { symbol: "TSLA", date: "2019-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-revenue-tsla2018", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "TSLA", date: "2018-12-31" },
        { symbol: "TSLA", date: "2018-09-30" },
        { symbol: "TSLA", date: "2018-06-30" },
        { symbol: "TSLA", date: "2018-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-revenue-tsla2017", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "TSLA", date: "2017-12-31" },
        { symbol: "TSLA", date: "2017-09-30" },
        { symbol: "TSLA", date: "2017-06-30" },
        { symbol: "TSLA", date: "2017-03-31" },
      ],
    },
  }).then((result) => res.json(result));
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
      ],
    },
  }).then((result) => res.json(result));
});

module.exports = router;
