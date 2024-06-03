var wordPattern = function (pattern, s) {
  var words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }

  var patternHash = new Map();
  var stringHash = new Map();
  for (var i = 0; i < pattern.length; i++) {
    if (
      (patternHash.has(pattern[i]) &&
        patternHash.get(pattern[i]) !== words[i]) ||
      (stringHash.has(words[i]) && stringHash.get(words[i]) !== pattern[i])
    ) {
      return false;
    }
    patternHash.set(pattern[i], words[i]);
    stringHash.set(words[i], pattern[i]);
  }

  return true;
};
