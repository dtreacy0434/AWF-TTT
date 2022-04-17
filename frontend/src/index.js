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
import Games from './routes/Games';
import Schedule from './routes/Schedule';
import Profile from './routes/Profile';


ReactDOM.render(
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>,
  </Layout>,
  document.getElementById("root")
)