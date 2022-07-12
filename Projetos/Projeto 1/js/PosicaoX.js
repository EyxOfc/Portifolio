import Global from './Global.js';


function GerarPosicaoX(Xmin,Xmax,Objeto,Propriedade){
  let Maximo = Xmax / 10;
  let Numero = (Math.random() * Maximo).toFixed(0);
  if(Numero > Maximo){
    let Numero = (Math.random() * Maximo).toFixed(0);
  }
  Numero *= 10;
  for(let i in Objeto){
    Objeto[i] = Numero;
  }
  return `${Objeto[Propriedade]}px`
}


Global.Funcoes.GerarPosicaoX = GerarPosicaoX;
