const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityInt = Number(sampleActivity);
  if (isNaN(sampleActivityInt) || typeof sampleActivity !== "string" || sampleActivityInt <= 0 || sampleActivityInt > 15) return false;
  return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivityInt)) / (0.693 / HALF_LIFE_PERIOD));
};
