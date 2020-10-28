import { SCENE_KEYS } from "../../constants";
import { battleStarted, scoreSlice } from "../../store";
import BaseScene from "./BaseScene";

export default class BattleScene extends BaseScene {
  constructor() {
    super(SCENE_KEYS.Battle);
  }

  preload() {}

  create() {
    this.store.dispatch(battleStarted());

    this.time.addEvent({
      delay: 1,
      callback: () => this.store.dispatch(scoreSlice.actions.scored(1)),
      callbackScope: this,
      loop: true,
    });
  }

  update() {}
}
