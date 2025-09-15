import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userModel from "../models/userModels.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "Account not registered" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, message: "Login Successful", token });
    } else {
      res.json({ success: false, message: "Incorrect Password entered" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    // ✅ always store email in lowercase
    email = email.toLowerCase();

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email address" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password less than 8 characters",
      });
    }

    if (!specialCharRegex.test(password)) {
      return res.json({
        success: false,
        message: "Weak Password: must contain at least one special character",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({
      success: true,
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser };
