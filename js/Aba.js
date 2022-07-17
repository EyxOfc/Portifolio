import Global from './Global.js';

var BotaoOpen = document.querySelector('#open');
var Aba = document.querySelector('#Aba');
BotaoOpen.addEventListener('click',On);
Aba.style.right = '-100%';
Aba.style.transition = '.3s 1s';
let Navs = document.querySelectorAll('.Navs');
for (let i = 0; i < Navs.length; i++) {
  Navs[i].style.transform = 'translate(100%,0%';
  Navs[i].style.transition = `.3s .${2*i}s`;
}


function On(){
  Aba.style.right = '0px';
  Aba.style.transition = '.1s';
  let Navs = document.querySelectorAll('.Navs')
  for(let i = 0;i < Navs.length;i++){
    Navs[i].style.transform = 'translate(0%,0%';
    Navs[i].style.transition = `.3s .${2*i}s`;
  }
  BotaoOpen.addEventListener('click',Off);
  BotaoOpen.removeEventListener('click',On);
  BotaoOpen.style.transform = 'translate(45px,0%) rotate(45deg)';
}


function Off(){
  Aba.style.right = '-100%';
  Aba.style.transition = '.3s 1s';
  let Navs = document.querySelectorAll('.Navs')
  for (let i = 0; i < Navs.length; i++) {
    Navs[i].style.transform = 'translate(100%,0%';
    Navs[i].style.transition = `.3s .${2*i}s `;
  }
  BotaoOpen.addEventListener('click',On);
  BotaoOpen.removeEventListener('click',Off);
  BotaoOpen.style.transform = 'translate(45px,0%) rotate(0deg)';
}

window.addEventListener('scroll',Off)

Global.Funcoes.On = On;
Global.Funcoes.Off = Off;
