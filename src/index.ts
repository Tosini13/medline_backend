import express from "express";
import AWS from "aws-sdk";
import { connectMongoose } from "./mongo/config";
import router from "./routes";

require("dotenv").config();
const app = express();

connectMongoose();

// -------- AWS -------

const AWS_CREDENTIALS = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SERCRET_ACCESS_KEY,
};

export const s3 = new AWS.S3(AWS_CREDENTIALS);
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
