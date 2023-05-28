import { Router } from "express";
import {
  createHotel,
  getAllHotels,
  getHotel,
} from "../../../controllers/HotelController";

const hotelRoutes = Router();

hotelRoutes.get("/", getAllHotels);
hotelRoutes.get("/:id", getHotel);
hotelRoutes.post("/", createHotel);

export default hotelRoutes;

// TODO: add all routes
// TODO: add error handling
