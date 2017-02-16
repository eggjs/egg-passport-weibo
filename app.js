'use strict';

const debug = require('debug')('egg-passport-weibo');
const assert = require('assert');
const Strategy = require('passport-weibo').Strategy;

module.exports = app => {
  const config = app.config.passport.weibo;
  config.passReqToCallback = true;
  assert(config.clientID, '[egg-passport-weibo] config.passport.weibo.clientID required');
  assert(config.clientSecret, '[egg-passport-weibo] config.passport.weibo.clientSecret required');

  // must require `req` params
  app.passport.use(new Strategy(config, function(req, accessToken, refreshToken, params, profile, done) {
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
