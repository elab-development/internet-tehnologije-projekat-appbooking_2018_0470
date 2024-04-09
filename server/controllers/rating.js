import Rating from "../models/Rating.js";
import mongoose from "mongoose";

export const submitRating = async (req, res) => {
  const { hotelId } = req.params;
  const { userId, rating } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const newRating = new Rating({ user: userId, hotel: hotelId, rating });
    await newRating.save({ session });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ message: "Rating submitted successfully" });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const calculateAverageRating = async (hotelId, session) => {
  const ratings = await Rating.find({ hotel: hotelId }).session(session);
  if (ratings.length === 0) {
    return 0;
  }
  const totalRating = ratings.reduce((acc, curr) => acc + curr.rating, 0);
  return totalRating / ratings.length;
};

export const getAverageRating = async (req, res) => {
  const { hotelId } = req.params;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const averageRating = await calculateAverageRating(hotelId, session);

    await session.commitTransaction();
    session.endSession();

    res.json({ averageRating });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
