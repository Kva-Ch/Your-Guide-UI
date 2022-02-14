import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import {App, token} from "./App";
import axios from 'axios';

function MainLogin(props) {

  if (localStorage.getItem('accessToken')) {
    const accessToken = localStorage.getItem('accessToken');
    localStorage.removeItem('accessToken');
    // console.log(accessToken);
    // console.log("removed again");
    useEffect(async () => {
      // console.log("In effect");
      axios({
        url: "https://intense-cove-28580.herokuapp.com/logout",
        // url: "http://localhost:5000/logout",
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': '*',
          // "Authorization": `Bearer ${accessToken}`
        },
        data: {
          "accessToken": accessToken
        }
      }).then((res) => {
        // console.log(res.data.placements);
        // setState(res.data.placements);
        //console.log(data);
        // navigate('/');

      }).catch((err) => {
        // console.log("Error from here");
        alert(err);
        console.log(err);
      });
    } ,[]);
  }

  return (<div>
    <Header/>
    <Login/>
    <Footer/>
  </div>);
}

export default MainLogin;
