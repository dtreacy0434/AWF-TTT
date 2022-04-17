import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/layout/layout";
import Home from "./routes/home";
import Games from './routes/games';
import Places from './routes/places';
import Schedule from './routes/schedule';
import Profile from './routes/profile';


ReactDOM.render(
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="places" element={<Places />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>,
  </Layout>,
  document.getElementById("root")
)