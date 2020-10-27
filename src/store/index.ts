import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {},
  reducers: {},
});

export default function createStore() {
  return configureStore({
    reducer: slice.reducer,
  });
}
