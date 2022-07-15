import Global from './Global.js';

Global.Game.Segundos = 10;

function Cronometro(){
  if(Global.Game.Segundos === 0){
    setTimeout(()=>{
      Global.Funcoes.RemoverBotoes();
    });
  }else{
    Global.Game.Segundos -= 1;
  }
  
  console.log(Global.Game.Segundos);
}

setInterval(Cronometro,1000)
