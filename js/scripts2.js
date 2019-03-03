//Business Logic
function Player(name,turn){
  this.name = name;
  this.turn= turn;
  this.score = 0;
  this.totalRoll = 0;
}
Player.prototype.roll = function(){
  var rotate = Math.floor((Math.random()*7)+1);
  this.score = rotate;
}
Player.prototype.switch =  function(){
    if(this.turn == true){
      this.turn = false;
    } else{
      this.turn = true;
    }
}
Player.prototype.reset = function(){
  this.score = 0;
  this.totalRoll = 0;
}

//UI Logic
$(document).ready(function(){
  $("form#playerNames").submit(function(event){
    event.PreventDefault();
    var player1 = $("#p1").val();
    var player2 = $("#p2").val();
    $("input#p1").val();
    $("input#p1").val();
    playerOne = new Player(player1,true);
    playerTwo = new Player(player2,false);
    $("#p1Name").html(playerOne.name);
    $("#p2Name").html(playerTwo.name);
    });
    $("button#roll")click(function(){
      if(playerOne.turn == true) {
        if(playerOne.totalRoll >= 100){
          alert(playerOne.name + "," + "you won the game!");
          playerOne.reset();
        }else{
          playerOne.roll();
          $("scoreboard".html("" + playerOne.score);
          if(playerOne.score ==1){
            playerOne.totalRoll = 0;
            $("#overall").html(playerOne.totalRoll);
            playerOne.switch();
            playerTwo.switch();
          } else{
            playerOne.totalRoll += playerOne.score;
            $("#overall").html(playerOne.totalRoll);
          }
        }
      }
        else{
          if(playerTwo.totalRoll >=100){
            alert(playerTwo.name + "," + "you won the game!");
            playerTwo.reset();
          }else{
            playerTwo.roll();
            $("#scoreboard2").html(""n + playerTwo.score);
          }
        }
    });
});
