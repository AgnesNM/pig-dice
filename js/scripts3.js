//Business Logic
function Player(name){
  this.name = name;
}
Player.prototype.name = function(){
  return this.name + "";
  }
function Dice (pips){
  this.pips = name;
}
Dice.prototype.roll = function(){
  return Math.floor((Math.random()*7)+1);
}
Dice.prototype.hold = function(){

}
Dice.prototype.pass = function(){

}

//UI Logic
$(document).ready(function(){
  $("button#roll").submit(function(event){
    var player1 = new Player(player1,true);
    var player2 = new Player(player2,false);
    event.PreventDefault()
    $("input#p1").val();
    $("input#p1").val();
    $("#p1Name").html(player1.name);
    $("#p2Name").html(player2.name);
    //var rollScore =  Math.floor((Math.random()*7)+1);
  });
});
