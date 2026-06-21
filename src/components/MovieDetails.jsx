import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getMovieDetails } from "../redux/actions/movieActions";

function MovieDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { movie, loading } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  const favorites = useSelector((state) => state.auth.favorites);
  const isFavorite = favorites.some((fav) => fav.imdbID === movie?.imdbID);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (!movie) {
    return <h2 className="text-center mt-5">Movie not found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src={movie?.Poster}
            className="img-fluid rounded"
            alt={movie?.Title}
          />
        </div>

        <div className="col-md-8">
          <h1 className="mb-3">
            {movie?.Title}

            <span className="badge bg-warning text-dark ms-3">
              ⭐ {movie?.imdbRating}
            </span>
          </h1>

          <p>
            <b>Language :</b> {movie?.Language}
          </p>

          <p>
            {movie?.Genre?.split(", ").map((genre) => (
              <span key={genre} className="badge bg-primary me-2">
                {genre}
              </span>
            ))}
          </p>

          <p>
            <b>Release :</b> {movie?.Released}
          </p>

          <p>
            <b>Actors :</b> {movie?.Actors}
          </p>

          <p>
            <b>Director :</b> {movie?.Director}
          </p>

          <p>{movie?.Plot}</p>

          <div className="mt-4">
            <button
              className={`btn me-2 ${
                isFavorite ? "btn-danger" : "btn-warning"
              }`}
              onClick={() =>
                dispatch({
                  type: "TOGGLE_FAVORITE",
                  payload: movie,
                })
              }
            >
              {isFavorite ? "❤️ Remove from Watchlist" : "⭐ Add to Watchlist"}
            </button>

            <a
              href={`https://www.imdb.com/title/${movie?.imdbID}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              🎬 View on IMDb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
