//Business Logic
function Player(name,number){
  this.name = name;
  this.number = number;
  }
Player.prototype = function(){
  return this.name + "" + this.number;
}
function Dice(pips,color){
  this.pips = pips;
  this.color = color;
}
Dice.prototype.roll = function(){
  return [1,2,3,4,5,6]
}
Dice.prototype.display = function(){
  return Math.floor((Math.random() * 7) + 1);
}
//method= rolling
//ClassName.prototype.methodName = function () {
// find()
//UI Logic
$(document).ready(function(){
  $("button#roll").click(function(){//on clicking the roll button, user score needs to be randomly selected from an array (Math.floor(Math.random() * 10); ). It will be collected as a string.
    var score = Math.floor((Math.random() * 7) + 1);

    //it then needs to be converted to an integer
    var diceRollScore = results[];
    var diceRollRoundScore = results[]*4
    var overallScore = add(index.length);
    var diceRollScore = $(this).find("button#roll").val();

  });
    $("button#hold").click(function(){
      $("button#pass").click(function(){
        $("button#reset").click(function(){

        });
      })
    });

});
