const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/newtab/index.tsx', // Single entry point for the new tab page
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'newtab.bundle.js', // Output file for the new tab page
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: 'assets/',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/, // Include other image formats if needed
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/newtab/index.html', // HTML template for the new tab page
      filename: 'newtab.html', // Output file for the new tab page
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public', to: '.' }], // Adjust if you need to copy specific files
    }),
  ],
};
