const {pass, fail} = require('create-jest-runner')
const cypressPath = require("./helpers/getLocalCypressFile")();
const CypressController = require("./helpers/cypressController");
const CypressNpmApi = require("cypress")

module.exports = async ({
  testPath,
  config: { rootDir = process.cwd(), ...options }
}) => {
  const start = +new Date();

  const results = await CypressNpmApi.run({
    spec: testPath,
    verbose:false,
    rootDir: process.cwd(),
    reporter:'',
    record: true,
  }).then(results => {
    return results;
  })
  const end = +new Date();

  if(results.totalFailed === 0){
    return pass({ start, end, test: { path: testPath}}); 
  }
  else if (results.runs[0].tests[0].error){
    const runError = results.runs[0].tests[0].error
    return fail({
      start,
      end,
      test: { path: testPath, runError, title: 'Error occurred' },
    });
  } 
};
