import mainPort from "~frontend/source/main/rest/constants/ports/ports";
import createServer from "~frontend/source/main/rest/utils/createServer/createServer";
import { CreateServerOutput } from "~frontend/source/main/rest/utils/createServer/createServer.types";

const { server, httpServer, port }: CreateServerOutput = await createServer({
  port: mainPort,
});

export { port, httpServer };

export default server;
