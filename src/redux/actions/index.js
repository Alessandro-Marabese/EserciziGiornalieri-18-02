export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOBS = "GET_JOBS";

export const addToFavouritesAction = (fav) => ({ type: "ADD_TO_FAVOURITES", payload: fav });
export const removeFromFavouriteAction = (i) => ({ type: "REMOVE_FROM_FAVOURITES", payload: i });

export const getJobsAction = (query) => {
  return async (dispatch) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_JOBS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
