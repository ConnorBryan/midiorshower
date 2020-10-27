import React, { useEffect } from "react";
import { loadGame } from "./game";

export default React.memo(
  function App() {
    const gameContainer = React.useRef<null | HTMLElement>(null);
    const game = React.useRef<null | Phaser.Game>(null);

    useEffect(() => {
      if (gameContainer.current && !game.current) {
        game.current = loadGame(gameContainer.current);
      }
    });

    return <main ref={gameContainer} />;
  },
  () => true
);
