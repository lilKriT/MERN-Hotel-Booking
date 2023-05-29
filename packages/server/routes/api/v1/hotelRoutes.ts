import { Router } from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../../../controllers/HotelController";

const hotelRoutes = Router();

hotelRoutes.get("/:id", getHotel);
hotelRoutes.get("/", getAllHotels);
hotelRoutes.post("/", createHotel);
hotelRoutes.put("/:id", updateHotel);
hotelRoutes.delete("/:id", deleteHotel);

export default hotelRoutes;

// TODO: add error handling
