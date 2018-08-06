const admin = require('./admin');
const bos = require('./bos');
const eus = require('./eus');
const member = require('./member');
const payapi = require('./payapi');
const promotion = require('./promotion');
const shopping = require('./shopping');
const statis = require('./statis');
const ugc = require('./ugc');
const v1 = require('./v1');
const v2 = require('./v2');
const v3 = require('./v3');
const v4 = require('./v4');

module.exports = app => {
  app.use('/v1', v1);
  app.use('/v2', v2);
  app.use('/v3', v3);
  app.use('/v4', v4);
  app.use('/ugc', ugc);
  app.use('/bos', bos);
  app.use('/eus', eus);
  app.use('/admin', admin);
  app.use('/member', member);
  app.use('/statis', statis);
  app.use('/shopping', shopping);
  app.use('/promotion', promotion);
};
