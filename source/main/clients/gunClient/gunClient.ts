import gun from "gun";
import { httpServer } from "~frontend/source/main/rest/index";

const gunClient = gun({
  file: "gun-database",
  web: httpServer,
});

export default gunClient;
