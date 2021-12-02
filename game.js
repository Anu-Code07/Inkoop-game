let P1h = 100;
let P2h = 100;

let rounds = 0;
let P1score = 0;
let P2score = 0;

function shoot() {
  var P1fire = Math.floor(Math.random() * 5);
  var P2fire = Math.floor(Math.random() * 5);
  console.log("player1 firing:" + P1fire);
  console.log("player1 firing:" + P2fire);

  document.getElementById("P1_firescore").innerHTML = P1fire;
  document.getElementById("P2_firescore").innerHTML = P2fire;

  P1h -= P2fire;
  P2h -= P1fire;
  document.getElementById("hlth1").innerHTML = P1h;
  document.getElementById("hlth2").innerHTML = P2h;
  console.log("Player 1 Health : " + P1h);
  console.log("Player 2 Health : " + P2h);

  rounds = rounds + 1;
  console.log("Rounds:" + rounds);

  if (P1h <= 0) {
    document.getElementById("won").innerHTML = "Player 2 has won!";
  }
  if (P2h <= 0) {
    document.getElementById("won").innerHTML = "Player 1 has won!";
  }
  if (rounds == 5) {
    document.getElementById("shoot").disabled = true;
    document.getElementById("shoot").innerHTML = "Game Over!";
    document.getElementById("shoot").style.backgroundColor = "grey";
  }
  if (P1fire > P2fire) {
    P1score += 1;
  }

  if (P2fire > P1fire) {
    P2score += 1;
  }
  document.getElementById("wins1").innerHTML = P1score;
  document.getElementById("wins2").innerHTML = P2score;

  if (P1score == 3) {
    Results("Player 1 has Won!");
  }

  if (P2score == 3) {
    Results("Player 2 has Won!");
  }

  if (rounds == 5) {
    if (P1score > P2score) {
      Results("Player 1 has Won!");
    }

    if (P2score > P1score) {
      Results("Player 2 has Won!");
    }

    if (P1score == P2score) {
      Results("Match Draw");
    }
  }
}
function Results(text) {
  document.getElementById("won").innerHTML = text;
  document.getElementById("shoot").disabled = true;
  document.getElementById("shoot").innerHTML = "Game Over!";
  document.getElementById("shoot").style.backgroundColor = "grey";
}
function reset() {
  location.reload();
 
}
