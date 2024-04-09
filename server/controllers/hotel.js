import mongoose from "mongoose";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save({ session });
    await session.commitTransaction();
    session.endSession();
    res.status(200).json(savedHotel);
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, session }
    );
    await session.commitTransaction();
    session.endSession();
    res.status(200).json(updatedHotel);
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await Hotel.findByIdAndDelete(req.params.id, { session });
    await session.commitTransaction();
    session.endSession();
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getHotels = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(+limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
