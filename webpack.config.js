const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.[hash].js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // use ! to chain loaders
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(jpe?g|gif|png|wav|mp3|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader'},
      {test: /\.json$/, loader: 'json-loader'},
    ]
  },
  devServer: {
    contentBase: __dirname + '/dist',
    historyApiFallback: true
  },
  plugins: [HTMLWebpackPluginConfig],
};
