import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";

//AN INTERCEPTOR FOR EVERY REQUEST WE SEND

axios.interceptors.request.use(
  function (config) {
    console.log("Start Ajax Call");
    return config;
  },
  function (error) {
    console.log("Error");
    return Promise.reject(error);
  }
);

//AN INTERCEPTOR FOR RESPONSE WE GET

axios.interceptors.response.use(
  function (response) {
    console.log("Done with Ajax call");
    return response;
  },
  function (error) {
    console.log("Error fetching the data");
    return Promise.reject(error);
  }
);

//INTERCEPTOR TO CHECK STATUS CODE
// axios.interceptors.response.use(function(response) {
//   if (res.status === 201) {
//         console.log('Successfull');
//      }

//   if(res.status === 404) {
//         console.log("Not Found")
//    }

//      return response;
// }, function(error) {
//  console.log('Error fetching the data');
//  return Promise.reject(error);
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
