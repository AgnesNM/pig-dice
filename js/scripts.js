//Business Logic
function Player(name,age){
  this.name = name;
  this.age = age;
  //this.experience = [];
}
function Dice(pips,color){
  this.pips = pips;
  this.color = color;
}
Dice.prototype.roll() = function(){
  return [0,1,2,3,4,5,6]
}
//method= rolling
//ClassName.prototype.methodName = function () {
// find()
//UI Logic
$()
