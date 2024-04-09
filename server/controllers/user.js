import User from "../models/User.js";
import mongoose from "mongoose";

export const updateUser = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, session }
    );

    await session.commitTransaction();
    session.endSession();

    res.status(200).json(updateUser);
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json(err);
  }
};

export const deleteUser = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await User.findByIdAndDelete(req.params.id, { session });

    await session.commitTransaction();
    session.endSession();

    res.status(200).json("User has been deleted.");
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
