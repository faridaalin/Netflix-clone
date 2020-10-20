import { combineReducers } from "redux";
import reducerDiscover from "./reducerDiscover";
import reducerMovieList from "./reducerMovieList";
import reducerDocumentariesList from "./reducerDocumentariesList";

const RootReducer = combineReducers({
  DiscoverList: reducerDiscover,
  MovieList: reducerMovieList,
  DocumentariesList: reducerDocumentariesList,
});

export default RootReducer;
