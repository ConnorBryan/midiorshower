import React, { memo, useEffect, useRef } from "react";
import { useStore } from "react-redux";
import { loadGame } from "game";
import { ConfiguredStore } from "store";
import Panel from "./Panel";

export default memo(
  () => {
    const store = useStore<ConfiguredStore>();
    const container = useRef<null | HTMLElement>(null);
    const game = useRef<null | Phaser.Game>(null);

    useEffect(() => {
      if (container.current && !game.current) {
        game.current = loadGame(container.current, store as any);
      }
    });

    return (
      <Panel title="Game">
        <main ref={container} />
      </Panel>
    );
  },
  () => true
);
