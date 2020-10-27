import React, { useEffect, useRef } from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { loadGame } from "./game";

// Store
const slice = createSlice({
  name: "slice",
  initialState: {},
  reducers: {},
});

// App
export default React.memo(
  function App() {
    const gameContainer = useRef<null | HTMLElement>(null);
    const game = useRef<null | Phaser.Game>(null);
    const store = useRef(
      configureStore({
        reducer: slice.reducer,
      })
    );

    useEffect(() => {
      if (gameContainer.current && !game.current) {
        game.current = loadGame(gameContainer.current);

        setImmediate(() => {
          game
            .current!.scene.getScenes()
            .forEach((scene) => scene.data.set("store", store));
        });
      }
    });

    return <main ref={gameContainer} />;
  },
  () => true
);
