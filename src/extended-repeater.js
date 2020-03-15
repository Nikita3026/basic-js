module.exports = function repeater(str, options) {
    let separator, repeatTimes, addition, additionRepeatTimes, additionSeparator;
    let string;
    if (str === null) str = "null";
    if (typeof str != "string") str.toString();
    if (options.separator === undefined) separator = "+";
    else separator = options.separator;
    if (options.additionSeparator === undefined) additionSeparator = "";
    else additionSeparator = options.additionSeparator;
    if (options.repeatTimes === undefined) repeatTimes = 1;
    else repeatTimes = options.repeatTimes;
    if (options.additionRepeatTimes === undefined) additionRepeatTimes = 1;
    else additionRepeatTimes = options.additionRepeatTimes;
    if (options.addition === undefined) addition = "";
    else addition = options.addition;
    string = str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition + separator;
    string = string.repeat(repeatTimes - 1) + str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
    return string;
};