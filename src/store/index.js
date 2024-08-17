//Dependencies
import { configureStore } from "@reduxjs/toolkit";

//Reducers
import accountReducer from "../features/accounts/accountSlice";
import customerReducer from "../features/customers/customerSlice";

export default configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
