import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import puppyApi from "../features/puppies/puppySlice";

// TODO: configure the store to use the API slice's auto-generated reducer and custom middleware.
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [puppyApi.reducerPath]: puppyApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, puppyApi.middleware)
});

export default store;