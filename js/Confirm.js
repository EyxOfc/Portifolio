var Window = document.querySelector('#Window');
var Confirm = document.createElement('article');
var h3 = document.createElement('h3');
var p = document.createElement('p');
var button = document.createElement('button');
var button2 = document.createElement('button');
Confirm.id = 'Confirm';
h3.className = 'after';
h3.innerHTML = 'h3';
p.innerHTML = 'p';
button.innerHTML = 'discordo';
button2.innerHTML = 'concordo';
Window.appendChild(Confirm);
Confirm.appendChild(h3);
Confirm.appendChild(p);
Confirm.appendChild(button);
Confirm.appendChild(button2);



function Confirmar(H3,P,FuncaoTrue,FuncaoFalse){
  Confirm.style.opacity = '1';
  Confirm.style.zIndex = '2';
  
  Window.style.width = '100%';
  
  h3.innerHTML = H3;
  p.innerHTML = P;
  
  button.addEventListener('click',()=>{
    ConfirmarOff(false,FuncaoFalse);
  });
  
  button2.addEventListener('click',()=>{
    ConfirmarOff(true,FuncaoTrue);
  })
  
}

function ConfirmarOff(Valor,Funcao){
  
  if(Funcao != ''){
    setTimeout(Funcao,500)
  }
  
  Confirm.style.opacity = '0';
  Confirm.style.zIndex = '0';
  
  Window.style.width = '0%';
}


export default Confirmar;
