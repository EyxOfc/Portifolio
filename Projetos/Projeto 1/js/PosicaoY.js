import Global from './Global.js';


function GerarPosicaoY(Ymin,Ymax){
  let Maximo = Ymax / 10;
  let Numero = (Math.random() * Maximo).toFixed(0);
  if(Numero > Maximo){
    let Numero = (Math.random() * Maximo).toFixed(0);
  }
  Numero *= 10;
  return Numero;
}

Global.Funcoes.GerarPosicaoY = GerarPosicaoY;

export default GerarPosicaoY;
