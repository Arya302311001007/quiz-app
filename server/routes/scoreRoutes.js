const express = require("express");
const router = express.Router();
const score = require("../models/score");


router.post("/add", async (req, res) => {
  const newScore = new Score(req.body);
  await newScore.save();
  res.send("Score Saved");
});

router.get("/", async (req, res) => {
  const scores = await Score.find()
    .sort({ score: -1 })
    .limit(5);
  res.json(scores);
});

module.exports = router;
