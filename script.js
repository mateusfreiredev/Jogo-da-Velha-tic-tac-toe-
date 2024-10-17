const btnstart = document.getElementById("btnstart")
const section2 = document.getElementById("section2")
const h2 = document.getElementById("h2")

function executeGame(){
     
}

btnstart.addEventListener("click", function(ev){
    ev.preventDefault()

    section2.style.display = "block"

    const player1 = document.getElementById("player1").value
    const player2 = document.getElementById("player2").value

    h2.innerText = "Jogador " + player1 + " é a sua vez!"

    executeGame()
})