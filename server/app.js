const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const models = require("./models");
const auth = require("./middlewares/authMiddleware.js");
const { Op } = require("sequelize");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

let router = express.Router();
router.use(bodyParser.json());

const lineDataRouter = require("./routes/line");
app.use("/api/line", lineDataRouter);
const pieDataRouter = require("./routes/pie");
app.use("/api/pie", pieDataRouter);
const hBarDataRouter = require("./routes/h-bar");
app.use("/api/h-bar", hBarDataRouter);
const BarDataRouter = require("./routes/bar");
app.use("/api/bar", BarDataRouter);
const FinanceDataRouter = require("./routes/finance");
app.use("/api/finance", FinanceDataRouter);
const FacebookDataRouter = require("./routes/facebook");
app.use("/facebook", FacebookDataRouter);
const AppleDataRouter = require("./routes/apple");
app.use("/apple", AppleDataRouter);
const TeslaDataRouter = require("./routes/tesla");
app.use("/tesla", TeslaDataRouter);
const userDataRouter = require("./routes/userData")
app.use("/userData", userDataRouter)
const companiesRouter = require("./routes/companies")
app.use("/companies", companiesRouter)

// POST route to register a new user account
app.post("/register", (req, res) => {
  let username = req.body.username;
  let password = bcrypt.hashSync(req.body.password, 10);
  models.User.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user) {
      res.send({ message: "Error: Username has already been used!" });
    } else {
      models.User.create({ username: username, password: password }).then(
        (user) => {
          if (user) {
            res.send({
              message: "Your username and password are registered!",
            });
          } else {
            res.send({ message: "Error: Unable to create user!" });
          }
        }
      );
    }
  });
});

app.post("/api/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let userArray = [];
  models.User.findOne({
    where: {
      username: username,
    },
  })
    .then((user) => {
      userArray.push(user);
    })
    .then(() => {
      // find if the username and password exists in the users array
      const persistedUser = userArray.find((user) => {
        return user.username == username;
      });
      if (persistedUser == null) {
        res.json({ message: "Username not found!", success: false });
      } else {
        if (persistedUser) {
          if (bcrypt.compareSync(password, persistedUser.password)) {
            console.log(persistedUser)
            const token = jwt.sign({ username: username, id: persistedUser.id }, "keyboard cat");
            // console.log(token);
            res.json({
              message: "You are now logged in! ",
              success: true,
              token: token,
              userId: persistedUser.id
            });
          }
        } else {
          // user does not exists maybe username or password are wrong
          res.json({ message: "Oops, there was an error!", success: false });
        }
      }
    });
});

app.post("/api/guest-login", (req, res) => {
  let username = process.env.REACT_APP_USERNAME;
  let password = process.env.REACT_APP_PASSWORD;
  let userArray = [];
  models.User.findOne({
    where: {
      username: username,
    },
  })
    .then((user) => {
      userArray.push(user);
    })
    .then(() => {
      // find if the username and password exists in the users array
      const persistedUser = userArray.find((user) => {
        return user.username == username;
      });
      if (persistedUser == null) {
        res.json({ message: "Username not found!", success: false });
      } else {
        if (persistedUser) {
          if (bcrypt.compareSync(password, persistedUser.password)) {
            const token = jwt.sign({ username: username }, "keyboard cat");
            // console.log(token);
            res.json({
              message: "You are now logged in! ",
              success: true,
              token: token
            });
          }
        } else {
          // user does not exists maybe username or password are wrong
          res.json({ message: "Oops, there was an error!", success: false });
        }
      }
    });
});

app.post("/chart-data", (req, res) => {
  req.body.map(async (dummy) => {
    const currentSessionId = req.session.user

    await models.Company.create({
      symbol: dummy.symbol,
      date: dummy.date,
      revenue: dummy.revenue,
      costAndExpenses: dummy.costAndExpenses,
      grossProfit: dummy.grossProfit,
    });
  });
  res.send("Success");
});

app.post("/api/data", (req, res) => {
  let csvData = req.body;
  let token = req.headers["authorization"].split(" ")[1]

  const decoded = jwt.verify(token, "keyboard cat")

  let userId = decoded.id

  // console.log(csvData)

  // let headers = keys[0].join(", ")
  // let tableHeaders = `(userId, ${headers})`
  // console.log(tableHeaders)
  // let values = keys.map((ele, i) => i + 2 )
  // console.log(values)

  // var test = JSON.parse(csvData);
  // console.log(test)

  console.log(typeof csvData);

  let formattedCsvData = csvData.map(element => {
    return {
      revenue: element["Revenue"], 
      expenses: element["Expenses"],
      cost_expenses: element["costAndExpenses"],
      gross_profit: element["grossProfit"],
      company: element["company"],
      userId: userId
    }
  })

  // csvData = csvData.map((ele) => {
  //     console.log(ele)
  //     revenue: element["Revenue"], 
  // })

  console.log(formattedCsvData)

  
  models.SavedData.bulkCreate(formattedCsvData)
});

app.post("/api/test", (req, res) => {
  
  
  res.json()
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is up and running on port http://localhost:${port} ...`);
});
