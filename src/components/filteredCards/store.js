import { configureStore } from "@reduxjs/toolkit";
import FilteredCardsReducer from "./FilteredCardsRedux";

const store = configureStore({
  reducer: {
    filteredCardsRedux: FilteredCardsReducer,
  },
});

export default store;
