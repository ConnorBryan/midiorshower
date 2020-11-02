import { createAction } from "@reduxjs/toolkit";
import { ACTION_KEYS } from "keys";

export const debugMenuUpdated = createAction(
  ACTION_KEYS.DebugMenuUpdated,
  (settingsKey: string, key: string, value: string | number) => ({
    payload: { settingsKey, key, value },
    value,
  })
);
