import { createStore, combineReducers } from "redux";
import { reducerRates } from "./reducerRates";
import { reducerCalc } from "./reducerCalc";

const rootReducer = combineReducers({
  rates: reducerRates,
  calc: reducerCalc
})

export const store = createStore(rootReducer);