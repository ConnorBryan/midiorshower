import React, { useRef } from "react";
import { Provider } from "react-redux";
import { DebugManager, GameContainer } from "./components";
import createStore from "./store";

export default function App() {
  const store = useRef(createStore());

  return (
    <Provider store={store.current}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <GameContainer />
        <DebugManager />
      </div>
    </Provider>
  );
}
