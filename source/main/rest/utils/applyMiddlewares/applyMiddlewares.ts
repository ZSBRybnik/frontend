import Gun from "gun"; /*
import getJsonBodyParserMiddleware from "../../middlewares/getJsonBodyParserMiddleware/getJsonBodyParserMiddleware";
import getJsonRedisClientMiddleware from "../../middlewares/getJsonRedisClientMiddleware/getJsonRedisClientMiddleware";
import getRedisClientMiddleware from "../../middlewares/getRedisClientMiddleware/getRedisClientMiddleware";
import getSendWithValidFormatMiddleware from "../../middlewares/getSendWithValidFormatMiddleware/getSendWithValidFormatMiddleware";*/
import getSQLiteClientMiddleware from "~frontend/source/main/rest/middlewares/getSQLiteClientMiddleware/getSQLiteClientMiddleware";

import type {
  ApplyMiddlewares,
  ApplyMiddlewaresArguments,
} from "./applyMiddlewares.types";

const applyMiddlewares: ApplyMiddlewares = ({
  instance,
}: ApplyMiddlewaresArguments): void => {
  instance.use(getSQLiteClientMiddleware());
  /*instance.use(getJsonBodyParserMiddleware());
  instance.use(getRedisClientMiddleware());
  instance.use(getJsonRedisClientMiddleware());
  instance.use(getSendWithValidFormatMiddleware());*/
  instance.use((Gun as any).serve);
};

export default applyMiddlewares;
