import { Client } from "faunadb";

const faunadbClient = new Client({
  secret: process.env.FAUNADB_KEY || "",
});

export default faunadbClient;
