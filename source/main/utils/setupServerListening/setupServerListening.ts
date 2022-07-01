import { Express } from "express";

type SetupServerListeningArguments = {
  server: Express;
  port: number;
};

export type SetupServerListening = (
  argument: SetupServerListeningArguments
) => void;

const setupServerListening: SetupServerListening = ({
  server,
  port,
}: SetupServerListeningArguments): void => {
  server.listen(port).on("error", (): void => {
    port++;
    setupServerListening({ server, port });
  });
};

export default setupServerListening;
