import { httpServer } from "~frontend/source/main/rest/index";

const gunClient = Gun({
  file: "gun-database",
  web: httpServer,
});

export default gunClient;
