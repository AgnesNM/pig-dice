//Business Logic
//Player Object constructor
function Player(name) {
  // this.firstName = first;
  // this.lastName = last;
  // this.score = [];
}
//Methods attached to Player
// Player.prototype.name = function () {
//   return this.firstName + " " + this.lastName;
// }
Player.prototype.roll = function(){
  return Math.floor((Math.random()*6)+1);
}
Player.prototype.hold = function (){
	alert("it's your opponent's turn");
  return totalScore + 0
}
//UI Logic
$(document).ready(function(){
	$("form#p1Details").submit(function(event){
	event.PreventDefault();
  var p1FirstNameInput=$("input#p1FName").val();
  var p1LastNameInput=$("input#p1LName").val();
  var Player1=new Player(p1FirstNameInput,p1LastNameInput);

  $("h1#player1").append(newPlayer.prototype.name);

  $("button#p1Info").last().click(function(){
    $("h1#player1").text(newPlayer.prototype.name());
    $("p#p1FN").text(newPlayer.firstName);
    $("p#p1LN").text(newPlayer.lastName);
  });
    $("input#p1FName").val("");
    $("input#p1LName").val("");
  });
  $("form#p2Details").submit(function(event){
	   event.PreventDefault();
     var p2FirstNameInput=$("input#p2FName").val();
     var p2LastNameInput=$("input#p2LName").val();
     var Player2=new Player(p2FirstNameInput,p2LastNameInput);

  $("h2#player2").append(newPlayer.prototype.name);

  $("button#p2Info").last().click(function(){
    $("h2#player2").text(newPlayer.name());
    $("p#p2FN").text(newPlayer.firstName);
    $("p#p2LN").text(newPlayer.lastName);
    });
    $("input#p2FName").val("");
    $("input#p2LName").val("");
  });
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
      rollScore=turn;
      player2();
    }
    totalScore += (Math.floor((Math.random()*6)+1));
  $("p#p1Roll").text("Your score is " + turn);
  $("p#p1RollScore").text("Your total score is " + totalScore);
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
