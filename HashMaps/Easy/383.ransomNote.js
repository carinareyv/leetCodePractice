var canConstruct = function (ransomNote, magazine) {


    if (ransomNote.length > magazine.length) {
        return false;
    }

    var magMap = new Map();
    for (var i = 0; i < magazine.length; i++) {
        if (magMap.has(magazine[i])) {
            magMap.set(magazine[i], magMap.get(magazine[i]) + 1);
        } else {
            magMap.set(magazine[i], 1)
        }
    }

    for (var i = 0; i < ransomNote.length; i++) {
        if (magMap.has(ransomNote[i]) && magMap.get(ransomNote[i]) > 0) {
            magMap.set(ransomNote[i], magMap.get(ransomNote[i]) - 1);
        } else {
            return false;
        }
    }

    return true;
};