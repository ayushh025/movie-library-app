import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const favorites = useSelector((state) => state.auth.favorites);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">⭐ My Watchlist</h2>

      <div className="row">
        {favorites.length === 0 ? (
          <h4>No movies added</h4>
        ) : (
          favorites.map((movie) => (
            <div className="col-md-3 mb-4" key={movie.imdbID}>
              <div className="card h-100">
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  style={{
                    height: "350px",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.src = "https://placehold.co/300x450?text=No+Image";
                  }}
                />

                <div className="card-body d-flex flex-column">
                  <h5>{movie.Title}</h5>

                  <p>{movie.Year}</p>

                  {/* This pushes buttons to bottom */}
                  <div className="mt-auto">
                    <Link
                      to={`/movie/${movie.imdbID}`}
                      className="btn btn-primary btn-sm w-100"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Profile;
