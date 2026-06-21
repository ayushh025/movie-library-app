import * as api from "../../services/api";

export const getPopularMovies = () => async (dispatch) => {
  dispatch({ type: "FETCH_MOVIES_REQUEST" });

  try {
    const res = await api.fetchPopularMovies();

    dispatch({
      type: "FETCH_MOVIES_SUCCESS",
      payload: res.data.Search || [],
    });
  } catch (error) {
    dispatch({
      type: "FETCH_MOVIES_FAILURE",
      payload: error.message,
    });
  }
};

export const getMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: "FETCH_MOVIES_REQUEST" });

  try {
    const res = await api.fetchMovieDetails(id);

    dispatch({
      type: "FETCH_MOVIE_DETAILS_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_MOVIES_FAILURE",
      payload: error.message,
    });
  }
};
