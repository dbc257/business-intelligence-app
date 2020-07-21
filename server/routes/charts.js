let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  let companies = [
    { company: "apple" },
    { company: "facebook" },
    { company: "tesla" },
  ];
  res.json(companies);
});

module.exports = router;
