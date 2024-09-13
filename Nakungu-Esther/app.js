// dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


require('dotenv').config();
//import model
const Form  = require('./models/form')
//import route
const formRoutes = require('./routes/formRoutes')
//instantiations

const app = express();
const port = 5500;

//configurations
mongoose.connect(process.env.DATABASE_LOCAL, 
 
);

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
  });

//set view

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes
app.use('/',formRoutes)


app.get("*", (req, res) => {
  res.send("error! page does not exist");
});


//server
app.listen(port, () => console.log(`listening on port ${port}`));