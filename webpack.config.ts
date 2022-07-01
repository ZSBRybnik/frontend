import "dotenv/config";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { join } from "path";

const setupConfig = (): Configuration[] => {
  return [
    {
      entry: "./source/renderer/index.tsx",
      output: {
        path: join(process.cwd(), "destination"),
        filename: "index.js",
      },
      target: "web",
      optimization: { usedExports: true },
      resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx", ".mjs", ".wasm", ".json"],
        alias: {
          "~root": join(process.cwd(), "source"),
          "~preload": join(process.cwd(), "source", "preload"),
          "~main": join(process.cwd(), "source", "main"),
          "~renderer": join(process.cwd(), "source", "renderer"),
          "~shared": join(process.cwd(), "source", "shared"),
          "~public": join(process.cwd(), "source", "public"),
        },
      },
      experiments: {
        topLevelAwait: true,
      },
      mode: "production",
      devtool: "source-map",
      plugins: [
        new HtmlWebpackPlugin({
          template: join(
            process.cwd(),
            "source",
            "public",
            "notStatic",
            `indexWeb.pug`
          ),
          filename: join(process.cwd(), "destination", "index.html"),
          scriptLoading: "blocking",
          minify: true,
          inject: true,
        }),
      ],
      module: {
        rules: [
          {
            test: /\.pug$/,
            use: ["html-loader", "pug-html-loader"],
          },
          {
            test: /\.(js|ts|jsx|tsx)$/,
            include: join(process.cwd(), "source"),
            exclude: /(node_modules)/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  presets: [
                    "@babel/preset-typescript",
                    [
                      "@babel/preset-react",
                      {
                        runtime: "automatic",
                      },
                    ],
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  ];
};

export default setupConfig;
