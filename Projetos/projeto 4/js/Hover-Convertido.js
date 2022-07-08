import Global from './Global.js';

var Hover = document.querySelectorAll('.Hovers-Convertido');
Global.Convertido = Hover[0];
Global.Convertido.childNodes[0].style.padding = '5px';



for(let i = 0; i < Hover.length;i++){
  Hover[i].addEventListener('click',HoverConvertido);
  Hover[i].pais = Global.Pais[i];
}


function HoverConvertido(){
  Global.Convertido.childNodes[0].style.padding = '0px';
  this.childNodes[0].style.padding = '5px';
  Global.Convertido = this;
}
