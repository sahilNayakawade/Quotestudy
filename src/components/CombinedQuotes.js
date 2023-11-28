
import React, { useEffect, useState } from "react";
import axios from "axios";
import Like from "./Like";
import Navbar from "./Navbar";
import FavQuotes from "./FavQuotes";
import MyQuotes from "./Myquotes";

function CombinedQuotes() {
  const [quoteData, setQuoteData] = useState([]);
debugger;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8483/api/quotes/getallquotes');
        setQuoteData(response.data);
        console.log(quoteData);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    }
    fetchData();
    
  }, []);
  const navigateToFavQuotes = () => {
    window.location.href = "/favquotes";
  };

  return (
    <div > 
      <Navbar title="Pinterest" aboutText="myquotes"  />
      <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            width: 1450,
            alignItems: "right",
             // Set the height of the container to 100% of the viewport height
          }}>
      <button type="button" class="btn btn-success" onClick={navigateToFavQuotes}>Favorite Quotes</button></div>
      {quoteData.map((item, i) => (        <div key={item.id}>
          {i === 0 && (
            <>
              <br />
              <br />
            </>
          )}
          <div    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "12vh", // Set the height of the container to 100% of the viewport height
    }}>
          <div
            style={{
              border: "3px solid black",
              width: 1050,
              height: 85,
              display: "flex",
              justifyContent: "space-between",
            }}
          >

            <p style={{ fontWeight: "bold" }}>{item.quote}</p>
            <Like quoteId={item.quoteId} />
          </div>
          {i !== quoteData.length - 1 && <hr style={{ width: 850 }} />}
        </div>
        </div>
      ))}
    </div>
  );
}

export default CombinedQuotes;
