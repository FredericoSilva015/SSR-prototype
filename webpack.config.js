const path = require( 'path' );

/**
 * Entry => /src/components/index.js
 * Output => public folder
 */
const config = {
  entry: {
    vendor: [ '@babel/polyfill', 'react' ],
    app: [ './src/components/index.js' ]
  },
  output: {
    path: path.resolve( __dirname, 'public' ),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env', '@babel/preset-react' ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.json', '.wasm', '.mjs', '*' ]
  }
};

module.exports = config;
