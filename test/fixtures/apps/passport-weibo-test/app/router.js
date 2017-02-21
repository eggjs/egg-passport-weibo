'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.passportWeibo.name;
  });

  app.passport.mount('weibo');
};
