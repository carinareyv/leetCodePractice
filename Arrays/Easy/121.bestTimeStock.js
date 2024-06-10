var maxProfit = function (prices) {
  var buy = prices[0];
  var max = 0;
  var priceDiff = 0;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else {
      priceDiff = prices[i] - buy;
      max = Math.max(priceDiff, max);
    }
  }
  return max;
};
