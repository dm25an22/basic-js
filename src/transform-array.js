const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  const arrClone = [...arr];

  for (let i = 0; i < arrClone.length; i++) {

    switch (arrClone[i]) {
      case controlSequence['discard-next']:

        if (arrClone[i + 1] !== undefined) {
          arrClone.splice(i + 1, 1);
        }
        break;

      case controlSequence['discard-prev']:
        if (arrClone[i - 1] !== undefined) {
          arrClone.splice(i - 1, 1);
        }
        break;

      case controlSequence["double-next"]:
        if (arrClone[i + 1] !== undefined) {
          arrClone.splice(i, 0, arrClone[i + 1]);
          i++;
        }
        break;

      case controlSequence["double-prev"]:
        if (arrClone[i - 1] !== undefined) {
          arrClone.splice(i, 0, arrClone[i - 1]);
          i++;
        }
        break;

      default:
        continue;
    }
  }

  return arrClone.filter(it => {
    if (
        it === controlSequence["double-next"] ||
        it === controlSequence["double-prev"] || 
        it === controlSequence["discard-next"] || 
        it === controlSequence["discard-prev"]
        ) {
      return false;
    }
    return true;
  });
};

const controlSequence = {
  ['discard-next']: '--discard-next',
  ['discard-prev']: '--discard-prev',
  ['double-next']: '--double-next',
  ['double-prev']: '--double-prev',
}
