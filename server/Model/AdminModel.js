const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: { // Fix the property name here
    type: Number,
    required: true,
    unique: true
  },
  password: { // Fix the property name here
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  }
});

AdminSchema.pre('save', async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(this.password, 16); // Fix the property name here
    this.password = hashedPassword; // Fix the property name here
    next();
  } catch (err) {
    next(err);
  }
});

const admin = mongoose.model("Admin", AdminSchema);

module.exports = admin; // Use module.exports (lowercase) here
