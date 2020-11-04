import React, { memo, useEffect, useRef } from "react";
import { loadGame } from "game";

export default memo(
  () => {
    const container = useRef<null | HTMLElement>(null);
    const game = useRef<null | Phaser.Game>(null);

    useEffect(() => {
      if (container.current && !game.current) {
        game.current = loadGame(container.current);
      }
    });

    return <main ref={container} />;
  },
  () => true
);
