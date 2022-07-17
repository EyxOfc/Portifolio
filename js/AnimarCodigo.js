import Global from './Global.js';

var Textos = [
  ' Desenvolvedor Front End e UI & UX Designer.',
  ' Estudante de programação. '
]

var IndexLetter = 0;
var IndexArr = 0;


function Escrever(){
  let txt = Textos[IndexArr];
  if(IndexLetter <= txt.length){
    
    txt = txt.slice(0,IndexLetter);
    document.querySelector('#AnimadoCodigo').innerHTML = txt;
    setTimeout(Escrever,80);
    IndexLetter++;
    
  }else{
    setTimeout(Desescrever,1500);
  }
  
}

Escrever()

function Desescrever(){
  
  let txt = Textos[IndexArr];
  
  if(0 != IndexLetter){
    
    txt = txt.slice(0,IndexLetter);
    document.querySelector('#AnimadoCodigo').innerHTML = txt;
    IndexLetter--;
    setTimeout(Desescrever,80);
    
  }else{
    
    document.querySelector('#AnimadoCodigo').innerHTML = '';
    setTimeout(Escrever,500);
    if(IndexArr === (Textos.length - 1)){
      IndexArr = 0;
    }else{
      IndexArr++;
    }
  }
  
}

Global.Funcoes.Escrever = Escrever;
Global.Funcoes.Desescrever = Desescrever;