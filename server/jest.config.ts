import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.*\\.(ts|tsx)$": "ts-jest",
  },
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  setupFiles: ["<rootDir>/src/test/dotenv-config.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
};

export default config;
