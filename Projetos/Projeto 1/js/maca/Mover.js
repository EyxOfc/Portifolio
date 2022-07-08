import Global from '../Global.js';
var maca = document.querySelector('.maca');

function Mover(){
  let Numero1 = (Math.random() * 19).toFixed(0);
  Numero1 = Number(Numero1) * 20;
  let Numero2 = (Math.random() * 14).toFixed(0);
  Numero2 = Number(Numero2) * 20;
  let x = Numero1;
  let y = Numero2;
  Global.Maca.DirX = x;
  Global.Maca.DirY = y;
  maca.style.left = `${x}px`;
  maca.style.top = `${y}px`;
  
}

export default Mover;
