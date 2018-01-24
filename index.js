// Flatiron: Online Shopping Lab

var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  cart.push({[item]: Math.floor(Math.random()*100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  // write your code here
  var wholeSentence = "In your cart, you have ";
  if(!cart.length) {
    return console.log("Your shopping cart is empty.");
  } else if(cart.length === 1) {       // 1 item cart
      wholeSentence += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
  } else if(cart.length === 2) {     // 2 item cart
      wholeSentence += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`;
  } else { 
    for( var i = 0; i<cart.length; i++ ) {
      var filler;
      if(i === cart.length - 2) {
        filler = ", and ";
      } else if( i === cart.length - 1) {
        filler = ".";
      } else {
        filler = ", ";
      }
    wholeSentence += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` + filler;
    }
  }
  return console.log(wholeSentence);
}

function total() {
 // write your code here
 var sum = 0;
 for( var i = 0; i<cart.length; i++) {
   sum += cart[i][Object.keys(cart[i])];
 }
 return sum;
}

function removeFromCart(item) {
  // write your code here
  for( var i = 0; i<cart.length; i++ ) {
    if(cart[i].hasOwnProperty(item)) {
      cart = [...cart.slice(0, i), ...cart.slice( i+1 )];
      return cart;
    }
  }
  return console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    return console.log("Sorry, we don't have a credit card on file for you.");
  }
  console.log(`Your total cost is $${total()}, which will be billed to the card ${cardNumber}`);
  cart[];
}
