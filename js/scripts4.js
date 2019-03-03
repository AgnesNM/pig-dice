//Business Logic
function Player(name,score,total){
  this.name = name;
  this.score = score;
  this.total = total;
}
Player.prototype.start = function(){
  return (this.name)//**
}
Player.prototype.roll = function(){
return Math.floor((Math.random()*6)+1);
}
Player.prototype.hold = function (){
	alert("it's your opponent's turn");
  return totalScore + 0
}

//UI Logic
$(document).ready(function(){
	$("button#start1").submit(function(event){
    event.PreventDefault();
    $("button#roll1").click(function(){
    function player1() {
      document.getElementbyId("roll1").disabled = false;
      document.getElementbyId("roll2").disabled = true;
    }
    function player2() {
      document.getElementbyId("roll1").disabled = true;
      document.getElementbyId("roll2").disabled = false;
    }
    var totalScore = Math.floor((Math.random()*6)+1);
    $("#scoreboard").text(" " + Player.roll)
  });
});
