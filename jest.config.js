module.exports = {
  rootDir: "./",
  testPathIgnorePatterns: ["node_modules"],
  projects: [
    {
      displayName: "Development",
      testMatch: ["<rootDir>/development/**/*.test.js"],
    },
    {
      displayName: "Infra",
      testMatch: ["<rootDir>/infra/**/*.test.js"],
    },
  ],
  setupFiles: ["dotenv/config"],
};
