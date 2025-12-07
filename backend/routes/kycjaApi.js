const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.post("/perdoruesi", async (req, res) => {
  try {
    const { email, fjalekalimi, tipi } = req.body;

    let userResponse;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: "failed",
        message: "perdoruesi nuk ekziston",
      });
    }

    if (tipi === "aplikant") {
      userResponse = {
        _id: user._id,
        emri: user.emri,
        mbiemri: user.mbiemri,
        email: user.email,
        tipi: user.tipi,
      };
    } else if (tipi === "punedhenes") {
      userResponse = {
        _id: user._id,
        kompania: user.kompania,
        email: user.email,
        tipi: user.tipi,
      };
    }

    res.json({
      success: true,
      user: userResponse,
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
