require("dotenv").config();
const express = require("express");
const index = require("./routes/index");
const app = express();
app.use(express.json());
app.use("/user", index);
//const mysql = require("mysql2");

//const PORT = process.env.PORT;
const PORT = process.env.PORT

app.get("/",(req, res) => {
    console.log(req.body);
  res.send("Hello");
});


app.listen(PORT, () => {
  require("./database");
  console.log(`Server is running at  http://localhost:${PORT}`);
});


















/*const express = require("express");
const cors = require("cors");
const mysql = require("mysql")
//const dotenv = require('dotenv')
const app = express();
var corsOptions = {
    origin : "http ://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/" , (req, res)=>{
    res.json({message : "welcome"})
})

require("./app/routes/test.routes.js")(app);


const dbConfig = require("../config/db.config.js");

const PORT = process.env.PORT || 8080;
app.listen(PORT , () =>{
    console.log(`server running $ {PORT}`);
});
*/
/*
const connection  = mysql.createConnection({
    host: dbConfig.HOST,
    user: db.Config.USER,
    password: db.Config.PASSWORD,
    database: dbConfig.DATABASE
})

connection.connect(error =>{
    if(error) throw error;
    console.log("successfully connected");


});
module.exports = connection;


*/