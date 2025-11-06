var tilesArray = document.querySelectorAll('.tiles');
var playerTurn = document.querySelector('#playerturn');
var startbtn = document.querySelector('#gamestart');
var resetBtn = document.querySelector('#resetButton');


let tictactoe = [0,0,0,0,0,0,0,0,0];
// tilesArray.forEach((ele) => {
//     console.log(ele.textContent);
// });
var gameIsPaused = false;//off
const playerX = {name:"Player X",value:-1,tile: "cross.png",winval:-3};
const playerO = {name:"Player O",value:1,tile: "criss.png",winval:3};

var player = null;

function stateSelector() {
    playerTurn.innerText = player.name;
    startbtn.innerText = (gameIsPaused) ? 'PAUSE' : 'START';
    gameIsPaused = !gameIsPaused;
}

function checkForRows(v){
    if(tictactoe[0]+tictactoe[1]+tictactoe[2] === v || tictactoe[3]+tictactoe[4]+tictactoe[5] === v || tictactoe[6]+tictactoe[7]+tictactoe[8] === v ){
        return true;
    }
    return false;
}
function checkForCols(v){
    if(tictactoe[0]+tictactoe[3]+tictactoe[6] === v || tictactoe[1]+tictactoe[4]+tictactoe[7] === v || tictactoe[2]+tictactoe[5]+tictactoe[8] === v ){
        return true;
    }
    return false;
}
function checkForDiags(v){
        if(tictactoe[0]+tictactoe[4]+tictactoe[8] === v || tictactoe[2]+tictactoe[4]+tictactoe[6] === v){
        return true;
    }
    return false;
}

function checkifPlayerWon(wv){
    return (checkForRows(wv) ||  checkForCols(wv) || checkForDiags(wv));
}
function showWinner(t){
    document.querySelector('#winnercard').innerHTML = t;
    document.querySelector('#winnercard').style.display = 'block';
    gsap.to("#winnercard",{
        y: -50,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out"
    });
}

function fillTile(){
    if(gameIsPaused)return;
    this.style.backgroundImage = 'url('+player.tile+')';


    this.removeEventListener('click',fillTile);
    tictactoe[parseInt(this.id[4])] = player.value;
    // console.log(checkifPlayerWon(player.winval));
    if(checkifPlayerWon(player.winval)){
        showWinner(player.name+' Won!');
        gameIsPaused = true;
    }
    player = (player == playerX) ? playerO : playerX;
    playerTurn.innerText = player.name;
}

function setup() {
    gameIsPaused = false;
    startbtn.addEventListener('click', stateSelector);
    resetBtn.addEventListener('click', setup);
    document.querySelector('#winnercard').style.display = 'none';
    player=playerX;
    playerTurn.innerText = player.name;
    for (let i = 0; i < 9; i++) {
        tilesArray[i].innerText = '';
        tilesArray[i].style.backgroundImage = '';
        tilesArray[i].style.backgroundSize = 'cover';
        tilesArray[i].addEventListener('click',fillTile);
        tictactoe[i] = 0;
    }
}
setup();

