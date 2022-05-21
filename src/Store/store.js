import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),

  devTools: process.env.NODE_ENV !== "production",
});

export default store;
