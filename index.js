function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}

var blt = new Sandwich ('white', '[bacon, lettuce, tomato]', 'rectangle')

var pbj = {
  bread: 'white',
  ingredients: '[PB, jelly]',
  cut: 'square',
  name: 'Peanut Butter & Jelly',
  serve: function() {
    console.log(`I'm enjoying my ${this.name} sandwich!`)
  }
}

function serve() {
  if(arguments.length > 0) {
    var customers = Array.prototype.slice.call(arguments)
    last = customers.pop()
    console.log(this.name + ' for ' + customers.join(', ') + ' and ' + last + '. Enjoy')
  }
  else {
    console.log(this.name + '. Order up!')
  }
}

function describe() {
  console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!")
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese")
var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam")

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number" + this.tableNumber)
}

function Customer(name, tableNumber) {
  this.name = name
  this.tableNumber = tableNumber
}
