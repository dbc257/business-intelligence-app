let express = require("express");
let router = express.Router();
const models = require("../models");
const { Op } = require("sequelize");

router.get("/user-data/:id", async (req, res) => {
    let userId = req.params.id
    
    let data = await models.SavedData.findAll({
        where: {
            userId: userId
        }
    })

    // console.log(data)

    res.json(data)
})

module.exports = router;