var myPow = function (x, n) {
    let res;
    if (n === 1) {
        return x
    }
    if (n === 0) {
        return 1
    }
    var abs = Math.abs(n)
    res = powerFunction(x, abs)
    return n < 0 ? 1 / res : res
};

function powerFunction(x, n) {

    if (n === 1) {
        return x
    }
    if (n === 0) {
        return 1
    }
    let nDiv = Math.floor(n / 2)

    let divided = powerFunction(x, nDiv)

    res = divided * divided

    if (n % 2 !== 0) {
        res = divided * divided * x
    }

    return res
}