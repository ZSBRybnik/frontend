import { existsSync, mkdirSync } from "fs";
import { platform } from "os";
import { join } from "path";
import { $ } from "zx";

const umlFolderPath = join(process.cwd(), "uml");

(async (): Promise<void> => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  /** These commands can't be split, because they are blocking access to prisma engine in the file system */
  await $`yarn run generate-postgresql-types && yarn run generate-mongodb-types && yarn run generate-sqlite-types`;
  if (!existsSync(umlFolderPath)) {
    mkdirSync(umlFolderPath);
  }
  const generatePostgreSQLUMLPromise = $`prisma-uml ./source/main/prisma/postgresql.prisma -o png -f ./uml/postgresql.png`;
  const generateMongoSQLUMLPromise = $`prisma-uml ./source/main/prisma/mongodb.prisma -o png -f ./uml/mongodb.png`;
  const generateSqliteUMLPromise = $`prisma-uml ./source/main/prisma/sqlite.prisma -o png -f ./uml/sqlite.png`;
  await Promise.all([
    generatePostgreSQLUMLPromise,
    generateMongoSQLUMLPromise,
    generateSqliteUMLPromise,
  ]);
})();
