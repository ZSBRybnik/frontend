import { Application, NextFunction } from "express";
import Request from "~frontend/source/main/rest/types/request/request";
import Response from "~frontend/source/main/rest/types/response/response";

export type JSONTypes = string | number | boolean | null;

export type RawMiddlewareGeneric = {
  body?: Record<string, JSONTypes | Record<string, JSONTypes> | JSONTypes[]>;
};

export type RawMiddlewareArguments<T = void | RawMiddlewareGeneric> = {
  request: Request<T>;
  response: Response;
  next: NextFunction;
};

export type RawMiddleware = (argument: RawMiddlewareArguments) => Promise<void>;

export type Middleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => Promise<void>;

export type CreateMiddlewareArguments = {
  rawMiddleware: RawMiddleware;
};

export type CreateMiddlewareOutput = {
  middleware: Application;
};

export type CreateMiddleware = (
  argument: CreateMiddlewareArguments,
) => CreateMiddlewareOutput;
