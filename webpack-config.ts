module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'static/img',
              esModule: false // <- here
            }
          }
        ]
      }
    ],
  },
};