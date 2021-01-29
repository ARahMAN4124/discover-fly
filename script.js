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
//First class common function
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
}
