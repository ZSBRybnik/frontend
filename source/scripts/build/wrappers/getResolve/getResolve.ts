import { join, resolve } from "path";

type GetResolveArguments = {
  sourceFolder: string;
};

const getResolve = ({ sourceFolder }: GetResolveArguments) => {
  return {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".mjs", ".wasm", ".json"],
    alias: {
      "@babel/runtime": resolve(
        process.cwd(),
        "node_modules",
        "@babel",
        "runtime",
      ),
      acorn: resolve(process.cwd(), "node_modules", "acorn"),
      "character-entities-legacy": resolve(
        process.cwd(),
        "node_modules",
        "character-entities-legacy",
      ),
      "character-reference-invalid": resolve(
        process.cwd(),
        "node_modules",
        "character-reference-invalid",
      ),
      "comma-separated-tokens": resolve(
        process.cwd(),
        "node_modules",
        "comma-separated-tokens",
      ),
      "is-alphanumerical": resolve(
        process.cwd(),
        "node_modules",
        "is-alphanumerical",
      ),
      "is-decimal": resolve(process.cwd(), "node_modules", "is-decimal"),
      "is-hexadecimal": resolve(
        process.cwd(),
        "node_modules",
        "is-hexadecimal",
      ),
      "parse-entities": resolve(
        process.cwd(),
        "node_modules",
        "parse-entities",
      ),
      "space-separated-tokens": resolve(
        process.cwd(),
        "node_modules",
        "space-separated-tokens",
      ),
      punycode: resolve(process.cwd(), "node_modules", "punycode"),
      querystring: resolve(process.cwd(), "node_modules", "querystring"),
      "bn.js": resolve(process.cwd(), "node_modules", "bn.js"),
      buffer: resolve(process.cwd(), "node_modules", "buffer"),
      "@toruslabs/http-helpers": resolve(
        process.cwd(),
        "node_modules",
        "@toruslabs",
        "http-helpers",
      ),
      "@ledgerhq/hw-transport": resolve(
        process.cwd(),
        "node_modules",
        "@ledgerhq",
        "hw-transport",
      ),
      "react/jsx-runtime.js": "react/jsx-runtime",
      "react/jsx-dev-runtime.js": "react/jsx-dev-runtime",
      "~backend": join(process.cwd(), "..", "backend"),
      "~root": join(process.cwd(), sourceFolder),
      "~preload": join(process.cwd(), sourceFolder, "preload"),
      "~main": join(process.cwd(), sourceFolder, "main"),
      "~renderer": join(process.cwd(), sourceFolder, "renderer"),
      "~shared": join(process.cwd(), sourceFolder, "shared"),
      "~public": join(process.cwd(), sourceFolder, "public"),
    },
  };
};

export default getResolve;
