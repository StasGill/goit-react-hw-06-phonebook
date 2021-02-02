import {
  ADDNEWNUMBER,
  DELETENUMBER,
  SETWARNING,
  SETFILTER,
} from "../constant/constant";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: "",
  warning: "",
};

// const Reducer = (state = { ...initialState }, action) => {
//   switch (action.type) {
//     case ADDNEWNUMBER:
//       return { ...state, contacts: [...state.contacts, action.payload] };

//     case DELETENUMBER:
//       return {
//         ...state,
//         contacts: [
//           ...state.contacts.filter((item) => item.id !== action.payload),
//         ],
//       };
//     case SETFILTER:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     case SETWARNING:
//       return {
//         ...state,
//         warning: action.payload,
//       };

//     default:
//       return state;
//   }
// };

const Reducer = createReducer(
  { ...initialState },
  {
    [ADDNEWNUMBER]: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
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
