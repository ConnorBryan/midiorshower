import Phaser from "phaser";
import { Store } from "redux";
import { SYSTEM_KEYS } from "../constants";
import { StorePlugin } from "../plugins";

export default class BaseScene extends Phaser.Scene {
  store!: Store<any, any>;

  init() {
    const { store } = this.plugins.get(SYSTEM_KEYS.Store) as StorePlugin;

    this.store = store;
  }
}
