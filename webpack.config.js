module.exports = {
    module: {
      rules: [{
        test: /\.(scss|css|less)$/,
        use: [
          'postcss-loader',
          'less-loader',
        ]
      }]
    }
  };