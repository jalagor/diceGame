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
    return diceUrl[roll];
  };
