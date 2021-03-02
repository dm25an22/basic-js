const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members.map(it => {
    if (typeof it === "string") {
      return it.trim()[0].toUpperCase();
    }
  }).sort().join("")
};
