//Business Logic
//Player Object constructor
function Player(score, roll,total) {
  this.score = score;
  this.roll = roll;
  this.total = total;
}
//Methods attached to Player
Player.prototype.roll = function(){
  return Math.floor((Math.random()*6)+1);

}
var p1Score = 0
var p1roll = 0
var p2Score = 0
var p2roll = 0

function player2() {
  document.getElementbyId("p1roll").disabled = true;
  document.getElementbyId("p2roll").disabled = false;
}
function player1() {
  document.getElementbyId("p1roll").disabled = false ;
  document.getElementbyId("p2roll").disabled = true;
}

//UI Logic
$(document).ready(function(){
	$("#p1roll").click(function(){

    p1roll=Math.floor((Math.random()*6)+1);
    // $("#p1roll").text(p1roll);
    if(p1roll!=1){
      p1Score+=p1roll
    }else{
      p1Score=0;
      player2();
    }
    $("#p1Score").text(p1Score);
  });
  $("#p2roll").click(function(){

    p2roll=Math.floor((Math.random()*6)+1);
    // $("#p1roll").text(p1roll);
    if(p2roll!=1){
      p2Score+=p2roll
    }else{
      p2Score=0;
    }
    $("#p2Score").text(p2Score);
  });
  $("#p2hold").click(function(){
         alert(p2Score);
         if(p2Score==100){
         alert("You are the winner!,game over!")
         }else{
         player1();
         }
 });
  $("#p1hold").click(function(){
      alert(p1Score);
      //p1Score=0;
      if(p1Score==100){
      alert("You are the winner!,game over!")
      }else{
      player2();
    }
});
});
