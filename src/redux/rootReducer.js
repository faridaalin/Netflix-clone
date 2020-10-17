import { combineReducers } from "redux";
import discoverReducer from "./reduser/discoverReducer";

const rootReducer = combineReducers({
  discover: discoverReducer,
});

export default rootReducer;
