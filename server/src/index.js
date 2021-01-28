import "dotenv/config";
import cors from "cors";
import express from "express";
import emails from "./emails";
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  return res.send(`sHTTP method`);
});
app.get("/emails/:category", (req, res) => {
  const { category } = req.params;
  setTimeout(() => res.send(emails[category]), 500);
});

app.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});

app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
