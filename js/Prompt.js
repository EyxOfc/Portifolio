var Window = document.querySelector('#Window');
var Prompt = document.createElement('article');
var h3 = document.createElement('h3');
var input = document.createElement('input');
var button = document.createElement('button');

Prompt.id = 'Prompt';
h3.className = 'after';
h3.innerHTML = 'h3';
input.type = 'text';
button.innerHTML = 'ok';

Window.appendChild(Prompt);
Prompt.appendChild(h3);
Prompt.appendChild(input);
Prompt.appendChild(button);


function Prompting(obj,propriedade,f){
  Prompt.style.opacity = '1';
  Prompt.style.zIndex = '2';
  
  Window.style.width = '100%';
  
  button.addEventListener('click', () => {
    PromptingOff(input.value,obj, propriedade,f);
  })
  
}

function PromptingOff(valor,obj,propriedade,funct){
  Prompt.style.opacity = '0';
  Prompt.style.zIndex = '0';
  
  Window.style.width = '0%';

  for(let i in obj){
    if(i == propriedade){
      obj[propriedade] = input.value;
    }
  }
  
  if(funct != ''){
    setTimeout(funct,2000);
  }
  
}




export default Prompting;
