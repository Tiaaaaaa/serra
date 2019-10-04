import { combineReducers } from "redux";
import { WATER } from "../components/water/reducers";

import { LUMINANCE } from "../components/luminance/reducers";
export const merge = combineReducers({
  water: WATER,
  luminance: LUMINANCE
});
