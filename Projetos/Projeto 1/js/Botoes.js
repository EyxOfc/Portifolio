import Global from './Global.js';

var Cima = document.querySelector('.topo');
var Direita = document.querySelector('.direita');
var Esquerda = document.querySelector('.esquerda');
var Baixo = document.querySelector('.baixo');

function AdicionarBotoes(){
  Cima.addEventListener('click',Ymenos);
  Baixo.addEventListener('click',Ymais);
  Direita.addEventListener('click',Xmais);
  Esquerda.addEventListener('click',Xmenos);
}

function RemoverBotoes(){
  Cima.removeEventListener('click', Ymenos);
  Baixo.removeEventListener('click', Ymais);
  Direita.removeEventListener('click', Xmais);
  Esquerda.removeEventListener('click', Xmenos);
}

function Xmais(){
  Global.Snake.x += 10;
  if (Global.Snake.x === Number('300')) {
  Global.Snake.x = 0;
  }
  setTimeout(()=>{
    Global.Funcoes.VerificarMaca();
  },0)
  window.document.querySelector('.Snake').style.left = Global.Snake.x + 'px';
}

function Xmenos(){
  Global.Snake.x -= 10;
  if (Global.Snake.x === Number('-20')) {
  Global.Snake.x = 280;
  }
  setTimeout(() => {
    Global.Funcoes.VerificarMaca();
  }, 0)
  window.document.querySelector('.Snake').style.left = Global.Snake.x + 'px';
}

function Ymais(){
  Global.Snake.y += 10;
  if (Global.Snake.y === Number('200')) {
  Global.Snake.y = 0;
  }
  setTimeout(() => {
    Global.Funcoes.VerificarMaca();
  }, 0)
  window.document.querySelector('.Snake').style.top = Global.Snake.y + 'px';
}

function Ymenos(){
  Global.Snake.y -= 10;
  if(Global.Snake.y === Number('-20')){
  Global.Snake.y =  180;
  }
  setTimeout(() => {
    Global.Funcoes.VerificarMaca();
  }, 0)
  window.document.querySelector('.Snake').style.top = Global.Snake.y + 'px';
}

Global.Funcoes.AdicionarBotoes = AdicionarBotoes;
Global.Funcoes.RemoverBotoes = RemoverBotoes;

AdicionarBotoes();
