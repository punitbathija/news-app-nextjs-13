const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  superHero: {
    type: String,
    required: [true, "please provide a name"],
    unique: true,
    trim: true,
  },

  realName: {
    type: String,
    required: [true, "please provide a name"],
  },
});

module.exports = mongoose.model.Hero || mongoose.model("Hero", heroSchema);
