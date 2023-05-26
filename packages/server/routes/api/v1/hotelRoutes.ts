import { Router } from "express";
import { createHotel } from "../../../controllers/HotelController";

const hotelRoutes = Router();

hotelRoutes.post("/", createHotel);

export default hotelRoutes;
