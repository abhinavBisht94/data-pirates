//---------------------------------------
// Imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connection = require("./db");
const UserSchema = require("./models/UserModel");
const authRouter = require("./routes/auth.routes");

//---------------------------------------
// Middleware
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
dotenv.config();

app.use("/auth", authRouter);

//---------------------------------------
app.get("/", async (req, res) => {
  console.log("Hello data-pirates!");

  res.send("Hello data-pirates!");
});

//---------------------------------------
// Server
app.listen(PORT, async () => {
  try {
    await connection;
  } catch {
    console.log("Error ocurred while connecting");
  }
  console.log(`Connected to PORT=> ${PORT}`);
});
