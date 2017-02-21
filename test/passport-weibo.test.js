'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/passport-weibo.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/passport-weibo-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, passportWeibo')
      .expect(200);
  });

  it('should GET /passport/weibo redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/weibo')
      .expect('Location', /^https:\/\/api.weibo.com\/oauth2\/authorize/)
      .expect(302);
  });

  it('should GET /passport/weibo/callback redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/weibo/callback')
      .expect('Location', /^https:\/\/api.weibo.com\/oauth2\/authorize/)
      .expect(302);
  });
});
