//Business Logic
function Player(name,score,total){
  this.name = name;
  this.score = score;
  this.total = total;
}
//Player.prototype.start = function(){
  //return (this.name)//**
//}
Player.prototype.roll = function(){
return Math.floor((Math.random()*6)+1);
}
Player.prototype.hold = function (){
	alert("it's your opponent's turn");
  return totalScore + 0
}

//UI Logic
$(document).ready(function(){
	//$("button#start1").submit(function(event){
    //event.PreventDefault();
    $("button#p1roll").click(function(){
    function player1() {
      document.getElementbyId("p1roll").disabled = false;
      document.getElementbyId("p2roll").disabled = true;
    });
    $("button#p1roll").click(function(){
    function player2() {
      document.getElementbyId("p1roll").disabled = true;
      document.getElementbyId("p2roll").disabled = false;
    });
    var totalScore = Math.floor((Math.random()*6)+1);
    $("#scoreboard").text(" " + Player.roll)
  //});
});
