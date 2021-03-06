
module.exports = {
  testURL: 'http://localhost',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "__tests__\/.*\.(test|spec)\.ts$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '@root/(.*)$': '<rootDir>/$1'
  }
};
