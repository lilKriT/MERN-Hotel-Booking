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

// @desc Get All Hotels
// @route GET api/v1/hotels/
// @access Public
const getAllHotels = async (req: Request, res: Response) => {
  const hotels = await Hotel.find();

  if (!hotels) {
    res.status(400);
    throw new Error(`No hotels found.`);
  }

  res.status(200).json(hotels);
};

const updateHotel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const hotel = await Hotel.findById(id);

  if (!hotel) {
    res.status(400);
    throw new Error("Hotel not found");
  }

  const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json(updateHotel);
};

export { getHotel, getAllHotels, createHotel };

// TODO: add all CRUD
