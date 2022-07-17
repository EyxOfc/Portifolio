import Global from './Global.js';

var Iniciar = document.querySelector('#iniciar');
Iniciar.addEventListener('click',Game)

function Game(){
  setTimeout(()=>{
    Global.Funcoes.AdicionarBotoes();
    Global.Funcoes.Cronometro();
    Global.Game.Segundos = 10;
    Global.Game.Pontos = 0;
    document.querySelector('#pontos').innerHTML = `${Global.Usuario}: ${Global.Game.Pontos}`;
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
