var Window = document.querySelector('#Window');
var Confirm = document.createElement('article');
var h3 = document.createElement('h3');
var p = document.createElement('p');
var button = document.createElement('button');
var button2 = document.createElement('button');


Confirm.id = 'Confirm';
Confirm.className = 'after';
h3.innerHTML = 'h3';
p.innerHTML = 'p';
button.innerHTML = 'discordo';
button2.innerHTML = 'concordo';

Window.appendChild(Confirm);
Confirm.appendChild(h3);
Confirm.appendChild(p);
Confirm.appendChild(button);
Confirm.appendChild(button2);

function Confirmar(objeto,propriedade,H3,P){
  Confirm.style.opacity = '1';
  Confirm.style.zIndex = '2';
  Window.style.width = '100%';
  h3.innerHTML = H3;
  p.innerHTML = P;
  button.addEventListener('click',()=>{
    ConfirmarOff(false,objeto,propriedade);
  });
  button2.addEventListener('click',()=>{
    ConfirmarOff(true,objeto,propriedade);
  })
}

function ConfirmarOff(valor,objeto,propriedade){
  for(let value in objeto){
    if(value == propriedade){
      objeto[propriedade] = valor;
    }
  }
  Window.style.width = '0%';
  Confirm.style.zIndex = '0';
  Confirm.style.opacity = '0';
}


export default Confirmar;