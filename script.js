const btnstart = document.getElementById("btnstart");
const section2 = document.getElementById("section2");

const h2 = document.getElementById("h2");
let player1 = ""
let player2 = ""
let playerName = ""

let mark = ""

function testGameWin(){


}

function playerMove(keyPressed) {



    //Identificador de jogador da rodada:
    if(playerName === player1){
        mark = "X"

        const toMark = document.getElementById(keyPressed)
        toMark.innerText = mark
    }else if(playerName === player2){
        mark = "O"

        const toMark = document.getElementById(keyPressed)
        toMark.innerText = mark
    }
        

    testGameWin()
  }

//Abaixo a função de preparação para o "click de cada célula"
function btnTable() {
  document.querySelectorAll(".tableBtn").forEach(function (tableBtn) {
    tableBtn.addEventListener("click", function () {
      let keyPressed = tableBtn.dataset.value;
        playerMove(keyPressed)    
    });
  });
}


//Abaixo função de preparação do ambiente para o jogo:
btnstart.addEventListener("click", function (ev) {
  ev.preventDefault();

    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    playerName = player1

    h2.innerText = "Jogador " + playerName + " é a sua vez!"

  section2.style.display = "block";

  executeGame();
});

function executeGame(){

    btnTable()


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
