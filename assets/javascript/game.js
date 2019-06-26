var wins = 0; 
var losses = 0;
var targetScore = 0;
//-------------------------------------
var blueJewel = $("#blue-jewel") .val(randomNumber(1,12));
var redJewel = $("#red-jewel") .val(randomNumber(1,12));
var greenJewel = $("#green-jewel") .val(randomNumber(1,12));
var yellowJewel = $("#yellow-jewel") .val(randomNumber(1,12));
//-------------------------------------
var numberValue = randomNumber(19, 120);
var comupterScore = $(".random-number").html(numberValue);
//-------------------------------------------------------
function randomNumber(x,y){
    gameNumber = Math.floor(Math.random() * (y-x+1)+x);
    return gameNumber;
    
}
console.log(gameNumber);
//-----------------------------------------------------
function reset(){
    blueJewel  = $("#blue-jewel") .val(randomNumber(1,12));
    redJewel = $("#red-jewel") .val(randomNumber(1,12));
    greenJewel = $("#green-jewel") .val(randomNumber(1,12));
    yellowJewel  = $("#yellow-jewel") .val(randomNumber(1,12));
    numberValue  = randomNumber(19, 120);
    comupterScore = $(".random-number").html(numberValue);
    targetScore = 0;
    $(".total-score").html(targetScore);

}
//-----------------------------------------------------
function win(){
    wins++;
    $(".wins").html("<h2>Wins : </h2>" + wins);
    reset();

};

function lose(){
    losses++;
    $(".losses").html("<h2>Losses : </h2>" + losses);
    reset();
};
//------------------------------------------------------
$(".jewel").on("click", function(){
jewelNumber = this.value;
targetScore += parseInt(jewelNumber);
$(".total-score").html(targetScore);
if (targetScore > numberValue){
    lose();
}

else if(targetScore === numberValue){
    win();
}


});