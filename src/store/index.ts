import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

type GameState = typeof initialState;
type GameKey = keyof GameState;

export const slice = createSlice({
  name: "slice",
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

export const selectors = {
  getScore: (state: GameState) => state.score,
  getDebugValues: (state: GameState) => {
    const values: Record<GameKey, string | number> = {
      score: selectors.getScore(state),
    };

    return Object.keys(values).reduce((prev, next) => {
      (prev as any)[next] = (values as any)[next].toString();
      return prev;
    }, {} as Record<GameKey, string>);
  },
};

export default function createStore() {
  return configureStore({
    reducer: slice.reducer,
  });
}
