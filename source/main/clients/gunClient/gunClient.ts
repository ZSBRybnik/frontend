import { httpServer } from "~frontend/source/main/rest/index";
import gun from "gun";

const gunClient = gun({
  file: "gun-database",
  web: httpServer,
});

export default gunClient;
