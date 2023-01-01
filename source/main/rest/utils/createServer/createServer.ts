/* eslint-disable max-params */
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
import next from "next";

const createServer: CreateServer = async ({
  port,
}: CreateServerArguments): Promise<CreateServerOutput> => {
  const nextServer = next({});
  const handle = nextServer.getRequestHandler();
  await nextServer.prepare();
  const backendServer: Express = express();
  const nextServerExpress: Express = express();
  nextServerExpress.get("*", (req, res) => {
    return handle(req, res);
  });
  nextServerExpress.listen(2137);
  applyMiddlewares({ instance: backendServer });
  applyRoutes({ instance: backendServer });
  const { httpServer, port: outputPort } = listenOnPort({
    instance: backendServer,
    port,
  });
  return { server: backendServer, httpServer, port: outputPort };
};
export default createServer;
