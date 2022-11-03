import rateLimit, { RateLimitRequestHandler } from "express-rate-limit";
import { remoteRequestsLimit } from "~frontend/source/main/clients/cliClient/cliClient";

const getRateLimitMiddleware = (): RateLimitRequestHandler => {
  return rateLimit({
    windowMs: 60_000,
    max: remoteRequestsLimit || Number.MAX_SAFE_INTEGER,
  });
};

export default getRateLimitMiddleware;
