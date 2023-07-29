const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  college: {
    type: String,
    required: true
  },
  stream: {
    type: String,
    required: true
  },
  Cover : {
    type : String,
  
  }
});


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
  
    const hashedPassword = await bcrypt.hash(this.password, 16);

    this.password = hashedPassword;

    next();
  } catch (err) {
    next(err);
  }
});

  const User = mongoose.model("User", userSchema);


module.exports = User;
