const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  tipiPerdoruesit: {
    type: String,
    enum: ["aplikant", "punedhenes"],
  },
  emri: {
    type: String,
    required: function () {
      return this.tipiPerdoruesit === "aplikant";
    },
  },
  mbiemri: {
    type: String,
    required: function () {
      return this.tipiPerdoruesit === "aplikant";
    },
  },
  kompania: {
    type: String,
    required: function () {
      return this.tipiPerdoruesit === "punedhenes";
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fjalekalimi: {
    type: String,
    required: true,
  },
  tipi: {
    type: String,
    required: true,
    default: function () {
      if (this.tipiPerdoruesit === "aplikant") {
        return "aplikant";
      }
      return "punedhenes";
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
