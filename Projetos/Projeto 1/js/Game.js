import Global from './Global.js';



function Game(){
  setTimeout(()=>{
    Global.Funcoes.AdicionarBotoes();
    Global.Funcoes.Cronometro();
    Global.Game.Segundos = 10;
  },0)
}

function GameOff(){
  setTimeout(()=>{
    Global.Funcoes.RemoverBotoes();
  },0);
}

Game();

Global.Funcoes.Game = Game;
Global.Funcoes.GameOff = GameOff;
