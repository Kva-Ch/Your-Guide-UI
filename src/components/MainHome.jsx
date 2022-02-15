import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import {App, token} from "./App";
import axios from "axios";
import {generatePath, useNavigate} from 'react-router';

function MainHome(props) {

  return (<div>
    <Header/>
    <Home/>
    <Footer/>
  </div>);
}

export default MainHome;
