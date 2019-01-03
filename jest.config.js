module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    'electron-util': '<rootDir>/__mocks__/electron-util.js',
    config$: '<rootDir>/__mocks__/config.js'
  },
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules', 'app/node_modules'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  setupFiles: ['./internals/scripts/CheckBuiltsExist.js'],
  testRegex: '(/__tests__/.*)\\.jsx?$',
  collectCoverage: true,
  coverageReporters: ['json', 'html']
};
