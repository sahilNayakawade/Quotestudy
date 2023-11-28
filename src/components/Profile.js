import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Profile() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    mobile: '',
  });

  const userId = parseInt(sessionStorage.getItem('userId'), 10);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8483/api/user/edit/${userId}`);
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add logic to submit the form data, e.g., via axios.post

    try {
      await axios.put(`http://localhost:8483/api/user/save/{userId}`, userData);
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div>
      <Navbar title="Pinterest" aboutText="myquotes" />
      <div className="container" style={{ height: 460, width: 500,  border: "1px solid grey", backgroundColor:"lightgray"}}>
        <center>
        <br></br>
        <h3 className="font-weight-bold">My Profile</h3>
        </center>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              //placeholder="First Name"
              value={userData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              value={userData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              id="address"
              name="address"
              className="form-control"
              placeholder="Address"
              value={userData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="form-control"
              placeholder="Mobile"
              value={userData.mobile}
              onChange={handleInputChange}
            />
          </div>
          <center>
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Save
          </button>
          </center>
          
        </form>
      </div>
    </div>
  );
}

export default Profile;
