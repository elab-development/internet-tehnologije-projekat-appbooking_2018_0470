import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./register.css"; // You may need to create this stylesheet

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    city: "",
    phone: "",
    country: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/register", formData);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const [country, setCountry] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://restcountries.com/v3.1/all",
    })
      .then((response) => {
        console.log(response.data[0].name.common);
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="register">
      <div className="rContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          className="rInput"
        />
        <select
          className="rInput" // Use the same style class as other inputs
          name="country"
          id="country"
          onChange={handleChange}
        >
          {country.map((d) => (
            <option
              className="rInput" // Use the same style class as other inputs
              value={d.name.common}
              key={d.name.common}
            >
              {d.name.common}
            </option>
          ))}
        </select>

        <button disabled={loading} onClick={handleRegister} className="rButton">
          Register
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;
