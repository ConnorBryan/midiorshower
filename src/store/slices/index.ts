// export { default as playerSlice } from "./player-slice";
import playerSlice from "./player-slice";
import settingsSlice from "./settings-slice";

export const sliceLookup = {
  player: playerSlice,
  settings: settingsSlice,
};

export { playerSlice, settingsSlice };

export * from "./actions";
export * from "./player-slice";
export * from "./settings-slice";
