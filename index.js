const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/api/restaurants", async (req, res) => {
  const url = `${process.env.ALL_RESTAURANTS}`;
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/restaurant-details/:id", async (req, res) => {
  const id = req.params.id;
  const url = `${process.env.GET_RESTAURANT_DETAILS}${id}`;
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
