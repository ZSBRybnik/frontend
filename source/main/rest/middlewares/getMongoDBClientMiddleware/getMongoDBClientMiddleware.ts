import mongoDBClient from "~frontend/source/main/clients/mongoDBClient/mongoDBClient";
import createMiddleware from "../../utils/createMiddleware/createMiddleware";
import {
  CreateMiddlewareOutput,
  RawMiddlewareArguments,
} from "../../utils/createMiddleware/createMiddleware.types";

const getMongoDBClientMiddleware = () => {
  const { middleware: mongoDBClientMiddleware }: CreateMiddlewareOutput =
    createMiddleware({
      rawMiddleware: async ({
        request,
        next,
      }: RawMiddlewareArguments): Promise<void> => {
        request.mongoDBClient = mongoDBClient;
        next();
      },
    });
  return mongoDBClientMiddleware;
};
export default getMongoDBClientMiddleware;
