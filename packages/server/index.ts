import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db";
import hotelRoutes from "./routes/api/v1/hotelRoutes";

// Basic config
const app = express();
dotenv.config({ path: "../../.env" });
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/v1/hotels", hotelRoutes);

// Connecting and listening
connectDB();
app.listen(PORT, () =>
  console.log(colors.green.underline(`Express listening on port: ${PORT}`))
);
