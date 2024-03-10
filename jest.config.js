module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/src/components/$1',

    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/stores/(.*)$': '<rootDir>/src/stores/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};