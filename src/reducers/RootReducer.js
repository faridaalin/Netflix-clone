import { combineReducers } from "redux";
import DiscoverListReducer from "./DiscoverListReducer";
import MovieListReducer from "./MovieListReducer";

const RootReducer = combineReducers({
  DiscoverList: DiscoverListReducer,
  MovieList: MovieListReducer,
});

export default RootReducer;
