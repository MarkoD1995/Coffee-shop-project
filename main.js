const profitMargin = 0.39;
const MIN_ORDER_NUM = 1;
const MAX_ORDER_NUM = 100;

let coffeePrice = 5;
let coffeBalance = 0;
let i = 0;
let balanceReduce = 0; //for every third order, coffee balance will be reduced by $3.72
let bartenderSteal = 0;

<<<<<<< HEAD
var orderList = [];

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const coffeeShopBalanceScreen = document.getElementById("screen");

class Order {
  constructor() {
    this.status = "In order";
    this.numberOfCoffees = randomIntFromInterval(MIN_ORDER_NUM, MAX_ORDER_NUM);
    this.totalPrice = coffeePrice * this.numberOfCoffees;
    this.orderId = orderList.length;
  }
}
=======
const coffeeShopBalanceScreen = document.getElementById("screen");

const MIN_ORDER_NUM = 1;

const MAX_ORDER_NUM = 100;

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",

  currency: "USD",
});

document
  .querySelector(".btn-check")
  .addEventListener("click", function (event) {
    if (orderList.length >= i + 1) {
      if (orderList[i].status == "Unpaid") {
        console.log("");
      } else {
        coffeBalance += orderList[i].totalPrice * profitMargin;

        orderList[i].status = "Completed";

        var sp1 = document.createElement("span");

        var sp1_content = document.createTextNode(orderList[i].status);

        sp1.appendChild(sp1_content);

        console.log(sp1_content);

        var item = document.getElementById(orderList[i].orderId).childNodes[5];

        var parentDiv = item.parentNode;

        parentDiv.replaceChild(sp1, item);

        coffeeShopBalanceScreen.innerText = formatter.format(coffeBalance);
      }

      i++;
    } else {
      return;
    }
  });

document
  .querySelector(".input-screen")
  .addEventListener("change", function (event) {
    if (event.target.value == "") {
      coffeePrice = 5;
    } else {
      let coffeePrice1 = event.target.value.replace(/[^0-9]/g, "");

      if (coffeePrice1 == 0) {
        coffeePrice = 5;
      } else {
        coffeePrice = coffeePrice1;
      }
    }
  });
>>>>>>> 10d9c85130c46dec768de3e0686392b5245d8eed

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

<<<<<<< HEAD
function makeOrder() {
  let order = new Order();
  orderList.push(order);
  balanceReduce++;
  bartenderSteal++;

  if (balanceReduce == 3) {
    coffeBalance -= 3.72;
    balanceReduce = 0;
  }

  if (bartenderSteal == 5) {
    coffeBalance -= order.totalPrice * randomIntFromInterval(10, 30) * 0.01;
    bartenderSteal = 0;
  }
}

function addOrderToList() {
  var ul = document.getElementById("third-row");
  var li = document.createElement("li");
  var currentListElement = orderList[orderList.length - 1];

  li.appendChild(document.createTextNode("Total price is: "));
  li.appendChild(document.createTextNode(currentListElement.totalPrice));
  li.appendChild(
    document.createTextNode(". Number of coffees You have ordered is: ")
  );
  li.appendChild(document.createTextNode(currentListElement.numberOfCoffees));
  li.appendChild(document.createTextNode(". Current status of order is: "));
  li.appendChild(document.createTextNode(currentListElement.status));
  li.setAttribute("id", currentListElement.orderId);
  ul.appendChild(li);
}

document
  .querySelector(".btn-check")
  .addEventListener("click", function (event) {
    //treba izbegavati if-ove ako nije neophodno if orderList==0 return
    if (orderList.length >= i + 1) {
      if (orderList[i].status === "Unpaid") {
        console.log("");
      } else {
        coffeBalance += orderList[i].totalPrice * profitMargin;
        orderList[i].status = "Completed";
        var sp1 = document.createElement("span");
        var sp1_content = document.createTextNode(orderList[i].status);
        sp1.appendChild(sp1_content);
        var item = document.getElementById(orderList[i].orderId).childNodes[5];
        var parentDiv = item.parentNode;
        parentDiv.replaceChild(sp1, item);
        coffeeShopBalanceScreen.innerText = formatter.format(coffeBalance);
      }

      i++;
    } else {
      return;
    }
  });

