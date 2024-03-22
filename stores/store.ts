import { configureStore } from "@reduxjs/toolkit";
import textReducer from "../slices/textSlice";

export const store = configureStore({
  reducer: {
    text: textReducer,
  },
});
