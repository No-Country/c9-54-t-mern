import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/name.slice";

export default configureStore({
  reducer: {
    user,
  },
});
