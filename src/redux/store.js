// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./reducer/Reduser";

// const store = createStore(Reducer, composeWithDevTools());

// const rootReducer = combineReducers({
//   Reducer,
// });

const store = configureStore({
  reducer: Reducer,
});

export default store;
