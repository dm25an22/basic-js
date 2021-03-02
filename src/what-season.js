const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!date.toLocaleString()) throw new Error();
  const month = date.getMonth() + 1;

  switch (month) {
    case 12:
    case 1:
    case 2:
      return season.winter;

    case 3:
    case 4:
    case 5:
      return season.spring

    case 6:
    case 7:
    case 8:
      return season.summer
    
    default:
      return season.autumn;
  }
};

const season = {
  winter: "winter",
  spring: "spring",
  summer: "summer",
  autumn: "autumn",
}
