import React, {useState} from "react";
import axios from "axios";

async function getToken() {
  try {
    return axios.get("http://localhost:5000/token");
  } catch (error) {
    console.error(error);

  }
}

export default getToken;
