import { useState } from "react";
import "./css/App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./Pages/Favourites";
import { Navbar } from "./Components/Navbar";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
