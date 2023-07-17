import { configureStore } from "@reduxjs/toolkit";

const initialStore = {
  contacts: [],
  filter: '',
};

const rootReducer = (state = initialStore, action) => {
    return state;
};

export const store = configureStore(rootReducer);