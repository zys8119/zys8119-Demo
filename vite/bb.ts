const child_process = require("child_process");

export default function GvaPositionServer() {
  return {
    name: "gva-position-server",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, _, next) => {
        if (req._parsedUrl.pathname === "/gvaPositionCode") {
          const path =
            req._parsedUrl.query && req._parsedUrl.query.split("=")[1];
          if (path && path !== "null") {
            child_process.exec("trae -r -g " + path);
          }
        }
        next();
      });
    },
  };
}

function os() {
  "use strict";
  const os = require("os");
  const platform = os.platform();
  return platform;
}
