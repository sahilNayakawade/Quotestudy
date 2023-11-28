import React, { useEffect, useState } from "react";
import Quotes from "./Quotes";
import axios from "axios";
import Navbar from "./Navbar";

function AllQuotes() {
  const [quoteData, setQuoteData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8483/api/quotes/getallquotes')
      .then((response) => {
        // setQuoteData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error fetching quotes:', error);
      });
  }, []);
    //  console.log(quoteData);
//   const quoteComponents = quoteData.map((item, i) => {
//     <div key={item.id}>
//       {i === 0 && (
//         <>
//           <br />
//           <br />
//         </>
//       )}
//       <Quotes item={item} />
//       {i !== quoteData.length - 1 && <hr style={{ width: 850 }} />}
//     </div>
//  } )

  return (
    <div>
      <Navbar></Navbar>
      {/* <section>{quoteComponents}</section> */}
      <h1>Quotes</h1>
    </div>
  );
}

export default AllQuotes;
