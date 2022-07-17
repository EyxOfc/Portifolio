import Global from './Global.js';

var Window = document.querySelector('#Window');
var Prompt = document.createElement('article');
var h3 = document.createElement('h3');
var input = document.createElement('input');
var button = document.createElement('button');
Prompt.id = 'Prompt';
h3.className = 'after';
input.type = 'text';
button.innerHTML = 'ok';
Window.appendChild(Prompt);
Prompt.appendChild(h3);
Prompt.appendChild(input);
Prompt.appendChild(button);


function Prompting(H3,Objeto,Propriedade,Funcao){
  Prompt.style.opacity = '1';
  Prompt.style.zIndex = '2';
  
  Global.Funcoes.WindowOn();
  h3.innerHTML = H3;
  
  button.addEventListener('click',()=>{
    PromptingOff(input.value,Objeto,Propriedade,Funcao);
  })
  
}

function PromptingOff(Valor,Objeto,Propriedade,Funcao){
  
  for(let i in Objeto){
    if(i === Propriedade){
      Objeto[i] = Valor;
    }
  }
  
  setTimeout(Funcao,3000);
  
  Prompt.style.opacity = '0';
  Prompt.style.zIndex = '0';
  Global.Funcoes.WindowOff();
  
}

Global.Funcoes.Prompting = Prompting;
Global.Funcoes.PromptingOff = PromptingOff;
export default Prompting;
