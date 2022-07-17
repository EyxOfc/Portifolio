import Global from './Global.js';

var Window = document.querySelector('#Window');

function WindowOn(){
  Window.style.display = 'flex';
  Window.style.animation = '1.9s Opacidade0for1 forwards';
}

function WindowOff(){
  Window.style.animation = '1.9s Opacidade1for0 forwards';
  
  setTimeout(()=>{
    Window.style.display = 'none';
  },2000);
}

Global.Funcoes.WindowOn = WindowOn;
Global.Funcoes.WindowOff = WindowOff;
