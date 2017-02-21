'use strict';

const debug = require('debug')('egg-passport-weibo');
const assert = require('assert');
const Strategy = require('passport-weibo').Strategy;

module.exports = app => {
  const config = app.config.passportWeibo;
  config.passReqToCallback = true;
  assert(config.key, '[egg-passport-weibo] config.passportWeibo.key required');
  assert(config.secret, '[egg-passport-weibo] config.passportWeibo.secret required');
  config.clientID = config.key;
  config.clientSecret = config.secret;

  // must require `req` params
  app.passport.use('weibo', new Strategy(config, (req, accessToken, refreshToken, params, profile, done) => {
    // format user
    const user = {
      provider: 'weibo',
      id: profile.id,
      name: profile._json && profile._json.name,
      displayName: profile.displayName,
      photo: profile._json && profile._json.avatar_hd && profile._json.avatar_hd.replace('http://', 'https://'),
      accessToken,
      refreshToken,
      params,
      profile,
    };

    debug('%s %s get user: %j', req.method, req.url, user);

    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }));
};
