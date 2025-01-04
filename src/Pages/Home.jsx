import { useState } from "react";
import { Moviecard } from "../Components/Moviecard";

function Home() {
  const movies = [
    {
      id: 1,
      title: "Hello Hello",
      release_date: "12-May-2025",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM0-w43ChyvBSM5cXykYx5NV-Yl0WEX6Aqw&s",
    },
    {
      id: 2,
      title: "The Great Adventure",
      release_date: "15-Jul-2023",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4JgQ-KThpn8vLaZG6kQK3t5VhO8E_R-RoQ&s",
    },
    {
      id: 3,
      title: "Mystery at Midnight",
      release_date: "22-Sep-2024",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7DgmX72vQ_WljszHLbp1lQbu9o0LUXfl0g&s",
    },
    {
      id: 4,
      title: "City of Dreams",
      release_date: "5-Dec-2023",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUu2bNoi0hwdYnFhW8Nweirj5dXg2NzQbPA&s",
    },
    {
      id: 5,
      title: "Journey to the Stars",
      release_date: "1-Jan-2026",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevMZTgmYxxQbMYxxOExA7kIdtdfng1cpa7A&s",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="home">
      <form onSubmit={handleOnSubmit} className="search-form">
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="search for Movies ..."
          className="searchinput"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().includes(searchQuery) && (
              <Moviecard movie={movie} index={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
