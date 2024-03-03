require("dotenv").config();
import jwt from "jsonwebtoken";
const createJWT = () => {
  let payload = { name: "thanh", address: "tra vinh" };
  let key = process.env.JWT_SECRET;
  let token;
  try {
    token = jwt.sign(payload, key);
    console.log(token);
  } catch (e) {
    console.log(e);
  }

  return token;
};

const verifyToken = (token) => {
  let key = process.env.JWT_SECRET;
  let data = null;
  try {
    let decoded = jwt.verify(token, key);
    data = decoded;
  } catch (e) {
    console.log(e);
  }

  return data;
};

module.exports = {
  createJWT,
  verifyToken,
};
