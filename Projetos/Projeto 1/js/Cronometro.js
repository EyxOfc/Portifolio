import Global from './Global.js';

Global.Game.Segundos = 10;
var Iniciar = document.querySelector('#iniciar');

function Cronometro(){
  if(Global.Game.Segundos === 0){
    Global.Funcoes.GameOff();
    Iniciar.addEventListener('click',Global.Funcoes.Game);
  }else{
    Global.Game.Segundos -= 1;
    Iniciar.innerHTML = Global.Game.Segundos;
    setTimeout(Cronometro,1000);
  }
}


Global.Funcoes.Cronometro = Cronometro;
export default Cronometro;
