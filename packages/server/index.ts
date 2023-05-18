import express from "express";
import dotenv from "dotenv";

// Basic config
const app = express();
dotenv.config({ path: "../../.env" });
const PORT = process.env.PORT || 3000;

// Listening
app.listen(PORT, () => console.log(`Express listening on port: ${PORT}`));
