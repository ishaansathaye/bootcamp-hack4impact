let prices = [5.00, 8.00, 12.00, 1.15, 15.00, 4.00]
prices.map(x => x*0.8 == x < 10)
console.log(prices)

return prices
    .map(price => price < 10 ? price*0.8 == price)
    .filter(price => price >= 2);