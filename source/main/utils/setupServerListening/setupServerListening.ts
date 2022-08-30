import { Express } from "express";
import type { Server } from "http";

type SetupServerListeningArguments = {
  server: Express;
  port: number;
};

export type SetupServerListening = (
  argument: SetupServerListeningArguments,
) => Server;

const setupServerListening: SetupServerListening = ({
  server,
  port,
}: SetupServerListeningArguments): Server => {
  return server.listen(port).on("error", (): void => {
    port++;
    setupServerListening({ server, port });
  });
};

export default setupServerListening;
