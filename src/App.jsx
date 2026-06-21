import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";
import PrivateRoute from "./components/PrivateRoute";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movie/:id" element={<MovieDetails />} />

            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>

        <footer className="bg-dark text-light text-center p-3">
          Movie Library © 2026
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
