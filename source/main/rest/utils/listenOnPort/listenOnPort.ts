import type {
  ListenOnPort,
  ListenOnPortArguments,
  ListenOnPortOutput,
} from "./listenOnPort.types";

const listenOnPort: ListenOnPort = ({
  instance,
  port,
  callback,
}: ListenOnPortArguments): ListenOnPortOutput => {
  return {
    port,
    httpServer: instance.listen(port, callback).on("error", (): void => {
      port++;
      listenOnPort({ instance, port, callback });
    }),
  };
};

export default listenOnPort;
