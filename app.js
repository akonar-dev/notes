import { connectDB } from "./db/connectDB";
require("dotenv").config();

connectDB()
  .then(() => Promise.resolve())
  .catch(() => Promise.reject(new Error()))
