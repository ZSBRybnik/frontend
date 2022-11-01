import sqLiteClient from "~frontend/source/main/clients/sqLiteClient/sqLiteClient";
import createMiddleware from "../../utils/createMiddleware/createMiddleware";
import {
  CreateMiddlewareOutput,
  RawMiddlewareArguments,
} from "../../utils/createMiddleware/createMiddleware.types";

const getSQLiteClientMiddleware = () => {
  const { middleware: sqLiteClientMiddleware }: CreateMiddlewareOutput =
    createMiddleware({
      rawMiddleware: async ({
        request,
        next,
      }: RawMiddlewareArguments): Promise<void> => {
        request.sqLiteClient = sqLiteClient;
        next();
      },
    });
  return sqLiteClientMiddleware;
};
export default getSQLiteClientMiddleware;
