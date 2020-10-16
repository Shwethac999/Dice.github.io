/*Game Rules:
-the game has 2 playes ., playing in rounds
-in each turn , a player rolls a dice as many times as he wishes . each result get added to his round
score
-but , if the player rolls a 1, all his round score get lost. after that , it's the next player's turn 
-the player can choose to 'hold', which means that his round score gets added to his GLBAL score . afrer
that , it's the next player's turn
-The first player to reach 100 points on GLOBAL socre wins the game
*/

var scores,roundScore,activePlayer;
var gamePlayer;
init();
var lastDice;

document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlayer===true){

   
   //1.Random Number
   var dice1=Math.floor(Math.random() *6)+1;
   var dice2=Math.floor(Math.random() *6)+1;

   //2.dispaly result
    document.getElementById('dice-1').style.display='block';
    document.getElementById('dice-2').style.display='block';
   
    document.getElementById('dice-1').src='dice-'+dice1+'.png';
    document.getElementById('dice-2').src='dice-'+dice2+'.png';

    if(dice1 !==1 && dice2!==1){
        // add score
              roundScore+=dice1+dice2;
              document.querySelector('#current-' + activePlayer).textContent=roundScore;
            }
            else{
              nextplayer(); 
            }

    // when the curent and last value is 6 he loose game
//     if(dice===6 && lastDice===6){
//         // player looses score
//         scores[activePlayer]=0; 
//         document.querySelector('#score-'+activePlayer).textContent='0';
//         nextplayer();
//     }

//    //update the round score if the rolled was not 1
//    else if(dice!==1){
// // add score
//       roundScore+=dice;
//       document.querySelector('#current-' + activePlayer).textContent=roundScore;
//     }
//     else{
//       nextplayer(); 
//     }
//     lastDice=dice;
   }

});
document.querySelector('.btn-hold').addEventListener('click', function(){
   if(gamePlayer===true){
   // add current score to global score
   scores[activePlayer]+=roundScore;


   //update the UI
  document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
  // check if player won the game
  var input=document.querySelector('.final-score').value;

  // undifined , o, null o '' coereced to flase
  //Anything else is coerced to true
  var winnerScore
  if(input){
    winnerScore =input;
  }
  else{
      winnerScore=100;
  }
  //check if player won the game
  if(scores[activePlayer]>=winnerScore){
      
     document.querySelector('#name-'+ activePlayer).textContent='winner';
     document.getElementById('dice-1').style.display='none';
     document.getElementById('dice-2').style.display='none';
     document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
     document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
     gamePlayer=false;
   }

   else{
      nextplayer();
   }

   


   // Check if the player won the game
   }

});

function nextplayer(){
  //next player
  activePlayer===0 ? activePlayer=1 : activePlayer=0;
  roundScore=0;
  
  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';


  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

 //  document.querySelector('.player-0-panel').classList.remove('active');
 //  document.querySelector('.player-1-panel').classList.add('active');

 document.getElementById('dice-1').style.display='none';
 document.getElementById('dice-2').style.display='none';

}


document.querySelector('.btn-new').addEventListener('click',init);

function init(){
   scores=[0,0];
   activePlayer=0;
   roundScore=0;
    gamePlayer=true;

    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
 document.getElementById('score-0').textContent='0';
 document.getElementById('score-1').textContent='0';
 document.getElementById('current-0').textContent='0';
 document.getElementById('current-1').textContent='0';
 document.getElementById('name-0').textContent="Player 1";
 document.getElementById('name-1').textContent="Player 2";
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.add('active');
}
// console.log(dice)
// document.querySelector("#current-" + activePlayer).textContent=dice;
// document.querySelector("#current-"+activePlayer).innerHTML='<em>'+dice + '</em>'
// var x=document.querySelector('#score-0').textContent;
// console.log(x)