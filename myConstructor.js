



function myStocks(name, price, change, marketCap){
    this.name = name;
    this.price = price;
    this.change = change;
    this.marketCap = marketCap;
}

var AMZN = new myStocks('Amazon', 1000, 15, 800);
var MSTF = new myStocks('Microsoft', 2000, 30, 900);

var myStockList = [AMZN, MSTF];


/*
console.log(myStockList.AMZN);
console.log(myStockList.MSTF);
*/

function prices(stock){
   for (var i = 0; i < myStockList.length; i++){
   console.log(stock.name, stock.price);
    return stock.price;
   }
}

prices(AMZN);
prices(MSTF);

//for(stocks in myStockList)