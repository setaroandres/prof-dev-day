module.exports = {
    rootDir: "./src",
    preset: "ts-jest",
    testEnvironment: "jsdom",
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    setupFilesAfterEnv: ["<rootDir>/config/tests/setupTests.ts"],
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    moduleDirectories: ["node_modules", "./src"],
    moduleNameMapper: {
      "\\.(css)$": "identity-obj-proxy",
    },
  };