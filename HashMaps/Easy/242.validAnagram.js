var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  var anaMap = new Map();
  for (var i = 0; i < s.length; i++) {
    anaMap.set(s[i], (anaMap.get(s[i]) || 0) + 1);
  }

  for (var i = 0; i < t.length; i++) {
    if (!anaMap.has(t[i]) || anaMap.get(t[i]) == 0) {
      return false;
    } else {
      anaMap.set(t[i], anaMap.get(t[i]) - 1);
    }
  }

  return true;
};
