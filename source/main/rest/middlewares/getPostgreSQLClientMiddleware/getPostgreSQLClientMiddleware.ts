import postgreSQLClient from "~frontend/source/main/clients/postgreSQLClient/postgreSQLClient";
import createMiddleware from "../../utils/createMiddleware/createMiddleware";
import {
  CreateMiddlewareOutput,
  RawMiddlewareArguments,
} from "../../utils/createMiddleware/createMiddleware.types";

const getMongoDBClientMiddleware = () => {
  const { middleware: postgreSQLClientMiddleware }: CreateMiddlewareOutput =
    createMiddleware({
      rawMiddleware: async ({
        request,
        next,
      }: RawMiddlewareArguments): Promise<void> => {
        request.postgreSQLClient = postgreSQLClient;
        next();
      },
    });
  return postgreSQLClientMiddleware;
};
export default getMongoDBClientMiddleware;
