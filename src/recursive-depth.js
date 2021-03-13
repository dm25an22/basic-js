const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth = (arr) => {
    if (Array.isArray(arr)) {
      return 1 + Math.max(...arr.map(it => {
        if (it.length === 0) it.push("fill empty arr");
        return this.calculateDepth(it);
      }));
    }
    return 0;
  }
};
