import Global from './Global.js';


function GerarPosicaoX(Xmin,Xmax){
  let Maximo = Xmax / 10;
  let Numero = (Math.random() * Maximo).toFixed(0);
  if(Numero > Maximo){
    let Numero = (Math.random() * Maximo).toFixed(0);
  }
  Numero *= 10;
  return Numero;
}

Global.Funcoes.GerarPosicaoX = GerarPosicaoX;

export default GerarPosicaoX;
