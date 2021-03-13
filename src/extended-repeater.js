const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes, separator = "+", addition, additionRepeatTimes = 1, additionSeparator = "|" }) {
  const additionStr = String(addition);
  const strStr = String(str);
  function getAddition() {
    return addition !== undefined ? additionStr : "";
  }
  if (repeatTimes === undefined) return `${strStr}${getAddition()}`;
  const result = [];
  for (let i = 0; i < repeatTimes; i++) {
    const add = [];
    for (let k = 0; k < additionRepeatTimes; k++) {
      add.push(getAddition());
    }
    result.push(`${strStr}${add.join(additionSeparator)}`);
  }
  return result.join(separator)
};



