import type { Component, JSX } from "solid-js";

const App: Component = (props: { children?: JSX.Element }) => {
  return <div>{props.children}</div>;
};

export default App;
