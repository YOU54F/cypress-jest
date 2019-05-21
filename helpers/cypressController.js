const spawn = require("child_process").spawn;

class CypressController {
  constructor({ binaryPath, options = {} }) {
    if (!binaryPath) {
      throw new Error("CypressController needs an binary path to operate");
    }

    this.cypressBinaryPath = binaryPath;
    this.cypressOptions = options;
    this.currentExecutionPid = null;
  }

  start(testPath) {
    var options = this.cypressOptions
    const child = spawn(this.cypressBinaryPath,options);
  }
}

module.exports = CypressController;
