import { createSlice } from "@reduxjs/toolkit";

function dataFromLocalStorage() {
  return (
    JSON.parse(localStorage.getItem("user")) || {
      isAuthState: false,
      user: null,
    }
  );
}

const userSlice = createSlice({
  name: "user",
  initialState: dataFromLocalStorage,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
    isAuthChange: (state) => {
      state.isAuthState = true;
    },
    calculateTotal: (state) => {
      let price = 0;
      let amount = 0;

      state.calculator.products.forEach((item) => {
        let AllPrices = item.price * item.amount;
        price += AllPrices;
        amount += item.amount;
      });

      state.calculator.amount = amount;
      state.calculator.price = price;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const {
  isAuthChange,
  login,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
