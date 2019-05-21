/* eslint-env jest */

const td = require("testdouble");
require("testdouble-jest")(td, jest);

const getContext = () => {
  const { spawn } = td.replace("child_process", {
    spawn: td.func()
  });
  const CypressController = require("./cypressController");
  return { CypressController, spawn };
};

test("it can be constructed", () => {
  const { CypressController } = getContext();

  expect(() => {
    new CypressController({});
  }).toThrowErrorMatchingSnapshot();

  const instance = new CypressController({ binaryPath: "./foo run" });
  expect(instance.cypressBinaryPath).toBe("./foo run");
});

test("an instance can start a cypress instance", () => {
  const { CypressController, spawn } = getContext();

  const instance = new CypressController({
    binaryPath: "./node_modules/.bin/cypress run"
  });
  instance.start("./my/test/case.js");

  // TODO: find out what should be returned / put out
  td.verify(spawn("./node_modules/.bin/cypress run", ["-s", "./my/test/case.js"]));
});
// test(
//   "an instance calling start multiple times does not result in parallel cypress runs"
// );
