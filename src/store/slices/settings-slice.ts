import { createSlice } from "@reduxjs/toolkit";
import { debugMenuUpdated } from "./actions";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    gravity: 1000,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(debugMenuUpdated, (state, action) => {
      const { key, value } = action.payload;

      (state as any)[key] = value;
    }),
});

export default settingsSlice;
