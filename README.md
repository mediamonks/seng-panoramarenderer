[![Travis](https://img.shields.io/travis/mediamonks/seng-panoramarenderer.svg?maxAge=2592000)](https://travis-ci.org/mediamonks/seng-panoramarenderer)
[![Coveralls](https://img.shields.io/coveralls/mediamonks/seng-panoramarenderer.svg?maxAge=2592000)](https://coveralls.io/github/mediamonks/seng-panoramarenderer?branch=master)
[![npm](https://img.shields.io/npm/v/seng-panoramarenderer.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-panoramarenderer)
[![npm](https://img.shields.io/npm/dm/seng-panoramarenderer.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-panoramarenderer)

# seng-panoramarenderer
Provides functionality for displaying simple image (or video) panorama's including basic support for hotspots.


## Installation

```sh
yarn add seng-panoramarenderer
```

```sh
npm i -S seng-panoramarenderer
```

## Basic usage

Simple Panorama example (make sure the images are preloaded first).
```ts
import { PanoramaRenderer } from 'seng-panoramarenderer';

const renderer = new PanoramaRenderer(wrapperElement, imageElement);
renderer.init();
```

Note: when the height and width of the image are both a power of two (2048x1024 or 4096x2048 for example),
mip mapping can be used. This will greatly improve the visual quality of the panorama.

For more examples, please check the examples directory.


## Building

In order to build seng-event, ensure that you have [Git](http://git-scm.com/downloads)
and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:
```sh
git clone https://github.com/mediamonks/seng-panoramarenderer.git
```

Change to the seng-panoramarenderer directory:
```sh
cd seng-panoramarenderer
```

Install dev dependencies:
```sh
yarn
```

Use one of the following main scripts:
```sh
yarn build            # build this project
yarn dev              # run compilers in watch mode, both for babel and typescript
yarn test             # run the unit tests incl coverage
yarn test:dev         # run the unit tests in watch mode
yarn lint             # run eslint and tslint on this project
yarn doc              # generate typedoc documentation
```

When installing this module, it adds a pre-commit hook, that runs lint and prettier commands
before committing, so you can be sure that everything checks out.

## Contribute

View [CONTRIBUTING.md](./CONTRIBUTING.md)


## Authors

View [AUTHORS.md](./AUTHORS.md)


## LICENSE

[MIT](./LICENSE) © MediaMonks
