p1round = [];
p2round=[];

let random = function(){
    let numbers = [1,2,3,4,5,6];
    let number = numbers[Math.floor(Math.random()*numbers.length)];
    return number;
};   

let p1 = function (){
    random();
    console.log(`Player 1 score is ${random()}`);
    p1round.push(random());
};

let p2 = function(){
    random();
    console.log(`Player 2 score is ${random()}`);
    p2round.push(random());
};

let game = function (){
    for(let i=0; i<30;i++){
        p1();
        p2();             
    }
    let finalp1 = p1round.reduce((sum,current) => sum+current,0);
    let finalp2 = p2round.reduce((sum,current) => sum+current,0);
    console.log(finalp1);
    console.log(finalp2);
};

game();

//This works too, it only has backend logic.
//Trying to add event listeners now (rewrite all functions into function expressions). All functions are now function expressions:)
//The for loop problem again. we assumed the rounds would be 99, so we have way high scores, 
//beyond the 100 we could be aimimg at. Reducing the round to <30 gives us more reasonable scores.
//We still haven't figured how to 'hold' and declare the final winner too.
//Achieved steps here:
//- randomly selecting scores for each player and summing them up.
