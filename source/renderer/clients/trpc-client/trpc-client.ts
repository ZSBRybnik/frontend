import { createClient } from "../../utils/trpc-utilities/trpc-utilities";

const trpcClient = createClient({
  url: "http://localhost:3000/trpc",
});

export default trpcClient;
