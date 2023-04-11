const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../docs",
  },
  base: "all-photos",
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
  },
};
