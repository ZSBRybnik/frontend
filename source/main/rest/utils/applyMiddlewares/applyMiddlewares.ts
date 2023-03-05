import Gun from "gun";
/* import getJsonBodyParserMiddleware from "../../middlewares/getJsonBodyParserMiddleware/getJsonBodyParserMiddleware";
import getJsonRedisClientMiddleware from "../../middlewares/getJsonRedisClientMiddleware/getJsonRedisClientMiddleware";
import getRedisClientMiddleware from "../../middlewares/getRedisClientMiddleware/getRedisClientMiddleware";
import getSendWithValidFormatMiddleware from "../../middlewares/getSendWithValidFormatMiddleware/getSendWithValidFormatMiddleware";*/
//import getSQLiteClientMiddleware from "~frontend/source/main/rest/middlewares/getSQLiteClientMiddleware/getSQLiteClientMiddleware";
import { static as staticServe } from "express";
import { join } from "path";
import getRateLimitMiddleware from "~frontend/source/main/rest/middlewares/getRateLimitMiddleware/getRateLimitMiddleware";
import {
  default as getMongoDBClientMiddleware,
  default as getPostgreSQLClientMiddleware,
} from "../../middlewares/getPostgreSQLClientMiddleware/getPostgreSQLClientMiddleware";
import type {
  ApplyMiddlewares,
  ApplyMiddlewaresArguments,
} from "./applyMiddlewares.types";

const applyMiddlewares: ApplyMiddlewares = ({
  instance,
}: ApplyMiddlewaresArguments): void => {
  //instance.use(Handlers.requestHandler());
  //instance.use(Handlers.tracingHandler());
  instance.use(getMongoDBClientMiddleware());
  instance.use(getPostgreSQLClientMiddleware());
  //instance.use(getSQLiteClientMiddleware());
  instance.use(getRateLimitMiddleware());
  instance.use(staticServe(join(__dirname, "..", "..")));

  // eslint-disable-next-line max-params
  instance.use("*", (_request, response) => {
    response.sendFile(join(__dirname, "..", "..", "index.html"));
  });
  /*instance.use(getJsonBodyParserMiddleware());
  instance.use(getRedisClientMiddleware());
  instance.use(getJsonRedisClientMiddleware());
  instance.use(getSendWithValidFormatMiddleware());*/
  instance.use(
    (Gun as unknown as { serve: Parameters<typeof instance.use>[0] }).serve,
  );
};

export default applyMiddlewares;
