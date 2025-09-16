import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Slices/themeSwitcher";

const store = configureStore({
  reducer: {
    darkorlight: themeReducer, // reducer should be here
  },
});

export default store;
