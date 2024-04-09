import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateHotelModal = ({ hotel, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    city: "",
    address: "",
    distance: "",
    photos: [],
    title: "",
    desc: "",
    rating: 0,
    rooms: [],
    cheapestPrice: 0,
    featured: false,
  });

  useEffect(() => {
    if (hotel) {
      setFormData({
        name: hotel.name || "",
        type: hotel.type || "",
        city: hotel.city || "",
        address: hotel.address || "",
        distance: hotel.distance || "",
        photos: hotel.photos || [],
        title: hotel.title || "",
        desc: hotel.desc || "",
        rating: hotel.rating || 0,
        rooms: hotel.rooms || [],
        cheapestPrice: hotel.cheapestPrice || 0,
        featured: hotel.featured || false,
      });
    }
  }, [hotel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/hotels/${hotel._id}`, formData);
      onClose();
    } catch (error) {
      console.error("Error updating hotel:", error);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="create-modal">
      <div className="create-modal-content">
        <h2>Update this Hotel</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Type:
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Distance:
            <input
              type="text"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleChange}
            />
          </label>
          <label>
            Rating:
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            />
          </label>
          <label>
            Cheapest Price:
            <input
              type="number"
              name="cheapestPrice"
              value={formData.cheapestPrice}
              onChange={handleChange}
            />
          </label>
          <label>
            Featured:
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  featured: e.target.checked,
                }))
              }
            />
          </label>
          <button type="submit">Update Hotel</button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateHotelModal;
