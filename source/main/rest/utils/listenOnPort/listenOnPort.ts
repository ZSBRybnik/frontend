import type { Server } from "http";
import type { ListenOnPort, ListenOnPortArguments } from "./listenOnPort.types";

const listenOnPort: ListenOnPort = ({
  instance,
  port,
  callback,
}: ListenOnPortArguments): Server => {
  return instance.listen(port, callback).on("error", (): void => {
    port++;
    listenOnPort({ instance, port, callback });
  });
};

export default listenOnPort;
