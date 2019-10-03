import { combineReducers } from "redux";
import { WATER } from "../components/water/reducers";
export const merge = combineReducers({
  water: WATER
});
