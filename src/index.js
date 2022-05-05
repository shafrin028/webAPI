import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cats from "./components/cats";
import Catsdetails from "./components/catsdetails";
import NavBar from "./components/navBar";
import Home from "./components/home";
import AddCat from "./components/addcat";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cats" element={<Cats />} />
        <Route exact path="/cats/:catId" element={<Catsdetails />} />
        <Route exact path="/addcat" element={<AddCat />} />
      </Routes>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
