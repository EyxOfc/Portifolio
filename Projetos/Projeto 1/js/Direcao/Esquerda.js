import Global from '../Global.js';
import Mover from '../maca/Mover.js'
import AddPonto from '../Ponto/AddPonto.js'
var snake = document.querySelector('#snake');

function Esquerda(){
  Global.Snake.DirX -= 20;
  if (Global.Snake.DirX === -20) {
    Global.Snake.DirX = 380;
    snake.style.transition = '0s';
  } else {
    snake.style.transition = '.3s';
  }
  snake.style.left = `${Global.Snake.DirX}px`;
  
  if (Global.Snake.DirX === Global.Maca.DirX && Global.Snake.DirY === Global.Maca.DirY) {
    Mover();
    AddPonto();
  }
}

export default Esquerda;
