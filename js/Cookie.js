import Global from './Global.js';
import Alertar from './Alert.js';
import Prompting from './Prompt.js';
import Confirmar from './Confirm.js';

var Usuario = {
  Nome: ''
}

if(Cookies.get('Usuario.Nome') != undefined){
  Usuario.Nome = Cookies.get('Usuario.Nome');
}


Alertar('Aviso',`${Usuario.Nome} Este site usa cookies.`,()=>{
  
  if (Usuario.Nome === '') {
  
  Confirmar('Usuario','Você deseja criar um usuario localmente?',()=>{
  
  Prompting('Inserir nome',Usuario,'Nome',()=>{
    Cookies.set('Usuario.Nome',Usuario.Nome)
  })
  },'')
  
  }
  
});

Global.Cookie = Usuario;