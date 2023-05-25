import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db";

// Basic config
const app = express();
dotenv.config({ path: "../../.env" });
const PORT = process.env.PORT || 3000;

// Connecting and listening
connectDB();
app.listen(PORT, () =>
  console.log(colors.green.underline(`Express listening on port: ${PORT}`))
);
