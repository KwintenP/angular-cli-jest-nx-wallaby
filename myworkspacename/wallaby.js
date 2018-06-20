module.exports = function (wallaby) {
  const path = require('path');
  const ts = require(path.join(wallaby.localProjectDir, 'node_modules/typescript'));
  const jestconfig = require('./package.json').jest;

  var compilerOptions = Object.assign(
    require('./tsconfig.json').compilerOptions,
    require('./tsconfig.spec.json').compilerOptions);

  return {
    files: jestconfig.collectCoverageFrom,
    tests: ['apps/**/*spec.ts', '!apps/**/*e2e-spec.ts'],
    env: {
      type: 'node',
      runner: 'node'
    },
    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },
    testFramework: 'jest',
    debug: true,
    hints: {
      ignoreCoverage: /ignore coverage/
    },
    setup: function (wallaby) {
      var jestConfig = require(wallaby.localProjectDir + '/package.json').jest;
      const pattern = '@myworkspacename/test-lib';
      jestConfig.moduleNameMapper[pattern] = jestConfig.moduleNameMapper[pattern].replace('<rootDir>', wallaby.projectCacheDir);
      console.log('jestCo', jestConfig);
      delete jestConfig.transform; // <--
      wallaby.testFramework.configure(jestConfig);
    }
  };
};
