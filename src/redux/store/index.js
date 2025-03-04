import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import jobsReducer from "../reducers/jobsReducer";

const rootReducer = combineReducers({
  favourites: favouriteReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
