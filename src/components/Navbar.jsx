import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleWatchlist = () => {
    if (!isAuthenticated) {
      alert("Please login to access Watchlist");
      return;
    }

    navigate("/profile");
  };
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🎬 Movie Library
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="btn nav-link border-0 bg-transparent"
                onClick={handleWatchlist}
              >
                Watchlist
              </button>
            </li>

            <li className="nav-item ms-3">
              {isAuthenticated ? (
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch({ type: "LOGOUT" })}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="btn btn-success"
                  onClick={() => dispatch({ type: "LOGIN" })}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
