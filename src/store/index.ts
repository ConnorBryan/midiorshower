import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { playerAdapter, playerSlice, settingsSlice } from "./slices";

function createStore() {
  return configureStore({
    reducer: combineReducers({
      player: playerSlice.reducer,
      settings: settingsSlice.reducer,
    }),
  });
}

export type ConfiguredStore = ReturnType<typeof createStore>;

const store = createStore();

export type PhlaserState = ReturnType<typeof store.getState>;
export type PhlaserStateKey = keyof PhlaserState;

export default createStore;

export * from "./slices";

export const selectors = {
  player: playerAdapter.getSelectors<PhlaserState>((state) => state.player),
  settings: {
    getSettings: (state: PhlaserState) => state.settings,
  },
};
