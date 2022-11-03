import { Command } from "commander";

const cliClient: Command = new Command();

cliClient.option("-rql, --remoteRequestsLimit <time in ms>", "Target device");
cliClient.parse(process.argv);

export const { remoteRequestsLimit } = cliClient.opts();

export default cliClient;
