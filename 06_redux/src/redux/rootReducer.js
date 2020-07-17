import { combineReducers } from "@reduxjs/toolkit";
import { good } from "./reducers/good";

const rootReducer = combineReducers({
    good,
});

export default rootReducer;