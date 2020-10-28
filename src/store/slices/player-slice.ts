import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const playerAdapter = createEntityAdapter<Phlaser.Player>();

const playerSlice = createSlice({
  name: "player",
  initialState: playerAdapter.getInitialState(),
  reducers: {
    playerAdded: playerAdapter.addOne,
  },
});

export default playerSlice;
