
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
function AddQuote() {
  const[author, setAuthor]=useState('');
  const[quote, setQuote]=useState('');

  const handleAuthorChange=(event)=>{
    setAuthor(event.target.value);
  }
  const handleQuoteChange=(event)=>{
    setQuote(event.target.value);
  }

  const quoteDto ={
    author : author,
    quote :  quote 
  }
  
  const userId = parseInt(sessionStorage.getItem('userId'), 10);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to save the quote data
      axios.post(`http://localhost:8483/api/quotes/addquotes/${userId}`, quoteDto).then((responce=>{
        if(responce.status===200){
          console.log("quote added successfully")
        }
      }))
      
    } catch (error) {
      console.error('Error saving quote:', error);
    }
  };

  return (
    <>
    <Navbar title="Pinterest" aboutText="myquotes"  />
    <div  style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",}}>
      <h3 className="font-weight-bold">Add Quote</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" style={{width:800}}>
          <input
            type="text"
            id="author"
            className="form-control"
            placeholder="Author name"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div className="mb-3"style={{width:800}}>
          <textarea
            id="quote"
            className="form-control"
            placeholder="Quote here"
            value={quote}
            onChange={handleQuoteChange}
          ></textarea>
        </div>
        <button className="btn btn-primary btn-lg btn-block" type="submit">
          Save
        </button>
      </form>
      </ div>
    </>
  );
}

export default AddQuote;
