const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor(isReverse = true) {
    this.isReverse = isReverse;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }

  _checkParam(string, key) {
    if (!string || !key) throw new Error();
  }

  _getSpacesIndexs(string) {
    return [...string].reduce((acc, curr, i) => (curr === " " ? [...acc, i] : acc), []);
  }

  _getStringWhitoutSpace(string) {
    return [...string.toLowerCase().replace(/\s/g, "")];
  }

  _getCurrentKeyChar(key, i) {
    return (key[i] ? key[i] : key[(i + key.length) % key.length]).toLowerCase();
  }

  encrypt(string, key) {
    this._checkParam(string, key);
    const spaceIndexs = this._getSpacesIndexs(string);
    const stringArr = this._getStringWhitoutSpace(string);

    const encryptArr = stringArr.map((it, i) => {
      if (!/[a-z]/i.test(it)) return it;
      const sum = this.alphabet.indexOf(it) + this.alphabet.indexOf(this._getCurrentKeyChar(key, i));
      return this.alphabet[sum >= 26 ? sum - 26 : sum];
    });

    spaceIndexs.forEach((it) => encryptArr.splice(it, 0, " "));
    if (!this.isReverse) encryptArr.reverse();

    return encryptArr.join("").toLocaleUpperCase();
  }

  decrypt(string, key) {
    this._checkParam(string, key);
    const spaceIndexs = this._getSpacesIndexs(string);
    const stringArr = this._getStringWhitoutSpace(string);

    const decryptArr = stringArr.map((it, i) => {
      if (!/[a-z]/i.test(it)) return it;
      const diff = this.alphabet.indexOf(it) - this.alphabet.indexOf(this._getCurrentKeyChar(key, i));
      return this.alphabet[diff < 0 ? diff + 26 : diff];
    });

    spaceIndexs.forEach((it) => decryptArr.splice(it, 0, " "));

    if (!this.isReverse) decryptArr.reverse();
    return decryptArr.join("").toLocaleUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
