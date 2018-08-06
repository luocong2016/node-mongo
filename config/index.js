const config = require('config-lite')({
  filename: process.env.NODE_ENV === 'production' ?  'production' : 'default',
  config_basedir: __dirname,
});

module.exports = config;
