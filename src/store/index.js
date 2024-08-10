//Dependencies
import { combineReducers, createStore } from "redux";

//Reducers
import accountReducer from "../features/accounts/accountSlice";
import customerReducer from "../features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export default createStore(rootReducer);
