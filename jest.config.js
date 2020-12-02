module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  verbose: true,
  moduleFileExtensions: ["js", "ts", "tsx", "json", "node"],
  testPathIgnorePatterns: [
    "<rootDir>/.cache/",
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
  ],
  collectCoverage: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": "jest-svg-transformer",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testMatch: ["<rootDir>/**/*.(spec|test).{js,jsx,ts,tsx}"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
