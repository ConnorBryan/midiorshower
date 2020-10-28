import React, { memo, useEffect, useRef } from "react";
import { useStore } from "react-redux";
import { loadGame } from "../game";

export default memo(
  () => {
    const store = useStore();
    const container = useRef<null | HTMLElement>(null);
    const game = useRef<null | Phaser.Game>(null);

    useEffect(() => {
      if (container.current && !game.current) {
        game.current = loadGame(container.current, store);
      }
    });

    return (
      <fieldset
        style={{
          padding: 10,
        }}
      >
        <legend>Game</legend>
        <main ref={container} />
      </fieldset>
    );
  },
  () => true
);
