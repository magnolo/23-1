var webpack = require('webpack');
var path = require('path');


var commonConfig = {
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
    //  'mapbox-gl-css': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.css'),
      'mapbox-gl': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js'),
    }
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss$/, exclude: /node_modules/, loaders: ['raw-loader','sass-loader']},
      { test: /\.js$/, include: path.resolve(__dirname, 'node_modules/mapbox-gl/js/render/shaders.js'), loader: 'transform/cacheable?brfs'}
    ],
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   'd3': 'd3'
    // }),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      root('./src'),
      {}
    )
  ]

};


var clientConfig = {
  target: 'web',
  entry: './src/client',
  output: {
    path: root('dist/client')
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};


var serverConfig = {
  target: 'node',
  entry: './src/server', // use the entry file of the node server if everything is ts rather than es5
  output: {
    path: root('dist/server'),
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      { test: /angular2-material/, loader: "imports-loader?window=>global" }
    ],
  },
  externals: includeClientPackages([
    // include these client packages so we can transform their source with webpack loaders
    '@angular2-material/button',
    '@angular2-material/button',
    '@angular2-material/card',
    '@angular2-material/checkbox',
    '@angular2-material/core',
    '@angular2-material/grid',
    '@angular2-material/icon',
    '@angular2-material/input',
    '@angular2-material/list',
    '@angular2-material/menu',
    '@angular2-material/progress',
    '@angular2-material/progress',
    '@angular2-material/radio',
    '@angular2-material/sidenav',
    '@angular2-material/slider',
    '@angular2-material/slide',
    '@angular2-material/tabs',
    '@angular2-material/toolbar',
    '@angular2-material/tooltip'
  ]),
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};



// Default config
var defaultConfig = {
  context: __dirname,
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'index.js'
  }
};



var webpackMerge = require('webpack-merge');
module.exports = [
  // Client
  webpackMerge({}, defaultConfig, commonConfig, clientConfig),

  // Server
  webpackMerge({}, defaultConfig, commonConfig, serverConfig)
];

function includeClientPackages(packages) {
  return function(context, request, cb) {
    if (packages && packages.indexOf(request) !== -1) {
      return cb();
    }
    return checkNodeImport(context, request, cb);
  };
}
// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
