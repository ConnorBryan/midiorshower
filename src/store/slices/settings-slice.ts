import { createSlice } from "@reduxjs/toolkit";
import { debugMenuUpdated } from "./actions";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    physics: {
      gravity: 1000,
    },
  },
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(debugMenuUpdated, (state, action) => {
      const { settingsKey, key, value } = action.payload;
      console.log({ settingsKey, key, value });
      (state as any)[settingsKey][key] = value;
    }),
});

export default settingsSlice;
