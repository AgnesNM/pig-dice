//Business Logic
//Player Object constructor
function Player(name) {
  this.score=score;
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
	$("button#p1roll").click(function(){
    function player1() {
    document.getElementbyId("p1roll").disabled = false;
    document.getElementbyId("p2roll").disabled = true;
  }
  function player2() {
    document.getElementbyId("p1roll").disabled = true;
    document.getElementbyId("p2roll").disabled = false;
  }
    var rollScore =0;
    var totalScore=0;
    var turn = Player.prototype.roll;
      if (turn !== 1) {
      rollScore+=turn;
      }else{
      rollScore=0;
      player2();
    }

  $("p#p1RollScore").text("Your score is " + turn);
  $("p#scoreboard1").text("Your total score is " + totalScore);
  });

    $("button#p1hold").click(function(){
      var holdScore = Player.prototype.hold
      alert(rollScore);
      rollScore=0;
      if(totalScore===100){
      alert("You are the winner!")
      }else{
      player2();
      }
    var rollScore =0;
    var totalScore=0;
    var turn = Player.prototype.roll;
      if (turn !== 1) {
        rollScore+=turn;
      }else{
        rollScore=turn;
        player1();
      }
      totalScore += (Math.floor((Math.random()*6)+1));
    $("p#p2Roll").text("Your score is " + turn);
    $("p#p2RollScore").text("Your total score is " + totalScore);
    });
      $("button#p2hold").click(function(){
        totalScore+=rollScore;
        alert(rollScore);
        rollScore=0;
        if(totalScore===100){
        alert("You are the winner!")
        }else{
        player1();
        }
  });
});
//clean
