import { hookstate } from "@hookstate/core";
import { IPFS } from "ipfs-core";

const ipfsStore = hookstate<null | IPFS>(null);

export default ipfsStore;
