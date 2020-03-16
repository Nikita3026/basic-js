class VigenereCipheringMachine {
    constructor(name = true) {
        this.name = name;
        this.stroka = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    encrypt(str, key) {
        let result = "";
        let keyTo = "";
        let counter = 0;
        let temp = 0;
        let keyNumber, strNumber;
        if (str === undefined || key === undefined) throw new Error();
        key = key.toUpperCase();
        str = str.toUpperCase();
        for (let i = 0; i < str.length; i++) {
            keyTo += key[counter];
            counter++;
            if (counter == key.length) counter = 0;
        }
        for (let i = 0; i < str.length; i++) {
            if (str[i] == " " || str[i] == "!" || str[i] == "@" || str[i] == "#" || str[i] == "$" || str[i] == "(" || str[i] == ")" || str[i] == "," || str[i] == "." ||
                str[i] == "/" || str[i] == ":" || str[i] == "|" || str[i] == "*" || str[i] == "-" || str[i] == "&" || str[i] == "^" || str[i] == "%" ||
                str[i] == "0" || str[i] == "1" || str[i] == "2" || str[i] == "3" || str[i] == "4" || str[i] == "5" || str[i] == "6" || str[i] == "7" || str[i] == "8" ||
                str[i] == "9") {
                result += str[i];
                keyTo = keyTo.split("");
                keyTo.splice(i, 0, " ");
                keyTo = keyTo.join("");
            } else {
                keyNumber = this.stroka.indexOf(keyTo[i]);
                strNumber = this.stroka.indexOf(str[i]);
                temp = (keyNumber + strNumber) % 26;
                result += this.stroka[temp];
            }
        }
        if (this.name != true) {
            result = result.split("");
            result.reverse();
            result = result.join("");
            return result;
        }
        return result;
    }

    decrypt(str, key) {
        let result = "";
        let keyTo = "";
        let counter = 0;
        let temp = 0;
        let keyNumber, strNumber;
        key = key.toUpperCase();
        str = str.toUpperCase();
        if (str === undefined || key === undefined) throw new Error();
        for (let i = 0; i < str.length; i++) {
            keyTo += key[counter];
            counter++;
            if (counter == key.length) counter = 0;
        }
        for (let i = 0; i < str.length; i++) {
            if (str[i] == " " || str[i] == "!" || str[i] == "@" || str[i] == "#" || str[i] == "$" || str[i] == "(" || str[i] == ")" || str[i] == "," || str[i] == "." ||
                str[i] == "/" || str[i] == ":" || str[i] == "|" || str[i] == "*" || str[i] == "-" || str[i] == "&" || str[i] == "^" || str[i] == "%" ||
                str[i] == "0" || str[i] == "1" || str[i] == "2" || str[i] == "3" || str[i] == "4" || str[i] == "5" || str[i] == "6" || str[i] == "7" || str[i] == "8" ||
                str[i] == "9") {
                result += str[i];
                keyTo = keyTo.split("");
                keyTo.splice(i, 0, " ");
                keyTo = keyTo.join("");
            } else {
                keyNumber = this.stroka.indexOf(keyTo[i]);
                strNumber = this.stroka.indexOf(str[i]);
                temp = (strNumber - keyNumber + 26) % 26;
                result += this.stroka[temp];
            }
        }
        if (this.name != true) {
            result = result.split("");
            result.reverse();
            result = result.join("");
            return result;
        }
        return result;
    }
}

module.exports = VigenereCipheringMachine;