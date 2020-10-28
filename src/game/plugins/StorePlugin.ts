import { Store } from "redux";

export default class StorePlugin extends Phaser.Plugins.BasePlugin {
  store!: Store<any, any>;

  init(store: Store<any, any>) {
    this.store = store;
  }
}
