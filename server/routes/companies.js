let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    let companies = [
        {
            name: "apple",
            name: "facebook",
            name: "tesla"
        }]
    res.json(companies)
})

module.exports = router