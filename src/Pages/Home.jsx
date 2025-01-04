import { useEffect, useState } from "react";
import { Moviecard } from "../Components/Moviecard";
import "../css/Home.css";
import { getPopularMolvies, searchMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        setLoading(true);
        const popularMovies = await getPopularMolvies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError("Failed to load");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (error) {
      setError("Failed to fetch the searched text");
    } finally {
      setLoading(false);
    }
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
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div classname="loading"></div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            /*               movie.title.toLowerCase().includes(searchQuery) && (
                <Moviecard movie={movie} index={movie.id} />
                ) */
            <Moviecard movie={movie} index={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
