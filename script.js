//first-class-increase
document
  .getElementById("first-class-increase")
  .addEventListener("click", function () {
    ticketClass("first-class", true);
  });
//first class decrease
document
  .getElementById("first-class-decrease")
  .addEventListener("click", function () {
    ticketClass("first-class", false);
  });
//Economy class increase
document
  .getElementById("economy-class-increase")
  .addEventListener("click", function () {
    ticketClass("economy-class", true);
  });
//Economy class decrease
document
  .getElementById("economy-class-decrease")
  .addEventListener("click", function () {
    ticketClass("economy-class", false);
  });
//First class and economy common function
function ticketClass(Class, isIncrease) {
  let ticketInput = document.getElementById(Class);
  let ticketCount = parseInt(ticketInput.value);
  let ticketNewCount = ticketCount;
  if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isIncrease == false) {
    if (ticketNewCount <= 0) {
      alert("Ticket's can never be negative");
    } else {
      ticketNewCount = ticketCount - 1;
    }
  }
  ticketInput.value = ticketNewCount;
  total();
}
//Total price
function total() {
  let firstInput = document.getElementById("first-class");
  let firstCount = parseInt(firstInput.value);
  let economyInput = document.getElementById("economy-class");
  let economyCount = parseInt(economyInput.value);
  let subTotal = firstCount * 150 + economyCount * 100;
  document.getElementById("sub-total").innerText = subTotal;
  let vat = subTotal * 0.1;
  document.getElementById("tax").innerText = vat;
  let total = vat + subTotal;
  document.getElementById("total").innerText = total;
  inputCall();
}
//buy now button function
document.getElementById("booking").addEventListener("click", function () {
  //step 01
  //input call to show the amount of first class ticket
  let firstInputTicket = document.getElementById("first-class");
  let firstCount = parseInt(firstInputTicket.value);
  //step 02
  //input  call to show the amount of economy ticket
  let economyInputTicket = document.getElementById("economy-class");
  let economyCount = parseInt(economyInputTicket.value);
  //step 03
  //if click buy now button before buy any ticket
  if (firstCount < 1 && economyCount < 1) {
    alert("Sorry sir,You didn't buy any ticket");
  } else {
    document.getElementById("first-class-ticket").innerText = firstCount;
    document.getElementById("economy-ticket").innerText = economyCount;

    let form = document.getElementById("booking-form");
    form.style.display = "none";
    let after = document.getElementById("after-buy");
    after.style.display = "block";
    document.getElementById("main-content").style.marginTop = "5rem";
  }
});
