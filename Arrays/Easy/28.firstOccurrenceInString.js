var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) {
    return -1;
  }
  var needleSub = 0;
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      var needleSubstring = haystack.substring(i, i + needle.length);
      if (needleSubstring == needle) return i;
    }
  }
  return -1;
};
