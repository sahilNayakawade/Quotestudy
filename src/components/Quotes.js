import "./Quotes.css";
import Like from "./Like";
import { useState } from "react";
function Quotes(props) {
  return (
    <>
    {/* <br></br> */}
      <div
        style={{
          border: "3px solid black",
          width: 850,
          height: 75,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: "bold" }}>{props.item.quote}</p>
        <Like></Like>
      </div>
    </>
  );
}

export default Quotes;
