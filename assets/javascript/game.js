// Beginning of the game



// Creates a random number between 19-120 and displays this number to the player.

var ranNum = Math.floor(Math.random() * 101) + 19;
$("#ran-num").text(ranNum);

// The winning and losing varaibles and displaying these initial numbers.

var wins = 0;
$("#wins").text(wins);

var losses = 0;
$("#losses").text(losses);
    
// The crystals' number value between 1-12.

var crys1 = Math.floor(Math.random() * 11) + 1;
var crys2 = Math.floor(Math.random() * 11) + 1;
var crys3 = Math.floor(Math.random() * 11) + 1;
var crys4 = Math.floor(Math.random() * 11) + 1;

// The user's total initial points guessed is displayed.

var points = 0;
$("#points").text(points);

// This function resets the game.

function reset() {
     ranNum = Math.floor(Math.random() * 101) + 19;
    $("#ran-num").text(ranNum);
        
     crys1 = Math.floor(Math.random() * 11) + 1;
     crys2 = Math.floor(Math.random() * 11) + 1;
     crys3 = Math.floor(Math.random() * 11) + 1;
     crys4 = Math.floor(Math.random() * 11) + 1;

     points = 0;
     $("#points").text(points);
}

// This function runs when the user wins.

function victory() {
    alert("YOU WON")
    wins++;
    $("#wins").text(wins);
    reset();
}

// This last one runs when the user losses.

function defeat() {
    alert("YOU LOST")
    losses++;
    $("#losses").text(losses);
    reset();
}

//Click events for the jewels

$('#emerald').on ('click', function(){
    points = points + crys1 ;
    $('#points').text(points); 
        if (points == ranNum){
          victory();
        }
        else if ( points > ranNum){
          defeat();
        }   
})  

$('#diamond').on ('click', function(){
    points = points + crys2;
    $('#points').text(points); 
        if (points == ranNum){
         victory();
        }
        else if ( points > ranNum){
          defeat();
        } 
})  

$('#ruby').on ('click', function(){
    points = points + crys3;
    $('#points').text(points);
          if (points == ranNum){
         victory();
        }
        else if ( points > ranNum){
          defeat();
        } 
})

$('#sapphire').on ('click', function(){
    points = points + crys4;
    $('#points').text(points); 
      
          if (points == ranNum){
         victory();
        }
        else if ( points > ranNum){
          defeat();
        }
})  

