import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ENTITY_KEYS } from "../../constants";
import { battleStarted } from "./actions";

export const playerAdapter = createEntityAdapter<Phlaser.Player.Player>();

const defaultPlayerValues = {
  life: 100,
  energy: 100,
  extraLives: 2,
};

const playerSlice = createSlice({
  name: ENTITY_KEYS.Player,
  initialState: playerAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(battleStarted, (state) => {
      playerAdapter.addMany(state, [
        {
          ...defaultPlayerValues,
          id: "1",
          direction: "left",
        },
        {
          ...defaultPlayerValues,
          id: "2",
          direction: "right",
        },
      ]);
    }),
});

export default playerSlice;
