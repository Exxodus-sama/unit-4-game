// Beginning of the game

$("document").ready(function(){

    // Creates a random number between 18-120 and displays this number to the player.

    var ranNum = Math.floor(Math.random() * 102) + 18;
    $("#ran-num").text(ranNum);

    // The winning and losing varaibles and displaying these numbers

    var wins = 0;
    $("#wins").text(wins);

    var losses = 0;
    $("#losses").text(losses);
    
    // The crystals' number value between 1-12

    var crys1 = Math.floor(Math.random() * 11) + 1;
    var crys2 = Math.floor(Math.random() * 11) + 1;
    var crys3 = Math.floor(Math.random() * 11) + 1;
    var crys4 = Math.floor(Math.random() * 11) + 1;

    // The user's total points guessed is displayed

    var points = 0;
    $("#points").text(points);

    // 

})