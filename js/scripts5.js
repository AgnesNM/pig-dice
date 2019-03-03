//Business Logic
//Player object constructor
function Person(name) {
this.firstName = first;
this.lastName = last;
this.score = [];
}
Person.prototype.name = function () {
return this.firstName + " " + this.lastName;
}
//Dice Object constructor
function Dice(pips,color){
  this.pips = pips;
  this.color = color;
}
//Dice Object Prototype
Dice.prototype.roll = function() {
return Math.floor((Math.random()*7)+1);
}
