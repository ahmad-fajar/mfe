const HtmlWebpackPlugin = require("html-webpack-plugin");
// import module federation plugin
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        //choose files which are going to be exposed to container
        "./ProductsIndex": "./src/index",
      },
      // share modules example
      // shared: ["faker"],
      // singleton shared module example
      // shared: {
      //   faker: {
      //     singleton: true,
      //   },
      // },
      // delegating shared module example (see packageJson above)
      //shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
