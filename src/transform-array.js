module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error;
    if (arr === undefined) throw Error;
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "--discard-next") i++;
        else if (arr[i] == "--discard-prev") temp.pop();
        else if (arr[i] == "--double-next") {
            if (i + 1 < arr.length) temp.push(arr[i + 1]);
        } else if (arr[i] == "--double-prev") {
            if (i - 1 >= 0) temp.push(arr[i - 1]);
        } else temp.push(arr[i]);
    }
    return temp;
}