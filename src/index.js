// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var result = {};
  var options = [
    {
      symbol: "H",
      cents: 50
    },
    {
      symbol: "Q",
      cents: 25
    },
    {
      symbol: "D",
      cents: 10
    },
    {
      symbol: "N",
      cents: 5
    },
    {
      symbol: "P",
      cents: 1
    }
  ];

  if (currency <= 0) {
    return {};
  }

  if (currency >= 10000) {
    return {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  }

  for (var i = 0; i < options.length; i++) {
    if (currency === 0) break;

    var cents = options[i].cents;
    var symbol = options[i].symbol;
    var coins = Math.floor(currency / cents);

    if (coins === 0) continue;

    result[symbol] = coins;
    currency = currency % cents;
  }

  return result;
};
