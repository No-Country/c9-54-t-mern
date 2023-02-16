import { configureStore } from "@reduxjs/toolkit";
import name from "./slices/name.slice";

export default configureStore({
  reducer: {
    name,
  },
});
