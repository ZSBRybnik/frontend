import { PrismaClientOptions } from "@prisma/client/runtime";
import { Prisma, PrismaClient } from "@prisma/sqlite";

const sqLiteClient: PrismaClient<
  PrismaClientOptions,
  never,
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
> = new PrismaClient();

export default sqLiteClient;
