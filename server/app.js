import dotenv from "dotenv";
dotenv.config();
import config from "./config/config.js";
import express from "express";
const app = express();
import connectDB from "./config/db.js";
const PORT = config.PORT || 8000;

app.get("/", async (req, res) => {
  try {
    return res.status(200).send("WELCOME TO MARG_APP");
  } catch (error) {}
});
connectDB().then((res) => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
      //   throw err;
    }
    console.log("server is listening on port ", PORT);
  });
});
