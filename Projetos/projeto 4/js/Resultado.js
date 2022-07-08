import Global from './Global.js';

document.querySelector('#go').addEventListener('click',Resul);
var resultado = document.querySelector('#resultado');
var number = document.querySelector('#number');

function Resul(){
  var num = Global[Global.Converter.pais][Global.Convertido.pais];
  resultado.innerHTML = number.value * num;
}
