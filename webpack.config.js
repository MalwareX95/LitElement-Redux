const path = require('path')

// const CopyPlugin = require('copy-webpack-plugin')

module.exports = {

  entry: ['./src/main.ts'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        include: 
        [
            path.resolve(__dirname, './src'),
            path.resolve(__dirname, './node_modules/lit-element'),
            path.resolve(__dirname, './node_modules/lit-html'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                '@babel/preset-typescript',
                '@babel/preset-env'
            //   ["@babel/preset-env", {
            //       corejs: 3,
            //       modules: false,
            //       useBuiltIns: "usage"
            //   }]
            ],
            plugins: [
                ["@babel/plugin-proposal-decorators", {decoratorsBeforeExport: true}],
                "@babel/plugin-transform-runtime",
                '@babel/plugin-proposal-class-properties',
            ]
          }
        }
      }
    ]
  },
}
