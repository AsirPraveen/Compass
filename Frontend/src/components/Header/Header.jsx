import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [location, setLocation] = useState("Location");
  const [language, setLanguage] = useState("English");


  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation");
    const savedLanguage = localStorage.getItem("userLanguage");

    if (savedLocation) setLocation(savedLocation);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);


  const fetchAddressFromCoordinates = async (latitude, longitude) => {
    console.log(latitude+" "+longitude)
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.status)
      if (data) {
        const address = data.display_name || "Unknown location";
        setLocation(address);
        localStorage.setItem("userLocation", address);
      } else {
        console.error("Geocoding API error:", data.status);
        setLocation("Unable to fetch address");
        localStorage.setItem("userLocation", "Unable to fetch address");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setLocation("Unable to fetch address");
      localStorage.setItem("userLocation", "Unable to fetch address");
    }
  };


  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchAddressFromCoordinates(latitude, longitude); 
        },
        (error) => {
          console.error("Error detecting location:", error.message);
          setLocation("Unable to detect location");
          localStorage.setItem("userLocation", "Unable to detect location");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  
  const handleManualLocation = (selectedLocation) => {
    setLocation(selectedLocation);
    localStorage.setItem("userLocation", selectedLocation); 
  };


  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem("userLanguage", selectedLanguage); 
  };

  return (
    <header className="bg-success text-white p-1 ">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="bi bi-telephone"></i>
          <span className="ms-2">+917234567890</span>
        </div>
        <Link to="/products" className="text-decoration-none text-dark">
          <div className="d-flex align-items-center">
            <a className="btn text-light btn-sm">Get 50% Off on Selected Items | Shop Now</a>
          </div>
        </Link>
        <div className="d-flex align-items-center relative">

          {/* Language Dropdown */}
          <div className="btn-group me-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {language}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleLanguageChange("English")}
                >
                  English
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleLanguageChange("Spanish")}
                >
                  Spanish
                </button>
              </li>
            </ul>
          </div>

          {/* Location Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle text-wrap"
              type="button"
              id="locationDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {location}
            </button>
            <ul className="dropdown-menu" aria-labelledby="locationDropdown">
              <li>
                <button className="dropdown-item" onClick={detectLocation}>
                  Detect My Current Location
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleManualLocation("USA")}
                >
                  USA
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleManualLocation("Canada")}
                >
                  Canada
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
