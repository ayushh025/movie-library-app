const initialState = {
  movies: [],
  movie: null,
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };

    case "FETCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "FETCH_MOVIE_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        movie: action.payload,
      };
    case "FETCH_MOVIE_DETAILS_SUCCESS":
      return {
        ...state,

        loading: false,

        movie: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
