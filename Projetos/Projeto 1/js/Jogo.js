import Global from './Global.js';
import Mover from './maca/Mover.js'
import Topo from './Direcao/Topo.js';
import Direita from './Direcao/Direita.js';
import Baixo from './Direcao/Baixo.js';
import Esquerda from './Direcao/Esquerda.js';

var c = document.querySelector('#c');
var go = document.querySelector('#go')

go.addEventListener('click', GameOn);


function GameOn(){
  c.childNodes[1].addEventListener('click',Topo);
  c.childNodes[3].addEventListener('click',Direita);
  c.childNodes[5].addEventListener('click',Baixo);
  c.childNodes[7].addEventListener('click',Esquerda);
  go.addEventListener('click',GameOff);
  go.removeEventListener('click',GameOn);
  go.innerHTML = 'acabar'
  Mover();
}

function GameOff(){
  c.childNodes[1].removeEventListener('click', Topo);
  c.childNodes[3].removeEventListener('click', Direita);
  c.childNodes[5].removeEventListener('click', Baixo);
  c.childNodes[7].removeEventListener('click', Esquerda);
  go.addEventListener('click', GameOn);
  go.removeEventListener('click', GameOff);
  go.innerHTML = 'iniciar'

}
