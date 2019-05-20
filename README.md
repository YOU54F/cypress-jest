# cypress-jest

[![Build Status](https://travis-ci.org/you54f/cypress-jest.svg?branch=master)](https://travis-ci.org/you54f/cypress-jest)
[![npm version](https://badge.fury.io/js/cypress-jest.svg)](https://badge.fury.io/js/cypress-jest)
[![CircleCI](https://circleci.com/gh/YOU54F/cypress-jest.svg?style=svg)](https://circleci.com/gh/YOU54F/cypress-jest)

Jest runner for cypress.io

## Usage

Make sure you have standard already installed.

```
npm install --save-dev cypress-jest
```

Your `jest.config.js` should look like this:

```javascript
module.exports = {
  projects: [
    {
      displayName: 'cypress'
      runner: 'cypress-jest',
      testMatch: ['<rootDir>/**/*-cy.js'],
    },
    {
      displayName: 'test' // Unit Tests with jest
    }
  ]
}
```

# Credits

This project is inspired by the work of TheBrainFamily in various projects:

* [jest-runner-cypress](https://github.com/TheBrainFamily/jest-runner-cypress)
* [jest-runner-standard](https://github.com/TheBrainFamily/jest-runner-standard)
* [cypress-jest](https://github.com/DanielMSchmidt/jest-runner-cypress-io)