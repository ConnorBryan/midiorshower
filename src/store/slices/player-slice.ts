import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ENTITY_KEYS } from "../../constants";

export const playerAdapter = createEntityAdapter<Phlaser.Player>();

const playerSlice = createSlice({
  name: ENTITY_KEYS.Player,
  initialState: playerAdapter.getInitialState(),
  reducers: {
    playerAdded: playerAdapter.addOne,
  },
});

export default playerSlice;
