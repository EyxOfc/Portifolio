import Global from './Global.js';


function GerarPosicaoY(Ymin,Ymax,Objeto,Propriedade){
  let Maximo = Ymax / 10;
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

Global.Funcoes.GerarPosicaoY = GerarPosicaoY;

export default GerarPosicaoY;
