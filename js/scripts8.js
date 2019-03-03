//Business Logic
//Player Object constructor
function Player(name) {
  this.firstName = first;
  this.lastName = last;
  this.score = [];
}
//Methods attached to Player
Player.prototype.name = function () {
  return this.firstName + " " + this.lastName;
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
	$("form#p1Details").submit(function(event){
  event.PreventDefault();
  var p1FirstNameInput=$("#p1FName").val();
  var p1LastNameInput=$("#p1LName").val();
  var player1=new Player(p1FirstNameInput,p1LastNameInput);
  $("#p1FName").text(" "  + Player.firstName);
  $("#p1LName").text(" "  + Player.lastName);
  $("#player1").text(Player.prototype.name);


  //$("input#p1FName").val("");
  //$("input#p1LName").val("");
  });
  $("form#p2Details").submit(function(event){
	event.PreventDefault();
  var p2FirstNameInput=$("input#p2FName").val();
  var p2LastNameInput=$("input#p2LName").val();
  var Player2=new Player(p2FirstNameInput,p2LastNameInput);


  $("h2#player2").append(newPlayer.prototype.name);


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
  var turn = Math.floor((Math.random()*6)+1);
  $("p#p1Roll").text("Your score is " + Player.prototype.roll);
    if (turn !== 1) {
    rollScore+=turn;
  }else{
    rollScore=0;
    player2();
  }
  $("p#p1RollScore").text("Your score is " + Player.prototype.roll);
  });
  $("button#p1hold").click(function(){
    totalScore+=rollScore;
    alert(rollScore);
    rollScore=0;
    if(totalrollScore===100){
      alert("You are the winner!")
    }else{
      player2();
    }
    var rollScore =0;
    var totalScore=0;
    var turn = Math.floor((Math.random()*6)+1);
    $("p#p2Roll").text("Your score is " + Player.prototype.roll);
      if (turn !== 1) {
      rollScore+=turn;
    }else{
      rollScore=0;
      player1();
    }
    $("p#p2RollScore").text("Your score is " + Player.prototype.roll);
    });
    $("button#p2hold").click(function(){
      totalScore+=rollScore;
      alert(rollScore);
      rollScore=0;
      if(totalrollScore===100){
        alert("You are the winner!")
      }else{
        player1();
      }
  });
});
//clean
