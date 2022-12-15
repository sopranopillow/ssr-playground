import {
  createDOMRenderer,
  RendererProvider,
  renderToStyleElements,
  FluentProvider,
  teamsDarkTheme,
  SSRProvider,
} from "@fluentui/react-components";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "../client/components/app";

const server = express();

server.get("/", (req, res) => {
  const renderer = createDOMRenderer();

  const html = ReactDOMServer.renderToString(
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <FluentProvider theme={teamsDarkTheme}>
          <App />
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );

  const style = ReactDOMServer.renderToStaticMarkup(
    <>{renderToStyleElements(renderer)}</>
  );

  res.write(`
  <!DOCTYPE html>
  <html>
    <head>
      ${style}
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
  </html>
  `);
  res.end();
});

server.listen(3000, "localhost");
