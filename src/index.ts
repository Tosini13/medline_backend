import express from "express";
import mongoose from "mongoose";
// import { connectMongoose } from "./mongo/config";
import router from "./routes";

require("dotenv").config();
const app = express();

// connectMongoose();
console.log(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@medline.arwq9.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
);

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@medline.arwq9.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
);
mongoose.Promise = global.Promise;

// MIDDLEWARE

app.use((req, res, next) => {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  next();
});

const port = process.env.PORT;

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Welcome to MedLine!");
});
app.listen(port, () => console.log(`server is listening on ${port}`));
