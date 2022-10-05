const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());
app.post("/", async (req, res) => {
  try {
    const body = req.body;
    console.log("Making request");
    const response = await axios.post(body.url, body);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "errror on making request" });
  }
});
app.listen(3500, () => console.log("listening on 3500"));
