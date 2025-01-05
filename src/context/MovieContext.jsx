import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  const addToFavourites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };
  const removeFavourites = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };
  const isFavourites = (id) => {
    return favorites.some((movie) => movie.id === id);
  };
  const Values = {
    favorites,
    isFavourites,
    removeFavourites,
    addToFavourites,
  };
  return (
    <MovieContext.Provider value={Values}>{children}</MovieContext.Provider>
  );
};
