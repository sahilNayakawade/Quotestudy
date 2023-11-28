import axios from "axios";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";

import React, { useEffect, useState } from "react";

import { Route, Navigate, Router, Routes, BrowserRouter } from "react-router-dom";
import CombinedQuotes from "./components/CombinedQuotes";
import FavQuotes from "./components/FavQuotes";
import MyQuotes from "./components/Myquotes";
import Profile from "./components/Profile";
import AddQuote from "./components/AddQuote";


  //return (
    // <>
    //   <Navbar title="Pinterest" aboutText="MyQuotes"></Navbar>
    //   <FavQuotes></FavQuotes>
    //   <div className="container">
    //     {quoteData}
    //     {/* <Register></Register> */}
    //     {/* <Login></Login> */}
    //     {/* <Profile></Profile> */}
    //     {/* <AddQuote></AddQuote> */}
    //   </div>
    // </>
    
  
    function App() {
      
      return (
        <BrowserRouter>
          {/* <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes> */}
           
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/combinedquotes" element={<CombinedQuotes />} />
        <Route path="/myquotes" element={<MyQuotes />} />
        <Route path="/favquotes" element={<FavQuotes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addquote" element={<AddQuote/>}/>
      </Routes>
    
        </BrowserRouter>
      //    <BrowserRouter>
      //    {/* <Login></Login> */}
      //    <Navbar></Navbar>
      //    <Routes>
      //    <Route path='/navbar' element={<Navbar />}></Route>
      //    </Routes>
      //  </BrowserRouter>
      );
    }
    
    export default App;
  