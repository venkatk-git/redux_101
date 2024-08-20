//Dependencies
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE_ACCOUNT = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: INITIAL_STATE_ACCOUNT,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },

    withdraw(state, action) {
      state.balance -= action.payload;
    },

    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.loan;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },

    payLoan(state) {
      if (state.balance < state.loan) return;
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },

    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async (dispatch) => {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();

    const convertedAmount = data.rates.USD;

    dispatch({ type: "account/deposit", payload: convertedAmount });
  };
}

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;

// export default function accountReducer(state = INITIAL_STATE_ACCOUNT, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };

//     case "account/withdraw":
//       if (state.balance < action.payload) return state;
//       return { ...state, balance: state.balance - action.payload };

//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };

//     case "account/payLoan":
//       return {
//         ...state,
//         balance: state.balance - state.loan,
//         loan: 0,
//         loanPurpose: "",
//       };

//     default:
//       return state;
//   }
// }

// export function payLoan() {
//   return { type: "account/payLoan" };
// }

// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: {
//       amount: amount,
//       purpose: purpose,
//     },
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }
