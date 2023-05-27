import { Request, Response } from "express";
import Hotel from "../models/Hotel";

// @desc Add Hotel
// @route POST api/v1/hotels
// @access Private
const createHotel = async (req: Request, res: Response) => {
  const { name, city, description } = req.body;

  const newHotel = await Hotel.create({
    name,
    city,
    description,
  });

  res.status(200).json(newHotel);
};

// @desc Get Single Hotel
// @route GET api/v1/hotels/:id
// @access Public
const getHotel = async (req: Request, res: Response) => {
  const { id } = req.params;

  const hotel = await Hotel.findById(id);

  if (!hotel) {
    res.status(400);
    throw new Error(`Hotel with id: ${id} couldn't be found.`);
  }

  res.status(200).json(hotel);
};

export { getHotel, createHotel };

// TODO: add all CRUD
