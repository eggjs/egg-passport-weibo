# egg-passport-weibo

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-weibo.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-weibo
[travis-image]: https://img.shields.io/travis/eggjs/egg-passport-weibo.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-passport-weibo
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-passport-weibo.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-passport-weibo?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-passport-weibo.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-passport-weibo
[snyk-image]: https://snyk.io/test/npm/egg-passport-weibo/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-weibo
[download-image]: https://img.shields.io/npm/dm/egg-passport-weibo.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-weibo

weibo passport plugin for egg

## Install

```bash
$ npm i egg-passport-weibo --save
```

## Usage

```js
// config/plugin.js
exports.passportWeibo = {
  enable: true,
  package: 'egg-passport-weibo',
};
```

## Configuration

```js
// config/config.default.js
exports.passportWeibo = {
  key: 'your oauth key',
  secret: 'your oauth secret',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE.txt)
