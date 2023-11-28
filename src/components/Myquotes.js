import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
function MyQuotes() {
  const [quoteData, setQuoteData] = useState([]);
  const userId = parseInt(sessionStorage.getItem('userId'), 10);

  console.log(userId);
  
  const fetchData = async () => {
    try {
        const response = await axios.get(`http://localhost:8483/api/quotes/myquotes/${userId}`);
          
      setQuoteData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };// Include userId as a dependency to rerun the effect when userId changes
  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts
  const navigateToedit = () => {
    window.location.href = "/editquote";
  };
  const navigateToAdd = () => {
    window.location.href = "/addquote";
  };


  return (
    <div>
       <Navbar title="Pinterest" aboutText="myquotes"  />
       <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "12vh", // Set the height of the container to 100% of the viewport height
          }}>
        <button type="button" class="btn btn-success" onClick={navigateToAdd} >Add quote</button>
      </div>
       
      {quoteData.map((item, i) => (
        <div key={item.id}>
          {i === 0 && (
            <>
              <br />
              <br />
            </>
          )}
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "12vh", // Set the height of the container to 100% of the viewport height
          }}>
            <div style={{
              border: "3px solid black",
              width: 1050,
              height: 85,
              display: "flex",
              justifyContent: "space-between",
            }}>
              <p style={{ fontWeight: "bold" }}>{item.quote}</p>
              <button type="button" class="btn btn-danger" onClick={navigateToAdd}style={{width:80, height:40,}}>Edit</button>
            </div>
            {i !== quoteData.length - 1 && <hr style={{ width: 850 }} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyQuotes;
