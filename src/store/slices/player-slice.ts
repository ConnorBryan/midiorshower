import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const playerAdapter = createEntityAdapter<Phlaser.Player>();

const playerSlice = createSlice({
  name: "player",
  initialState: playerAdapter.getInitialState(),
  reducers: {
    playerAdded: playerAdapter.addOne,
  },
});

export default playerSlice;
