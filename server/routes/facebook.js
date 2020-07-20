let express = require("express");
let router = express.Router();
const models = require("../models");
const { Op } = require("sequelize");

router.get("/charts-profit-fb2019", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "FB", date: "2019-12-31" },
        { symbol: "FB", date: "2019-09-30" },
        { symbol: "FB", date: "2019-06-30" },
        { symbol: "FB", date: "2019-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-profit-fb2018", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "FB", date: "2018-12-31" },
        { symbol: "FB", date: "2018-09-30" },
        { symbol: "FB", date: "2018-06-30" },
        { symbol: "FB", date: "2018-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-profit-fb2017", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "FB", date: "2017-12-31" },
        { symbol: "FB", date: "2017-09-30" },
        { symbol: "FB", date: "2017-06-30" },
        { symbol: "FB", date: "2017-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-expenses-fb2019", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "FB", date: "2019-12-31" },
        { symbol: "FB", date: "2019-09-30" },
        { symbol: "FB", date: "2019-06-30" },
        { symbol: "FB", date: "2019-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-expenses-fb2018", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "FB", date: "2018-12-31" },
        { symbol: "FB", date: "2018-09-30" },
        { symbol: "FB", date: "2018-06-30" },
        { symbol: "FB", date: "2018-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-expenses-fb2017", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "FB", date: "2017-12-31" },
        { symbol: "FB", date: "2017-09-30" },
        { symbol: "FB", date: "2017-06-30" },
        { symbol: "FB", date: "2017-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-revenue-fb2019", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "FB", date: "2019-12-31" },
        { symbol: "FB", date: "2019-09-30" },
        { symbol: "FB", date: "2019-06-30" },
        { symbol: "FB", date: "2019-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-revenue-fb2018", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "FB", date: "2018-12-31" },
        { symbol: "FB", date: "2018-09-30" },
        { symbol: "FB", date: "2018-06-30" },
        { symbol: "FB", date: "2018-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/charts-revenue-fb2017", (req, res) => {
  models.Company.findAll({
    where: {
      [Op.or]: [
        { symbol: "FB", date: "2017-12-31" },
        { symbol: "FB", date: "2017-09-30" },
        { symbol: "FB", date: "2017-06-30" },
        { symbol: "FB", date: "2017-03-31" },
      ],
    },
  }).then((result) => res.json(result));
});

router.get("/", (req, res) => {
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

module.exports = router;
