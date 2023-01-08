import type { Express } from "express";
import express from "express";
import applyMiddlewares from "~frontend/source/main/rest/utils/applyMiddlewares/applyMiddlewares";
import applyRoutes from "~frontend/source/main/rest/utils/applyRoutes/applyRoutes";
import type {
  CreateServer,
  CreateServerArguments,
  CreateServerOutput,
} from "~frontend/source/main/rest/utils/createServer/createServer.types";
import listenOnPort from "~frontend/source/main/rest/utils/listenOnPort/listenOnPort";

const createServer: CreateServer = ({
  port,
}: CreateServerArguments): CreateServerOutput => {
  const server: Express = express();
  applyMiddlewares({ instance: server });
  applyRoutes({ instance: server });
  const { httpServer, port: outputPort } = listenOnPort({
    instance: server,
    port,
  });
  return { server, httpServer, port: outputPort };
};
export default createServer;
