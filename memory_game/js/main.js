console.log("Up and running!");
console.log("user flipped" + cardone);
console.log("user flipped" + cardtwo);

var cards = ["queen", "queen", "king", "king"]
var cardsinplay = [];

var cardone = cards[0];
cardsinplay.push("queen");
console.log("user flipped queen");

var cardtwo = cards[3];
cardsinplay.push("king");
console.log("user flipped king");

if (cardsinplay.length === 2) {
  if (cardsinplay[0] === cardsinplay[1]) {
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again.")
  }
}
