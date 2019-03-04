//Business Logic
//Player Object constructor
function Player(score) {
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
  var player1 = new Player();
  score=0;
  var playerOneArray=[]

  function add(){
    for(var i=0;i>=0;i++){
    playerOne=player1.roll();
    playerOneArray.push(playerOne);
    score+=playerOne;
    alert(score);
  }
  }
  add();

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
    var holdScore = Player.hold
      alert(rollScore);
      rollScore=0;
      if(totalScore>=100){
      alert("You are the winner!")
      }else{
      player2();
      }
  function player2() {
        document.getElementbyId("p1roll").disabled = true;
        document.getElementbyId("p2roll").disabled = false;
  }
    var rollScore =0;
    var totalScore=0;
    var turn = Math.floor((Math.random()*6)+1);;
      if (turn !== 1) {
      rollScore+=turn;
      }else{
      rollScore=0;
    player1();
  }
  $("p#p2RollScore").text("Your score is " + turn);
  $("p#scoreboard2").text("Your total score is " + totalScore);
});

  $("button#p2hold").click(function(){
  var holdScore = Player.hold
    alert(rollScore);
    rollScore=0;
    if(totalScore>=100){
    alert("You are the winner!")
    }else{
    player1();
    }
  });
});
//clean
