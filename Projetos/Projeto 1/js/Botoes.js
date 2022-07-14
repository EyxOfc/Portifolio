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
  Global.Maca.x += 10;
  console.log(Global.Maca.x);
  if (Global.Maca.x === Number('300')) {
  Global.Maca.x = 0;
  }
  window.document.querySelector('.Maca').style.left = Global.Maca.x + 'px';
}

function Xmenos(){
  Global.Maca.x -= 10;
  if (Global.Maca.x === Number('-20')) {
  Global.Maca.x = 280;
  }
  window.document.querySelector('.Maca').style.left = Global.Maca.x + 'px';
}

function Ymais(){
  Global.Maca.y += 10;
  if (Global.Maca.y === Number('200')) {
  Global.Maca.y = 0;
  }
  window.document.querySelector('.Maca').style.top = Global.Maca.y + 'px';
}

function Ymenos(){
  Global.Maca.y -= 10;
  if(Global.Maca.y === Number('-20')){
  Global.Maca.y =  180;
  }
  window.document.querySelector('.Maca').style.top = Global.Maca.y + 'px';
}

Global.Funcoes.AdicionarBotoes = AdicionarBotoes;
Global.Funcoes.RemoverBotoes = RemoverBotoes;

AdicionarBotoes();