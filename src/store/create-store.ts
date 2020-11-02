import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { settingsSlice } from "./slices";

function createStore() {
  return configureStore({
    reducer: combineReducers({
      settings: settingsSlice.reducer,
    }),
  });
}

const exampleStore = createStore();

export type ConfiguredStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<typeof exampleStore.getState>;

export default createStore;
