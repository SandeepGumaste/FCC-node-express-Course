const express = require("express");
const app = express();
const people = require("./routes/people");
// static assets
app.use(express.static("./methods-public"));

// Parse form data
app.use(express.urlencoded({ extended: false }));
// parse json data
app.use(express.json());

app.use("/api/people", people);

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
