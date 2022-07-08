var Desejos = [
]
var pop = document.querySelector('#pop');

function Input(){
  Desejos.push(document.querySelector('#input').value);
  Add();
}

function Add(){
  pop.innerHTML = '';
  for(let i = 0;i < Desejos.length; i++){
    let article = document.createElement('article');
    let p = document.createElement('p');
    let button = document.createElement('button');
    p.innerHTML = Desejos[i];
    button.innerHTML = '×';
    button.index = i;
    article.appendChild(p);
    article.appendChild(button);
    pop.appendChild(article);
    
    button.addEventListener('click',Remov);
  }
}

function Remov(){
  var Index = this.index;
  Desejos.splice(Index,1);
  Add();
}
