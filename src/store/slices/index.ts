// export { default as playerSlice } from "./player-slice";
import playerSlice from "./player-slice";

export const sliceLookup = {
  player: playerSlice,
};

export { playerSlice };
export * from "./actions";
export * from "./player-slice";
