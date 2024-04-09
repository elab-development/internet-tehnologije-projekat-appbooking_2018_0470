import React, { useState } from "react";
import "./hotelRatingForm.css";

const HotelRatingForm = ({ hotelId, userId, onReviewSubmitted }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8800/api/ratings/${hotelId}/rate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: userId,
            hotel: hotelId,
            rating: rating,
          }),
        }
      );
      if (response.ok) {
        console.log("Rating submitted successfully!");
        if (onReviewSubmitted) {
          onReviewSubmitted(rating);
        }
      } else {
        console.error("Failed to submit rating:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <label className="ratingLabel">
        Rate this hotel:
        <select
          value={rating}
          onChange={handleRatingChange}
          className="ratingSelect"
        >
          <option value={0}>-- Select Rating --</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <button type="submit" className="submitButton">
        Submit Rating
      </button>
    </form>
  );
};

export default HotelRatingForm;
