//Dependencies
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE_CUSTOMER = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: INITIAL_STATE_CUSTOMER,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },

    updateName: {
      reducer(state, action) {
        state.fullName = action.payload;
      },
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(
//   state = INITIAL_STATE_CUSTOMER,
//   action
// ) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//       };

//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//       };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalId) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName,
//       nationalId,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }

// export function updateName(fullName) {
//   return {
//     type: "customer/updateName",
//     payload: {
//       fullName,
//     },
//   };
// }
