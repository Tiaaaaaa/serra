import { combineReducers } from "redux";
import { WATER } from "../components/water/reducers";

import { LUMINANCE } from "../components/luminance/reducers";
import { AIR_HUMIDITY } from "../components/air_humidity/reducers";
import { GROUND_HUMIDITY } from "../components/ground_humidity/reducers";
import { TEMPERATURE } from "../components/temperature/reducers";
export const merge = combineReducers({
  water: WATER,
  luminance: LUMINANCE,
  temperature: TEMPERATURE,
  groundHumidity: GROUND_HUMIDITY,
  airHumidity: AIR_HUMIDITY,
});
