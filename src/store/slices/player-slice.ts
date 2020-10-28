import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ENTITY_KEYS } from "../../constants";
import { battleStarted } from "./actions";

export const playerAdapter = createEntityAdapter<Phlaser.Player>();

const playerSlice = createSlice({
  name: ENTITY_KEYS.Player,
  initialState: playerAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(battleStarted, (state) => {
      playerAdapter.addMany(state, [
        {
          id: "1",
          direction: "left",
        },
        {
          id: "2",
          direction: "right",
        },
      ]);
    }),
});

export default playerSlice;
