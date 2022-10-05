const express = require("express");
const axios = require("axios");
const app = express();

app.post("/", async (req, res) => {
  try {
    const body = req.body;

    const response = await axios.post(body.url, body);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "errror on making request" });
  }
});
app.listen(3500, () => console.log("listening on 3500"));
