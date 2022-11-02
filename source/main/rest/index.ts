import Gun /*, { GunOptions }*/ from "gun";
import mainPort from "~frontend/source/main/rest/constants/ports/ports";
import createServer from "~frontend/source/main/rest/utils/createServer/createServer";
import { CreateServerOutput } from "~frontend/source/main/rest/utils/createServer/createServer.types";

const { server, httpServer }: CreateServerOutput = createServer({
  port: mainPort,
});

export const gun = Gun({
  file: "gun-database",
  web: httpServer,
});

export default server;
