

module.exports = {
  projects: [
    {
      displayName: 'cypress',
      runner: 'jest-runner-cypress',
      testMatch: ['<rootDir>/**/cypress/integration/**/*.js'],      
    },
    {
      displayName: 'test' // Unit Tests with jest
    },
    
  ]
}