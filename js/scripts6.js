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
  var p1FirstNameInput=$("input#p1FName").val();
  var p1LastNameInput=$("input#p1LName").val();
  var Player1=new Player(p1FirstNameInput,p1LastNameInput);

  $("h1#player1").append(newPlayer.name);

  $("button#p1info").last().click(function(){
  $("h1#player1").text(newPlayer.name());
  $("input#p1FName").text(newPlayer.firstName);
  $("input#p1LName").text(newPlayer.lastName);
  });
  $("input#p1FName").val("");
  $("input#p1LName").val("");
  });
  $("form#p2Details").submit(function(event){
	event.PreventDefault();
  var p2FirstNameInput=$("input#p2FName").val();
  var p2LastNameInput=$("input#p2LName").val();
  var Player2=new Player(p2FirstNameInput,p2LastNameInput);

  $("h2#player2").append(newPlayer.name);

  $("button#p2Info").last().click(function(){
  $("h2#player2").text(newPlayer.name());
  $("input#p2FName").text(newPlayer.firstName);
  $("input#p2LName").text(newPlayer.lastName);
  });
  $("input#p2FName").val("");
  $("input#p2LName").val("");
  });
});
//clean:)
