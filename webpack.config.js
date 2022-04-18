const path = require("path");
const ghpages = require("gh-pages");

ghpages.publish("dist", function (err) {
  console.log(err);
});

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
