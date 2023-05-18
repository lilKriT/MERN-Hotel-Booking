import express from "express";
import dotenv from "dotenv";
import colors from "colors";

// Basic config
const app = express();
dotenv.config({ path: "../../.env" });
const PORT = process.env.PORT || 3000;

// Listening
app.listen(PORT, () =>
  console.log(colors.green.underline(`Express listening on port: ${PORT}`))
);
