var isSubsequence = function (s, t) {
    var res = false;
    var j = 0;
    var i = 0;
    if (s.length > t.length) {
        res = false;
    }

    if (s.length == 0) {
        res = true;
    }
    while (j < t.length) {
    
        if (t[j] == s[i]) {
            j++
            i++

        } else {
            j++;
        }
        if (j == t.length && i == s.length) {
            res = true
        } else {
            res = false
        }
    }

    return res;


};