// import redux from "redux";
// const createStore = redux.createStore;
// import { useSelector } from "react-redux";
import { createStore } from "redux";

const SEARCHING_LOCATION = "SEARCHING_LOCATION";
const SEARCHING_NAME = "SEARCHING_NAME";
const FREE_DELIVERY = "FREE_DELIVERY";
const PAYMENT_METHOD = "PAYMENT_METHOD";
const RATE_VALUE = "RATE_VALUE";

export function searchingLocation(locationValue) {
  return {
    type: SEARCHING_LOCATION,
    payload: locationValue,
  };
}
export function searchingName(nameValue) {
  return {
    type: SEARCHING_NAME,
    payload: nameValue,
  };
}
export function freeDelivery() {
  return {
    type: FREE_DELIVERY,
  };
}
export function choosePaymentMethod(option) {
  return {
    type: PAYMENT_METHOD,
    payload: option,
  };
}
export function searchRate(rateValue) {
  return {
    type: RATE_VALUE,
    payload: rateValue,
  };
}

const initialState = {
  searchLocation: "",
  searchName: "",
  freeDelivery: null,
  paymentMethod: "",
  rateValue: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHING_LOCATION:
      return {
        searchLocation: action.payload,
        searchingName: "",
        freeDelivery: null,
        paymentMethod: "",
        rateValue: null,
      };
    case SEARCHING_NAME:
      return {
        searchName: action.payload,
        searchLocation: "",
        freeDelivery: null,
        paymentMethod: "",
        rateValue: null,
      };
    case FREE_DELIVERY:
      return {
        searchLocation: "",
        searchName: "",
        freeDelivery: !state.freeDelivery,
        paymentMethod: "",
        rateValue: null,
      };
    case PAYMENT_METHOD:
      return {
        searchLocation: "",
        searchName: "",
        freeDelivery: null,
        paymentMethod: action.payload,
        rateValue: null,
      };
    case RATE_VALUE:
      return {
        searchLocation: "",
        searchName: "",
        freeDelivery: null,
        paymentMethod: "",
        rateValue: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State ", store.getState());

store.subscribe(() => {});

export default store;
