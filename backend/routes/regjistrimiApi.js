const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.post("/perdoruesi", async (req, res) => {
  try {
    console.log(req.body);

    let savedUser;
    const { tipi, email, fjalekalimi, emri, mbiemri, kompania } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        error: "perdoruesi ekziston",
      });
    }

    if (tipi === "aplikant") {
      if (!emri) {
        return res.status(400).json({
          error: "Nuk e keni shenuar emrin",
        });
      }
      if (!mbiemri) {
        return res.status(400).json({
          error: "Nuk e keni shenuar mbiemrin",
        });
      }
      if (!email) {
        return res.status(400).json({
          error: "Nuk e keni shenuar emailin",
        });
      }
      if (!fjalekalimi) {
        return res.status(400).json({
          error: "Nuk e keni shenuar fjalekalimin",
        });
      }

      const aplikant = new User({
        emri,
        mbiemri,
        email,
        fjalekalimi,
        tipi,
      });

      savedUser = await aplikant.save();
    } else if (tipi === "punedhenes") {
      if (!kompania) {
        return res.status(400).json({
          error: "Nuk e keni shenuar emrin e kompanise",
        });
      }
      if (!email) {
        return res.status(400).json({
          error: "Nuk e keni shenuar emailin",
        });
      }
      if (!fjalekalimi) {
        return res.status(400).json({
          error: "Nuk e keni shenuar fjalekalimin",
        });
      }

      const punedhenes = new User({
        kompania,
        email,
        fjalekalimi,
        tipi,
      });

      savedUser = await punedhenes.save();
    } else {
      return res.status(400).json({
        success: false,
      });
    }

    return res.json({
      success: true,
      message: `${
        tipi === "aplikant" ? "Aplikanti" : "Punëdhënësi"
      } u regjistrua me sukses!`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Gabim i brendshem i serverit",
      error: error.message,
    });
  }
});

module.exports = router;
