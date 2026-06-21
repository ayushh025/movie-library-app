import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../redux/actions/movieActions";
import { Link } from "react-router-dom";
import { searchMovies } from "../services/api";

function MovieList({ query }) {
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state.movie);
  const favorites = useSelector((state) => state.auth.favorites);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      if (!query || !query.trim()) {
        setSearchResults([]);
        return;
      }

      try {
        const res = await searchMovies(query);
        setSearchResults(res.data.Search || []);
      } catch (err) {
        console.log(err);
        setSearchResults([]);
      }
    };

    fetchSearch();
  }, [query]);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger mt-5 container">{error}</div>;
  }

  if (query && searchResults.length === 0) {
    return (
      <div className="text-center mt-5">
        <h3>No movies found 😔</h3>
      </div>
    );
  }
  return (
    <div className="container mt-4">
      <div className="row">
        {(query ? searchResults : movies).map((movie) => {
          const isFavorite = favorites.some(
            (fav) => fav.imdbID === movie.imdbID
          );

          return (
            <div className="col-md-3 mb-4" key={movie.imdbID}>
              <div className="card h-100">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="card-img-top"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.src = "https://placehold.co/300x450?text=No+Image";
                  }}
                />

                <div className="card-body d-flex flex-column">
                  <h5>{movie.Title}</h5>

                  <p>{movie.Year}</p>

                  <div className="mt-auto">
                    <button
                      className={`btn btn-sm w-100 ${
                        isFavorite ? "btn-danger" : "btn-outline-warning"
                      }`}
                      onClick={() =>
                        dispatch({
                          type: "TOGGLE_FAVORITE",
                          payload: movie,
                        })
                      }
                    >
                      {isFavorite ? "❤️ Remove" : "⭐ Favorite"}
                    </button>

                    <Link
                      to={`/movie/${movie.imdbID}`}
                      className="btn btn-primary btn-sm w-100 mt-2"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
