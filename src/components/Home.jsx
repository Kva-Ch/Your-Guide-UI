import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Left from "./Left";
import Right from "./Right";
import Header from "./Header";
import Footer from "./Footer";
import {App, token} from "./App.jsx";
import axios from "axios";
import getToken from "./getToken.js";
import {generatePath, useNavigate} from 'react-router';

function Home(props) {
  const [selectedTab, setSelectedTab] = useState("Placements");
  console.log("In the home: " + token);
  console.log(token);

  function random(value) {
    setSelectedTab(value);
  }

  let navigate = useNavigate();
  if (localStorage.getItem('accessToken')) {
    const accessToken = localStorage.getItem('accessToken');
    useEffect(async () => {
      setTimeout(() => {
        axios({
          url: "https://intense-cove-28580.herokuapp.com/logout",
           // url: "http://localhost:5000/logout",
          method: "POST",
          headers: {
            'Access-Control-Allow-Origin': '*',
             "Authorization": `Bearer ${accessToken}`
          },
          data: {
            "accessToken": accessToken
          }
        }).then((res) => {
            alert("Your Session Expired, Kindly Login again!");
           navigate('/');
           // console.log("In the App and after the token");
        }).catch((err) => {
           console.log("Error from here");
          alert(err);
          console.log(err);
        });
        // console.log("In the App and after the token");
      },21600000);
    }, []);
  }

  // Promise.all([getToken()])
  //    console.log(results[0].data.accessToken);
  // .then(function (results) {
  //   token.token = results[0].data.accessToken;
  // });

  return (<div className="row">
    <div className="col-lg-3 col-md-3 col-sm-12">
      <Left random={random} selectedTab={selectedTab}/>
    </div>
    <div className="col-lg-8 col-md-12 col-sm-12">
      <Right selectedTab={selectedTab}/>
    </div>
  </div>);
}

export default Home;
