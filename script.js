const btnstart = document.getElementById("btnstart");
const section2 = document.getElementById("section2");

const h2 = document.getElementById("h2");
let player1 = "";
let player2 = "";
let playerName = "";

let mark = "";

function testGameWin(player1,player2) {
  
function verifySolve(solveArray, markedCelsX, markedCelsY) {
    for (let solve of solveArray) {
        if (solve.every(itemSolve => markedCelsX.includes(itemSolve))) {
            return { result: true, source: "X" }; 
        }
        if (solve.every(itemSolve => markedCelsY.includes(itemSolve))) {
            return { result: true, source: "Y" }; 
        }
    }
    return { result: false, source: null }; 
}

  const solveArray = [
    ["1.1", "1.2", "1.3"],
    ["2.1", "2.2", "2.3"],
    ["3.1", "3.2", "3.3"],
    ["1.1", "2.1", "3.1"],
    ["1.2", "2.2", "3.2"],
    ["1.3", "2.3", "3.3"],
    ["1.1", "2.2", "3.3"],
    ["3.1", "2.2", "1.3"],
  ];

  const cels = document.querySelectorAll(".tableBtn");

  const markedCelsX = [];
  const markedCelsY = [];

  cels.forEach(function (cel) {
    if (cel.innerText === "X") {
      markedCelsX.push(cel.id);
    } else if (cel.innerText === "O") {
      markedCelsY.push(cel.id);
    }
  });

  const result = verifySolve(solveArray, markedCelsX, markedCelsY)

  function showWinner(winner){
    let player = ""

    if(winner === "x"){
        player = player1
    }else{
        player = player2
    }

    h2.innerText = "O vencedor é o jogador " + player + " !!"
  }

  if(result.result === true){
    showWinner(result.source)
  }
}

function playerMove(keyPressed) {     
  
    let mark;
    if (playerName === player1) {
      mark = "X";
    } else if (playerName === player2) {
      mark = "O";
    }
  
    const toMark = document.getElementById(keyPressed);
    toMark.innerText = mark;
  
    function changePlayer(player1, player2) {
      if (playerName === player1) {
        return player2;
      } else if (playerName === player2) {
        return player1;
      }
    }
  
    playerName = changePlayer(player1, player2);
  
    testGameWin(player1,player2);
  }
  

//Abaixo a função de preparação para o "click de cada célula"
function btnTable() {
  document.querySelectorAll(".tableBtn").forEach(function (tableBtn) {
    tableBtn.addEventListener("click", function () {
      let keyPressed = tableBtn.dataset.value;
      playerMove(keyPressed);
    });
  });
}

//Abaixo função de preparação do ambiente para o jogo:
btnstart.addEventListener("click", function (ev) {
  ev.preventDefault();

  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;
  playerName = player1;

  h2.innerText = "Jogador " + playerName + " é a sua vez!";

  section2.style.display = "block";

  executeGame();
});

function executeGame() {
  btnTable();
}

/*

FUNÇÕES A SEREM CRIADAS:

MOVIMENTO DE CADA JOGADOR
VALIDAÇÃO DO GANHADOR
BOTÃO RECOMEÇAR


if (tableBtn.id === keyPressed) {
        tableBtn.innerText = "x";
      } // Marca com x a célula pressionada


*/
