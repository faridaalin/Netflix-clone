import { combineReducers } from "redux";
import DiscoverListReducer from "./DiscoverListReducer";

const RootReducer = combineReducers({
  DiscoverList: DiscoverListReducer,
});

export default RootReducer;
