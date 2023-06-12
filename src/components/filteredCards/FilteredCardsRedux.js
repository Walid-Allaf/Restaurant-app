import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchLocation: "",
  searchName: "",
  freeDelivery: null,
  paymentMethod: "",
  rateValue: null,
};

const filteredCardsReduxSlice = createSlice({
  name: "filteredCardsRedux",
  initialState,
  reducers: {
    searchingOnLocation: (state, action) => {
      state.searchLocation = action.payload.toLowerCase();
      console.log("from redux: ", state.searchLocation);
    },
    searchingOnName: (state, action) => {
      state.searchName = action.payload;
    },
    isFreeDelivery: (state, action) => {
      state.freeDelivery = action.payload;
    },
    choosingPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    searchingRateValue: (state, action) => {
      state.rateValue = action.payload;
    },
  },
});

export default filteredCardsReduxSlice.reducer;
export const {
  searchingOnLocation,
  searchingOnName,
  isFreeDelivery,
  choosingPaymentMethod,
  searchingRateValue,
} = filteredCardsReduxSlice.actions;
