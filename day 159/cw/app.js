require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const uploadRoutes = require("./routes/upload");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("MongoDB connection error"));

app.use("/", uploadRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});