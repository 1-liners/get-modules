[![Coverage Status](https://coveralls.io/repos/1-liners/get-modules/badge.svg?branch=master)](https://coveralls.io/r/1-liners/get-modules?branch=master)
[![Build Status](https://travis-ci.org/1-liners/get-modules.svg?branch=master)](https://travis-ci.org/1-liners/get-modules)
[![Dependency Status](https://david-dm.org/1-liners/get-modules.svg)](https://david-dm.org/1-liners/get-modules)
[![npm version](https://badge.fury.io/js/get-modules.svg)](http://badge.fury.io/js/get-modules)

get-modules
====

> get all filenames from `./modules`

## Usage

### Install

```
$ npm install --save get-modules
```

### Usage

```js
import getModules from 'get-modules';

getModules(__dirname, (err, files) => err? console.error('Doh!') : console.log(files));
```

### CLI

```bash
get-modules ./
```

## Maintainers

|  [![stoeffel](https://avatars.githubusercontent.com/u/1217681?v=3&s=80)](https://github.com/stoeffel) | [![hemanth](https://avatars.githubusercontent.com/u/18315?v=3&s=80)](https://github.com/hemanth) | [![tomekwi](https://avatars.githubusercontent.com/u/4624660?v=3&s=80)](https://github.com/tomekwi)  |
| :--:|:--:|:--: |
|  [stoeffel](https://github.com/stoeffel) | [hemanth](https://github.com/hemanth) | [tomekwi](https://github.com/tomekwi)  |

created with [gh-contributors-table](https://github.com/stoeffel/gh-contributors-table)


## License

MIT © [stoeffel](http://schtoeffel.ch) [tomekwi](http://github.com/tomekwi) [hemanth](http://www.h3manth.com/)
