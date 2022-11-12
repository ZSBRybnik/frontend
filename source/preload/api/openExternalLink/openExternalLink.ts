import { shell } from "electron";

export type OpenExternalLinkArguments = {
  url: string;
};

const openExternalLink = ({ url }: OpenExternalLinkArguments): void => {
  shell.openExternal(url);
};

export default openExternalLink;
