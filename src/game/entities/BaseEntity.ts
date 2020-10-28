import Phaser from "phaser";
import { EntitySelectors } from "@reduxjs/toolkit";
import {
  ConfiguredStore,
  PhlaserState,
  PhlaserStateKey,
  selectors,
} from "../../store";
import { SYSTEM_KEYS } from "../../constants";
import { StorePlugin } from "../plugins";

export default class BaseEntity<T> extends Phaser.GameObjects.GameObject {
  reducerKey: PhlaserStateKey;
  id: string;
  store!: ConfiguredStore;

  constructor(
    scene: Phaser.Scene,
    key: string,
    reducerKey: PhlaserStateKey,
    id: string
  ) {
    super(scene, key);

    this.reducerKey = reducerKey;
    this.id = id;
  }

  init() {
    const { store } = this.scene.plugins.get(SYSTEM_KEYS.Store) as StorePlugin;

    this.store = store;
  }

  getOwnData() {
    return ((selectors as any)[this.reducerKey] as EntitySelectors<
      T,
      PhlaserState
    >).selectById(this.store.getState(), this.id);
  }
}
