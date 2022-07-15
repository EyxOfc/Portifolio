import Global from './Global.js';

function VerificarMaca(){
  let Xsnake = Global.Snake.x;
  let Xmaca = Global.Maca.x;
  let Ysnake = Global.Snake.y;
  let Ymaca = Global.Maca.y;
  
  if(Xsnake === Xmaca && Ymaca === Ysnake){
    let x = Global.Funcoes.GerarPosicaoX(0,280);
    let y = Global.Funcoes.GerarPosicaoX(0,180);
    
    Global.Maca.x = x;
    Global.Maca.y = y;
    
    document.querySelector('.Maca').style.left = `${x}px`;
    document.querySelector('.Maca').style.top = `${y}px`
  }
}


Global.Funcoes.VerificarMaca = VerificarMaca;
export default VerificarMaca;
