import type { Component, JSX } from "solid-js";

const Root: Component = (props: { children?: JSX.Element }) => {
  return <div>{props.children}</div>;
};

export default Root;
