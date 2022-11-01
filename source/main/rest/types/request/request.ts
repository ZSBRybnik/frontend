import { PrismaClientOptions } from "@prisma/client/runtime";
import { Prisma, PrismaClient } from "@prisma/sqlite";
import { Request as RequestBase } from "express";
import Redis from "ioredis";
import JSONCache from "redis-json";
import { RawHandlerGeneric } from "~backend/source/server/rest/utils/createHandler/createHandler.types";

type Request<T = void> = Omit<RequestBase, "body"> & {
  sqLiteClient: PrismaClient<
    PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
  redisClient: Redis;
  jsonRedisClient: JSONCache;
  body: T extends RawHandlerGeneric ? T["body"] : RawHandlerGeneric["body"];
};

export default Request;
