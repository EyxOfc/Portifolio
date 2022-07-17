import Global from './Global.js';

var Window = document.querySelector('#Window');
var Alert = document.createElement('article');
var h3 = document.createElement('h3');
var p = document.createElement('p');
var button = document.createElement('button');
Alert.id = 'Alert';
h3.innerHTML = 'h3';
h3.className = 'after'
p.innerHTML = 'p';
button.innerHTML = 'ok';
Window.appendChild(Alert);
Alert.appendChild(h3);
Alert.appendChild(p);
Alert.appendChild(button);


function Alertar(H3,P,Funcao){
  h3.innerHTML = H3;
  p.innerHTML = P;
  
  Alert.style.opacity = '1';
  Alert.style.zIndex = '2';
  
  Global.Funcoes.WindowOn();
  
  button.addEventListener('click',()=>{
  AlertarOff(Funcao);
  })
}

function AlertarOff(Funcao){
  
  if(Funcao != ''){
    setTimeout(Funcao,3000);
  }
  
  Global.Funcoes.WindowOff();
  Alert.style.opacity = '0';
  Alert.style.zIndex = '0';
}

Global.Funcoes.Alertar = Alertar;;
Global.Funcoes.AlertarOff = AlertarOff;

export default Alertar;
