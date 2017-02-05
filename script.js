evar guessButton = document.querySelector("#guess-button");
var guessForm = document.querySelector("#guess-form");
var clearButton = document.querySelector("#clear-button");
var guessText = document.querySelector("#guess-text");
var answer = document.querySelector("#number");
var response = document.querySelector("#answer");
var reset = document.querySelector("#reset");
var evalNumber;
var min= 0;
var max= 100;
var player1=0;
var player2=0;
var counter= 0;
function rando(a, b) {
    return Math.floor(Math.random() * (a - b) + b);
}

clearButton.className='dis';
reset.className='dis';

clearButton.addEventListener('click',function(){
  guessForm.value=null;
  clearButton.className="dis";
})



guessButton.addEventListener('click', function(){
    if(guessForm.value===""){
      answer.innerText="???"
      alert("grrr... Try using numbers for the NUMBER game");
      return;
    }
    if(!(guessForm.value==="")){
      clearButton.className="";
    }
    if(!(isNaN(guessForm.value))){
      answer.innerText=guessForm.value;
      if(evalNumber===undefined){
      evalNumber=rando(min,max);
      console.log(evalNumber)
      }
      counter++;
      if(counter%2===0){
        alert("Player 1's turn")

      }
      else{
       alert("Player 2's turn")
      }
    if(guessForm.value===undefined){
      clearButton.className='dis';

    }

     if(guessForm.value==evalNumber){
       response.innerText="Boom!";
       guessText.innerText="You did it!";
       answer.innerText=guessForm.value;
       guessButton.className="dis";
       clearButton.className="dis";
       reset.classList.remove("dis");
       console.log(evalNumber);

       } else if(guessForm.value<min){
              response.innerText="Lower than the minimum allowed";
              guessText.innerText="You are a little lower than low!";
              answer.innerText=guessForm.value;

       } else if(guessForm.value>max){
              response.innerText="Higher than the maximum allowed";
              guessText.innerText="You are a higher than high!";
              answer.innerText=guessForm.value;


       } else if(guessForm.value>evalNumber){
              response.innerText="a little too high!";
              guessText.innerText="Keep a tryin'!";
              answer.innerText=guessForm.value;

       } else if(guessForm.value<evalNumber){
              response.innerText="a little too low!";
              guessText.innerText="Numbers! Darn you!";
              answer.innerText=guessForm.value;
    }

}
 else {
    alert("Youuu may want to enter a number to play zee umm number guesser game... silly")
 }

});

reset.addEventListener('click',function(){
  min-=10;
  max+=10;
  clearButton.className='dis';
  reset.className='dis';
guessText.innerHTML="<p>Enter a guess now between "+min+" and "+ max +"</p>";
answer.innerText= "#"
response.innerText="Feel free to enter a guess anytime..."
guessForm.value=null;
evalNumber=rando(min,max);
//alert(evalNumber);
guessButton.classList.remove("dis");
if(counter%2===0){
  player1++;
  alert("Player 1 wins! SCOREBOARD   Player 1 : "+ player1+"  Player 2 : "+player2)

}
else{
  player2++
 alert("Player 2 wins! SCOREBOARD   Player 1 : "+ player1+"  Player 2 : "+player2)
}
counter=0;
})
