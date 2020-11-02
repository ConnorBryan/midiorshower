import { ConfiguredStore } from "store";

export default class StorePlugin extends Phaser.Plugins.BasePlugin {
  store!: ConfiguredStore;

  init(store: ConfiguredStore) {
    this.store = store;
  }
}
