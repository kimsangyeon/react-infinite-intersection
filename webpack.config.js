const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/InfiniteIntersection.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'InfiniteIntersection.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
}