const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,

  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isAuthenticated", true);

      return {
        ...state,
        isAuthenticated: true,
      };

    case "LOGOUT":
      localStorage.setItem("isAuthenticated", false);

      return {
        ...state,
        isAuthenticated: false,
      };

    case "TOGGLE_FAVORITE": {
      const exists = state.favorites.some(
        (movie) => movie.imdbID === action.payload.imdbID
      );

      const updatedFavorites = exists
        ? state.favorites.filter(
            (movie) => movie.imdbID !== action.payload.imdbID
          )
        : [...state.favorites, action.payload];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return {
        ...state,
        favorites: updatedFavorites,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
