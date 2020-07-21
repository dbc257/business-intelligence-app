let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    let companies = {
        companies: [
            "apple",
            "facebook",
            "tesla"
        ]
    }
    res.json(companies)
})

module.exports = router