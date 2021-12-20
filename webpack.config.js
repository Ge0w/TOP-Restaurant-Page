const path = require('path');
const ghpages = require('gh-pages');

ghpages.publish('dist', function(err) {
  console.log(err)
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};