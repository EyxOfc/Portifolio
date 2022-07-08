import Global from '../Global.js';
import Mover from '../maca/Mover.js'
import AddPonto from '../Ponto/AddPonto.js'
var snake = document.querySelector('#snake');

function Baixo(){
  Global.Snake.DirY += 20;
  if (Global.Snake.DirY === 300) {
    Global.Snake.DirY = 0;
    snake.style.transition = '0s';
  } else {
    snake.style.transition = '.3s';
  }
  
  snake.style.top = `${Global.Snake.DirY}px`;
  if (Global.Snake.DirX === Global.Maca.DirX && Global.Snake.DirY === Global.Maca.DirY) {
    Mover();
    AddPonto();
  }
  
}

export default Baixo;
