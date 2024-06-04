const diceUrl = {
    1: "https://cdn.pixabay.com/photo/2014/04/03/10/24/one-310338_960_720.png",
    2: "https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312627_960_720.png",
    3: "https://cdn.pixabay.com/photo/2014/04/03/10/24/three-310336_960_720.png",
    4: "https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312623_960_720.png",
    5: "https://cdn.pixabay.com/photo/2014/04/03/10/24/five-310334_960_720.png",
    6: "https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312621_960_720.png",
  },
  randomNumber = () => {
    let roll = Math.floor(Math.random() * 6) + 1;
    return roll;
  }, 
  playGame = () => {
    p1 = randomNumber(),
    p2 = randomNumber();

    player1Di.setAttribute('src', diceUrl[p1])
    player2Di.setAttribute('src', diceUrl[p2])
    
    if (p1 > p2){
        header.innerText = "Player 1 Wins!"
    } else if (p1 < p2){
        header.innerText = "Player 2 Wins!"
    } else {
        header.innerText = "Tie! Roll Again!"
    }
  }
  player1Di = document.querySelector("#player1Di"),
  player2Di = document.querySelector("#player2Di"),
  header = document.querySelector('h1'),
  playButton = document.querySelector('button');

  playButton.addEventListener("click", playGame);