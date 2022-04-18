import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

<<<<<<< HEAD
import Layout from "./components/layout/layout";
import Home from "./routes/home";
import Games from './routes/games';
import Places from './routes/places';
import Schedule from './routes/schedule';
import Profile from './routes/profile';
=======
import Layout from "./components/layout/Layout";
import Home from "./routes/Home";
import Games from "./routes/Games";
import Schedule from "./routes/Schedule";
import People from "./routes/People";
import Profile from "./routes/Profile";
>>>>>>> origin/Faith-FrontEndStuff


ReactDOM.render(
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
<<<<<<< HEAD
        <Route path="places" element={<Places />} />
        <Route path="schedule" element={<Schedule />} />
=======
        <Route path="schedule" element={<Schedule />} />
        <Route path="people" element={<People/>} />
>>>>>>> origin/Faith-FrontEndStuff
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>,
  </Layout>,
  document.getElementById("root")
)