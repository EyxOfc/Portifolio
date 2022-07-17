import Global from './Global.js';

var html = document.querySelector('html');
var header = document.querySelector('header');
var Anterior = 0;

function Scroll(){
  
  let Atual;
  Atual = html.scrollTop.toFixed(0);
  Atual = Number(Atual);
  if(Atual <= Anterior){
    header.style.height = '60px';
    header.style.transition = '.1s 0s';
  }else{
    header.style.height = '0px';
    header.style.transition = '.2s';
  }
  Anterior = Atual;
}

window.addEventListener('scroll',Scroll);

Global.Funcoes.Scroll = Scroll;
