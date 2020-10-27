import React, { useRef } from "react";
import { DebugManager, GameContainer } from "./components";
import createStore from "./store";
export default function App() {
  const store = useRef(createStore());

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <GameContainer store={store} />
      <DebugManager store={store} />
    </div>
  );
}
