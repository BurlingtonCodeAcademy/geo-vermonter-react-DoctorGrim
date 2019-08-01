const express = require("express");
const app = express();
const $path = require("path");
const fs = require("fs");
const port = process.env.PORT || 5000;
const dataPath = $path.resolve("./data");

app.get("/scores", (req, res) => {
  //test//
  console.log("Requested path", req.path);
  ///
  const theFile = $path.join(dataPath, "scores.json");
  const data = fs.readFileSync(theFile);
  const json = JSON.parse(data);
  res.type("json").send(json);
});

app.post("/scores",express.json(), (req, res) => {
  console.log('POST received, body is: ', req.body);
  const theFile = $path.join(dataPath, 'scores.json');
  const curentLeaderboard = fs.readFileSync(theFile)
  const json = JSON.parse(curentLeaderboard)
  json.leaderboard.push(req.body)

  fs.writeFileSync(theFile, JSON.stringify(json));
  res.status(201).send('Success');
});

app.listen(port, (req, res) => {
  console.log(`listening on ${port}`);
});
