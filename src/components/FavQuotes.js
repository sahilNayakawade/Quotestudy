import React, { useEffect, useState } from "react";
import axios from "axios";
import Like from "./Like";
import Navbar from "./Navbar";
function FavQuotes() {
 
  const [quoteData, setQuoteData] = useState([]);
  const userId = parseInt(sessionStorage.getItem('userId'), 10);
 debugger
  console.log(userId);
  
  const fetchData = async () => {
    try {
        const response = await axios.get(`http://localhost:8483/api/quotes/favquotes/${userId}`);
          
      setQuoteData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };// Include userId as a dependency to rerun the effect when userId changes
  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  return (
    <div>
      <Navbar title="Pinterest" aboutText="myquotes"  ></Navbar>

      <center><h1>Favourite Quotes</h1></center>
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
              <Like likecount={item.likecount} quoteId={item.quoteId} hasliked={item.hasliked} />
            </div>
            {i !== quoteData.length - 1 && <hr style={{ width: 850 }} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavQuotes;
