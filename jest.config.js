module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./test-reports",
        outputName: "junit.xml",
      },
    ],
  ],
};
