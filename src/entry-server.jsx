import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { routes } from "./routes";

export { routes };

export function render(route) {
  const { Component } = route;
  return renderToString(
    <StrictMode>
      <Component />
    </StrictMode>
  );
}
