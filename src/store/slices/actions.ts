import { createAction } from "@reduxjs/toolkit";
import { EVENT_KEYS } from "../../constants";

export const battleStarted = createAction(EVENT_KEYS.BattleStarted);

export const debugMenuUpdated = createAction(
  EVENT_KEYS.DebugMenuUpdated,
  (key: string, value: string | number) => ({
    payload: { key, value },
    value,
  })
);
