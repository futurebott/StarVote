import { combineReducers } from "redux";
import show from "./showReducer";
const rootReducer = combineReducers({
  show: show
});
export default rootReducer;
