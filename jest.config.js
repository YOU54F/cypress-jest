

module.exports = {
  projects: [
    {
      displayName: 'cypress',
      runner: './index.js',
      testMatch: ['<rootDir>/**/cypress/integration/**/*.js'],      
    },
    {
      displayName: 'test' // Unit Tests with jest
    },
    
  ]
}