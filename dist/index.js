/*!
 * name: @jswork/next-git-branch
 * description: Get git branches infomation.
 * homepage: https://github.com/afeiship/next-git-branch
 * version: 1.0.0
 * date: 2020-11-20 10:31:54
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var exec = require('child_process').execSync;
  var REMOTE_HEAD = 'HEAD';
  var REMOTE_BRACH = 'origin/';

  /*
  // @example: raw branches:
  [
    '* develop',
    '  feature/addContent',
    '  staging',
    '  remotes/origin/HEAD -> origin/master',
    '  remotes/origin/beta',
    '  remotes/origin/develop',
    '  remotes/origin/feature/addContent',
    '  remotes/origin/feature/contentLibrary',
    '  remotes/origin/feature/independentBiz',
    '  remotes/origin/feature/pptPreview',
    '  remotes/origin/master',
    '  remotes/origin/staging',
    ''
  ]
  */

  nx.gitBranch = function () {
    var str = exec("git branch -a --format='%(refname:short)'").toString();
    var strCurrent = exec('git symbolic-ref -q --short HEAD').toString();
    var branches = str.split('\n');
    var locals = [];
    var all = [];
    var remotes = [];
    var current = strCurrent.trim();

    branches.map(function (name) {
      if (!name || name.includes(REMOTE_HEAD)) return;
      var isRemote = name.includes(REMOTE_BRACH);
      var sliced = isRemote ? REMOTE_BRACH.length : 0;
      var target = isRemote ? remotes : locals;
      target.push(name.slice(sliced));
      all.push(name);
    });

    return {
      current: current,
      all: all,
      locals: locals,
      remotes: remotes
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.gitBranch;
  }
})();
