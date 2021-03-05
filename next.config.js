// next.config.js
const withImages = require('next-images');
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withFonts = require('next-fonts');
const webpack = require('webpack');

module.exports = withImages(withFonts(withCss(withSass({
compress:false,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });
    return config;
  }
}))))

