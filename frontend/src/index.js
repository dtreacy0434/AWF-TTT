import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./routes/Home";
import Games from "./routes/Games";
import Schedule from "./routes/Schedule";
import People from "./routes/People";
import Profile from "./routes/Profile";


// FILE : index.js
// PROJECT : SENG3080 - Group Project
// PROGRAMMERS : 
// FIRST VERSION : 
// DESCRIPTION :
// The functions in this file are used to set
// up the routes for the application


ReactDOM.render(
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="people" element={<People/>} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>,
  </Layout>,
  document.getElementById("root")
)