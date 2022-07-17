import Global from './Global.js';

function Tempo(){
  
  let Tmp = new Date;
  
  let Arr = [
    Tmp.getHours(),
    Tmp.getMinutes(),
    Tmp.getSeconds()
  ]
  
  for(let i = 0;i < Arr.length;i++){
    if(Arr[i] < 10){
      Arr[i] = `0${Arr[i]}`;
    }
  }
  
  document.querySelector('#tempo').innerHTML = `${Arr[0]}:${Arr[1]}:${Arr[2]}`
  
}

setInterval(Tempo,1000);

Tempo();

Global.Funcoes.Tempo = Tempo;
