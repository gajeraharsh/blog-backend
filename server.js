const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRoutes = require("./src/Routes/BlogRoutes");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;
app.use(cors());

app.use(express.json());

app.use("/api", blogRoutes);

const db_string = `mongodb+srv://gajeraharsh283:q9tChGArtCF57vMT@cluster0.k4qb1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(db_string)
  .then((con) => {
    console.log("DB connection Successfully!");
  });

app.listen(port, (err) => {
  if (err) console.log(err);

  console.log(`htttp://localhost:${port}`);
});
