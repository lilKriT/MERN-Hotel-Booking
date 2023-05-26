import { Request, Response } from "express";
import Hotel from "../models/Hotel";

// @desc Add Hotel
// @route POST api/v1/hotels
// @access Private
const createHotel = async (req: Request, res: Response) => {
  const { name, city, description } = req.body;
  //   console.log(`${name} ${city} ${description}`);

  const newHotel = await Hotel.create({ name, city, description });

  res.status(200).json(newHotel);
};

export { createHotel };
