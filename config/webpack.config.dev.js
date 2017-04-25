var config = require('react-scripts/config/webpack.config.dev.default');

config.resolve.extensions = ['.web.js', '.js', '.json', '.jsx', ''];
config.module.loaders.find(item => item.loader === 'babel').query.babelrc = true;

module.exports = config;