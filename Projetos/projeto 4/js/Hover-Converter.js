import Global from './Global.js';

var Hovers = document.querySelectorAll('.Hovers-Converter');
Global.Converter = Hovers[0];
Global.Converter.childNodes[0].style.padding = '5px';





for(let i = 0; i < Hovers.length;i++){
  Hovers[i].addEventListener('click',HoverConverter);
  Hovers[i].pais = Global.Pais[i];
}



function HoverConverter(){
  Global.Converter.childNodes[0].style.padding = '0px';
  this.childNodes[0].style.padding = '5px';
  Global.Converter = this;
}
