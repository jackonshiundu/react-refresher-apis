import React from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";

export function Moviecard({ movie }) {
  const { isFavourites, removeFavourites, addToFavourites } = useMovieContext();
  const favourite = isFavourites(movie.id);
  function onLike(e) {
    e.preventDefault();
    if (favourite) removeFavourites(movie.id);
    else addToFavourites(movie);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favourite ? "active" : ""}`}
            onClick={onLike}
          >
            ❤
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
