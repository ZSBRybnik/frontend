import Gun from "gun"; /*
import getJsonBodyParserMiddleware from "../../middlewares/getJsonBodyParserMiddleware/getJsonBodyParserMiddleware";
import getJsonRedisClientMiddleware from "../../middlewares/getJsonRedisClientMiddleware/getJsonRedisClientMiddleware";
import getRedisClientMiddleware from "../../middlewares/getRedisClientMiddleware/getRedisClientMiddleware";
import getSendWithValidFormatMiddleware from "../../middlewares/getSendWithValidFormatMiddleware/getSendWithValidFormatMiddleware";*/
import getSQLiteClientMiddleware from "~frontend/source/main/rest/middlewares/getSQLiteClientMiddleware/getSQLiteClientMiddleware";
import getRateLimitMiddleware from "~frontend/source/main/rest/middlewares/getRateLimitMiddleware/getRateLimitMiddleware";

import { Handlers } from "@sentry/node";
import { join } from "path";
import { static as staticServe } from "express";

import type {
  ApplyMiddlewares,
  ApplyMiddlewaresArguments,
} from "./applyMiddlewares.types";

const applyMiddlewares: ApplyMiddlewares = ({
  instance,
}: ApplyMiddlewaresArguments): void => {
  instance.use(Handlers.requestHandler());
  instance.use(Handlers.tracingHandler());
  instance.use(getSQLiteClientMiddleware());
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
  instance.use((Gun as any).serve);
};

export default applyMiddlewares;
