const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const devServerOptions = {
    contentBase: [
    	'dist',
      'mock'
    ],
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
    }
};

new WebpackDevServer(webpack(webpackConfig), devServerOptions).listen(3000, '127.0.0.1', function (err, result) {
  	if (err) {
		console.log(err);
  	}
  	console.log('Listening at localhost:3000');
});