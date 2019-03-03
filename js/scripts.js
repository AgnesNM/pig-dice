//Business Logic
//Player Object Constructor
function Player(name){
  this.name = name;
}
//Player Object Prototype
Player.prototype.playerDetails = function(){
  return this.name + " " ;
}
//Dice Object Prototype
function Dice(pips,color){
  this.pips = pips;
  this.color = color;
}
//Dice Object Prototype
Dice.prototype.roll = function() {
return Math.floor((Math.random()*7)+1);
}
//UI Logic
$(document).ready(function(){
  $("button#user").submit(function(event){
    event.preventDefault();
    var player1 = $("input#p-name").val();
    var newPlayer = new Player(player1);
    $("ol#p-details").append("<li><span> class='info'>" + newPlayer.name + "</span></li>");
    $("input#p-name").val("").text("input#p-name");
  });

});
//clean
