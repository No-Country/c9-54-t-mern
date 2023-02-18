import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
