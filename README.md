# next-git-branch
> Git branch.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-git-branch
```

## usage
```js
import '@feizheng/next-git-branch';

nx.gitBranch()

/*
{
  current: 'feature/page-relad',
  all: [
    'develop',
    'feature/addContent',
    'feature/page-relad',
    'staging',
    'origin/beta',
    'origin/develop',
    'origin/feature/addContent',
    'origin/feature/contentLibrary',
    'origin/feature/independentBiz',
    'origin/feature/page-reload',
    'origin/feature/pptPreview',
    'origin/master',
    'origin/staging'
  ],
  locals: [ 'develop', 'feature/addContent', 'feature/page-relad', 'staging' ],
  remotes: [
    'beta',
    'develop',
    'feature/addContent',
    'feature/contentLibrary',
    'feature/independentBiz',
    'feature/page-reload',
    'feature/pptPreview',
    'master',
    'staging'
  ]
}
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-git-branch/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-git-branch
[version-url]: https://npmjs.org/package/@feizheng/next-git-branch

[license-image]: https://img.shields.io/npm/l/@feizheng/next-git-branch
[license-url]: https://github.com/afeiship/next-git-branch/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-git-branch
[size-url]: https://github.com/afeiship/next-git-branch/blob/master/dist/next-git-branch.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-git-branch
[download-url]: https://www.npmjs.com/package/@feizheng/next-git-branch
