import { createAction } from "@reduxjs/toolkit";
import { EVENT_KEYS } from "../../constants";

export const battleStarted = createAction(EVENT_KEYS.BattleStarted);
