console.log("GREATTTT");

var guessButton = document.querySelector("#guess-button");
var guessForm = document.querySelector("#guess-form");
var clearButton = document.querySelector("#clear-button");
var guessText = document.querySelector("#guess-text");
var answer = document.querySelector("#number");
var response = document.querySelector("#answer");
var reset = document.querySelector("reset");

var evalNumber;
var min= 0;
var max= 100;

clearButton.addEventListener('click',function(){
  guessForm.value=null;
})
/*
reset.addEventListener('click',function(){
guessText.innerHtml=<h1>Enter a Guess between<min> and <max> </h2>
answer.innerText= #
response.innerText=Feel free to enter a guess anytime....
guessForm.value=undefined or null?
evalNumber.value=undefined or null
})
*/

guessButton.addEventListener('click', function(){
    if(!(isNaN(guessForm.value))){
     answer.innerText=guessForm.value;

      if(evalNumber===undefined){
      evalNumber=((Math.ceil(Math.random()*100)));
      }
 if(guessForm.value==evalNumber){
response.innerText="Boom!";
guessText.innerText="You did it!";
answer.innerText=guessForm.value;
guessButton.className="dis";
clearButton.className="dis";
//guessButton.className="dis";  remove
//clearButton.className="dis";  remove
//min-=10;
//max +=10;
}
else if(guessForm.value<min){
  response.innerText="Lower than the minimum allowed";
  guessText.innerText="You are a little lower than low!";
  answer.innerText=guessForm.value;
}
else if(guessForm.value>max){
  response.innerText="Higher than the maximum allowed";
  guessText.innerText="You are a higher than high!";
  answer.innerText=guessForm.value;
}

 else if(guessForm.value>evalNumber){
   response.innerText="a little too high!";
   guessText.innerText="Keep a tryin'!";
   answer.innerText=guessForm.value;
 }

 else if(guessForm.value<evalNumber){
   response.innerText="a little too low!";
   guessText.innerText="Numbers! Darn you!'";
   answer.innerText=guessForm.value;
 }


else {

  response.innerText="boom!";
  guessText.innerText="OMG are you a number Magician?!?1";
}
}
});
//});
//})
//})
//guessButton.addEventListener('touch',function(){
 //var numbs= parseInt(guessForm.value);

// if(!== 0 && numbs!== ""){
// if (numbs) {
//   evalNumber =
// }
//
// if (evalNumber == numbs) {
//   response.innerText = "Boom"
//   answer.innerText === guessForm.value;
//   guessText.innerText = "You did it!"
//   guessForm.value = "Let's try again!"
// }
//
// else if(min<0) {
//   response.innerText = "???"
//   answer.innerText === guessForm.value;
//   guessText.innerText = "This is lower than the minimum guess allowed"
// }
// else if(max>100) {
//   response.innerText = "???"
//   answer.innerText === guessForm.value;
//   guessText.innerText = "This is higher than the maximum guess allowed"
// }
//
// else if(evalNumber > numbs) {
//   response.innerText = "Keep guessing"
//   answer.innerText === guessForm.value;
//   guessText.innerText = "That is too low"
// }
//
// else if(evalNumber < numbs) {
//   response.innerText = "Keep guessing"
//   answer.innerText = guessForm.value;
//   guessText.innerText = "That is too high!"
// }
//
// else{
//   response.innerText = "Is this a number?"
//   answer.innerText = guessForm.value;
//   guessText.innerText = "?!?!?!"
// }
// }
// }
/*


assign "undefined to guessForm.value"

to both clear and reset

*/
  //clearButton.addEventListener('click',function(){
  //guessForm.innerText= "";
//alert(reset.innerContent);
 //reset.addEventListener('click',function(){
//   response.innerText= "Feel free to enter a guess anytime...."
//   answer.innerText= "#"
//   guessText.innerText= "Enter a Guess between 1 and 100"
//   guessForm.innerText= ""
// })
//location.reload()
// });
