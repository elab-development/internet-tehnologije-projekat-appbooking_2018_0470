import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./navbar.css"; // Import your CSS file

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [temp, setTemp] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getWeather = async () => {
      try {
        if (user?.city) {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${user.city}&units=metric&appid=6c7c6a462f348f58f0cd8bc3b458ce53`
          );
          setTemp(res.data.main.temp);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getWeather();
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">mvbooking</span>
        </Link>

        {user ? (
          <div className="navItems">
            <span>
              {user.username}, {user.city}, {user.country} 
            </span>
            {temp && <span>{temp} °C</span>}

            {/* Add other user-related items here if needed */}
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button
              className="navButton"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
