import Global from './Global.js';

Global.Game.Segundos = 10;

function Cronometro(){
  if(Global.Game.Segundos === 0){
    Global.Funcoes.GameOff();
  }else{
    Global.Game.Segundos -= 1;
    setTimeout(Cronometro,1000);
  }
  console.log(Global.Game.Segundos);
}


Global.Funcoes.Cronometro = Cronometro;
export default Cronometro;
