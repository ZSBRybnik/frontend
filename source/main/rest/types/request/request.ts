import { PrismaClientOptions } from "@prisma/client/runtime";
import {
  Prisma as PrismaSqlite,
  PrismaClient as PrismaClientSqlite,
} from "@prisma/sqlite";
import {
  Prisma as PrismaMongoDB,
  PrismaClient as PrismaClientMongoDB,
} from "@prisma/mongodb";
import {
  Prisma as PrismaPostgreSQL,
  PrismaClient as PrismaClientPostgreSQL,
} from "@prisma/postgresql";
import { Request as RequestBase } from "express";
import Redis from "ioredis";
import JSONCache from "redis-json";
import { RawHandlerGeneric } from "~backend/source/server/rest/utils/createHandler/createHandler.types";

type Request<T = void> = Omit<RequestBase, "body"> & {
  sqLiteClient: PrismaClientSqlite<
    PrismaClientOptions,
    never,
    PrismaSqlite.RejectOnNotFound | PrismaSqlite.RejectPerOperation | undefined
  >;
  mongoDBClient: PrismaClientMongoDB<
    PrismaClientOptions,
    never,
    | PrismaMongoDB.RejectOnNotFound
    | PrismaMongoDB.RejectPerOperation
    | undefined
  >;
  postgreSQLClient: PrismaClientPostgreSQL<
    PrismaClientOptions,
    never,
    | PrismaPostgreSQL.RejectOnNotFound
    | PrismaPostgreSQL.RejectPerOperation
    | undefined
  >;
  redisClient: Redis;
  jsonRedisClient: JSONCache;
  body: T extends RawHandlerGeneric ? T["body"] : RawHandlerGeneric["body"];
};

export default Request;
