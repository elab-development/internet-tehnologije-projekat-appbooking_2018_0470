import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Cookies from "js-cookie";
import "./dashboard.css";
import UpdateHotelModal from "../../components/hotel/UpdateHotelModal";
import CreateHotelModal from "../../components/hotel/CreateHotelModal";

const AdminDashboard = () => {
  const [hotels, setHotels] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const hotelsPerPage = 5;
  const pagesVisited = pageNumber * hotelsPerPage;

  useEffect(() => {
    fetchHotels();
  }, [isCreateModalOpen, isUpdateModalOpen, hotels]);

  const fetchHotels = async () => {
    try {
      const response = await axios.get("/hotels");
      setHotels(response.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const handleUpdate = (hotelId) => {
    const hotelToUpdate = hotels.find((hotel) => hotel._id === hotelId);
    setSelectedHotel(hotelToUpdate);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = async (hotelId) => {
    try {
      const accessToken = Cookies.get("access_token");
      await axios.delete(`/hotels/${hotelId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      fetchHotels();
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  const handleUpdateHotel = async (updatedHotel) => {
    try {
      await axios.put(`/hotels/${updatedHotel._id}`, updatedHotel);
      fetchHotels();
    } catch (error) {
      console.error("Error updating hotel:", error);
    }
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const displayHotels = hotels
    .slice(pagesVisited, pagesVisited + hotelsPerPage)
    .map((hotel) => (
      <tr key={hotel._id}>
        <td>{hotel.name}</td>
        <td>{hotel.type}</td>
        <td>{hotel.city}</td>
        <td className="actions-cell">
          <button onClick={() => handleUpdate(hotel._id)}>Update</button>
          <button onClick={() => handleDelete(hotel._id)}>Delete</button>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(hotels.length / hotelsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{displayHotels}</tbody>
        </table>
      </div>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
      <button className="add-button" onClick={() => setIsCreateModalOpen(true)}>
        Add Hotel
      </button>
      {isUpdateModalOpen && (
        <UpdateHotelModal
          hotel={selectedHotel}
          onUpdate={handleUpdateHotel}
          onClose={handleCloseUpdateModal}
        />
      )}
      {isCreateModalOpen && (
        <CreateHotelModal onClose={handleCloseCreateModal} />
      )}
    </div>
  );
};

export default AdminDashboard;
