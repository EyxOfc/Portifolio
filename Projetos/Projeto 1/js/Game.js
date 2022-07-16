import Global from './Global.js';

var Iniciar = document.querySelector('#iniciar');
Iniciar.addEventListener('click',Game)

function Game(){
  setTimeout(()=>{
    Global.Funcoes.AdicionarBotoes();
    Global.Funcoes.Cronometro();
    Global.Game.Segundos = 10;
  },0);
  Iniciar.removeEventListener('click',Game);
}

function GameOff(){
  setTimeout(()=>{
    Global.Funcoes.RemoverBotoes();
  },0);
  Iniciar.innerHTML = '';
  Iniciar.appendChild(document.createElement('img'));
  Iniciar.childNodes[0].src = './img/play.png'
}

Global.Funcoes.Game = Game;
Global.Funcoes.GameOff = GameOff;