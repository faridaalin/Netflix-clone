import { combineReducers } from "redux";
import DiscoverListReducer from "./DiscoverListReducer";
import MovieListReducer from "./MovieListReducer";
import DocumentariesListReducer from "./DocumentariesListReducer";

const RootReducer = combineReducers({
  DiscoverList: DiscoverListReducer,
  MovieList: MovieListReducer,
  DocumentariesList: DocumentariesListReducer,
});

export default RootReducer;
