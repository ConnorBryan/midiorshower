import { configureStore, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { playerAdapter, playerSlice } from "./slices";

const initialState = {
  score: 0,
};

type GameState = {
  score: typeof initialState;
};
type GameKey = keyof GameState;

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    scored(state, { payload }) {
      state.score += payload;
    },
    scoreSet(state, { payload }) {
      state.score = Math.max(0, payload);
    },
    scoreReset(state) {
      state.score = 0;
    },
  },
});

function createStore() {
  return configureStore({
    reducer: combineReducers({
      player: playerSlice.reducer,
      score: scoreSlice.reducer,
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
  score: {
    getScore: (state: GameState) => state.score.score,
    getDebugValues: (state: GameState) => {
      const values: Record<GameKey, string | number> = {
        score: selectors.score.getScore(state),
      };

      return Object.keys(values).reduce((prev, next) => {
        (prev as any)[next] = (values as any)[next].toString();
        return prev;
      }, {} as Record<GameKey, string>);
    },
  },
  //
  player: playerAdapter.getSelectors<PhlaserState>((state) => state.player),
};
