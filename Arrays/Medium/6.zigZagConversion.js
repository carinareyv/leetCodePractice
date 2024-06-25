var convert = function (s, numRows) {


    if (numRows == 1 || s.length < numRows) {
        return s
    }


    let direction = false;
    let arr = new Array(numRows).fill("")
    let count = 0

    for (var i = 0; i < s.length; i++) {
        arr[count] += s[i]
        if (count == 0 || count >= numRows - 1) {
            direction = !direction
        }
        direction ? count++ : count--
    }

    return arr.join("")

};