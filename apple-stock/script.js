let prices = [10, 7, 5, 8, 11, 9, 14];

function stock_profit(prices) {
    let bestProfitSoFar = -Infinity;
    let lowestPriceSoFar = prices[0];
  
    for (let i = 1; i < prices.length; i++) {
      const purchase = lowestPriceSoFar;
      const sale = prices[i];
      const profit = sale - purchase;
  
      lowestPriceSoFar = Math.min(lowestPriceSoFar, sale);
      bestProfitSoFar = Math.max(bestProfitSoFar, profit);

    }
  
    return bestProfitSoFar;
  }

  let x = stock_profit(prices);
console.log (x);