document
  .querySelector(".input-screen")
  .addEventListener("change", function (event) {
    if (event.target.value === "") {
      coffeePrice = 5;
    } else {
      let coffeePrice1 = event.target.value.replace(/[^0-9]/g, "");

      if (coffeePrice1 == 0) {
        coffeePrice = 5;
      } else {
        coffeePrice = coffeePrice1;
      }
    }
  });

document
  .querySelector(".btn-coffee-order")
  .addEventListener("click", function (event) {
    makeOrder();
    addOrderToList();
  });

=======
class Order {
  constructor() {
    this.status = "In order";

    this.numberOfCoffees = randomIntFromInterval(MIN_ORDER_NUM, MAX_ORDER_NUM); //const umesto 100

    this.totalPrice = coffeePrice * this.numberOfCoffees;

    this.orderId = orderList.length;
  }
}

var orderList = [];

function makeOrder() {
  let order_1 = new Order();

  orderList.push(order_1);

  balanceReduce++;

  bartenderSteal++;

  if (balanceReduce == 3) {
    coffeBalance -= 3.72;

    balanceReduce = 0;
  }

  if (bartenderSteal == 5) {
    coffeBalance -= order_1.totalPrice * randomIntFromInterval(10, 30) * 0.01;

    bartenderSteal = 0;
  }
}

document
  .querySelector(".btn-coffee-order")
  .addEventListener("click", function (event) {
    makeOrder();

    addOrderToList();
  });

function addOrderToList() {
  var ul = document.getElementById("third-row");

  var li = document.createElement("li");

  li.appendChild(document.createTextNode("Total price is: "));

  li.appendChild(
    document.createTextNode(orderList[orderList.length - 1].totalPrice)
  );

  li.appendChild(
    document.createTextNode(". Number of coffees You have ordered is: ")
  );

  li.appendChild(
    document.createTextNode(orderList[orderList.length - 1].numberOfCoffees)
  );

  li.appendChild(document.createTextNode(". Current status of order is: "));

  li.appendChild(
    document.createTextNode(orderList[orderList.length - 1].status)
  );

  li.setAttribute("id", orderList[orderList.length - 1].orderId); //ZASTO NIJE MOGLO ORDERLIST[I]?

  ul.appendChild(li);
}

>>>>>>> 10d9c85130c46dec768de3e0686392b5245d8eed
setInterval(function () {
  if (orderList.length == 0) {
    return;
  } else {
    var x = randomIntFromInterval(0, orderList.length - 1);
<<<<<<< HEAD

    if (orderList[x].status == "In order") {
      orderList[x].status = "Unpaid";
      var sp1 = document.createElement("span");
      var sp1_content = document.createTextNode(orderList[x].status);
      sp1.appendChild(sp1_content);
      var item = document.getElementById(orderList[x].orderId).childNodes[5];
      var parentDiv = item.parentNode;
      parentDiv.replaceChild(sp1, item);
      var priceReduced = orderList[x].totalPrice * 0.61;
      coffeBalance -= priceReduced;
=======

    console.log(x);

    console.log(orderList[x]);

    if (orderList[x].status == "In order") {
      orderList[x].status = "Unpaid";

      var sp1 = document.createElement("span");

      var sp1_content = document.createTextNode(orderList[x].status);

      sp1.appendChild(sp1_content);

      console.log(sp1_content);

      var item = document.getElementById(orderList[x].orderId).childNodes[5]; //ovde je greska neka, ne ulazi u niz.

      console.log(item);

      var parentDiv = item.parentNode;

      parentDiv.replaceChild(sp1, item);

      var priceReduced = orderList[x].totalPrice * 0.61;

      coffeBalance -= priceReduced;

>>>>>>> 10d9c85130c46dec768de3e0686392b5245d8eed
      coffeeShopBalanceScreen.innerText = formatter.format(coffeBalance);
    }
  }
}, 10000);
