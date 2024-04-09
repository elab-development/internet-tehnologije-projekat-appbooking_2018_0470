import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
    rating: { type: Number, min: 1, max: 5, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Rating", RatingSchema);
