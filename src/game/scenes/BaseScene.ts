import Phaser from "phaser";
import { ConfiguredStore, selectors } from "store";
import { SYSTEM_KEYS } from "keys";
import { StorePlugin } from "game/plugins";

export default class BaseScene extends Phaser.Scene {
  store!: ConfiguredStore;

  init() {
    const { store } = this.plugins.get(SYSTEM_KEYS.Store) as StorePlugin;

    this.store = store;

    this.store.subscribe(() => {
      const state = this.store.getState();
      const foo = Object.entries(selectors.getSettings(state));

      for (const [settingKey, setting] of foo) {
        for (const [key, value] of Object.entries(setting as any)) {
          (this as any)[settingKey][key] = value;
        }
      }
    });
  }
}
