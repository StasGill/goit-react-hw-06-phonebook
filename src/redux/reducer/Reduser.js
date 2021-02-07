import {
  ADDNEWNUMBER,
  DELETENUMBER,
  SETWARNING,
  SETFILTER,
  GETNEWNUMBER,
} from "../constant/constant";
import { createReducer } from "@reduxjs/toolkit";
import { getContacts } from "../contacts-selectors.js";

const initialState = {
  contacts: [],
  filter: "",
  warning: "",
};

const Reducer = createReducer(
  { ...initialState },
  {
    [ADDNEWNUMBER]: (state, action) => ({
      ...state,
      contacts: [...getContacts(state), action.payload],
    }),
    [GETNEWNUMBER]: (state, action) => ({
      ...state,
      contacts: [...action.payload],
    }),

    [DELETENUMBER]: (state, action) => {
      return {
        ...state,
        contacts: [
          ...state.contacts.filter((item) => item.id !== action.payload),
        ],
      };
    },
    [SETFILTER]: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
    [SETWARNING]: (state, action) => ({
      ...state,
      warning: action.payload,
    }),
  }
);

export default Reducer;
