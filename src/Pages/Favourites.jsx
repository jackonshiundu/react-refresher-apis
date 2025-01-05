import { Moviecard } from "../Components/Moviecard";
import { useMovieContext } from "../context/MovieContext";
import "../css/Favorites.css";

function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="movie-grid">
        {favorites.map((movie) => (
          /*               movie.title.toLowerCase().includes(searchQuery) && (
                    <Moviecard movie={movie} index={movie.id} />
                    ) */
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favourites Yet</h2>
      <p>Add movies to show here</p>
    </div>
  );
}

export default Favorites;
