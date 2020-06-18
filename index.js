

var diceImages = ["dice1.png", "dice2.png" ,"dice3.png" , "dice4.png" , "dice5.png" , "dice6.png"];

var randomImage = Math.floor(Math.random()*diceImages.length);
var randomImage2 = Math.floor(Math.random()*diceImages.length);

    document.getElementsByTagName("img")[0].setAttribute("src" , diceImages[randomImage]);
    document.getElementsByTagName("img")[1].setAttribute("src" , diceImages[randomImage2]);
  if(randomImage>randomImage2){
              document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins!";
  }  
    else if(randomImage2 === randomImage){
        document.getElementsByTagName("h1")[0].textContent = "Draw!";
}
else{
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins!";

}

document.getElementById("playAgain").addEventListener("click" , function(){
  window.location.reload();
  })