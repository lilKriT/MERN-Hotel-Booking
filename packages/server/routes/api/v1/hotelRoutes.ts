import { Router } from "express";
import { createHotel, getHotel } from "../../../controllers/HotelController";

const hotelRoutes = Router();

hotelRoutes.post("/", createHotel);
hotelRoutes.get("/:id", getHotel);

export default hotelRoutes;

// TODO: add all routes
// TODO: add error handling
